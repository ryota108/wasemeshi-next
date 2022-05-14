// import "./Header.css";
import Link  from "next/link";
import { useState } from "react";
import classes from "./Header.module.css";
import { IoMdInformationCircle } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdKeyboardArrowUp} from "react-icons/md";


const Header = (props) => {
  const handleClick = () => {
    window.open("https://twitter.com/Wasemeshi1");
  };
  const [clicked, setClicked] = useState(false);
  const mobileMenuHandler = () => {
    setClicked((prevClicked) => !prevClicked);
  };
  return (
    <>
      <header className={classes.header}>
        {/* <Link href="/"> */}
          <div className={classes.logo}>
            <img src="/images/logoCopy-min.png" alt="" className={classes.headerImage} />
            <h1 className={classes.mainTitle}>
              <span className={classes.spanColor}>W</span>asemeshi
            </h1>
          </div>
        {/* </Link> */}
        <button
          onClick={mobileMenuHandler}
          className={`mobile-menu-icon ${clicked ? " menu-open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={classes.elements}>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/Information">Information</Link>
          </li>
          <li>
            <button onClick={handleClick} rel="noopener" className={classes.headerBtn}>
              Contact
            </button>
          </li>
        </ul>
      </header>
      <div className={classes.topButton}><a href="#top"><MdKeyboardArrowUp className="upArrow"/></a></div>
      {clicked && (
        <div className="menu-opened">
          <ul className={`${clicked ? "fadeRight": ""}`}>
            <li onClick={mobileMenuHandler} className={classes.menuItems} >
              <Link href="/" className={classes.menuItems}>
                {/* <AiFillHome /> */}
                Home
              </Link>
            </li>
            <div style={{display:"flex"}}>
            <li onClick={mobileMenuHandler} className={classes.menuItems}><a href="#search" className="menu-subItems"><AiOutlineSearch/>Search&gt;</a></li>
            <li style={{marginLeft:"20px"}}onClick={mobileMenuHandler}><a href="#map" className="menu-subItems"><FaMapMarkerAlt/>Map&gt;</a></li>
            </div>
            <hr color="#871b28"className={classes.menuBorder}/>
            <li onClick={mobileMenuHandler} className={classes.menuItems}>
              <Link href="/service" className={classes.menuItems} >
                Service
              </Link>
            </li>
            <hr color="#871b28" className="menu-border"/>
            <li onClick={mobileMenuHandler} className={classes.menuItems}>
              <Link href="/Information" className={classes.menuItems}>
                {/* <IoMdInformationCircle /> */}
                Information
              </Link>
            </li>
            <hr color="#871b28" className="menu-border"/>
            <li className={classes.menuItems}>
              <span>C</span>ontact
            </li>
            <hr color="#871b28" className="menu-border"/>
            <li className={classes.menuItems}>
              <a href="https://twitter.com/Wasemeshi1" target="_blank" rel="noopener noreferrer"> <FaTwitterSquare size="50px" /></a>
              <a href="https://www.instagram.com/wasemeshi.r/" target="_blank" rel="noopener noreferrer"> <FaInstagramSquare size="50px" /></a>
            </li>
          </ul>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/LZ2dXaiaTBNkBKXWA">
          {/* <img src={ad} className="ad-image"style={{marginLeft:"10px"}} /> */}
          </a>
        </div>
      )}
    </>
  );
};

export default Header;