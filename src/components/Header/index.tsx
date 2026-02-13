"use client";

import React from 'react';
import Link from 'next/link';
import Magnetic from "@/ui/Magnetic/index";

export default function Header() {
    return (
        <header className="absolute h-20 w-screen bg-transparent flex flex-row gap-40 p-10 justify-center items-center text-center">
            <Magnetic><Link href="/">Fleur</Link></Magnetic>
            <nav>
                <ul className="flex flex-row gap-40">
                    <Magnetic><li><Link href="/shop">Shop</Link></li></Magnetic>
                    <Magnetic><li><Link href="/about">About</Link></li></Magnetic>
                </ul>
            </nav>
        </header>
    )
}