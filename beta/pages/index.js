import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
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
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer.</p>
      </section>
      {/* <Link href="/about" passHref>
        <Button variant="contained" color="secondary">About</Button>
      </Link> */}
    </Layout>
  );
}