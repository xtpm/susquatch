import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const spotify = "https://open.spotify.com/artist/5MNNV4jwu51bxwel7fz9BO";
const apple = "https://music.apple.com/jp/artist/susquatch/1641421476";

const drawerMeta = {
  performances: {
    number: "01",
    eyebrow: "Recovered tape file",
    title: "Recovered\nperformances.",
    description: "Three surviving documents from susquatch’s night at the Biltmore Cabaret in Vancouver, October 2010.",
  },
  recordings: {
    number: "02",
    eyebrow: "The complete catalogue",
    title: "Recorded\nworks.",
    description: "Seven releases issued between 2003 and 2012, from the first demo through the final documented single.",
  },
  photographs: {
    number: "03",
    eyebrow: "Press and live files",
    title: "Photograph\narchive.",
    description: "Interview portraits, band photographs and live images preserved with their original publication context.",
  },
  background: {
    number: "04",
    eyebrow: "Story and field notes",
    title: "Background\nnotes.",
    description: "The formation, sound, documented lineup and history behind a small catalogue with an unusually long echo.",
  },
} as const;

type Drawer = keyof typeof drawerMeta;

const performances = [
  { number: "01", id: "SibtUxBSBzg", title: "Spin The Words", duration: "3:50" },
  { number: "02", id: "ukktVZAvAmk", title: "harvest", duration: "4:36" },
  { number: "03", id: "FybCCpFmoKg", title: "3 chords", duration: "5:01" },
] as const;

const releases = [
  { year: "2003", title: "1st Demo", type: "EP", cover: "/media/first-demo.jpg", href: "https://music.apple.com/jp/album/1st-demo-ep/1642371039" },
  { year: "2004", title: "Plum / Ceto", type: "Single", cover: "/media/plum-ceto.jpg", href: "https://music.apple.com/jp/album/plum-ceto-single/1642661514" },
  { year: "2007", title: "Water Plant", type: "Mini album", cover: "/media/water-plant.jpg", href: "https://open.spotify.com/album/571gQlEhNb4SV3mWexs62n" },
  { year: "2009", title: "Weathering", type: "Single", cover: "/media/weathering.jpg", href: "https://music.apple.com/jp/album/weathering-single/1641458908" },
  { year: "2009", title: "In This World", type: "Album", cover: "/media/in-this-world.jpg", href: "https://open.spotify.com/album/0DKsw8XT9NGCvZdlHeCjJ5" },
  { year: "2011", title: "Toy Box Brain", type: "Album", cover: "/media/toy-box-brain.jpg", href: "https://open.spotify.com/album/2wI3lSCIIEERTMUcgumoG0" },
  { year: "2012", title: "4th", type: "Single", cover: "/media/fourth.jpg", href: "https://music.apple.com/jp/album/4th-single/1642387791" },
] as const;

const photographs = [
  { src: "/media/band-2007.jpg", alt: "The four members of susquatch standing beneath bare trees", caption: "susquatch / Rooftop, 2007", href: "https://rooftop1976.com/interview/070501142301.php", shape: "wide" },
  { src: "/media/band-2009.jpg", alt: "Three members of susquatch standing on a tree-lined road at night", caption: "susquatch / CINRA, 2009", href: "https://www.cinra.net/article/interview-2009-06-05-000000-php", shape: "wide" },
  { src: "/media/kenta-2009-a.jpg", alt: "Kenta Oshikiri during a 2009 interview", caption: "Kenta Oshikiri / interview still 01", href: "https://www.cinra.net/article/interview-2009-06-05-000000-php", shape: "portrait" },
  { src: "/media/kenta-2009-b.jpg", alt: "Kenta Oshikiri speaking during a 2009 interview", caption: "Kenta Oshikiri / interview still 02", href: "https://www.cinra.net/article/interview-2009-06-05-000000-php", shape: "portrait" },
  { src: "/media/facebook-fukui-live.jpg", alt: "Two musicians onstage under purple and orange lights", caption: "FukuiCHOP / March 2012", href: "https://www.facebook.com/photo.php?fbid=334428116607188&set=pb.100076094156377.-2207520000&type=3", shape: "wide" },
  { src: "/media/susquatch-live-facebook.png", alt: "Susquatch guitarist jumping during a live performance", caption: "Live performance / March 2012", href: "https://www.facebook.com/photo/?fbid=334427149940618&set=pb.100076094156377.-2207520000", shape: "wide" },
  { src: "/media/facebook-waka-pedals.jpg", alt: "Guitar pedals and cables on a venue stage", caption: "Waka’s pedals / March 2012", href: "https://www.facebook.com/photo.php?fbid=334427749940558&set=pb.100076094156377.-2207520000&type=3", shape: "wide" },
] as const;

