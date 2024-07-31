import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  // return redirect('/about');
  // const router = useRouter()
  // router.push('/about')

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

      </main>
    </>
  );
}
