import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.05,   // Smoothness
      multiplier: 1, // Speed control
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}