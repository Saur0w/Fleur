"use client";

import styles from './style.module.scss';
import Text from "@/ui/Text/index";

export default function Des() {
    return (
        <section className={styles.description}>
            <div className={styles.heading}>
                <h1>Crafted to Be Remembered.</h1>
            </div>
            <div className={styles.para}>
                <Text>
                    <p>A carefully balanced composition of rare ingredients, <br />blended to leave a lasting impression.<br />
                        Each spray reveals layers that unfold slowly — subtle at first,<br /> unforgettable in the end.</p>
                </Text>

            </div>
        </section>
    )
}