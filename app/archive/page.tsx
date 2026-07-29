import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Archive index | susquatch",
  description: "Browse the recovered performances, recordings, photographs, interviews and history in the independent susquatch archive.",
  alternates: { canonical: "/archive" },
};

const collections = [
  {
    number: "01",
    title: "Recovered performances",
    note: "Three tapes / Vancouver, 2010",
    description: "The old pc.htm link lives again. Watch surviving footage from Next Music from Tokyo vol. 2.",
    image: "/media/susquatch-live-facebook.png",
    alt: "Susquatch performing live on stage",
    href: "/archive/performances",
  },
  {
    number: "02",
    title: "Recorded works",
    note: "Seven releases / 2003—2012",
    description: "Demos, singles, mini albums and both full-length records, gathered in chronological order.",
    image: "/media/in-this-world.jpg",
    alt: "In This World album artwork",
    href: "/archive/recordings",
  },
  {
    number: "03",
    title: "Photographs",
    note: "Press and live files",
    description: "Rooftop, CINRA and Facebook photographs retained with links to their original context.",
    image: "/media/band-2009.jpg",
    alt: "Susquatch photographed at night in 2009",
    href: "/archive/photographs",
  },
  {
    number: "04",
    title: "Background notes",
    note: "Story, lineup and sources",
    description: "The band’s formation, sound, documented lineup and the publication trail behind this archive.",
    image: "/media/kenta-2009-a.jpg",
    alt: "Kenta Oshikiri during a 2009 interview",
    href: "/archive/background",
  },
] as const;

const register = [
  ["2002", "Formation", "Tokyo, Japan", "/archive/background"],
  ["2003", "1st Demo", "EP / four tracks", "/archive/recordings"],
  ["2004", "Plum / Ceto", "Single", "/archive/recordings"],
  ["2007", "Water Plant", "Mini album", "/archive/recordings"],
  ["2009", "In This World", "First full-length", "/archive/recordings"],
  ["2010", "Next Music from Tokyo", "Canada / recovered footage", "/archive/performances"],
  ["2011", "Toy Box Brain", "Second full-length", "/archive/recordings"],
  ["2012", "4th", "Single / final documented release", "/archive/recordings"],
] as const;

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">susquatch</Link>
        <nav aria-label="Archive navigation">
          <Link href="/#story">[ story ]</Link>
          <Link href="/#music">[ listen ]</Link>
          <span>[ archive ]</span>
        </nav>
        <Link className={styles.recoveredLink} href="/pc.htm">recovered links ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="archive-title">
        <div className={styles.heroMeta}>
          <p>[ Index / 001 ]</p>
          <p>Tokyo, Japan<br />2002—</p>
        </div>
        <div className={styles.heroTitle}>
          <h1 id="archive-title">Archive<br /><em>index.</em></h1>
          <p>Recordings, photographs and loose ends from a band whose small catalogue kept traveling.</p>
        </div>
        <div className={styles.tally}>
          <span>Files currently indexed</span>
          <strong>04</strong>
          <small>More will surface.</small>
        </div>
      </section>

      <section className={styles.collections} aria-labelledby="collections-title">
        <div className={styles.sectionIntro}>
          <p>[ Browse the files ]</p>
          <h2 id="collections-title">Choose a drawer.</h2>
        </div>
        <div className={styles.collectionGrid}>
          {collections.map((collection) => (
            <Link className={styles.collectionCard} href={collection.href} key={collection.number}>
              <div className={styles.imageWrap}>
                <Image src={collection.image} alt={collection.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className={styles.cardMeta}>
                <span>{collection.number}</span>
                <p>{collection.note}</p>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{collection.title}</h3>
              <p className={styles.description}>{collection.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.register} aria-labelledby="register-title">
        <div className={styles.registerHeading}>
          <p>[ Chronological register ]</p>
          <h2 id="register-title">The paper trail.</h2>
        </div>
        <div className={styles.registerRows}>
          {register.map(([year, title, note, href], index) => (
            <Link href={href} key={`${year}-${title}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{year}</time>
              <strong>{title}</strong>
              <p>{note}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <p>Independent archive / compiled 2026</p>
          <h2>Nothing here is finished.<br /><em>That is the point.</em></h2>
        </div>
        <Link href="/">Return to susquatch.net <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
