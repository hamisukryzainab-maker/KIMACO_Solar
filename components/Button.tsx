import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { EXTERNAL_LINK_PROPS } from "@/lib/constants";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "glass" | "navy" | "white";
  external?: boolean;
  arrow?: boolean;
};

export default function Button({ children, variant = "primary", external = false, arrow = true, className = "", ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`} {...(external ? EXTERNAL_LINK_PROPS : {})} {...props}>
      <span>{children}</span>
      {arrow && <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />}
    </a>
  );
}
