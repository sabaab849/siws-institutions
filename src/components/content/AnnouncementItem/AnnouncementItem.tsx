import { Badge } from '../../ui/Badge/Badge';
import { IconTile } from '../../ui/IconTile/IconTile';
import styles from './AnnouncementItem.module.css';

type AnnouncementItemProps = {
  category: string;
  title: string;
  /** ISO date, e.g. `2025-08-12`. */
  date: string;
  dateLabel: string;
  icon: string;
};

/** Row in the announcements list. Render inside a list. */
export function AnnouncementItem({ category, title, date, dateLabel, icon }: AnnouncementItemProps) {
  return (
    <li className={styles.item}>
      <Badge variant="tag" className={styles.tag}>
        {category}
      </Badge>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>
          Posted <time dateTime={date}>{dateLabel}</time>
        </p>
      </div>
      <IconTile variant="square" icon={icon} iconSize={18} className={styles.action} />
    </li>
  );
}
