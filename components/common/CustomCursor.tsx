"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: isHovered ? "28px" : "16px",
        height: isHovered ? "28px" : "16px",
        borderRadius: "50%",
        backgroundColor: "rgba(247, 155, 31, 0.45)",
        border: "1.5px solid #f79b1f",
        pointerEvents: "none",
        zIndex: 999999,
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
      }}
    />
  );
}

