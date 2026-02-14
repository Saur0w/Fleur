"use client";

import styles from './style.module.scss';
import RoundedButton from "@/ui/Button/index";
import { useRef } from "react";
import Text from "@/ui/Text/index";
import { View } from "@react-three/drei";
import Scene from "./Scene";

export default function Landing() {
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <section className={styles.landing}>
            <View className={styles.model}>
                <Scene />
            </View>

            <div className={styles.headings} ref={trackRef}>
                <div className={styles.headingSection}>
                    <h1>Own the Moment</h1>
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