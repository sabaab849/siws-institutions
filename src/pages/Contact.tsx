import { useState, type FocusEvent, type FormEvent } from "react";
import { PageHero } from "../components/layout/PageHero/PageHero";
import { PageSection } from "../components/layout/PageSection/PageSection";
import { site } from "../data/site";
import styles from "./Contact.module.css";

const ENQUIRY_CATEGORIES = [
  "General Enquiry",
  "Membership",
  "Alumni",
  "Careers",
  "Other",
];

/** The fields the Society needs; a telephone number is welcome but optional. */
type RequiredField = "category" | "name" | "email" | "message";

/** Permissive on purpose: anything with a name, an @ and a domain is accepted. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Each says what is wrong and how to put it right. */
const CHECKS: Record<RequiredField, (value: string) => string | undefined> = {
  category: (value) =>
    value ? undefined : "Choose what your enquiry is about.",
  name: (value) =>
    value.trim()
      ? undefined
      : "Enter your name, so the Society knows who is writing.",
  email: (value) => {
    const address = value.trim();
    if (!address)
      return "Enter an email address, so the Society can write back.";
    if (!EMAIL_PATTERN.test(address))
      return "Enter an email address in the form name@example.com.";
    return undefined;
  },
  message: (value) => (value.trim() ? undefined : "Enter your message."),
};

const FIELD_ORDER: RequiredField[] = ["category", "name", "email", "message"];

/**
 * The directory the Society asked for. An entry carries only what SIWS
 * publishes today; the rest wait for their own address rather than borrowing
 * the school office's.
 */
const DIRECTORY = [
  { name: "School office", email: site.email, phone: site.offices[0].phone },
  { name: "College office", phone: site.offices[3].phone },
  { name: "Admissions", email: site.admissionsEmail },
  { name: "Scholarships" },
  { name: "Donations" },
  { name: "Alumni" },
  { name: "Media" },
] satisfies { name: string; email?: string; phone?: string }[];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>(
    {},
  );

  const check = (field: RequiredField, value: string) =>
    setErrors((previous) => {
      const message = CHECKS[field](value);
      if (previous[field] === message) return previous;
      const next = { ...previous };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });

  /** The first look at a field happens when it is left, not while it is typed in. */
  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const field = event.target.name as RequiredField;
    if (field in CHECKS) check(field, event.target.value);
  };

  /** Once a field is wrong, its message clears as soon as it is right. */
  const handleChange = (
    event: FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const target = event.currentTarget;
    const field = target.name as RequiredField;
    if (field in CHECKS && errors[field]) check(field, target.value);
  };

  /**
   * The site has no backend, so the form hands the message to the sender's own
   * mail client, addressed to the Society. It can be pointed at a form service
   * later without changing the fields.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = event.currentTarget;
    const form = new FormData(element);

    // Nothing is sent until the four fields are right; the first one that is
    // not takes the cursor, so its message is read where the fix is made.
    const found: Partial<Record<RequiredField, string>> = {};
    for (const field of FIELD_ORDER) {
      const message = CHECKS[field](String(form.get(field) ?? ""));
      if (message) found[field] = message;
    }
    setErrors(found);
    const firstWrong = FIELD_ORDER.find((field) => found[field]);
    if (firstWrong) {
      const control = element.elements.namedItem(firstWrong);
      if (control instanceof HTMLElement) control.focus();
      setSent(false);
      return;
    }

    const subject = `${form.get("category")} — ${form.get("name")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Us" />

      <PageSection>
        {/* Left: who and where, and who to write to. Right: the enquiry form. */}
        <div className={styles.layout}>
          <div className={styles.directory}>
            <div className={styles.details}>
              <h2 className={styles.detailsHeading}>{site.name}</h2>
              <p className={styles.address}>{site.address}</p>
            </div>

            <h3 className={styles.directoryHeading}>Directory</h3>
            <dl className={styles.list}>
              {DIRECTORY.map((entry) => (
                <div key={entry.name} className={styles.row}>
                  <dt className={styles.entryName}>{entry.name}</dt>
                  <dd className={styles.value}>
                    {entry.email || entry.phone ? (
                      <>
                        {entry.email ? (
                          <span className={styles.email}>
                            <a href={`mailto:${entry.email}`}>{entry.email}</a>
                          </span>
                        ) : null}
                        {entry.phone ? (
                          <span className={styles.email}>
                            <a href={`tel:${entry.phone.replace(/\s/g, "")}`}>
                              {entry.phone}
                            </a>
                          </span>
                        ) : null}
                      </>
                    ) : (
                      <span className={styles.pending}>
                        address to be supplied by SIWS
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* The browser's own bubbles are off, so the messages below are the ones shown */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            id="enquiry"
            noValidate
          >
            <h2 className={styles.formHeading}>Send an Enquiry</h2>
            <p className={styles.requiredNote}>
              <span className={styles.required} aria-hidden="true">
                *
              </span>{" "}
              Required fields
            </p>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="enquiry-category">
                Enquiry about{" "}
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <select
                id="enquiry-category"
                className={styles.input}
                name="category"
                defaultValue={ENQUIRY_CATEGORIES[0]}
                required
                aria-invalid={errors.category ? true : undefined}
                aria-describedby={
                  errors.category ? "enquiry-category-error" : undefined
                }
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {ENQUIRY_CATEGORIES.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              {errors.category ? (
                <p className={styles.error} id="enquiry-category-error">
                  {errors.category}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="enquiry-name">
                Your name{" "}
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="enquiry-name"
                className={styles.input}
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={
                  errors.name ? "enquiry-name-error" : undefined
                }
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.name ? (
                <p className={styles.error} id="enquiry-name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className={styles.pair}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="enquiry-email">
                  Email{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="enquiry-email"
                  className={styles.input}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={
                    errors.email ? "enquiry-email-error" : undefined
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <p className={styles.error} id="enquiry-email-error">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="enquiry-phone">
                  Phone
                </label>
                <input
                  id="enquiry-phone"
                  className={styles.input}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="enquiry-message">
                Message{" "}
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <textarea
                id="enquiry-message"
                className={styles.input}
                name="message"
                rows={5}
                required
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? "enquiry-message-error" : undefined
                }
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.message ? (
                <p className={styles.error} id="enquiry-message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button type="submit" className={styles.submit}>
              Send enquiry
            </button>
            <p className={styles.formNote} role="status">
              {sent
                ? "Your mail application should now be open with the message ready to send."
                : `The form opens your own mail application, addressed to ${site.email}.`}
            </p>
          </form>
        </div>

        {/* The map runs the width of the page under both columns */}
        <figure className={styles.map}>
          <iframe
            className={styles.mapFrame}
            src={site.mapsEmbed}
            title={`Map showing ${site.name} at ${site.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <figcaption className={styles.mapCaption}>
            <a href={site.mapsDirections} target="_blank" rel="noreferrer">
              Directions on Google Maps
            </a>
          </figcaption>
        </figure>
      </PageSection>
    </>
  );
}
