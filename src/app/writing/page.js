import styles from "./writing.module.css";
import Head from "../../components/Head";
import Nav from "../../components/Nav";
import PostList from "../../components/PostList";

export default function Writing() {
    return (
        <html>
            <Head />
            <body className={styles.body}>
                <Nav />
                <PostList />
            </body>
        </html>
    );
}