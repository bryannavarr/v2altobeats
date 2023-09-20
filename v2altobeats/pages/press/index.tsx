import React from "react";
import { LinkPreview } from "../../components/LinkPreview";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { pressLinks } from "@/constants/lists";

interface MetaArray {
  data: any;
  _url: string;
}

const Press = () => {

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
