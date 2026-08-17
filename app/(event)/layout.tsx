import type { CSSProperties } from "react";
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  DM_Sans,
  Just_Me_Again_Down_Here,
} from "next/font/google";
import "../globals.css";

import { EventShell } from "@/components/event-shell";
import { styleValue } from "@/components/helpers";
import { getPublicEvent } from "@/lib/happily/queries";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Three faces, no more: a heavy grotesque for anything that has to land as a
// statement, a handwriting face for the asides, and DM Sans for everything
// else. Labels and tags get their character from case and tracking instead of
// a fourth family.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const hand = Just_Me_Again_Down_Here({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { event } = await getPublicEvent();
  const { metadata } = event;

  return {
    title: metadata.title || event.name,
    description: metadata.description || "",
    ...(metadata.allow_search_engine_indexing === false && {
      robots: "noindex, nofollow",
    }),
    openGraph: {
      ...(metadata.image_url && { images: [metadata.image_url] }),
    },
  };
}

export default async function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventData = await getPublicEvent();
  const styles = eventData.event.styles;

  // Colours come from the event's own design tokens in the CMS, so a change
  // there lands here without a deploy. The canvas neutrals (white ground, near
  // black ink) are fixed in the components: they are the layout, not a theme.
  // Border radius is squared off, because rounded corners fight the ruler grid.
  const eventVars = {
    "--event-primary-bg": styleValue(styles, "primaryBg", "#F4FD7B"),
    "--event-primary-text": styleValue(styles, "primaryText", "#090909"),
    "--event-secondary-bg": styleValue(styles, "secondaryBg", "#FFFFFF"),
    "--event-secondary-text": styleValue(styles, "secondaryText", "#090909"),
    "--event-accent-bg": styleValue(styles, "accentBg", "#090909"),
    "--event-accent-text": styleValue(styles, "accentText", "#FFFFFF"),
    "--event-base-bg": "#FFFFFF",
    "--event-base-text": "#090909",
    "--event-border-radius": "0px",
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${display.variable} ${hand.variable} ${dmSans.className} h-full antialiased`}
    >
      <body style={eventVars} className="min-h-full flex flex-col">
        <EventShell eventData={eventData}>{children}</EventShell>
      </body>
    </html>
  );
}
