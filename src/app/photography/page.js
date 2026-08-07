import Image from "next/image";
import styles from "./photography.module.css";

// Web-optimized copy (2560px AVIF) lives in portfolio-web/ so the page opens fast.
const hero = {
    src: `/photos/photography/portfolio-web/${encodeURIComponent("origins - 010.avif")}`,
    alt: "origins 010",
};

// The landing page is just the full-screen opening shot — no gallery, no
// scrolling. The series live at /photography/{origins,hotfire,documentary}.
export default function Photography() {
    return (
        <div className={styles.page} data-page="photography" data-fullbleed="">
            <section className={styles.hero}>
                <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                    className={styles.heroImg}
                />
            </section>
        </div>
    );
}
