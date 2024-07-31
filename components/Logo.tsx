import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <React.Fragment>
      <Link href="/">
        <div className="max-w-screen w-96 mx-auto pb-8 pt-8 flex">
          <Image
            src="https://altobeats-assets.s3.us-west-1.amazonaws.com/alto-logo.png"
            className="justify-center"
            alt="alto beats web logo branding"
            width={534}
            height={138}
          />
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
