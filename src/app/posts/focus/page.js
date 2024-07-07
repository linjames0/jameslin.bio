import styles from "../post.module.css";
import Nav from "../../../components/Nav";
import Head from "../../../components/Head";

export default function Focus() {
  return (
    <html>
        <Head />
        <body className={styles.body}>
            <Nav />
            <div className={styles.mainBox}>
                <h1 className={styles.postTitle}>Focus</h1>
                <h3 className={styles.postDate}>February 24th, 2024</h3>
                <p className={styles.quote}>
                    People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are.
                    <br />
                    <br />
                    — Steve Jobs
                </p>
                <p>
                    Last week, I flew to SF after officially dropping out of school. I broke down my time allocation since coming to the Bay, and found that it was highly skewed towards social interactions.
                </p>
                <p>
                    I’m at a stage in life where I feel like I know enough people. Meeting new people is no longer a bottleneck for my progress. In fact, because of how networks compound over time, I find myself flooded with opportunities to meet interesting people. That’s the trap.
                </p>
                <p>
                    Associating with highly accomplished peers fools me into thinking that I’m accomplished. If I’m at a dinner with a well-known investor, I feel as though I’m special somehow. In reality, this networking schtick only serves to inflate my ego.
                </p>
                <p>
                    I don’t want to seek out great people; I want great people to seek me out. This is only possible if I do great work. Whenever I make progress, that information will naturally flow to the people who matter.
                </p>
                <p>
                    The goal is not stochastic schmoozing, but instead directed energy on hard problems.
                </p>
                <p>
                    Focus is a prerequisite for great work. This is because most hard problems are soluble in deep effort, but insoluble in shallow attempts. Focus is the process of refining merely good ideas into great ideas.
                </p>
                <p className={styles.quote}>
                    Great work usually entails spending what would seem to most people an unreasonable amount of time on a problem.

                    — Paul Graham
                </p>
                <p>
                    Focus and sacrifice are two sides of the same coin. Historically, I say no to 40% of opportunities. This should be 99%.
                </p>
                <p>
                    Buffett’s “2 List” practice was an exceptionally clarifying exercise. I cut projects, podcasts, MMA, social media, social events, meetings, and misc. It hurts to eliminate activities I enjoy, but it’s the price of being more intentional and selective.
                </p>
                <p>
                    Over time, I have gotten more comfortable turning down invites. I think this is a result of becoming more secure in my abilities: I don’t need validation through association. I know what I’m missing out on and I don’t care. It’s not a priority.
                </p>
                <p>
                    I think this next stage of life will be characterized by intense focus on what’s most important to me: work and friendships. Anything that falls outside my circle of focus will have a high bar for my attention.
                </p>
                <i>
                    Thoughts catalyzed by feedback from Adam Majmudar, Sigil Wen, and Will DePue
                </i>
            </div>
            <div className={styles.paddingBox}>
            </div>
        </body>
    </html>
  );
}
