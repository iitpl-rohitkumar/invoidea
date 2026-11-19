import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "theme" | "outline" | "white" | "link";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "theme",
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  let baseClass = "btn ";
  if (variant === "theme") {
    baseClass += "theme-btn";
  } else if (variant === "outline") {
    baseClass += "btn-outline-theme";
  } else if (variant === "white") {
    baseClass += "btn-light";
  } else if (variant === "link") {
    baseClass += "cta-link";
  }

  const finalClass = `${baseClass} ${className}`.trim();

  if (href) {
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={finalClass} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={finalClass} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClass} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

