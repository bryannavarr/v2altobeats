import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import About from './about'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AltoBeats Home</title>
        <meta name="description" content="AltoBeats is a hip hop music producer and beat maker." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ab.ico" />
      </Head>
      <main className={styles.main}>
      </main>
    </>
  );
}
