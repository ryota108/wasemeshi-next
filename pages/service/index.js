import classes from "../../styles/Service.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
// import question from "../images/question-min.png";
import { IoInformationCircleSharp } from "react-icons/io5";
// import bread from "../images/bread-min.jpg";
// import Subtitle from "../../src/Components/UI/SubTitle";
// import waseda from "../images/waseda.jfif";
// import gentleman from "../images/gentleman-min.png";
import { useState } from "react";
import Header from "../../component/Header/Header";
const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const openHandler = () => {
    setIsOpen((pervState) => !pervState);
  };
  const openHandler2 = () => {
    setIsOpen2((pervState) => !pervState);
  };
  const openHandler3 = () => {
    setIsOpen3((pervState) => !pervState);
  };

  return (
    <>
      <>
      <Header/>
        <div
          className={classes.servicesSection}
          style={{ backgroundImage: `url("/images/waseda.jfif")` }}
        >
          <div className={classes.innerWidth}>
            <h1 className={classes.sectionTitle}>My Services</h1>
            <div className={classes.border}></div>
            <div className={classes.servicesContainer}>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <AiOutlineSearch className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Search</div>
                <div className={classes.serviceDesc}>
                  気になるお店をすぐに検索できる
                </div>
              </div>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <FaMapMarkerAlt className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Map</div>
                <div className={classes.serviceDesc}>
                  キャンパスごとのMapでもう迷わない
                </div>
              </div>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <BiCategoryAlt className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Category</div>
                <div className={classes.serviceDesc}>
                  あなたの気分によってレストランを紹介
                </div>
              </div>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <IoInformationCircleSharp className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Information</div>
                <div className={classes.serviceDesc}>
                  最新情報をtwitterでもれなくお知らせ
                </div>
              </div>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <AiOutlineTwitter className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Twitter</div>
                <div className={classes.serviceDesc}>
                  twitterを用いてあなたの知らぬワセメシを紹介
                </div>
              </div>
              <div className={classes.serviceBox}>
                <div className={classes.serviceIcon}>
                  <AiFillInstagram className={classes.icon} />
                </div>
                <div className={classes.serviceTitle}>Instagram</div>
                <div className={classes.serviceDesc}>
                  足を運びたくなるような写真をお伝え
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* {isSearchOpen && <div className="service-modal">
      <div className="close-modal" onClick={searchOpenHandler}><ImCancelCircle size="40px"/></div>
     <Subtitle name="Search"/> <img src={searchHomes} width="100px"/>
    </div>} */}
      <section
        className={classes.faqSection}
        style={{backgroundImage:`url("/images/bread-min.jpg")`,marginTop:"-5px"}}
      >
        <div style={{ display: "flex" }}>
          {/* <Subtitle name="FAQ"/> */}
          {/* <img src={question} height="100px" style={{marginTop:"15px"}}/> */}
        </div>
        <div className={classes.accordion}>
          <p onClick={openHandler} className="menu js-menu">
            <span style={{ color: "black", fontFamily: "Times New Roman" }}>
              Q
            </span>
            何人で制作、運営しているのですか？ &#9661;
          </p>
          <div className={`contents ${isOpen ? "is-open" : ""}`}>
            A
            このサイトは私一人で制作しました。また今後も運営はできる限り一人でやっていく方針です。
          </div>
          <p onClick={openHandler2} className="menu js-menu">
            <span style={{ color: "black", fontFamily: "Times New Roman" }}>
              Q
            </span>
            検索がうまくHitしません &#9661;
          </p>
          <div className={`contents ${isOpen2 ? "is-open" : ""}`}>
            A 店名を入力してみてください。(例 × 油そば 〇東京麵珍亭本舗など)
          </div>
          <p onClick={openHandler3} className="menu js-menu">
            <span style={{ color: "black", fontFamily: "Times New Roman" }}>
              Q
            </span>
            開発者は早稲田生ですか？&#9661;
          </p>
          <div className={`contents ${isOpen3 ? "is-open" : ""}`}>
            A
            はい、開発者は現役早稲田生です。あと、文系なので数学はちんぷんかんです。
          </div>
        </div>
        {/* <Subtitle name="About Me"/> */}
        <div className={classes.aboutMe}>
          <div className={classes.aboutMeContent}>
            <div className={classes.aboutMeIcon}><img src="/images/gentleman-min.png" /></div>
            <h1 className={classes.aboutMeName}>
              <span>R</span>yota
            </h1>
            <div className={classes.textArea}>
              <p className={classes.aboutMeText}>
                当サイトを制作、運営しているRyotaと申します。大学生から始めたプログラミングをどうすれば、誰かのために活かせるか考えた結果、このサイトのアイデアが浮かび約半年の開発期間を経てリリースすることができました。これからも少しでも多くの人にワセメシの魅力がさらに広がりますよう開発者として努めてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
