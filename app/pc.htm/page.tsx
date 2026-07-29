import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const youtubeUrl = "https://www.youtube.com/watch?v=SibtUxBSBzg";

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

      <footer className={styles.footer}>
        <p>The URL survived. So did the song.</p>
        <Link href="/#music">Keep listening <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
