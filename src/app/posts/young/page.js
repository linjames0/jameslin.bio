import styles from "../post.module.css";
import Nav from "../../../components/Nav";
import Head from "../../../components/Head";

export default function Young() {
  return (
    <html>
        <Head />
        <body className={styles.body}>
            <Nav />
            <div className={styles.mainBox}>
                <h1 className={styles.postTitle}>Your strength as a young person</h1>
                <h3 className={styles.postDate}>March 26th, 2024</h3>

                <p>
                    When you're young, you severely underestimate yourself. In reality you are strong in vital ways.
                </p>
                <p>
                    <b>1. Coachability</b>
                    <br />
                    You can learn fast and pick up new skills. Veterans are set in old ways. Be a sponge, devour knowledge, ask questions.
                </p>
                <p>
                    <b>2. Network</b>
                    <br />
                    All your friends are smart college kids, soon-to-be grads. This is a ripe talent pool for hire. Work together on projects, make intros for companies.
                </p>
                <p>
                    <b>3. Risk tolerance</b>
                    <br />
                    You have nothing to lose, so you’re able to drop everything to work on exciting high-potential projects & companies. Take a gap year, join a lab, hustle your way onto a team.
                </p>
                <p>
                    Go out and prove yourself. You've got this.
                </p>
                <i>
                    Thoughts catalyzed by feedback from Sigil Wen
                </i>     
            </div>
            <div className={styles.paddingBox}>
            </div>
        </body>
    </html>
  );
}
