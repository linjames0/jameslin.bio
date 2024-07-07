import styles from "./observatory.module.css";
import Nav from "../../components/Nav";
import Head from "../../components/Head";

export default function Observatory() {
  return (
    <html>
        <Head />
        <body className={styles.body}>
            <Nav />
            <div className={styles.mainBox}>
                <h1 className={styles.subtitle}>In development...</h1>
            </div>
        </body>
    </html>
  );
}