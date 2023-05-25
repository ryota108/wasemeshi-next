import Link from "next/link";
import { useState } from "react";
import classes from "../../styles/Header.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

const Header: React.FC = () => {
  const handleClick = () => {
    window.open("https://twitter.com/Wasemeshi1");
  };
  const [clicked, setClicked] = useState<boolean>(false);
  const mobileMenuHandler = () => {
    setClicked((prevClicked) => !prevClicked);
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
          <button
            onClick={mobileMenuHandler}
            className={`${classes.mobileMenuIcon} ${
              clicked ? classes.menuOpen : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
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
      {clicked && (
        <div className="menu-opened">
          <ul className={`${clicked ? "fadeRight" : ""}`}>
            <li onClick={mobileMenuHandler} className={classes.menuItems}>
              <Link href="/">Home</Link>
            </li>
            <div className="flex">
              <li onClick={mobileMenuHandler} className={classes.menuSubItems}>
                  <AiOutlineSearch />
                  Search&gt;
              </li>
              <li className={classes.menuSubItems} onClick={mobileMenuHandler}>
                  <FaMapMarkerAlt />
                  Map&gt;
              </li>
            </div>
            <hr color="#871b28" className={classes.menuBorder} />
            <li onClick={mobileMenuHandler} className={classes.menuItems}>
              <Link href="/service">Service</Link>
            </li>
            <hr color="#871b28" className={classes.menuBorder} />
            <li onClick={mobileMenuHandler} className={classes.menuItems}>
              <Link href="/Information">Information</Link>
            </li>
            <hr color="#871b28" className={classes.menuBorder} />
            <li className={classes.menuItems}>Contact</li>
            <li className={classes.menuItems}>
              <a
                href="https://twitter.com/Wasemeshi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className={classes.twitterIcon} />
              </a>
              <a
                href="https://www.instagram.com/wasemeshi.r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className={classes.instagramIcon} />
              </a>
            </li>
          </ul>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/LZ2dXaiaTBNkBKXWA"
          ></a>
        </div>
      )}
    </>
  );
};

export default Header;
