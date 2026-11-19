"use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  { src: "/assets/client-fitx.webp", alt: "FitX - Invoidea client" },
  { src: "/assets/client-kskin.webp", alt: "KSkin - Invoidea client" },
  { src: "/assets/client-eduafya.webp", alt: "Edu Afya - Invoidea client" },
  { src: "/assets/client-zingcity.webp", alt: "zingcity - Invoidea client" },
  { src: "/assets/client-evshopify.png", alt: "evshopify - Invoidea client" },
  { src: "/assets/client-iclinix.webp", alt: "iclinix - Invoidea client" },
  { src: "/assets/client-getmyproperty.webp", alt: "GetMyProperty - Invoidea client" },
  { src: "/assets/client-elofic.webp", alt: "elofic - Invoidea client" },
  { src: "/assets/client-sagetalkz.webp", alt: "sagetalkz - Invoidea client" },
  { src: "/assets/client-olf.webp", alt: "OLF - Invoidea client" },
  { src: "/assets/client-bharatikmeet.webp", alt: "Bharatik Meet - Invoidea client" },
  { src: "/assets/client-coffeepass.png", alt: "Coffee Pass - Invoidea client" },
  { src: "/assets/client-dofix.webp", alt: "DoFix - Invoidea client" },
  { src: "/assets/client-rentgoo.png", alt: "Rentgoo - Invoidea client" },
];

export default function ClientSlider() {
  return (
    <div className="client-carousel-wrapper" style={{ background: "#000", overflow: "hidden", padding: "16px 0" }}>
      <div className="container-fluid px-0">
        <div className="logo-slider position-relative overflow-hidden" style={{ background: "#000" }}>
          <div
            className="logo-track d-flex align-items-center"
            style={{
              animation: "scrollLogos 35s linear infinite",
              whiteSpace: "nowrap",
              width: "max-content",
            }}
          >
            {/* Duplicated for infinite continuous scroll */}
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="logo px-4 d-flex align-items-center justify-content-center"
                style={{ flexShrink: 0, minWidth: "150px" }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={130}
                  height={55}
                  style={{ maxHeight: "48px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
