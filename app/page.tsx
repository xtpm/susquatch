import Image from "next/image";

const releases = [
  { year: "2003", title: "1st Demo", type: "EP", cover: "/media/first-demo.jpg", href: "https://music.apple.com/jp/album/1st-demo-ep/1642371039" },
  { year: "2004", title: "Plum / Ceto", type: "Single", cover: "/media/plum-ceto.jpg", href: "https://music.apple.com/jp/album/plum-ceto-single/1642661514" },
  { year: "2007", title: "Water Plant", type: "Mini album", cover: "/media/water-plant.jpg", href: "https://open.spotify.com/album/571gQlEhNb4SV3mWexs62n" },
  { year: "2009", title: "Weathering", type: "Single", cover: "/media/weathering.jpg", href: "https://music.apple.com/jp/album/weathering-single/1641458908" },
  { year: "2009", title: "In This World", type: "Album", cover: "/media/in-this-world.jpg", href: "https://open.spotify.com/album/0DKsw8XT9NGCvZdlHeCjJ5" },
  { year: "2011", title: "Toy Box Brain", type: "Album", cover: "/media/toy-box-brain.jpg", href: "https://open.spotify.com/album/2wI3lSCIIEERTMUcgumoG0" },
  { year: "2012", title: "4th", type: "Single", cover: "/media/fourth.jpg", href: "https://music.apple.com/jp/album/4th-single/1642387791" },
] as const;

const tracks = [
  { number: "01", title: "Spin The Words", album: "In This World", time: "3:50", href: "https://open.spotify.com/album/0DKsw8XT9NGCvZdlHeCjJ5" },
  { number: "02", title: "3Chords", album: "Water Plant", time: "4:47", href: "https://open.spotify.com/album/571gQlEhNb4SV3mWexs62n" },
  { number: "03", title: "All Again", album: "Toy Box Brain", time: "3:12", href: "https://open.spotify.com/album/2wI3lSCIIEERTMUcgumoG0" },
] as const;

const timeline = [
  ["2002", "Formation", "Kenta Oshikiri and Maki Nakano begin susquatch after meeting at music school in Tokyo."],
  ["2007", "Water Plant", "Six songs establish the band’s interlocking guitars, abrupt rhythmic turns and melodic center."],
  ["2009", "In This World", "The first full album arrives: ten compact songs balancing complexity with pop instinct."],
  ["2010", "Canada", "The band plays Vancouver, Toronto and Montreal with Next Music from Tokyo Vol. 2."],
  ["2011", "Toy Box Brain", "A second album expands the palette without losing the pulse."],
  ["2014", "Quiet horizon", "Nakano departs. The documented trail grows quiet, while the catalogue keeps circulating."],
] as const;

