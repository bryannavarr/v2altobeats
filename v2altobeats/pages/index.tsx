import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>AltoBeats Home</title>
        <meta
          name="description"
          content="AltoBeats is a hip hop music producer and beat maker."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ab.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
