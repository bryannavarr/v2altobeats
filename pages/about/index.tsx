import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <React.Fragment>
      <div className="w-3/4 justify-center mx-auto sm:w-1/2 text-lg mt-12">
        <h1 className="text-4xl text-center md:text-5xl font-semibold mb-2">
          About
        </h1>
        <div className="">
          <Image
            src={
              "https://altobeats-assets.s3.us-west-1.amazonaws.com/ALTO-7.jpg"
            }
            className="justify-center mx-auto mt-12"
            alt="altobeats dj"
            width={300}
            height={300}
          />
        </div>
        <div className="text-center mt-14">
          <p>
            AltoBeats is a music producer and beat maker hailing from Pacoima,
            Los Angeles, California. He discovered his passion for beat making
            in the early 2000s while attending the Hazze Hip Hop Culture Dream
            Center, a non-profit organization located in Pacoima. During one of
            the center's classes, an audio engineer who was working on audio
            effects for Call Of Duty, volunteered to teach students the art of
            sampling and beat making. AltoBeats attended the class and became
            instantly hooked, learning the basics of drum sequencing, sampling,
            and music studio setup. The center was a unique hub of creativity
            and positivity, attracting people from all walks of life, including
            bboys, bgirls, DJs, artists, and fitness trainers.
          </p>
          <br />
          <p>
            Today, AltoBeats continues to refine his craft by studying the works
            of legendary music producers like J Dilla, Madlib, 9th Wonder, RZA,
            Apollo Brown, and Quincy Jones. He blends different genres,
            including Boom Bap, Neo-Soul, Lo-fi, Jazz, and Electronic, to create
            his unique sound. AltoBeats' instrumentals are a combination of
            sample-based loops and original compositions that employ a range of
            instruments like pianos, strings, synths, and classic drum breaks.
          </p>
          <br />
          <p>
            {" "}
            AltoBeats has collaborated with various underground artists such as
            River Nelson, Blu (from Blu & Exile), Rae Patria, Madseas, and
            Cosmik Knowledge. You can also find his music on Muscle Company's{" "}
            <a href="https://www.youtube.com/watch?v=ehqUFZTxZdU">
              youtube channel
            </a>{" "}
            and on episodes of{" "}
            <a href="https://www.poderpodcast.com">Poder Podcast</a>, hosted by
            Sergio Lagunas.
          </p>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
