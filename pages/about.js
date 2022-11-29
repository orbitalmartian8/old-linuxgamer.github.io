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
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer. I do a lot of JavaScript, Python and HTML/CSS work, but I also dabble in C++ work too.</p>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}
    </Layout>
  );
}
