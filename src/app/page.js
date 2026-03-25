import styles from "./page.module.css";

export default function Page() {
    return (
        <div>
            <h3 className={styles.subtitle}>Hi, I'm James</h3>
            <p>
                I'm making films at the frontiers of tech and science.
            </p>
            <p style={{marginBottom: 0}}>Previously,</p>
            <ul>
                <li>Filmed collegiate teams building self-landing rockets (doc soon)</li>
                <li>Wrote and co-directed <a href="https://x.com/crsamra/status/1948050596029952000">Waves</a></li>
                <li>Mapped worm brains at the <a href="https://synthneuro.org/">Boyden Lab</a></li>
                <li>Walked 500km from Tokyo to <a href="https://en.wikipedia.org/wiki/Ise_Shrine">Ise</a> in pursuit of something immortal</li>
                <li>Had a past life researching in <a href="https://docs.google.com/document/d/16ipgWg2twq0djOg5KjziWjfuEP8JBBsnkhxCB4Qks_s/edit?usp=sharing">biodefense</a></li>
            </ul>
            <p>
                <span className={styles.hoverable} data-ref="[1]">
                    I'm awful at casual enjoyment.
                    <span className={styles.tooltip}>
                        "[Tarts] must not be eaten dainty flake by dainty flake, but inhaled with gusto like life itself." — Yorgos Lanthimos, Poor Things (2023)
                    </span>
                </span>{" "}I love <a href="https://linjames.notion.site/bbbf004605d6430f8965e76634ba54c1?v=76c6a8574223459996028924ac5e66bd&pvs=4">reading</a>, <a href="https://linjames.notion.site/bbbf004605d6430f8965e76634ba54c1?v=76c6a8574223459996028924ac5e66bd&pvs=4">films</a>, <a href="/photography">photography</a>, <span className={styles.hoverable} data-ref="[2]">music,<span className={styles.tooltip}>Frank Ocean, Fujii Kaze, Nina Simone, Daniel Caesar, Esperanza Spalding, NIKI, Kendrick Lamar, Jacob Collier, Laufey, Chopin, Bruno Mars, JAY-Z, Norah Jones...</span></span> food, and art.
            </p>
            <p>
                I'm supported by <a href="https://www.magnificentgrants.com/">Magnificent Grants</a> and <a href="https://www.mercatus.org/emergent-ventures">Emergent Ventures</a>.
            </p>
            <p style={{marginBottom: 0}}>
                If anything here resonates, feel free to reach out via <a href="mailto:linjames@mit.edu">email</a> or <a href="https://x.com/jlinbio">twitter</a>.
            </p>
        </div>
    );
}
