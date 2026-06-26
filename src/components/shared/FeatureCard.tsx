import React from "react";
import Card from "./Card";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  iconPath?: string; // Path to local SVG asset
  tagRight?: string;
  tagLeft?: string;
  className?: string;
  children?: React.ReactNode; // For nested visual mockups
  style?: React.CSSProperties;
}

function FeatureCard({
  title,
  description,
  iconPath,
  tagRight,
  tagLeft,
  className = "",
  children,
  style,
}: FeatureCardProps) {
  return (
    <Card
      variant="bordered"
      style={style}
      className={`flex flex-col justify-between p-6 hover:border-forsythia/20 hover:scale-[1.01] ${className}`}
    >
      <div className="flex flex-col gap-4 relative z-10">
        {/* Header Icon */}
        {iconPath && (
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-nocturnal-expedition text-forsythia border border-mystic-mint/10">
            <Image src={iconPath} alt="" width={20} height={20} className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        
        {/* Title & Description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-white font-sans">{title}</h3>
          <p className="text-3xs text-arctic-powder/70 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Dynamic graphic children mock */}
      {children && (
        <div className="relative z-10 w-full">
          {children}
        </div>
      )}

      {/* Bottom tags */}
      {(tagLeft || tagRight) && (
        <div className="flex items-center justify-between pt-6 border-t border-mystic-mint/10 text-3xs font-mono uppercase tracking-wider text-forsythia font-bold relative z-10">
          <span>{tagLeft || ""}</span>
          <span className="text-mystic-mint">{tagRight || ""}</span>
        </div>
      )}
    </Card>
  );
}

export default React.memo(FeatureCard);
