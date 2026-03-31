"use client";

import { useEffect, useState } from "react";

export function Starfield() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate random stars on client side to avoid hydration mismatch
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.2,
            boxShadow: `0 0 ${star.size * 2}px white`,
            animation: `twinkle ${star.duration} infinite ease-in-out ${star.delay}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
