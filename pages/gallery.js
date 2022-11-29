import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import Button from  'next/button';

export default function Gallery() {
  return (
    <Layout gallery>
      <Head>
        <title>CJ (Linux Gamer) | Gallery</title>
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
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer.</p>
      </section>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}

    </Layout>
  );
}