import React from "react";
import Image from "next/image";

const Releases = () => {
  return (
    <React.Fragment>
      <div className="justify-center mx-auto text-lg mt-12">
        <h1 className="text-4xl text-center md:text-5xl font-semibold mb-2">
          Releases
        </h1>
        <div className="wrap mt-12">
          <div className="content">
            <div className="rowe">
              <a
                className="set"
                href="https://open.spotify.com/track/3nuW1Nd2Z3xntTMLhucwu7?si=79463bf7c4fa4e67"
              >
                <span className="layer one">
                  <Image
                    src="https://i1.sndcdn.com/artworks-000528756444-lgbara-t500x500.jpg"
                    alt="power resilience & joy produced by AltoBeats"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
              <a
                className="set"
                href="https://open.spotify.com/track/49loOZ8CMGtGtuLXH5fliB?si=c5c71fa8da7f464b"
              >
                <span className="layer one">
                  <Image
                    src="https://i1.sndcdn.com/artworks-000528756444-lgbara-t500x500.jpg"
                    alt="broken sky produced by AltoBeats artwork"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
              <a
                className="set"
                href="https://open.spotify.com/track/6Lnqeu6VlcgZB7xXFw09kx?si=5cae09c2d1f04c05"
              >
                <span className="layer one">
                  <Image
                    src="https://i1.sndcdn.com/artworks-000528756444-lgbara-t500x500.jpg"
                    alt="the night the city died produced by AltoBeats artwork"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
              <a
                className="set"
                href="https://open.spotify.com/track/0rx76homTHiWhyraoWCrMj?si=fec7d22fe2ce45cd"
              >
                <span className="layer one">
                  <Image
                    src="https://i.scdn.co/image/ab67616d00001e024baf36e193bae065951a2088"
                    alt="final round artwork produced by AltoBeats"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
            </div>
            <div className="rowe">
              <a
                className="set"
                href="https://open.spotify.com/album/5TUZyvLcGlZbuw8lz038ah"
              >
                <span className="layer one">
                  <Image
                    src="https://altobeats-assets.s3.us-west-1.amazonaws.com/LSDSRiverAndAlto.jpg"
                    alt="Like the sun didn't sink album artwork"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
              <a
                className="set"
                href="https://open.spotify.com/album/5bIL3BcWpWpP8wPfwW0dXY"
              >
                <span className="layer one">
                  <Image
                    src="https://i.scdn.co/image/ab67616d00001e02bf336fe83599f7c9c7502bae"
                    alt=""
                    width={256}
                    height={256}
                  />
                </span>
              </a>
              <a
                className="set"
                href="https://open.spotify.com/album/2xUfmjYuo7mYYfQkn5dNWx"
              >
                <span className="layer one">
                  <Image
                    src="https://i.scdn.co/image/ab67616d00001e02d324f9c58d6d36577b1a131e"
                    alt="future artwork produced by altobeats"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
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
              <a
                className="set"
                href="https://open.spotify.com/track/6b1c5zZ5APqPwgZ542svn2"
              >
                <span className="layer one">
                  <Image
                    src="https://i.scdn.co/image/ab67616d00001e02fbf87f3286c29ee3a85d500c"
                    alt="the city don't love you produced by altobeats"
                    width={256}
                    height={256}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Releases;
