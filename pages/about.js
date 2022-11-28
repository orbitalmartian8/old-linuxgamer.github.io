import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>CJ (Linux Gamer)</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer. I do a lot of JavaScript, Python and HTML/CSS work, but I also dabble in C++ work too.</p>
      </section>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}
      <Link href="/" passHref>
        <button>
          Home
        </button>
      </Link>
    </Layout>
  );
}