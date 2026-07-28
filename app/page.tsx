const releases = [
  { year: "2003", title: "1st Demo", type: "EP / demo", tone: "charcoal" },
  { year: "2004", title: "Plum / Ceto", type: "single", tone: "oxblood" },
  { year: "2007", title: "Water plant", type: "mini album", tone: "olive" },
  { year: "2009", title: "In This World", type: "album", tone: "cream" },
  { year: "2011", title: "TOY BOX BRAIN", type: "album", tone: "rust" },
  { year: "2012", title: "4th", type: "single", tone: "charcoal" },
] as const;

const songs = [
  { number: "A1", title: "Spin The Words", album: "In This World", time: "03:50" },
  { number: "A2", title: "glass marbles", album: "In This World", time: "02:33" },
  { number: "B1", title: "3chords", album: "Water plant", time: "04:48" },
] as const;

const timeline = [
  ["2002", "The beginning", "Oshikiri and Nakano form susquatch after meeting at music school in Tokyo."],
  ["2007", "Water plant", "Six songs make the band's tangled, melodic guitar language official."],
  ["2009", "In This World", "The first full album: ten compact worlds built from rhythm changes and aching hooks."],
  ["2010", "Across Canada", "Vancouver, Toronto and Montreal with Next Music from Tokyo Vol. 2."],
  ["2011", "TOY BOX BRAIN", "A second album stretches the palette without losing the pulse."],
  ["2014", "A quiet horizon", "Nakano departs. No formal dissolution has been located; the band remains inactive."],
] as const;

