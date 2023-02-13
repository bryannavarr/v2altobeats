import React from "react";
import Image from "next/image";

export const LinkPreview = ({ metadata }: { metadata: any }) => {
  const { images, meta, og } = metadata;
  return (
    <React.Fragment>
      <div className="w-11/12 rounded-xl h-36 flex shadow hover:shadow-lg bg-white mb-3">
        <div className="lg:flex flex w-5/12 p-2">
          <img
            src={images[0].url}
            className="rounded-xl object-cover w-full h-full"
            alt={meta.title}
            height={200}
            width={200}
          />
        </div>
        <div className="w-7/12 pl-3 flex flex-col justify-center">
          <a href={og.url} target="_blank" rel="noreferrer">
            <p className="text-base mb-2 font-bold truncate">{meta.title}</p>
          </a>
          <p className="mb-2 font-normal text-sm truncate">
            {meta?.description || og.description}
          </p>
          <div className="text-sm">
            <a href={og.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
