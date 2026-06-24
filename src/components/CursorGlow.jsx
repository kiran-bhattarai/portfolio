import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-duration-5500"
      style={{
        background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.04), transparent 70%)`,
      }}
    />
  );
}
