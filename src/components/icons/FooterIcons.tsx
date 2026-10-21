type IconProps = {
  className?: string;
};

/** Line icons for the footer's contact row, drawn on a 16px grid. */
function LineIcon({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M13 6.8c0 3.4-5 8.2-5 8.2S3 9.9 3 6.8a5 5 0 0 1 10 0Z" />
      <circle cx="8" cy="6.7" r="1.8" />
    </LineIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="m2.6 4.6 4.6 3.4a1.4 1.4 0 0 0 1.6 0l4.6-3.4" />
    </LineIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5.2 2.6 6.6 5 5.4 6.6a8 8 0 0 0 4 4L11 9.4l2.4 1.4v2a1 1 0 0 1-1.1 1A11 11 0 0 1 2.2 3.7a1 1 0 0 1 1-1.1h2Z" />
    </LineIcon>
  );
}
