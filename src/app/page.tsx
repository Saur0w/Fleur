"use client";

import Landing from "@/components/Landing/index";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";
import Des from "@/components/Des/index";
import Choose from "@/components/Choose/index";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
  return (
    <div>
        <Landing />
        <Des />
        <Choose />
    </div>
  );
}
