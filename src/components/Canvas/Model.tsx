"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/models/perfume.glb');

export default function Model() {
    const { scene } = useGLTF('/models/perfume.glb');

    return (
        <primitive
            object={scene}
            scale={0.02}
            position={[0, 0, 0]}
            rotation={[0, 0, -0.2]}

        />
    )
}

