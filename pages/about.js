import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>CJ | About</title>
      </Head>
      <Link href="/" passHref>
        <button className="btn">
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button className="btn">
          About
        </button>
      </Link>
      <Link href="/gallery">
        <button className="btn">
          Gallery
        </button>
      </Link>
      <section className={utilStyles.headingMd}>
      </section>
        <p>Hello, I'm CJ, known online as Linux Gamer. I'm a Digital/Pixel Artist, and software developer. I do a lot of JavaScript, Python and HTML/CSS work, but I also dabble in C++ work too.</p>
        <p>I use <Link href="https://spins.fedoraproject.org/en/kde/">Fedora Linux 36 KDE Spin</Link> and a variety of applications and extensions.</p>
        <p></p>
        <p></p>
        <p>
          List of applications and extensions that I use:
          <br />
          <b>Applications:</b>
            <li>Web browser - <Link href="https://www.chromium.org/getting-involved/download-chromium/" target="_blank" rel="noreferrer">Chromium</Link></li>
            <li>File manager (GUI) - <Link href="https://apps.kde.org/en-gb/dolphin/" target="_blank" rel="noreferrer">Dolphin</Link></li>
            <li>File manager (terminal) - <Link href="https://ranger.github.io/" target="_blank" rel="noreferrer">Ranger</Link></li>
            <li>Office suite - <Link href="https://www.libreoffice.org/" target="_blank" rel="noreferrer">Libreoffice</Link></li>
            <li>PDF Viewer - <Link href="https://okular.kde.org/en-gb/" target="_blank" rel="noreferrer">Okular</Link></li>
            <li>Art/Graphic Design - <Link href="https://krita.org" target="_blank" rel="noreferrer">Krita</Link></li>
            <li>Pixel art - <Link href="https://libresprite.github.io" target="_blank" rel="noreferrer">LibreSprite</Link></li>
            <li>Code Editor/Text Editor - <Link href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</Link></li>
          <b>Browser Extensions:</b>
            <li>Dark Reader</li>
            <li>YouTube Enhancer</li>
          <b>KDE Extensions</b>
            <li>Dracula Global Theme</li>
            <li>Dracula Cursor</li>
            <li>Dracula Icons</li>
        </p>
        <footer>
    <p>
      <a href="/contact">
        <button>
          Contact Us
        </button>
      </a>
        Website made with ❤ by CJ  |  Copyright ©️ 2022 CJ (LinuxGamer) <Link href="https://github.com/LinuxGamer/linuxgamer.github.io" target="_blank" rel="noreferrer" passHref><span class="emoji" data-emoji="f09b"></span></Link></p>
      </footer>
    </Layout>
  );
}
