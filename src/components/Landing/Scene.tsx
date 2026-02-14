"use client";

import Model from "@/components/Canvas/Model";
import Serum from "@/components/Canvas/Serum";
import { Environment } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export default function Scene() {
    const modelRef = useRef<Group>(null);

    return (
        <group>
            <Float ref={modelRef} floatIntensity={0.2}>
                <Model />
                <Serum />
            </Float>
            <Environment preset="dawn" />
            <ambientLight />
        </group>
    )
}