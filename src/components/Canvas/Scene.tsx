"use client";

import { Canvas } from "@react-three/fiber";
import styles from './style.module.scss';
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function ViewCanvas() {
    return (
        <div className={styles.model}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="sunset" />
                </Suspense>
                <OrbitControls enableZoom={false}/>
            </Canvas>
        </div>
    )
}