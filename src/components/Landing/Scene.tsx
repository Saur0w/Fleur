"use client";

import Model from "@/components/Canvas/Model";
import Serum from "@/components/Canvas/Serum";
import { Environment } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scene() {
    const modelRef = useRef<Group>(null);
    const perfumeRef = useRef<Group>(null);
    const serumRef = useRef<Group>                                                                                              (null);


    useGSAP(() => {
        if (!modelRef.current || !perfumeRef.current || !serumRef.current) return;

        gsap.set(perfumeRef.current.position, {
            y: 1.2,
            x: 0
        });

        gsap.set(serumRef.current.position, {
            y: -2,
            x: 1
        });

        const introTl = gsap.timeline({
            defaults: {
                duration: 3, ease: "back.out(1.4)"
            }
        });

        introTl
            .from(perfumeRef.current.position, {
                y: -5,
                x: 1
            }, 0)
            .from(perfumeRef.current.position, {
                z: 3
            }, 0);
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