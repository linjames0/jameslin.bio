"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../app/photography/photography.module.css";

// One photo at a time, sized to the text column. Previous/Next swap the
// photo; the incoming one fades in once it has loaded.
export default function PhotoViewer({ photos }) {
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const go = useCallback(
        (delta) => {
            setLoaded(false);
            setIndex((i) => (i + delta + photos.length) % photos.length);
        },
        [photos.length]
    );

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") go(1);
            else if (e.key === "ArrowLeft") go(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go]);

    const photo = photos[index];

    return (
        <div>
            <div className={styles.viewerControls}>
                <button type="button" className={styles.viewerBtn} onClick={() => go(-1)}>
                    Previous
                </button>
                <span>/</span>
                <button type="button" className={styles.viewerBtn} onClick={() => go(1)}>
                    Next
                </button>
                <span className={styles.viewerCount}>
                    ({index + 1}/{photos.length})
                </span>
            </div>
            <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={0}
                height={0}
                sizes="40vw"
                priority
                unoptimized
                onLoad={() => setLoaded(true)}
                className={`${styles.viewerPhoto} ${loaded ? styles.viewerPhotoLoaded : ""}`}
            />
        </div>
    );
}