const spotify = "https://open.spotify.com/artist/5MNNV4jwu51bxwel7fz9BO";
const apple = "https://music.apple.com/jp/artist/susquatch/1641421476";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>[{number}]</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="susquatch home">susquatch</a>
        <nav aria-label="Primary navigation">
          <a href="#story">[ story ]</a>
          <a href="#music">[ listen ]</a>
          <a href="#photos">[ photos ]</a>
          <a href="#records">[ records ]</a>
        </nav>
        <a className="header-listen" href={spotify} target="_blank" rel="noreferrer">listen ↗</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-sheet">
          <div className="hero-meta">
            <span>Independent listening archive</span>
            <span>Tokyo, Japan / 2002—</span>
          </div>
          <div className="hero-title-lockup">
            <div className="hero-title-copy">
              <h1 id="hero-title"><span>sus</span><span>quatch</span></h1>
              <p className="hero-note"><span>file under:</span>songs that<br />refuse to sit still</p>
            </div>
            <figure className="hero-live-photo">
              <img src="/media/susquatch-live-facebook.png" alt="Susquatch performing live on stage" />
              <figcaption>
                <span>Live archive</span>
                <a href="https://www.facebook.com/photo/?fbid=334427149940618&set=pb.100076094156377.-2207520000" target="_blank" rel="noreferrer">Original post ↗</a>
              </figcaption>
            </figure>
          </div>
          <div className="hero-rule" />
          <div className="hero-summary">
            <p>Intricate guitars, impossible drums and melodies that never really left.</p>
            <p lang="ja">サスカッチについての非公式記録</p>
            <a href="#story">Enter the archive <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="archive-section story" id="story">
        <SectionLabel number="01">Background notes</SectionLabel>
        <div className="section-content">
          <p className="lead">Four musicians making pop songs took the scenic route.</p>
          <div className="story-layout">
            <div className="story-copy">
              <p>Formed in Tokyo in October 2002, susquatch built songs from interlocking guitars, abrupt rhythmic turns and a melodic instinct rooted in Japanese pop. The complexity was never the destination. Feeling was.</p>
              <p>Contemporary writers called it emotional guitar rock. Listeners finding the band today hear math rock, emo and jazz in the same motion. Both descriptions land somewhere near the truth.</p>
              <blockquote>
                “I don’t want a song you can let pass without anything catching you.”
                <cite>Kenta Oshikiri, paraphrased from CINRA, 2009</cite>
              </blockquote>
            </div>
            <figure className="story-photo">
              <Image src="/media/band-2007.jpg" alt="The four members of susquatch standing beneath bare trees" width={885} height={541} sizes="(max-width: 900px) 100vw, 52vw" priority />
              <figcaption><span>susquatch, 2007</span><a href="https://rooftop1976.com/interview/070501142301.php" target="_blank" rel="noreferrer">Photo: Rooftop ↗</a></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="archive-section music" id="music">
        <SectionLabel number="02">Listen here</SectionLabel>
        <div className="section-content">
          <div className="section-heading music-heading">
            <h2>Start with<br /><em>In This World.</em></h2>
            <div className="music-intro">
              <span>2009 / full-length</span>
              <p>The clearest doorway into the band’s melodic, restless sound. Start here, then follow the guitars outward.</p>
            </div>
          </div>
          <div className="music-layout">
            <div className="album-feature">
              <div className="album-identity">
                <div className="album-cover">
                  <Image src="/media/in-this-world.jpg" alt="In This World album cover" fill sizes="(max-width: 720px) 38vw, (max-width: 980px) 260px, 18vw" />
                </div>
                <div className="album-details">
                  <p>Album 03 / K-PLAN</p>
                  <h3>In This World</h3>
                  <p>Ten songs<br />Released in 2009</p>
                  <a href={apple} target="_blank" rel="noreferrer">Open the record ↗</a>
                </div>
              </div>
              <iframe
                className="spotify-player"
                title="Listen to In This World by susquatch on Spotify"
                src="https://open.spotify.com/embed/album/0DKsw8XT9NGCvZdlHeCjJ5?utm_source=generator&theme=0"
                width="100%"
                height="152"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
            <div className="track-list">
              <p className="list-kicker">Three songs to begin</p>
              {tracks.map((track) => (
                <a href={track.href} target="_blank" rel="noreferrer" className="track" key={track.title}>
                  <span>{track.number}</span>
                  <strong>{track.title}<small>{track.album}</small></strong>
                  <time>{track.time}</time>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
              <div className="stream-links">
                <a href={spotify} target="_blank" rel="noreferrer">Spotify ↗</a>
                <a href={apple} target="_blank" rel="noreferrer">Apple Music ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-section photos" id="photos">
        <SectionLabel number="03">Photographs</SectionLabel>
        <div className="section-content">
          <div className="section-heading compact">
            <h2>From the<br /><em>clippings file.</em></h2>
            <p>Interview photographs preserved with their original publication context.</p>
          </div>
          <div className="photo-grid">
            <figure className="photo-wide">
              <Image src="/media/band-2009.jpg" alt="Three members of susquatch standing on a tree-lined road at night" width={450} height={280} sizes="(max-width: 700px) 100vw, 60vw" />
              <figcaption>susquatch for CINRA, 2009</figcaption>
            </figure>
            <figure>
              <Image src="/media/kenta-2009-a.jpg" alt="Kenta Oshikiri during a 2009 interview" width={450} height={300} sizes="(max-width: 700px) 50vw, 20vw" />
              <figcaption>Kenta Oshikiri / interview still 01</figcaption>
            </figure>
            <figure>
              <Image src="/media/kenta-2009-b.jpg" alt="Kenta Oshikiri speaking during a 2009 interview" width={220} height={330} sizes="(max-width: 700px) 50vw, 20vw" />
              <figcaption>Kenta Oshikiri / interview still 02</figcaption>
            </figure>
          </div>
          <a className="source-link" href="https://www.cinra.net/article/interview-2009-06-05-000000-php" target="_blank" rel="noreferrer">View the original CINRA interview ↗</a>
          <div className="facebook-archive">
            <div className="facebook-archive-heading">
              <p>From the Facebook archive</p>
              <a href="https://www.facebook.com/susquatchband/photos" target="_blank" rel="noreferrer">View the band’s photos ↗</a>
            </div>
            <div className="facebook-photo-grid">
              <figure>
                <a href="https://www.facebook.com/photo.php?fbid=334428116607188&set=pb.100076094156377.-2207520000&type=3" target="_blank" rel="noreferrer">
                  <Image src="/media/facebook-fukui-live.jpg" alt="Two musicians onstage under purple and orange lights" width={1296} height={864} sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 30vw" />
                </a>
                <figcaption><span>FukuiCHOP / March 2012</span><span>Facebook ↗</span></figcaption>
              </figure>
              <figure>
                <a href="https://www.facebook.com/photo/?fbid=334427149940618&set=pb.100076094156377.-2207520000" target="_blank" rel="noreferrer">
                  <Image src="/media/susquatch-live-facebook.png" alt="Susquatch guitarist jumping during a live performance" width={1296} height={864} sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 30vw" />
                </a>
                <figcaption><span>Live performance / March 2012</span><span>Facebook ↗</span></figcaption>
              </figure>
              <figure>
                <a href="https://www.facebook.com/photo.php?fbid=334427749940558&set=pb.100076094156377.-2207520000&type=3" target="_blank" rel="noreferrer">
                  <Image src="/media/facebook-waka-pedals.jpg" alt="Guitar pedals and cables on a venue stage" width={1296} height={864} sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 30vw" />
                </a>
                <figcaption><span>Waka’s pedals / March 2012</span><span>Facebook ↗</span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-section discography" id="records" aria-labelledby="discography-title">
        <SectionLabel number="04">Recorded works</SectionLabel>
        <div className="section-content">
          <div className="section-heading">
            <h2 id="discography-title">The catalogue,<br /><em>in full color.</em></h2>
            <p>Original release artwork, ordered chronologically. Select a cover to listen or open the release.</p>
          </div>
          <div className="release-grid">
            {releases.map((release) => (
              <article className="release" key={release.title}>
                <a href={release.href} target="_blank" rel="noreferrer" aria-label={`Open ${release.title}`}>
                  <div className="release-cover">
                    <Image src={release.cover} alt={`${release.title} cover art`} fill sizes="(max-width: 620px) 92vw, (max-width: 980px) 45vw, 28vw" />
                  </div>
                  <div className="release-info">
                    <p>{release.year} / {release.type}</p>
                    <h3>{release.title}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <p className="art-credit">Cover art served from official Apple Music release listings; recordings credited to K-PLAN and current digital distributors.</p>
        </div>
      </section>

      <section className="archive-section language">
        <SectionLabel number="05">The voice as sound</SectionLabel>
        <div className="section-content language-layout">
          <div>
            <p className="phonetic">/ pan · ya · go /</p>
            <h2>A language made<br />for melody.</h2>
          </div>
          <div className="language-copy">
            <p>Oshikiri’s invented, English-sounding vocal language gives the voice meaning through rhythm, tone and emotion rather than literal translation.</p>
            <p>On <em>In This World</em>, Japanese “image lyrics” offered a feeling—not an answer—for every song.</p>
          </div>
        </div>
      </section>

      <section className="archive-section history" id="history">
        <SectionLabel number="06">Selected history</SectionLabel>
        <div className="section-content history-layout">
          <div className="timeline">
            {timeline.map(([year, title, text]) => (
              <article key={year}>
                <span>{year}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <aside className="lineup">
            <p className="list-kicker">Documented lineup / 2007</p>
            <dl>
              <div><dt>Vocals / Guitar</dt><dd>Kenta Oshikiri</dd></div>
              <div><dt>Drums / Chorus</dt><dd>Maki Nakano</dd></div>
              <div><dt>Bass / Vocals</dt><dd>Yusuke Noshige</dd></div>
              <div><dt>Guitar / Chorus</dt><dd>Hikaru Inaba</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="closing">
        <p>Independent archive / Tokyo, 2002—</p>
        <h2>A band can go quiet.<br /><em>The songs don’t have to.</em></h2>
        <a href={spotify} target="_blank" rel="noreferrer">Hear the catalogue <span>↗</span></a>
      </section>

      <footer>
        <a className="footer-name" href="#top">susquatch</a>
        <div className="footer-note">
          <p>An independent, non-commercial archive made with admiration. Not affiliated with susquatch, K-PLAN or the artists.</p>
          <p>Photography remains credited to its original publishers. Please support the musicians through authorized releases whenever possible.</p>
        </div>
        <div className="sources">
          <p>Sources</p>
          <a href="https://www.cinra.net/article/interview-2009-06-05-000000-php" target="_blank" rel="noreferrer">CINRA ↗</a>
          <a href="https://rooftop1976.com/interview/070501142301.php" target="_blank" rel="noreferrer">Rooftop ↗</a>
          <a href="https://tower.jp/article/interview/2007/04/26/100040322" target="_blank" rel="noreferrer">Tower Records ↗</a>
          <a href="https://music.apple.com/jp/artist/susquatch/1641421476" target="_blank" rel="noreferrer">Apple Music ↗</a>
        </div>
        <p className="copyright">SUSQUATCH.NET / INDEPENDENT ARCHIVE / COMPILED 2026</p>
      </footer>
    </main>
  );
}
