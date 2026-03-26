import styles from "./photography.module.css";

const BASE_URL = "https://pub-78a5996a67444fb785f2e7d83efc5ab5.r2.dev";

const photoFiles = [
    "blue bottle.jpg",
    "cakes.jpg",
    "carve.jpg",
    "chaos.jpg",
    "cotton.jpg",
    "curious.jpg",
    "frames.jpg",
    "general trash.jpg",
    "incense.jpg",
    "maps.jpg",
    "mirror mirror.jpg",
    "multiverse.jpg",
    "waves.jpg",
];

const photos = photoFiles.map((filename, i) => ({
    src: `${BASE_URL}/${encodeURIComponent(filename)}`,
    alt: filename.replace(/\.[^.]+$/, ''),
    size: (i + 1) % 5 === 0 ? 'full' : 'half',
}));

export default function Photography() {
    return (
        <div className={styles.grid}>
            {photos.map((photo, i) => (
                <div key={i} className={photo.size === 'full' ? styles.full : styles.half}>
                    <img src={photo.src} alt={photo.alt} className={styles.photo} />
                </div>
            ))}
        </div>
    );
}
