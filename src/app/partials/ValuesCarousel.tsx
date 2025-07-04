"use client";
import React, { useRef, useEffect, useState } from "react";

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every installation is an opportunity to showcase precision, skill and attention to detail.",
    color: "#FDE68A",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#B45309"/><path d="M8 16l8-8M8 8h8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We give transparent estimates, honest advice and stand by our work from start to finish.",
    color: "#A7F3D0",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#059669"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Your vision guides our process—designs, materials and timelines are all built around your needs.",
    color: "#BFDBFE",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563EB"/><circle cx="12" cy="10" r="3" fill="#fff"/><path d="M6 18c0-2.21 3.58-4 6-4s6 1.79 6 4" stroke="#fff" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of trends and master new techniques—whether it's exotic hardwoods or cutting-edge vinyl systems.",
    color: "#FCA5A5",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="#DC2626"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Resilience",
    description:
      "Challenges—flooded showrooms, tricky substrates or tight curves—only sharpen our problem-solving drive.",
    color: "#F9A8D4",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="#BE185D"/><path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "Installers, designers and clients work as one team. Open communication fuels every successful project.",
    color: "#C7D2FE",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4" fill="#6366F1"/><circle cx="16" cy="12" r="4" fill="#6366F1"/><path d="M8 16v2m8-2v2" stroke="#fff" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We show up on time, respect your home and deliver lasting quality that stands up to daily life.",
    color: "#FCD34D",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="#CA8A04"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We choose materials and methods that balance beauty, durability and environmental care.",
    color: "#6EE7B7",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#059669"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

export default function ValuesCarousel() {
  // Duplicate values for seamless infinite scroll
  // const cards = [...values, ...values]; // <-- Remove this line
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (firstSetRef.current) {
      setScrollWidth(firstSetRef.current.offsetWidth);
    }
  }, []);

  // Animation duration in seconds (adjust for speed)
  const duration = 24;

  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-hidden py-4">
      <div
        className="flex gap-6 animate-carousel"
        style={scrollWidth ? {
          animation: `carousel-scroll ${duration}s linear infinite`
        } : {}}
      >
        {/* First set of cards (measured for width) */}
        <div className="flex gap-6" ref={firstSetRef}>
          {values.map((value, idx) => (
            <div
              key={"first-" + idx}
              className="flex flex-col items-center justify-center rounded-xl shadow-lg p-6 min-w-[220px] max-w-[220px] h-[220px]"
              style={{ background: value.color }}
            >
              <div className="mb-2">{value.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-center">{value.title}</h3>
              <p className="text-sm text-center text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
        {/* Second set of cards (for seamless loop) */}
        <div className="flex gap-6">
          {values.map((value, idx) => (
            <div
              key={"second-" + idx}
              className="flex flex-col items-center justify-center rounded-xl shadow-lg p-6 min-w-[220px] max-w-[220px] h-[220px]"
              style={{ background: value.color }}
            >
              <div className="mb-2">{value.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-center">{value.title}</h3>
              <p className="text-sm text-center text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Inline keyframes for dynamic scroll width */}
      {scrollWidth > 0 && (
        <style>{`
          @keyframes carousel-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${scrollWidth}px); }
          }
        `}</style>
      )}
    </div>
  );
} 