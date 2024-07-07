import Link from 'next/link';
import styles from "./PostList.module.css";

export default function PostList() {
    return (
        <div className={styles.mainBox}>
            <hr />
            <Link href="../posts/young" className={styles.postTitle}>Your strength as a young person</Link>
            <p className={styles.postDate}>
                March 26, 2024
            </p>
            <hr />
            <Link href="../posts/attractive" className={styles.postTitle}>Attractive</Link>
            <p className={styles.postDate}>
                March 18, 2024
            </p>
            <hr />
            <Link href="../posts/focus" className={styles.postTitle}>Focus</Link>
            <p className={styles.postDate}>
                February 24, 2024
            </p>
            <hr />
            <Link href="../posts/strange" className={styles.postTitle}>Smart people are often strange</Link>
            <p className={styles.postDate}>
                October 25, 2022
            </p>
        </div>
    );
}