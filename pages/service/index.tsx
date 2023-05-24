import classes from "../../styles/Service.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoInformationCircleSharp } from "react-icons/io5";
import Header from "../../component/Header/Header";
import ServiceBox from "../../component/UI/ServiceBox";
import AccordionUI from "../../component/UI/AccordionUi";
import { Avatar } from "@mui/material";

type Boxes = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

const Service = () => {
  const BoxData: Boxes[] = [
    {
      title: "Search",
      description: "気になるお店をすぐ検索できる",
      icon: <AiOutlineSearch />,
    },
    {
      title: "Map",
      description: "キャンパスごとのMapでもう迷わない",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Category",
      description: "あなたの気分によってレストランを紹介",
      icon: <BiCategoryAlt />,
    },
    {
      title: "information",
      description: "twitterを用いて最新情報をご紹介",
      icon: <IoInformationCircleSharp />,
    },
    {
      title: "Twitter",
      description: "twitterを用いてあなたの知らぬワセメシを紹介",
      icon: <AiOutlineTwitter />,
    },
    {
      title: "Instagram",
      description: "足を運びたくなるような写真をお伝え",
      icon: <AiFillInstagram />,
    },
  ];
  return (
    <>
      <>
        <Header />
        <div
          className={classes.servicesSection}
          style={{ backgroundImage: `url("/images/waseda.jfif")` }}
        >
          <div className={classes.innerWidth}>
            <h1 className={classes.sectionTitle}>My Services</h1>
            <div className={classes.border}></div>
            <div className={classes.servicesContainer}>
              {BoxData.map((box, index) => (
                <ServiceBox
                  title={box.title}
                  description={box.description}
                  icon={box.icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </>
      <section
        className={classes.faqSection}
        style={{
          backgroundImage: `url("/images/bread-min.jpg")`,
          marginTop: "-20px",
        }}
      >
        <AccordionUI
          question="何人で運営しているのですか？"
          answer="このサイトは私一人で制作しました。また今後も運営はできる限り一人でやっていく方針です。"
        />
        <AccordionUI
          question="検索がうまくHitしません"
          answer="店名を入力してみてください。(例 × 油そば 〇東京麵珍亭本舗など)"
        />
        <AccordionUI
          question="開発者は早稲田生ですか？"
          answer="はい、開発者は現役早稲田生です。あと、文系なので数学はちんぷんかんです。"
        />
        <div className={classes.aboutMe}>
          <div className={classes.aboutMeContent}>
            <Avatar
              alt="Ryota"
              src="../../images/gentleman-min.png"
              sx={{ width: 100, height: 100, background:"white",margin:"10px auto" }}
            />
            <h1 className={classes.aboutMeName}>
              Ryota
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
