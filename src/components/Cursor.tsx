import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], [data-cursor]";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = !window.matchMedia("(pointer: fine)").matches;
    if (isTouch) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;
    let shown = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        // Start the ring where the pointer is instead of sweeping in from the corner.
        rx = mx; ry = my; shown = true;
        dotRef.current?.classList.add("on");
        ringRef.current?.classList.add("on");
      }
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top  = my + "px";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top  = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    };

    // Delegated, so elements rendered later (modal, other routes) still grow the cursor.
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      dotRef.current?.classList.toggle("grow", !!hit);
      ringRef.current?.classList.toggle("grow", !!hit);
    };

    const onLeave = () => {
      shown = false;
      dotRef.current?.classList.remove("on");
      ringRef.current?.classList.remove("on");
    };

    tick();
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cur-dot"  aria-hidden />
      <div ref={ringRef} className="cur-ring" aria-hidden />
    </>
  );
}
