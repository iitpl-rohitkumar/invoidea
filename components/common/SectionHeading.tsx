import React from "react";

interface SectionHeadingProps {
  subheading?: string;
  heading: React.ReactNode;
  description?: string;
  subheadingColor?: "orange" | "blue" | "white";
  headingColor?: "black" | "white";
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  subheading,
  heading,
  description,
  subheadingColor = "orange",
  headingColor = "black",
  centered = false,
  className = "",
}: SectionHeadingProps) {
  const subColorClass =
    subheadingColor === "blue"
      ? "subheading-text"
      : subheadingColor === "white"
      ? "subheading text-white"
      : "subheading";

  const headColorClass = headingColor === "white" ? "heading-2 text-white" : "heading-2";

  return (
    <div className={`${centered ? "text-center mx-auto" : ""} ${className}`}>
      {subheading && <h2 className={subColorClass}>{subheading}</h2>}
      {typeof heading === "string" ? (
        <h3 className={`${headColorClass} mb-3`}>{heading}</h3>
      ) : (
        <div className={`${headColorClass} mb-3`}>{heading}</div>
      )}
      {description && <p className={headingColor === "white" ? "light-text" : "text-muted"}>{description}</p>}
    </div>
  );
}

