import Head from 'next/head';
import Layout, { siteTitle } from '../../components/collaboratopia-layout.js';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
    <main>
      <Head>
        <title>Collaboratopia</title>
      </Head>
      <Link href="/" passHref>
        <button>
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button>
          About Us
        </button>
      </Link>
      <Link href="/projects" passHref>
        <button>
          Our Projects
        </button>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer.</p>
      </section>        
        <div className={utilStyles.grid}>
          <br></br>
          <a href="https://twitter.com/communities/1598090150889881600" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>Our Twitter Community &rarr;</h3>
            <p>Join the Twitter Community and keep in touch with other members of the community.</p>
          </a>
          <a href="https://discord.gg/rgTFs8tmv" className={utilStyles.card} target="_blank" rel="noreferrer">
            <h3>Our Discord Server &rarr;</h3>
            <p>Join our Discord server to collaborate with others on open source projects.</p>
          </a>
          <a href="https://github.com/Collaboratopia" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>Our Github Organisation &rarr;</h3>
            <p>Join the Github Organisation to get access to more awesome help and advise.</p>
          </a>
        </div>
        {/* <div class="card"><h2>Hello! this is a dark theme!</h2></div> */}
    </main>
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
