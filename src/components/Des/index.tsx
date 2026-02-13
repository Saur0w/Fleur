"use client";

import styles from './style.module.scss';
import Text from "@/ui/Text/index";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Des() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(headerRef.current, {
            delay: 0.5,
            opacity: 0,
            duration: 2.5,
            x: -200,
            ease: "power4.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: 1,

            }
        });
    }, { scope: containerRef });
    return (
        <section className={styles.description} ref={containerRef}>
            <div className={styles.heading}>
                <h1 ref={headerRef}>Crafted to Be Remembered.</h1>
            </div>
            <div className={styles.para}>
                <Text>
                    <p>A carefully balanced composition of rare ingredients, <br />blended to leave a lasting impression.<br />
                        Each spray reveals layers that unfold slowly — subtle at first,<br /> unforgettable in the end.</p>
                </Text>

            </div>
        </section>
    )
}