"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./Nav.module.css";

export default function Nav() {
    const pathname = usePathname();

    return (
        <div className={styles.navBox}>
            <div className={styles.desktopNav}>
                <div className={styles.paddingBox}></div>
                <h3 className={styles.navTitle}>Navigation</h3>            
                <Link href="/" className={`${pathname === '/' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Home</Link>
                <br />
                <Link href="/writing" className={`${pathname === '/writing' || pathname.includes('posts') ? styles.currentPage : ''} ${styles.navSubtitle}`}>Writing</Link>
                <br />
                {/* <Link href="/art" className={`${pathname === '/art' ? styles.current : ''} ${styles.navSubtitle}`}>Art</Link>
                <br />
                <Link href="/observatory" className={`${pathname === '/observatory' ? styles.current : ''} ${styles.navSubtitle}`}>Observatory</Link>
                <br /> */}
                {/* <Link href="/influences" className={`${pathname === '/influences' ? styles.current : ''} ${styles.navSubtitle}`}>Influences</Link>
                <br />
                <Link href="/misc" className={`${pathname === '/misc' ? styles.current : ''} ${styles.navSubtitle}`}>Misc</Link>
                <br /> */}
            </div>

            <div className={styles.mobileNav}>         
                <Link href="/" className={`${pathname === '/' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Home</Link>
                <br />
                <Link href="/writing" className={`${pathname === '/writing' || pathname.includes('posts') ? styles.currentPage : ''} ${styles.navSubtitle}`}>Writing</Link>
            </div>

        </div>
    )
}