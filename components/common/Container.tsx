import React from "react";

interface ContainerProps {
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Container({ fluid = false, className = "", children }: ContainerProps) {
  return (
    <div className={`${fluid ? "container-fluid" : "container"} ${className}`}>
      {children}
    </div>
  );
}

