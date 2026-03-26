import fs from 'fs';
import path from 'path';
import styles from "./photography.module.css";

const excluded = [
    'rainbow oil.jpg',
    'blue abstract.jpg',
    'blue bottle.jpg',
    'jazz.jpg',
    'steel.jpg',
    'cushion.jpg',
];

function getPhotos() {
    const dir = path.join(process.cwd(), 'public/photos/photography');
    const files = fs.readdirSync(dir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    return files
        .filter(f => imageExtensions.includes(path.extname(f).toLowerCase()) && !excluded.includes(f))
        .map((filename, i) => ({
            src: `/photos/photography/${encodeURIComponent(filename)}`,
            alt: filename.replace(/\.[^.]+$/, ''),
            size: (i + 1) % 5 === 0 ? 'full' : 'half',
        }));
}

export default function Photography() {
    const photos = getPhotos();
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
