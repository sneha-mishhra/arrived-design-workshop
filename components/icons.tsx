import type { ReactNode } from "react";

/**
 * A small inline icon set, drawn on a 20x20 grid at a single stroke weight so
 * the marks sit together as one family. Inline rather than an icon package:
 * there are six of them, and they inherit `currentColor` from whatever tile
 * they are dropped into.
 */

type IconProps = { className?: string };

function Icon({
  children,
  className = "",
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-[18px] ${className}`}
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5 8 14.5 16 5.5" />
    </Icon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4.5" width="14" height="12" rx="2" />
      <path d="M3 8.5h14M7 2.8v3.4M13 2.8v3.4" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="m3 6 7 5 7-5" />
    </Icon>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="5" width="10" height="10" rx="2" />
      <path d="m12.5 10 5-3v6l-5-3Z" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4.3l2.8 1.7" />
    </Icon>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 3.2c.6 3.3 1.5 4.2 4.8 4.8-3.3.6-4.2 1.5-4.8 4.8-.6-3.3-1.5-4.2-4.8-4.8 3.3-.6 4.2-1.5 4.8-4.8Z" />
      <path d="M15.2 13.4c.3 1.5.7 1.9 2.2 2.2-1.5.3-1.9.7-2.2 2.2-.3-1.5-.7-1.9-2.2-2.2 1.5-.3 1.9-.7 2.2-2.2Z" />
    </Icon>
  );
}

/**
 * Rounded tile that carries an icon. The dock along the bottom of the
 * confirmation page is a row of these, and the floating chips each start with
 * one.
 */
export function IconTile({
  children,
  tone = "sky",
  className = "",
}: {
  children: ReactNode;
  tone?: "sky" | "mint" | "sand" | "ink" | "lime";
  className?: string;
}) {
  const tones = {
    sky: "bg-[#38BDF8] text-white",
    mint: "bg-[#34D399] text-white",
    sand: "bg-[#F0B429] text-white",
    ink: "bg-[#090909] text-white",
    lime: "bg-(--event-primary-bg) text-(--event-primary-text)",
  } as const;

  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-[10px] shadow-[0_2px_8px_rgba(9,9,9,0.16)] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
