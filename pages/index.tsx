import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import About from "./about";
import Releases from "./releases";
import Videos from "./videos";

export default function Home() {

  return (
    <>
      <Head>
        <title>AltoBeats</title>
        <meta
          name="description"
          content="AltoBeats is a hip hop music producer and beat maker."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ab.ico" />

      </Head>
      <main>
        <About />
        <Releases />
        <Videos />
      </main>
    </>
  );
}
