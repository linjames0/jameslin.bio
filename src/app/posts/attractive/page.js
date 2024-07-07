import styles from "../post.module.css";
import Nav from "../../../components/Nav";
import Head from "../../../components/Head";

export default function Attractive() {
  return (
    <html>
        <Head />
        <body className={styles.body}>
            <Nav />
            <div className={styles.mainBox}>
                <h1 className={styles.postTitle}>Attractive</h1>
                <h3 className={styles.postDate}>March 18th, 2024</h3>
                <p>
                    Every so often, I come across people who I find very attractive by virtue of their personality and character. These are people I’d love to be friends with. The kinds of people who, secure in their own abilities, have the freedom to live life on their own terms.
                </p>
                <p style={{marginBottom: 0}}>
                    Specifically, people who…
                    <ul style={{marginBottom: 0}}>
                        <li>don’t try to impress you</li>
                        <li>are comfortable with silence</li>
                        <li>are decisive and self-assured</li>
                        <li>perform small acts of kindness but don’t seek credit</li>
                        <li>tell you like it is</li>
                        <li>have passion for a craft</li>
                        <li>listen and observe, noticers of small details</li>
                        <li>reciprocate but aren’t transactional</li>
                        <li>consent to a little whimsy every while-or-so</li>
                    </ul>
                </p>
            </div>
        </body>
    </html>
  );
}
