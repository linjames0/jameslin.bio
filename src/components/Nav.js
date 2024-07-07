"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./Nav.module.css";

export default function Nav() {
    const pathname = usePathname();

    return (
        <div className={styles.navBox}>
            <h3 className={styles.navTitle}>Navigation</h3>            
            <Link href="/" className={`${pathname === '/' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Home</Link>
            <br />
            <Link href="/writing" className={`${pathname === '/writing' || pathname.includes('posts') ? styles.currentPage : ''} ${styles.navSubtitle}`}>Writing</Link>
            <br />
            <Link href="/art" className={`${pathname === '/art' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Art</Link>
            <br />
            <Link href="/observatory" className={`${pathname === '/observatory' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Observatory</Link>
            <br />
            {/* <Link href="/influences" className={`${pathname === '/influences' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Influences</Link>
            <br />
            <Link href="/misc" className={`${pathname === '/misc' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Misc</Link>
            <br /> */}
        </div>
    )
}