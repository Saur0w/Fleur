"use client";

import styles from './style.module.scss';
import RoundedButton from "@/ui/Button/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Text from "@/ui/Text/index";
import { View } from "@react-three/drei";
import Scene from "./Scene";

gsap.registerPlugin(useGSAP);

export default function Landing() {

    const landingRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const headRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const introT1 = gsap.timeline();

        introT1
            .set(headRef.current, {
                opacity: 1
            })
            .from(headerRef.current, {
                scale: 3,
                opacity: 0,
                duration: 1,
                ease: "power4.in",
                delay: 0.3,
                stagger: 1,
        })
    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <View className={styles.model}>
                <Scene />
            </View>
            <div ref={headRef} className="opacity-0">
                <h1 className={styles.header} ref={headerRef}>Own the Moment</h1>
            </div>
            <div>
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