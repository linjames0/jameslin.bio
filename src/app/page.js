import styles from "./page.module.css";

export default function Page() {
    return (
        <div>
            <h3 className={styles.subtitle}>Hi, I'm James</h3>
            <p>
                I'm interested in synthetic biology and machine learning from an applied perspective.
            </p>
            <p>
                Currently, I'm developing expansion microscopy tools for brain-mapping at the <a href="https://synthneuro.org/">Boyden Lab</a>. 
                In my free time, I enjoy <a href="https://linjames.notion.site/bbbf004605d6430f8965e76634ba54c1?v=76c6a8574223459996028924ac5e66bd&pvs=4">reading</a>, sketching, badminton, and observing the world around me.
            </p>
            <p>
                I'm supported by <a href="https://www.magnificentgrants.com/">Magnificent Grants</a> and <a href="https://www.mercatus.org/emergent-ventures">Emergent Ventures</a>.
            </p>
            <p style={{marginBottom: 0}}>
                If anything here resonates, feel free to reach out via <a href="mailto:linjames@mit.edu">email</a> or <a href="https://x.com/jlinbio">twitter</a>. Always excited to meet new people.
            </p>
        </div>
    );
}