const spotify = "https://open.spotify.com/artist/5MNNV4jwu51bxwel7fz9BO";
const apple = "https://music.apple.com/jp/artist/susquatch/1641421476";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="susquatch home">susquatch</a>
        <nav aria-label="Primary navigation">
          <a href="#story">[ story ]</a>
          <a href="#music">[ music ]</a>
          <a href="#history">[ history ]</a>
        </nav>
        <a className="header-listen" href={spotify} target="_blank" rel="noreferrer">listen ↗</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="hero-kicker">A small, independent listening archive <span>・</span> Tokyo, Japan</p>
        <div className="hero-title-wrap">
          <h1 id="hero-title"><span>sus</span><span>quatch</span></h1>
          <div className="hero-note" aria-label="Archive note">
            <span>file under:</span>
            <strong>songs that<br />refuse to sit still</strong>
          </div>
          <div className="hero-stamp" aria-hidden="true">ISSUE<br /><b>01</b><br />2002—</div>
        </div>
        <div className="hero-bottom">
          <p className="hero-intro">Intricate guitars, impossible drums,<br />and melodies that never really left.</p>
          <p className="hero-jp" lang="ja">サスカッチについての非公式記録</p>
          <a className="down-link" href="#story">turn it over <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="story section" id="story">
        <div className="section-label"><span>[01]</span><p>background<br />notes</p></div>
        <div className="story-copy">
          <p className="lead">Four musicians making pop songs took the scenic route.</p>
          <div className="body-columns">
            <p>Formed in Tokyo in October 2002, susquatch built songs from interlocking guitars, abrupt rhythmic turns and a melodic instinct rooted in Japanese pop. The complexity was never the destination. Feeling was.</p>
            <p>Contemporary writers called it emotional guitar rock. Listeners finding the band today hear math rock, emo and jazz in the same motion. Both descriptions land somewhere near the truth.</p>
          </div>
          <p className="margin-note">melody first.<br />everything else can wander.</p>
          <blockquote>
            <span className="quote-mark" aria-hidden="true">“</span>
            I don’t want a song you can let pass without anything catching you.
            <cite>— Kenta Oshikiri, paraphrased from CINRA, 2009</cite>
          </blockquote>
        </div>
      </section>

      <section className="listen section" id="music">
        <div className="section-label"><span>[02]</span><p>three songs<br />to begin</p></div>
        <div className="listen-content">
          <div className="listen-heading">
            <h2>Play it loud.<br /><em>Then again.</em></h2>
            <p>Side A is the fastest route in. Side B is where the odd turns start to feel inevitable.</p>
          </div>
          <div className="song-list">
            {songs.map((song) => (
              <a href={spotify} target="_blank" rel="noreferrer" className="song" key={song.title}>
                <span className="song-number">{song.number}</span>
                <span className="play" aria-hidden="true">play</span>
                <span className="song-title">{song.title}<small>{song.album}</small></span>
                <span className="song-time">{song.time}</span>
                <span className="song-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className="stream-links">
            <span className="hand-note">available again,<br />somehow.</span>
            <a href={spotify} target="_blank" rel="noreferrer">Spotify ↗</a>
            <a href={apple} target="_blank" rel="noreferrer">Apple Music ↗</a>
          </div>
        </div>
      </section>

      <section className="language section">
        <div className="section-label light"><span>[03]</span><p>the voice<br />as sound</p></div>
        <div className="language-board">
          <p className="language-word">panya-go</p>
          <article className="definition-slip">
            <p className="phonetic">/ pan · ya · go / <span>noun, probably</span></p>
            <h2>A language made<br />for melody.</h2>
            <p>Oshikiri’s invented, English-sounding vocal language gives the voice meaning through rhythm, tone and emotion rather than literal translation. On <em>In This World</em>, Japanese “image lyrics” offered a feeling—not an answer—for every song.</p>
          </article>
          <p className="language-scribble">you don’t translate it.<br />you follow it.</p>
        </div>
      </section>

      <section className="discography section" aria-labelledby="discography-title">
        <div className="section-label"><span>[04]</span><p>recorded<br />evidence</p></div>
        <div className="release-area">
          <div className="release-heading"><h2 id="discography-title">Small catalogue.<br /><em>Long shadow.</em></h2><p>Two albums, two early EPs and a handful of singles. Nothing wasted.</p></div>
          <div className="release-grid">
            {releases.map((release, index) => (
              <article className={`release ${release.tone}`} key={release.title}>
                <div className="release-art" aria-hidden="true">
                  <span className="release-index">SQ—0{index + 1}</span>
                  <i />
                  <b>{release.year}</b>
                  <small>susquatch</small>
                </div>
                <p>{release.year} / {release.type}</p>
                <h3>{release.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="history section" id="history">
        <div className="section-label"><span>[05]</span><p>selected<br />dates</p></div>
        <div className="timeline">
          {timeline.map(([year, title, text]) => (
            <article key={year}>
              <span className="year">{year}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="members section">
        <div className="section-label"><span>[06]</span><p>lineup<br />circa 2007</p></div>
        <div className="member-sheet">
          <p className="sheet-heading">SUSQUATCH / PERSONNEL</p>
          <div className="member-list">
            <article><span>Vocals / Guitar</span><h3>Kenta Oshikiri</h3><p lang="ja">押切 健太</p></article>
            <article><span>Drums / Chorus</span><h3>Maki Nakano</h3><p lang="ja">中野 真季</p></article>
            <article><span>Bass / Vocals</span><h3 lang="ja">能重 裕介</h3><p>Yusuke Noshige</p></article>
            <article><span>Guitar / Chorus</span><h3 lang="ja">稲葉 洸</h3><p>Hikaru Inaba</p></article>
          </div>
          <p className="sheet-note">Names and roles documented from contemporary 2007 interviews.</p>
        </div>
      </section>

      <section className="legacy">
        <p className="legacy-kicker">the tape keeps turning</p>
        <h2>A band can go quiet.<br /><em>The songs don’t have to.</em></h2>
        <div className="legacy-meta"><span>48K+ monthly listeners</span><span>found around the world</span><span>inactive, not forgotten</span></div>
        <a href={spotify} target="_blank" rel="noreferrer">hear the catalogue <span>↗</span></a>
      </section>

      <footer>
        <a className="footer-name" href="#top">susquatch</a>
        <div className="footer-note"><p>An independent, non-commercial archive made with admiration. Not affiliated with susquatch, K-PLAN or the artists.</p><p>Streaming availability appears to be fan-maintained. Please support the musicians through authorized releases whenever possible.</p></div>
        <div className="sources"><p>clippings / sources</p><a href="https://www.cinra.net/article/interview-2009-06-05-000000-php" target="_blank" rel="noreferrer">CINRA ↗</a><a href="https://rooftop1976.com/interview/070501142301.php" target="_blank" rel="noreferrer">Rooftop ↗</a><a href="https://tower.jp/article/interview/2007/04/26/100040322" target="_blank" rel="noreferrer">Tower Records ↗</a><a href="https://exclaim.ca/music/article/next_music_from_tokyo_brings_sounds_of_japan_on_cross-canada-tour" target="_blank" rel="noreferrer">Exclaim! ↗</a></div>
        <p className="copyright">SUSQUATCH.NET / INDEPENDENT ARCHIVE / COMPILED 2026</p>
      </footer>
    </main>
  );
}
