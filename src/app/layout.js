import "./globals.css";
import styles from "./layout.module.css";
import Nav from "../components/Nav";
import MyHead from "../components/Head";
import { Analytics } from "@vercel/analytics/react"

import { Newsreader , EB_Garamond, Libre_Baskerville} from 'next/font/google';

const newsreader = Newsreader({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-newsreader'
});

const ebGaramond = EB_Garamond({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-eb-garamond'
});

const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-libre-baskerville'
});

export const metadata = {
    title: "James Lin",
    description: "Thoughts on science, people, and technology.",
};

export default function RootLayout({ children }) {
    return (
        <html className={`${newsreader.variable} ${ebGaramond.variable}`}>
            <MyHead />
            <Analytics />
            <body>
                <Nav />
                <main className={styles.mainBox}>{children}</main>
                <div className={styles.paddingBox}></div>
            </body>
        </html>
    );
}
