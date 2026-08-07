"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../app/photography/photography.module.css";

export default function Gallery({ sections }) {
    // Flatten every photo into one ordered list so the lightbox can page
    // through the whole portfolio, while remembering which section each is in.
    const allPhotos = [];
    sections.forEach((section) => {
        section.photos.forEach((photo) => {
            allPhotos.push({ ...photo, section: section.title });
        });
    });

    const [openIndex, setOpenIndex] = useState(null);
    const isOpen = openIndex !== null;

    const close = useCallback(() => setOpenIndex(null), []);
    const next = useCallback(
        () => setOpenIndex((i) => (i + 1) % allPhotos.length),
        [allPhotos.length]
    );
    const prev = useCallback(
        () => setOpenIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length),
        [allPhotos.length]
    );

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            else if (e.key === "ArrowRight") next();
            else if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, close, next, prev]);

    let runningIndex = 0;

    return (
        <>
            {sections.map((section) => (
                <section key={section.title || "all"} className={styles.section}>
                    {section.title && (
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                    )}
                    {section.blurb && (
                        <p className={styles.sectionBlurb}>{section.blurb}</p>
                    )}
                    <div className={styles.masonry}>
                        {section.photos.map((photo) => {
                            const index = runningIndex++;
                            return (
                                <button
                                    key={photo.src}
                                    type="button"
                                    className={styles.tile}
                                    onClick={() => setOpenIndex(index)}
                                    aria-label={`Open ${photo.alt}`}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 850px) 50vw, 30vw"
                                        className={styles.photo}
                                        loading="lazy"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </section>
            ))}

            {isOpen && (
                <div
                    className={styles.lightbox}
                    onClick={close}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className={`${styles.lbBtn} ${styles.lbClose}`}
                        onClick={close}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <button
                        className={`${styles.lbBtn} ${styles.lbPrev}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <figure
                        className={styles.lbFigure}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={allPhotos[openIndex].src}
                            alt={allPhotos[openIndex].alt}
                            width={0}
                            height={0}
                            sizes="92vw"
                            className={styles.lbImage}
                            priority
                        />
                        <figcaption className={styles.lbCaption}>
                            {allPhotos[openIndex].alt}
                            <span className={styles.lbCount}>
                                {openIndex + 1} / {allPhotos.length}
                            </span>
                        </figcaption>
                    </figure>
                    <button
                        className={`${styles.lbBtn} ${styles.lbNext}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}
