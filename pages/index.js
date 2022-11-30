import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
    <main>
      <Head>
        <title>CJ (Linux Gamer)</title>
      </Head>
      <Link href="/" passHref>
        <button>
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button>
          About
        </button>
      </Link>
      <Link href="/gallery">
        <button>
          Gallery
        </button>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer.</p>
      </section>        
        <div className={utilStyles.grid}>
          <a href="/gallery" className={utilStyles.card}>
            <h3>My Art &rarr;</h3>
            {/* <img src="https://github.com/LinuxGamer/Art/blob/main/4DB7492F-B550-4114-8BB9-F3CBF4224202.png?raw=true"></img> */}
            <p>Visit my Gallery to view all my art pieces, Digital/Pixel art.</p>
          </a>
          <a href="https://linuxgamer.hashnode.dev" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>My Blog &rarr;</h3>
            <p>Visit my Blog to see all my posts, about Art, Gaming, Tech and Linux.</p>
          </a>
          <br></br>
          <a href="https://linkfree.eddiehub.io/LinuxGamer" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>My Socials &rarr;</h3>
            <p>Visit my LinkFree profile and view all my social links.</p>
          </a>
          <a href="https://github.com/LinuxGamer" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>My Github &rarr;</h3>
            <p>Visit my Github profile to see what I've been working on in my Software Development.</p>
          </a>
        </div>
        {/* <div class="card"><h2>Hello! this is a dark theme!</h2></div> */}
    </main>
    <footer>
        <a href="/contact">
          <button>
            Contact Us
          </button>
        </a>
        <p>Website made with ❤ by CJ - Copyright ©️ 2022 CJ (LinuxGamer)</p> <p><Link href="https://github.com/LinuxGamer/linuxgamer.github.io" target="_blank" rel="noreferrer"><span class="emoji" data-emoji="f09b"></span></Link></p>
      </footer>
    </Layout>
  );
}