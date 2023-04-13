import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

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
      <main className={styles.main}>
        <div className="mt-10">
          <div className="rowe">
            <h1 className='font-bold text-3xl'>Featured Single</h1>

            <a
              className="set"
              href="https://open.spotify.com/track/4rB6hGNfH1LObpmZAnCdL6"
            >
              <span className="layer one">
                <Image
                  src="https://i.scdn.co/image/ab67616d00001e02fa5798c0eb8c8370a9a036c4"
                  alt="treasures remix artwork produced by AltoBeats"
                  width={256}
                  height={256}
                />
              </span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
