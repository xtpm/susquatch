import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const youtubeUrl = "https://www.youtube.com/watch?v=SibtUxBSBzg";

const recoveredPerformances = [
  {
    id: "ukktVZAvAmk",
    title: "harvest",
    duration: "4:36",
    number: "02",
  },
  {
    id: "FybCCpFmoKg",
    title: "3 chords",
    duration: "5:01",
    number: "03",
  },
];

export const metadata: Metadata = {
  title: "Spin The Words — Vancouver, 2010 | susquatch archive",
  description: "A recovered susquatch.net link: Spin The Words live at the Biltmore Cabaret during Next Music from Tokyo vol. 2.",
  alternates: { canonical: "/pc.htm" },
};

export default function RecoveredPcPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">susquatch</Link>
        <p>Recovered link / pc.htm</p>
        <Link className={styles.archiveLink} href="/#story">Enter the archive ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="recovered-title">
        <div className={styles.intro}>
          <p className={styles.index}>[ 2010 / 10 / 14 ]</p>
          <h1 id="recovered-title">You found<br /><em>the old link.</em></h1>
          <p className={styles.deck}>
            Fifteen years later, the address printed beneath this video leads somewhere again.
          </p>
          <div className={styles.stamp} aria-label="Recovered for the independent archive">
            <span>Recovered</span>
            <strong>susquatch.net</strong>
            <small>Independent archive / 2026</small>
          </div>
        </div>

        <div className={styles.performance}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/SibtUxBSBzg?rel=0"
              title="Susquatch performing Spin The Words at the Biltmore Cabaret in 2010"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.videoCaption}>
            <div>
              <p>Next Music from Tokyo vol. 2</p>
              <h2>“Spin The Words”</h2>
            </div>
            <a href={youtubeUrl} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
          </div>
        </div>
      </section>

      <section className={styles.context} aria-label="Performance details">
        <p className={styles.contextLabel}>Archive entry / live in Canada</p>
        <dl>
          <div><dt>Band</dt><dd>susquatch</dd></div>
          <div><dt>Song</dt><dd>Spin The Words</dd></div>
          <div><dt>Place</dt><dd>Biltmore Cabaret<br />Vancouver, BC</dd></div>
          <div><dt>Date</dt><dd>October 14, 2010</dd></div>
          <div><dt>Tour</dt><dd>Next Music from Tokyo<br />Volume 2</dd></div>
          <div><dt>Uploaded by</dt><dd><a href="https://www.youtube.com/@dbl11down11" target="_blank" rel="noreferrer">dbl11down11 ↗</a></dd></div>
        </dl>
      </section>

      <section className={styles.more} aria-labelledby="more-performances">
        <div className={styles.moreHeading}>
          <div>
            <p>[ Recovered tape / 02 ]</p>
            <h2 id="more-performances">More from<br /><em>the same night.</em></h2>
          </div>
          <p>Additional performances from susquatch&apos;s stop at the Biltmore Cabaret, preserved by the same uploader.</p>
        </div>

        <div className={styles.performanceGrid}>
          {recoveredPerformances.map((performance) => (
            <article className={styles.performanceCard} key={performance.id}>
              <div className={styles.cardVideo}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${performance.id}?rel=0`}
                  title={`Susquatch performing ${performance.title} at the Biltmore Cabaret in 2010`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className={styles.cardCaption}>
                <span>{performance.number}</span>
                <div><p>Next Music from Tokyo vol. 2</p><h3>“{performance.title}”</h3></div>
                <time>{performance.duration}</time>
                <a href={`https://www.youtube.com/watch?v=${performance.id}`} target="_blank" rel="noreferrer" aria-label={`Watch ${performance.title} on YouTube`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>The URL survived. So did the song.</p>
        <Link href="/#music">Keep listening <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
