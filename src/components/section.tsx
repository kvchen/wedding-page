import React from "react";

export default function Section({
  className,
  children,
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <section className={`${className} overflow-hidden`}>{children}</section>
  );
}
