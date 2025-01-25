"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../app/globals.css";
import styles from "./Nav.module.css";

export default function Nav() {
    const pathname = usePathname();
    const posts = [
        'young',
        'attractive',
        'focus',
        'strange'
    ]

    const postActive = () => {
        const currentSlug = pathname.split('/')[1];
        return posts.includes(currentSlug);
    }

    return (
        <div className={styles.navBox}>
            <div className={styles.desktopNav}>
                <div className={styles.paddingBox}></div>
                {/* <h3 className={styles.navTitle}>Navigation</h3>             */}
                
                {/* Insert the crow image from public folder here, set width to 100px, and it should be treated as an inline element*/}
                {/* <img src="/crow.png" alt="crow" className={styles.crowImage} style={{ width: '50px',  display: 'inline-block' }} />
                <br /> */}
    
                <Link href="/" className={`${pathname === '/' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Home</Link>
                <br />
                <Link href="/writing" className={`${pathname === '/writing' || postActive() ? styles.currentPage : ''} ${styles.navSubtitle}`}>Writing</Link>
                <br />

                
                {/* <Link href="/art" className={`${pathname === '/art' ? styles.current : ''} ${styles.navSubtitle}`}>Art</Link>
                <br /> */}
                {/* <Link href="/observatory" className={`${pathname === '/observatory' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Observatory</Link>
                <br /> */}
                {/* <Link href="/influences" className={`${pathname === '/influences' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Influences</Link>
                <br />
                <Link href="/misc" className={`${pathname === '/misc' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Misc</Link>
                <br /> */}
            </div>

            <div className={styles.mobileNav}>         
                <Link href="/" className={`${pathname === '/' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Home</Link>
                <br />
                <Link href="/writing" className={`${pathname === '/writing' || postActive() ? styles.currentPage : ''} ${styles.navSubtitle}`}>Writing</Link>
                <br />
                <Link href="/observatory" className={`${pathname === '/observatory' ? styles.currentPage : ''} ${styles.navSubtitle}`}>Observatory</Link>
            </div>

        </div>
    )
}