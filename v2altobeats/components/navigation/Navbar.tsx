import React from "react";
import Link from 'next/link'
const Navigation = () => {
  return (
    <React.Fragment>
      <div id="main ">
        
        <nav className="navbar navbar-nav">
          <ul id="nav" className="cl-effect-1">
            {/* <li>
              {" "}
              <Link className="navItem" href="/about">
                {" "}
                About
              </Link>
            </li> */}
            <li>
              {" "}
              <Link className="navItem" href="/music">
                {" "}
                Music
              </Link>
            </li>

            <li>
              <a className="navItem" target="_blank" rel="noreferrer" href="https://altobeats.bandcamp.com/">
                Bandcamp
              </a>
            </li>

            <li>
              <a className="navItem" target="_blank" rel="noreferrer" href="https://soundcloud.com/altobeats01">
                SoundCloud
              </a>
            </li>

            <li>
              {" "}
              <Link className="navItem" href="/releases">
                {" "}
                Releases
              </Link>
            </li>
            <li>
              {" "}
              <Link className="navItem" href="/press">
                {" "}
                Press
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