const timeline = [
  ["2002", "Formation", "Kenta Oshikiri and Maki Nakano begin susquatch after meeting at music school in Tokyo."],
  ["2007", "Water Plant", "Six songs establish the band’s interlocking guitars, abrupt rhythmic turns and melodic center."],
  ["2009", "In This World", "The first full album arrives: ten compact songs balancing complexity with pop instinct."],
  ["2010", "Canada", "The band plays Vancouver, Toronto and Montreal with Next Music from Tokyo Vol. 2."],
  ["2011", "Toy Box Brain", "A second album expands the palette without losing the pulse."],
  ["2014", "Quiet horizon", "Nakano departs. The documented trail grows quiet, while the catalogue keeps circulating."],
] as const;

function isDrawer(value: string): value is Drawer {
  return value in drawerMeta;
}

export function generateStaticParams() {
  return Object.keys(drawerMeta).map((collection) => ({ collection }));
}

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }): Promise<Metadata> {
  const { collection } = await params;
  if (!isDrawer(collection)) return {};
  const drawer = drawerMeta[collection];
  return {
    title: `${drawer.title.replace("\n", " ")} | susquatch archive`,
    description: drawer.description,
    alternates: { canonical: `/archive/${collection}` },
  };
}

function DrawerHeader({ drawer }: { drawer: Drawer }) {
  const meta = drawerMeta[drawer];
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">susquatch</Link>
        <Link className={styles.indexLink} href="/archive">[ archive index ]</Link>
        <span>drawer {meta.number} / 04</span>
      </header>
      <section className={styles.hero}>
        <div className={styles.fileNumber}>
          <span>[ {meta.number} ]</span>
          <p>{meta.eyebrow}</p>
        </div>
        <div className={styles.heroCopy}>
          <h1>{meta.title.split("\n").map((line, index) => <span key={line}>{index === 1 ? <em>{line}</em> : line}</span>)}</h1>
          <p>{meta.description}</p>
        </div>
        <div className={styles.fileStamp}>
          <span>Independent archive</span>
          <strong>{meta.number}</strong>
          <small>Open file / 2026</small>
        </div>
      </section>
    </>
  );
}

