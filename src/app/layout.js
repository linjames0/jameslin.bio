import "./globals.css";
import styles from "./layout.module.css";
import Nav from "../components/Nav";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: "James Lin",
    description: "Thoughts on science, people, and technology.",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <Head />
            <Analytics />
            <body>
                <Nav />
                <main className={styles.mainBox}>{children}</main>
                <div className={styles.paddingBox}></div>
            </body>
        </html>
    );
}
