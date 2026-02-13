"use client";

import styles from './style.module.scss';
import RoundedButton from "@/ui/Button/index";

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div>
                <h1 className={styles.header}>Own the Moment</h1>
            </div>
            <div className={styles.button}>
                <RoundedButton><p>Shop now</p></RoundedButton>
            </div>
        </section>
    )
}