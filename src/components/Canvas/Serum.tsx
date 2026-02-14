"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/models/serum.glb');

export default function Model() {
    const { scene } = useGLTF('/models/serum.glb');

    return (
        <primitive
            object={scene}
            scale={0.18}
            position={[0, 0, 0]}
        />
    )
}

