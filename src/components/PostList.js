import Link from 'next/link';
import styles from "./PostList.module.css";

export default function PostList() {
    return (
        <div>
            {/* <hr />
            <Link href="/jolie" className={styles.postTitle}>All at once</Link>
            <p className={styles.postDate}>
                February 14, 2025
            </p> */}
            <hr />
            <Link href="/research" className={styles.postTitle}>Observations from MIT's best neuroscience lab</Link>
            <p className={styles.postDate}>
                February 13, 2025
            </p>
            <hr />
            <Link href="/young" className={styles.postTitle}>Your strength as a young person</Link>
            <p className={styles.postDate}>
                March 26, 2024
            </p>
            <hr />
            <Link href="/attractive" className={styles.postTitle}>Attractive</Link>
            <p className={styles.postDate}>
                March 18, 2024
            </p>
            <hr />
            <Link href="/focus" className={styles.postTitle}>Focus</Link>
            <p className={styles.postDate}>
                February 24, 2024
            </p>
            <hr />
            <Link href="/strange" className={styles.postTitle}>Smart people are often strange</Link>
            <p className={styles.postDate}>
                October 25, 2022
            </p>
            <hr />
        </div>
    );
}