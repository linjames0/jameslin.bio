import "./globals.css";
import styles from "./layout.module.css";
import Nav from "../components/Nav";
import Head from "../components/Head";

export const metadata = {
    title: "James Lin",
    description: "Thoughts on science, people, and technology.",
};

export default function RootLayout({ children }) {
    return (
        // <html>
        //     <Head />
        //     <body className={styles.body}>
        //         <Nav />
        //         <main className={styles.mainBox}>
        //             {children}
        //         </main>
        //         <div className={styles.paddingBox}></div>
        //     </body>
        // </html>
        <html>
                <body>
                    <main>{children}</main>
                </body>
        </html>
    );
}
