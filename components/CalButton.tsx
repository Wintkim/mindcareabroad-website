"use client";

import { getCalApi } from "@calcom/embed-react";
import { track } from "@vercel/analytics";
import { useEffect, type ReactNode } from "react";

const CAL_ORIGIN = "https://app.cal.eu";

let calApi: ReturnType<typeof getCalApi> | null = null;
let lastService = "";

function loadCal() {
  calApi ??= getCalApi({ embedJsUrl: `${CAL_ORIGIN}/embed/embed.js` }).then((cal) => {
    cal("ui", { cssVarsPerTheme: { light: { "cal-brand": "#2d4a45" }, dark: { "cal-brand": "#e6d4bc" } } });
    cal("on", {
      action: "bookingSuccessfulV2",
      callback: () => track("booking_completed", { service: lastService }),
    });
    return cal;
  });
  return calApi;
}

// Opens the Cal.eu booking page as an in-page popup; falls back to the plain link if the embed fails.
export function CalButton({
  href,
  service,
  className,
  style,
  children,
}: {
  href: string;
  service: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  useEffect(() => {
    loadCal().catch(() => {});
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        lastService = service;
        track("booking_click", { service });
        loadCal()
          .then((cal) =>
            cal("modal", {
              calLink: new URL(href).pathname.slice(1),
              calOrigin: CAL_ORIGIN,
              config: { layout: "month_view" },
            }),
          )
          .catch(() => {
            window.location.href = href;
          });
      }}
    >
      {children}
    </a>
  );
}
