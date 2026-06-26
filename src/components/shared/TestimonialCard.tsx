import React from "react";
import Card from "./Card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card
      variant="bordered"
      className={`group relative flex flex-col justify-between gap-5 p-6 overflow-hidden card-lift border-white/6 hover:border-white/12 ${className}`}
    >
      {/* Subtle top-left quote glow */}
      <div
        className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-forsythia/5 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Quote mark */}
      <div className="text-3xl text-forsythia/20 font-serif leading-none select-none relative z-10" aria-hidden="true">
        &ldquo;
      </div>

      {/* Quote text */}
      <blockquote className="text-xs text-arctic-powder/70 leading-relaxed flex-1 relative z-10">
        {quote}
      </blockquote>

      {/* Author row */}
      <div className="flex items-center justify-between gap-4 border-t border-white/6 pt-4 relative z-10">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar placeholder */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-nocturnal-expedition to-mystic-mint/30 shrink-0 flex items-center justify-center text-xs font-bold text-white">
            {author[0]}
          </div>
          <div className="text-left min-w-0">
            <cite className="text-xs font-bold text-white not-italic block truncate">{author}</cite>
            <span className="text-3xs text-arctic-powder/45 truncate block">{role}, {company}</span>
          </div>
        </div>

        {rating > 0 && (
          <div className="flex text-forsythia text-xs shrink-0" aria-label={`${rating} out of 5 stars`}>
            {"★".repeat(rating)}
          </div>
        )}
      </div>
    </Card>
  );
}
