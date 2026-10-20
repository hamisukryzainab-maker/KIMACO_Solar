import type { ReactNode } from "react";

type Props = {
  label: string;
  title: ReactNode;
  id?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({ label, title, id, dark = false, center = false, className = "" }: Props) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""} ${center ? "section-heading-center" : ""} ${className}`}>
      <p className="eyebrow"><span aria-hidden="true" />{label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