function PerformancesDrawer() {
  return (
    <section className={styles.collection} aria-labelledby="performance-list">
      <div className={styles.collectionHeading}>
        <p>[ Vancouver / October 14, 2010 ]</p>
        <h2 id="performance-list">Three tapes<br /><em>from one night.</em></h2>
      </div>
      <div className={styles.videoGrid}>
        {performances.map((performance) => (
          <article className={styles.videoCard} key={performance.id}>
            <div className={styles.videoFrame}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${performance.id}?rel=0`}
                title={`Susquatch performing ${performance.title} at the Biltmore Cabaret in 2010`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={styles.videoMeta}>
              <span>{performance.number}</span>
              <div><p>Next Music from Tokyo vol. 2</p><h3>“{performance.title}”</h3></div>
              <time>{performance.duration}</time>
              <a href={`https://www.youtube.com/watch?v=${performance.id}`} target="_blank" rel="noreferrer" aria-label={`Watch ${performance.title} on YouTube`}>↗</a>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.factStrip}>
        <div><span>Venue</span><strong>Biltmore Cabaret</strong></div>
        <div><span>City</span><strong>Vancouver, BC</strong></div>
        <div><span>Tour</span><strong>Next Music from Tokyo vol. 2</strong></div>
        <div><span>Uploader</span><strong>dbl11down11</strong></div>
      </div>
      <Link className={styles.legacyLink} href="/pc.htm">Visit the recovered pc.htm page <span>→</span></Link>
    </section>
  );
}

function RecordingsDrawer() {
  return (
    <section className={styles.collection} aria-labelledby="release-list">
      <div className={styles.collectionHeading}>
        <p>[ 2003—2012 / seven releases ]</p>
        <h2 id="release-list">The catalogue,<br /><em>in full color.</em></h2>
      </div>
      <div className={styles.recordFeature}>
        <div>
          <p>[ Recommended entrance ]</p>
          <h3>In This World</h3>
          <p>Ten songs balancing difficult turns, pop instinct and an emotional center. Released in 2009.</p>
        </div>
        <iframe
          title="Listen to In This World by susquatch on Spotify"
          src="https://open.spotify.com/embed/album/0DKsw8XT9NGCvZdlHeCjJ5?utm_source=generator&theme=0"
          width="100%"
          height="152"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
      <div className={styles.releaseGrid}>
        {releases.map((release, index) => (
          <article className={styles.release} key={release.title}>
            <a href={release.href} target="_blank" rel="noreferrer" aria-label={`Open ${release.title}`}>
              <div className={styles.releaseCover}>
                <Image src={release.cover} alt={`${release.title} cover art`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 28vw" />
              </div>
              <div className={styles.releaseInfo}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{release.year} / {release.type}</p><h3>{release.title}</h3></div>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
          </article>
        ))}
      </div>
      <div className={styles.streamBar}>
        <p>Listen through official releases</p>
        <div><a href={spotify} target="_blank" rel="noreferrer">Spotify ↗</a><a href={apple} target="_blank" rel="noreferrer">Apple Music ↗</a></div>
      </div>
    </section>
  );
}

function PhotographsDrawer() {
  return (
    <section className={styles.collection} aria-labelledby="photo-list">
      <div className={styles.collectionHeading}>
        <p>[ Seven preserved images ]</p>
        <h2 id="photo-list">Press, portraits<br /><em>and live light.</em></h2>
      </div>
      <div className={styles.photoGrid}>
        {photographs.map((photo, index) => (
          <figure className={`${styles.photo} ${styles[photo.shape]}`} key={photo.src}>
            <a href={photo.href} target="_blank" rel="noreferrer">
              <div className={styles.photoImage}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")} / {photo.caption}</span><span>source ↗</span></figcaption>
            </a>
          </figure>
        ))}
      </div>
      <p className={styles.creditNote}>Photography remains credited to its original publishers and uploaders. Select any image to open its surviving source.</p>
    </section>
  );
}

function BackgroundDrawer() {
  return (
    <section className={styles.collection} aria-labelledby="story-file">
      <div className={styles.collectionHeading}>
        <p>[ Tokyo, Japan / formed 2002 ]</p>
        <h2 id="story-file">A short catalogue,<br /><em>a long echo.</em></h2>
      </div>
      <div className={styles.storyLayout}>
        <article className={styles.storyCopy}>
          <p>Formed in <strong>Tokyo, Japan</strong> in <strong>2002</strong>, <strong>Susquatch</strong> (stylized as <em>susquatch</em>) is an underground Japanese math rock band known for blending technical musicianship with emotional songwriting. Founded by vocalist and guitarist <strong>Kenta Oshikiri</strong> and drummer <strong>Maki Nakano</strong>, the band developed a distinctive sound combining math rock, post-hardcore, indie rock, jazz and progressive rock.</p>
          <p>One of the band’s defining features is its intricate musicianship. Their songs often feature complex guitar work, shifting time signatures and dynamic structures that move between soft melodic passages and energetic climaxes. Nakano is especially praised for her technical skill and creative playing.</p>
          <p>Oshikiri’s unusual vocal language imitates the sound and rhythm of English, emphasizing emotion over literal meaning. The approach gave the band a distinctive identity and connected with listeners regardless of language.</p>
          <p>After early demos and the <em>Water Plant</em> EP, the band gained wider recognition with <strong><em>In This World</em></strong> in 2009. Songs including <strong>“Spin The Words,” “Glass Marbles”</strong> and <strong>“Ghost”</strong> showcased their balance of technical precision and emotional depth. <strong><em>Toy Box Brain</em></strong> followed in 2011.</p>
          <p>Following the single <strong>4th</strong> in 2012, the band became inactive. No official breakup has been announced. The small catalogue continues to find new listeners through streaming platforms and online communities.</p>
          <blockquote>“I don’t want a song you can let pass without anything catching you.”<cite>Kenta Oshikiri, paraphrased from CINRA, 2009</cite></blockquote>
        </article>
        <aside className={styles.fieldNotes}>
          <Image src="/media/band-2007.jpg" alt="The four members of susquatch standing beneath bare trees" width={885} height={541} />
          <p>[ Field notes ]</p>
          <dl>
            <div><dt>Origin</dt><dd>Tokyo, Japan</dd></div>
            <div><dt>Formed</dt><dd>2002</dd></div>
            <div><dt>Core</dt><dd>Kenta Oshikiri<br />Maki Nakano</dd></div>
            <div><dt>Sound</dt><dd>Math rock<br />Post-hardcore<br />Jazz</dd></div>
          </dl>
        </aside>
      </div>
      <div className={styles.historyBlock}>
        <p className={styles.subhead}>[ Selected history ]</p>
        {timeline.map(([year, title, text]) => (
          <article key={year}><time>{year}</time><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
      <div className={styles.lineupBlock}>
        <div><p>[ Documented lineup / 2007 ]</p><h3>Four musicians.</h3></div>
        <dl>
          <div><dt>Vocals / Guitar</dt><dd>Kenta Oshikiri</dd></div>
          <div><dt>Drums / Chorus</dt><dd>Maki Nakano</dd></div>
          <div><dt>Bass / Vocals</dt><dd>Yusuke Noshige</dd></div>
          <div><dt>Guitar / Chorus</dt><dd>Hikaru Inaba</dd></div>
        </dl>
      </div>
      <div className={styles.sources}>
        <p>[ Original sources ]</p>
        <a href="https://www.cinra.net/article/interview-2009-06-05-000000-php" target="_blank" rel="noreferrer">CINRA interview ↗</a>
        <a href="https://rooftop1976.com/interview/070501142301.php" target="_blank" rel="noreferrer">Rooftop interview ↗</a>
        <a href="https://tower.jp/article/interview/2007/04/26/100040322" target="_blank" rel="noreferrer">Tower Records interview ↗</a>
      </div>
    </section>
  );
}

function DrawerNavigation({ current }: { current: Drawer }) {
  return (
    <nav className={styles.drawerNav} aria-label="Archive drawers">
      <p>Open another drawer</p>
      {Object.entries(drawerMeta).map(([slug, drawer]) => (
        <Link href={`/archive/${slug}`} key={slug} aria-current={slug === current ? "page" : undefined}>
          <span>{drawer.number}</span><strong>{drawer.eyebrow}</strong><b aria-hidden="true">→</b>
        </Link>
      ))}
    </nav>
  );
}

export default async function CollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!isDrawer(collection)) notFound();

  return (
    <main className={styles.page}>
      <DrawerHeader drawer={collection} />
      {collection === "performances" && <PerformancesDrawer />}
      {collection === "recordings" && <RecordingsDrawer />}
      {collection === "photographs" && <PhotographsDrawer />}
      {collection === "background" && <BackgroundDrawer />}
      <DrawerNavigation current={collection} />
      <footer className={styles.footer}>
        <p>Independent archive / compiled 2026</p>
        <Link href="/archive">Close this drawer <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
