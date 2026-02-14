"use client";

import Model from "@/components/Canvas/Model";
import Serum from "@/components/Canvas/Serum";
import { Environment } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Scene() {
    const modelRef = useRef<Group>(null);
    const perfumeRef = useRef<Group>(null);
    const serumRef = useRef<Group>                                                                                              (null);


    useGSAP(() => {
        if (!modelRef.current || !perfumeRef.current || !serumRef.current) return;

        gsap.set(serumRef.current.position, {
            y: -5,
        });
    }, { scope: modelRef });
    return (
        <group>
            <Float ref={modelRef} floatIntensity={0.2}>
                <group ref={perfumeRef}>
                    <Model />
                </group>

                <group ref={serumRef} >
                    <Serum />
                </group>
            </Float>
            <Environment preset="dawn" environmentIntensity={0.5} />
            <ambientLight />
        </group>
    )
}