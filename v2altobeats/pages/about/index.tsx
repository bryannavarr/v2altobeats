import React from "react";
import Image from "next/image";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log(window.location);
  });
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
            AltoBeats is a beat maker and music producer from Pacoima, Los
            Angeles, California. He learned how to make beats in the early 2000s
            at the Hazze Hip Hop Culture Dream Center, a Section 501(c)(3)
            non-profit organization located in Pacoima. An audio engineer, who
            was, at the time, working on audio effects for Call Of Duty, visted
            the center and volunteered to teach students the art of sampling and
            beat making. AltoBeats attended the first class and was hooked
            instantly. There, he learned the basics of drum sequencing,
            sampling, and music studio setup. The center was unlike any venue
            that existed in Pacoima during the early 2000s. It was filled with
            people from all walks of life and the energy was filled with
            positivity, love, and hip hop. Bboys, bgirls, djs, artists, fitness
            trainers were some of regulars that dropped in on a regular basis.
          </p>
          <br />
          <p>
            AltoBeats continues to practice the art of sampling and beat making
            by studying the big names in music production such as J Dilla,
            Madlib, 9th Wonder, Freddie Joachim, RZA, Apollo Brown, The
            Alchemist, Quincy Jones, Johan Johansson, Stro Elliot, and many
            others. His beats encompass and mix the styles of Boom Bap,
            Neo-Soul, Lo-fi, Jazz, Electronic. His instrumentals are a mixture
            of sample based loops and original compositions that utilize various
            instruments such as pianos, strings, synths, and classic drum
            breaks.
          </p>
          <br />
          <p>
            {" "}
            AltoBeats has collaborated and worked with some underground artists
            such as River Nelson, Blu (from Blu & Exile), Rae Patria, Madseas,
            And Cosmik Knowledge. His music can also be heard on the Muscle
            Company’s{" "}
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
