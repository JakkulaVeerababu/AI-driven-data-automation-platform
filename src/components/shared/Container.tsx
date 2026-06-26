import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}

export default React.memo(Container);
