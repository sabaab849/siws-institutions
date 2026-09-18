import type { ReactNode, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

/** Shared 64px line-icon frame. Strokes and fills use `currentColor`. */
function LineIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

const soft = { fill: 'currentColor', fillOpacity: 0.1, stroke: 'none' } as const;

/** 1934: heritage gateway with flanking towers. */
export function HeritageIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path {...soft} d="M17 52V30h30v22z" />
      <path d="M6 56h52M9 52h46" />
      <path d="M9 52V26h8v26M47 52V26h8v26M17 52V30h30v22" />
      <path d="M15 30h34M19 30v-4h26v4M27 26a5 5 0 0 1 10 0M32 21v-3" />
      <path d="M9 26l4-6 4 6M13 20v-3M47 26l4-6 4 6M51 20v-3" />
      <path d="M25 52V41a7 7 0 0 1 14 0v11M28.5 52v-9.5a3.5 3.5 0 0 1 7 0V52" />
      <path d="M19.5 52v-6a1.5 1.5 0 0 1 3 0v6M41.5 52v-6a1.5 1.5 0 0 1 3 0v6" />
      <path d="M12 36v-3a1 1 0 0 1 2 0v3M12 45v-3a1 1 0 0 1 2 0v3M50 36v-3a1 1 0 0 1 2 0v3M50 45v-3a1 1 0 0 1 2 0v3" />
    </LineIcon>
  );
}

/** 1960s: campus blocks between two trees. */
export function CampusIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path {...soft} d="M33 54V18h16v36z" />
      <path d="M4 54h56" />
      <path d="M13 54V32h20M11 32h22M33 54V18h16v36M31 18h20" />
      <path d="M41 18v-6h5l-1.5 1.75L46 15.5h-5" />
      <path d="M20 54v-5h5v5" />
      <path d="M16 36h3.5v3H16zM21.25 36h3.5v3h-3.5zM26.5 36H30v3h-3.5zM16 42h3.5v3H16zM26.5 42H30v3h-3.5z" />
      <path d="M36.5 22H40v3h-3.5zM42 22h3.5v3H42zM36.5 28H40v3h-3.5zM42 28h3.5v3H42zM36.5 34H40v3h-3.5zM42 34h3.5v3H42zM36.5 40H40v3h-3.5zM42 40h3.5v3H42zM36.5 46H40v3h-3.5zM42 46h3.5v3H42z" />
      <path {...soft} d="M7 48c-3 0-4.5-2.2-4.5-4.6 0-2.5 2-4.4 4.5-7.4 2.5 3 4.5 4.9 4.5 7.4 0 2.4-1.5 4.6-4.5 4.6z" />
      <path d="M7 54v-9M7 48c-3 0-4.5-2.2-4.5-4.6 0-2.5 2-4.4 4.5-7.4 2.5 3 4.5 4.9 4.5 7.4 0 2.4-1.5 4.6-4.5 4.6z" />
      <path {...soft} d="M56 47c-3.2 0-4.8-2.4-4.8-5 0-2.7 2.1-4.8 4.8-8 2.7 3.2 4.8 5.3 4.8 8 0 2.6-1.6 5-4.8 5z" />
      <path d="M56 54v-10M56 47c-3.2 0-4.8-2.4-4.8-5 0-2.7 2.1-4.8 4.8-8 2.7 3.2 4.8 5.3 4.8 8 0 2.6-1.6 5-4.8 5z" />
    </LineIcon>
  );
}

/** 1980s: graduation cap over a stack of books. */
export function GraduationIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path {...soft} d="M32 9l22 9-22 9-22-9z" />
      <path d="M32 9l22 9-22 9-22-9z" />
      <path d="M20 22.5V29c0 2.8 5.4 5 12 5s12-2.2 12-5v-6.5" />
      <path d="M54 18v9M52.6 27h2.8l.6 4.5h-4z" />
      <rect x="16" y="38" width="32" height="6" rx="1.5" />
      <rect x="13" y="44" width="36" height="6" rx="1.5" />
      <rect x="17" y="50" width="32" height="6" rx="1.5" />
      <path d="M19 41h18M16 47h20M20 53h18M43 38v6M45 44v6M44 50v6" />
    </LineIcon>
  );
}

/** 2000s: a growing community of people. */
export function CommunityIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path {...soft} d="M20 50v-5a12 12 0 0 1 24 0v5z" />
      <circle cx="32" cy="23" r="6" />
      <path d="M20 50v-5a12 12 0 0 1 24 0v5" />
      <circle cx="16" cy="28" r="4.5" />
      <path d="M6 50v-4a9 9 0 0 1 14-7.5" />
      <circle cx="48" cy="28" r="4.5" />
      <path d="M58 50v-4a9 9 0 0 0-14-7.5" />
      <path d="M6 54h52" />
    </LineIcon>
  );
}

/** Today: a compass star pointing ahead. */
export function CompassStarIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M32 32L21 21M32 32l11-11M32 32L21 43M32 32l11 11" />
      <path
        fill="currentColor"
        stroke="none"
        d="M32 4l4.2 23.8L32 32zM60 32l-23.8 4.2L32 32zM32 60l-4.2-23.8L32 32zM4 32l23.8-4.2L32 32z"
      />
      <path d="M32 4l4.2 23.8L60 32l-23.8 4.2L32 60l-4.2-23.8L4 32l23.8-4.2z" />
      <circle cx="50" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="51" r="1" fill="currentColor" stroke="none" />
    </LineIcon>
  );
}
