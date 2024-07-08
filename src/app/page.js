import styles from "./page.module.css";
import Nav from "../components/Nav";
import Head from "../components/Head";

export default function Page() {
  return (
    <html>
        <Head />
        <body className={styles.body}>
            <Nav />
            <div className={styles.mainBox}>
                <h1 className={styles.title}>James Lin</h1>
                <h3 className={styles.subtitle}>About me</h3>
                <p>
                    I‘m interested in synthetic biology and machine learning from an applied perspective. I'm currently developing expansion microscopy tools for brain-mapping at the <a href="https://synthneuro.org/">Boyden Lab</a>.
                </p>
                <p>
                    In my free time, I enjoy reading, climbing, sketching, and observing the world around me.
                </p>
                <p>
                    I'm supported by <a href="https://www.magnificentgrants.com/">Magnificent Grants</a> and <a href="https://www.mercatus.org/emergent-ventures">Emergent Ventures</a>.
                </p>
                <h3 className={styles.subtitle}>This website is my digital nucleus</h3>
                <p style={{marginBottom: 0}}>
                    A collection of my ever-evolving thoughts and ideas. If anything here resonates, feel free to reach out via <a href="mailto:james218.lin@gmail.com">email</a> or <a href="https://x.com/jlinbio">twitter</a>. Always excited to meet new people.
                </p>
            </div>
        </body>
    </html>
  );
}
