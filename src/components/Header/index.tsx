"use client";

import React from 'react';
import Link from 'next/link';
import Magnetic from "@/ui/Magnetic/index";
import styles from './style.module.scss';

export default function Header() {
    return (
        <header className={`absolute h-20 w-screen bg-transparent flex flex-row gap-40 p-10 justify-center items-center text-center ${styles.header}`}>
            <Magnetic>
                <div className={styles.el}>
                    <Link href="/">Fleur</Link>
                    <div className={styles.indicator}></div>
                </div>
            </Magnetic>
            <nav className={styles.nav}>
                <ul className="flex flex-row gap-40">
                    <Magnetic>
                        <div className={styles.el}>
                            <li><Link href="/shop">Shop</Link></li>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <li><Link href="/about">About</Link></li>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </ul>
            </nav>
        </header>
    )
}