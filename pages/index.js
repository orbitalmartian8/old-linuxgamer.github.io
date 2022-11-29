import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
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
      <section className={utilStyles.grid}>
        <div className={utilStyles.grid}>
          <a href="https://nextjs.org/docs" className={utilStyles.card}>
            <h3>Documentation &rarr;</h3>
            Find in-depth information about Next.js features and API.
          </a>
          <a href="https://nextjs.org/learn" className={utilStyles.card}>
            <h3>Learn &rarr;</h3>
            Learn about Next.js in an interactive course with quizzes!
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={utilStyles.card}
          >
            <h3>Examples &rarr;</h3>
            Discover and deploy boilerplate example Next.js projects.
          </a>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={utilStyles.card}
          >
            <h3>Deploy &rarr;</h3>
              Instantly deploy your Next.js site to a public URL with Vercel.
          </a>
        </div>
        </section>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}

    </Layout>
  );
}