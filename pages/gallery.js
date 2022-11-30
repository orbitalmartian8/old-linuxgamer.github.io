import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import Button from  'next/button';

export default function Gallery() {
  return (
    <Layout gallery>
      <Head>
        <title>CJ | Gallery</title>
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
      </section>
        <p>I have done a few art pieces in the 3 years I've been doing Digital/Pixel Art, this is the place to go to see them all.</p>
        <p>All my finished art is hosted in a 
        <Link href="https://github.com/LinuxGamer/Art"  target="_blank" rel="noreferrer">
         public Github repository
        </Link></p>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}
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