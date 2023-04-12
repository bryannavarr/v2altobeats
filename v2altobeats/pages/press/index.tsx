import React from "react";
import { LinkPreview } from "../../components/LinkPreview";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

interface MetaArray {
  data: any;
  _url: string;
}

const Press = () => {
  const pressLinks = [
    "https://blackouthiphop.com/blog/river-nelson-ft-blu-treasures-remix/",
    "https://www.wordplaymagazine.com/blog-1/2022/6/14/river-nelson-ft-blu-treasures-remix-single",
    "https://blackouthiphop.com/blog/video-river-nelson-altobeats-greatest-of-lights/",
    "https://beatboxradioshow.blogspot.com/2021/11/river-nelson-like-sun-didnt-sink-2021.html",
    "https://jammerzine.com/first-look-river-nelson-altobeats-greatest-of-lights/",
    "https://definitionoffresh.blogspot.com/2021/11/video-river-nelson-altobeats-greatest.html",
    "https://urbanvault.co.uk/2021/11/01/river-nelson-altobeats-greatest-of-lights-music-video-taken-off-like-the-sun-didnt-sink-album-itunes-spotify/",
    "https://www.rapstarvidz.com/river-nelson-greatest-of-lights/",
    "https://insomniacmagazine.com/river-nelson-altobeats-drop-greatest-of-lights-video/",
    "https://tinnitist.com/2021/10/29/weekend-mixtape-side-7-216-songs-that-are-nothing-but-a-treat/",
    "https://www.pressparty.com/pg/newsdesk/andyk/view/272310/",
    "https://www.wordplaymagazine.com/blog-1/2021/9/17/si7vgtc66h1i3740z05zveqgrt1d4o",
    "https://www.dmt.news/2021/10/video-river-nelson-altobeats-new-view.html?m=1",
    "https://definitionoffresh.blogspot.com/2021/09/video-river-nelson-altobeats-new-view.html",
    "https://jammerzine.com/first-look-river-nelson-altobeats-new-view/",
    "https://fomoblog.com/2021/09/23/river-nelson-has-a-new-view/",
    "https://www.able2uk.com/news/music/river-nelson-shares-his-mental-health-story",
    "https://platinummind.net/index.php/2021/09/22/blog-interview-river-nelson/",
    "http://www.ok-tho.com/2021/09/river-nelson-altobeats-new-view.html?spref=tw",
    "https://tinnitist.com/2021/09/17/weekend-mixtape-side-8-234-songs-that-will-keep-you-busy-until-monday/",
    "https://www.pressparty.com/pg/newsdesk/andyk/view/268120/",
  ];

  const [metadata, setMetadata] = useState([]);
  const [metadataLoading, setMetadataLoading] = useState(true);

  const setState = (metaArr: any) => {
    setMetadata(metaArr);
  };

  useEffect(() => {
    const fetchLinkData = () => {
      let metaArr: MetaArray[] = [];
      let counter = 0;
      let errors = [];
      pressLinks.forEach(async (link, index) => {
        try {
          let params: {
            [key: string]: string;
          } = { url: link };
          let query = Object.keys(params)
            .map(
              (k: string) =>
                encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
            )
            .join("&");
          let proxyURL = "https://server.altobeats.com/proxy/?";
          // let proxyURL = "http://localhost:8080/?";
          let response = await fetch(proxyURL + query);
          let json = await response.json();
          console.log({json, link})
          if (
            json.metadata !== null &&
            json.metadata.images &&
            json.metadata.images.length > 0
          ) {
            metaArr.push({ data: json.metadata, _url: link });
          }
          counter++;
          if (counter == pressLinks.length) {
            setState(metaArr);
            setMetadataLoading(false);
          }
        } catch (e: any) {
          console.log("FETCH ERROR: " + JSON.stringify(e.message));
          errors.push(e.message);
        }
      });
    };
    fetchLinkData();
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center mt-12">
        {metadataLoading && <Loading />}
        {metadata.length > 0 &&
          metadata.map(({ data, _url}, index) => {
            return <LinkPreview key={index} metadata={data} url={_url} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default Press;
