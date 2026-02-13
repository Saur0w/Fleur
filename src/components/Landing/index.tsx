"use client";

import styles from './style.module.scss';
import RoundedButton from "@/ui/Button/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Text from "@/ui/Text/index";
import { View } from "@react-three/drei";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        const sections = gsap.utils.toArray(`.${styles.headingSection}`);

        gsap.to(track, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: landingRef.current,
                pin: true,
                scrub: 1,
                end: "+=150%",
            }
        });

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>

            <View className={styles.model}>
                <Scene />
            </View>

            <div className={styles.headings} ref={trackRef}>
                <div className={styles.headingSection}>
                    <h1>Own the Moment</h1>
                </div>
                <div className={styles.headingSection}>
                    <h1>Find Your Signature.</h1>
                </div>
                <div className={styles.headingSection}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h2>Fragrance</h2>
                        </div>
                        <div className={styles.markers}>
                            <div className={styles.divider}></div>
                            <div className={styles.circle}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.overlayText}>
                <Text>
                    <p>50ml • Long-lasting • Crafted with rare notes</p>
                </Text>
            </div>

            <div className={styles.button}>
                <RoundedButton><p>Shop now</p></RoundedButton>
            </div>

        </section>
    )
}