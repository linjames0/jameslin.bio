import styles from "../layout.module.css";
import Nav from "../../components/Nav";
import Head from "../../components/Head";

export default function RootLayout({ children }) {
    return (
        <html>
            <Head />
            <body className={styles.body}>
                <Nav />
                <div className={styles.mainBox}>
                    <main className={styles.markdown}>{children}</main>
                </div>
                <div className={styles.paddingBox}></div>
            </body>
        </html>
    );
}