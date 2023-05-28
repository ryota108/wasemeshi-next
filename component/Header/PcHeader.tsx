import React, { useState } from "react";
import Link from "next/link";
import classes from "../../styles/PcHeader.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";

const PcHeader = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const mobileMenuHandler = () => {
    setClicked((prevClicked) => !prevClicked);
  };
  const handleClick = () => {
    window.open("https://twitter.com/Wasemeshi1");
  };
  return (
    <>
      <header className={classes.header}>
        <div className="flex">
          <div className={classes.logo}>
            <Link href="/">
              <img
                src="/images/logoCopy-min.png"
                alt=""
                className={classes.headerImage}
              />
            </Link>
            <h1 className={classes.mainTitle}>
              <span className={classes.spanColor}>W</span>
              <Link href="/">asemeshi</Link>
            </h1>
          </div>
        </div>
        <ul className={classes.elements}>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/Information">Information</Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              rel="noopener"
              className={classes.headerBtn}
            >
              Contact
            </button>
          </li>
        </ul>
      </header>
      <div className={classes.topButton}>
        <a href="#top">
          <MdKeyboardArrowUp className={classes.upArrow} />
        </a>
      </div>
    </>
  );
};

export default PcHeader;
