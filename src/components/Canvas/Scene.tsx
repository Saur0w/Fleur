"use client";

import { Canvas } from "@react-three/fiber";
import styles from './style.module.scss';
import { View } from "@react-three/drei";

export default function ViewCanvas() {
    return (
        <div className={styles.model}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
                <View.Port />
            </Canvas>
        </div>
    )
}