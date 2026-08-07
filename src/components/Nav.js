"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import "../app/globals.css";
import styles from "./Nav.module.css";

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

    // Clicking Photography starts the whole transition at once (leaving=true):
    // nav links and name fade while sliding with the trees, and the body fades
    // in place. The header stays in the layout flow until the navigation
    // lands, so the body doesn't jump during the fade; only then does the
    // header become the absolute side box (at identical coordinates).
    const [leaving, setLeaving] = useState(false);

    const photoSeries = [
        { slug: 'origins', label: 'Origins' },
        { slug: 'hotfire', label: 'Hotfire' },
        { slug: 'documentary', label: 'Documentary' },
    ];
    const onPhotography = pathname.startsWith('/photography');
    const collapsed = onPhotography || leaving;

    // The series links fade in 1s after the nav transition settles (the
    // slide runs ~0.2s past arrival); direct series loads start sooner.
    const subDelay = pathname === '/photography' ? 1.2 : 0.6;

    // Post slugs live at the root, but belong to Writing.
    const posts = ['jolie', 'research', 'young', 'attractive', 'focus', 'strange'];
    const onWriting = pathname === '/writing' || posts.includes(pathname.split('/')[1]);

    const hideable = collapsed ? styles.navLinkHidden : '';
    const current = (isActive) => (isActive ? styles.currentPage : '');

    const goPhotography = (e) => {
        if (onPhotography || leaving) return;
        e.preventDefault();
        setLeaving(true);
        const main = document.querySelector('main');
        if (main) main.style.opacity = '0';
        setTimeout(() => router.push('/photography'), 300);
    };

    // New page content fades itself in; clear the fade-out.
    useEffect(() => {
        const main = document.querySelector('main');
        if (main) main.style.opacity = '';
        if (!pathname.startsWith('/photography')) setLeaving(false);
    }, [pathname]);

    return (
        <header className={`${styles.header} ${collapsed ? styles.collapsedFx : ''} ${onPhotography ? styles.headerSide : ''}`}>
            <div className={styles.bar}>
                <Link href="/" className={styles.wordmark}>
                    <span className={`${styles.nameText} ${collapsed ? styles.nameTextHidden : ''}`}>James Lin</span>
                    <Image
                        src="/photos/trees.png"
                        alt=""
                        width={1062}
                        height={1518}
                        className={styles.logo}
                        priority
                    />
                </Link>
                <div className={styles.spacer} />
                <nav className={styles.links}>
                    <Link href="/" className={`${current(pathname === '/')} ${styles.navSubtitle} ${styles.navLink} ${hideable}`}>Home</Link>
                    <Link href="/writing" className={`${current(onWriting)} ${styles.navSubtitle} ${styles.navLink} ${hideable}`}>Writing</Link>
                    <Link href="/photography" onClick={goPhotography} className={`${styles.navSubtitle} ${styles.navLink} ${hideable}`}>Photography</Link>
                </nav>
            </div>
            {onPhotography && (
                <div className={styles.subRow}>
                    {photoSeries.map((s, i) => (
                        <Link
                            key={s.slug}
                            href={`/photography/${s.slug}`}
                            className={`${pathname === `/photography/${s.slug}` ? styles.currentPage : ''} ${styles.navSubtitle} ${styles.subLink}`}
                            style={{ animationDelay: `${subDelay + i * 0.15}s` }}
                        >
                            {s.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
