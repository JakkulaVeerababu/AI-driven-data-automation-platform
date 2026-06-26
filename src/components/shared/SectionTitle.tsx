import React from "react";
import Badge from "./Badge";

interface SectionTitleProps {
  id?: string;
  badgeText?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  id,
  badgeText,
  title,
  titleAccent,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignmentClass} ${align === "center" ? "mx-auto" : ""}`}>

      {/* Badge */}
      {badgeText && (
        <Badge variant="teal">{badgeText}</Badge>
      )}

      {/* Heading */}
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] leading-tight"
      >
        {title}{" "}
        {titleAccent && (
          <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-forsythia bg-clip-text text-transparent">
            {titleAccent}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm md:text-base text-arctic-powder/60 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
