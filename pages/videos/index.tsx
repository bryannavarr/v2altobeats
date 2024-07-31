import Image from "next/image";
import { youtubeVideoIds } from "@/constants/lists";
import React from "react";
import Head from "next/head";


const Videos = () => {
    return <React.Fragment>
        <Head>
            <title>AltoBeats Videos</title>
            <meta
                name="description"
                content="AltoBeats is a hip hop music producer and beat maker."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/ab.ico" />

        </Head>
        <div className="mt-10 mb-10">
            <div className="rowe">
                {/* <h1 className="font-bold text-3xl">Featured Single</h1> */}

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
        <div className="aspect-video mt-auto mx-auto flex flex-col items-center justify-center content-between space-y-6">
            {youtubeVideoIds.map((videoId, i) => {
                return (
                    <div key={i}>
                        <iframe
                            className="rounded-lg shadow-lg sm:m-2"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            })}
        </div>
    </React.Fragment>
}

export default Videos