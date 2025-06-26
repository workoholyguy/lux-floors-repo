'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only enable Lenis on non-home pages
    if (window.location.pathname === '/') return;

    const lenis = new Lenis({
      duration: 1.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
