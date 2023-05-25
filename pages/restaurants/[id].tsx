import { BsFillSignpostFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { MdNightsStay } from "react-icons/md";
import { FiWifiOff } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import FadeUp from "../../component/UI/FadeUp";
import Link from "next/link";
import classes from "../../styles/detail.module.css";
import Header from "../../component/Header/Header";
import Chat from "../../component/UI/Chat";
import InformationList from "../../component/UI/InformationList";
import Box from "../../component/UI/Box";
const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場&type=credit_card`;

type ShopsInfoType = {
  info: string;
  isShop?: boolean;
  shopImg?: string;
};

type InformationListType = {
  title: string;
  info: string;
};

type SearchStringFuncType = (paragraph: string, search: string) => boolean;

type MaxMemberFunc = (member: string | number) => string;

const Detail = ({ data }) => {
  const searchString: SearchStringFuncType = (paragraph, search) => {
    return paragraph.includes(search);
  };
  const shop = data.results.shop[0];

  const card = searchString(shop.card, "利用可");
  const wifi = searchString(shop.wifi, "あり");
  const privateRoom = searchString(shop.private_room, "あり");
  const midnight = searchString(shop.midnight, "営業している");
  const reserved = searchString(shop.charter, "貸切可");

  const shopsInfo: ShopsInfoType[] = [
    { info: "予算" },
    { info: shop.budget.name, isShop: true, shopImg: shop.logo_image },
    { info: "定休日" },
    { info: shop.close, isShop: true, shopImg: shop.logo_image },
    { info: "営業時間" },
    { info: shop.open, isShop: true, shopImg: shop.logo_image },
  ];

  const informationList: InformationListType[] = [
    {
      title: "予算",
      info: shop.budget.name,
    },
    {
      title: "定休日",
      info: shop.close,
    },
    {
      title: "営業時間",
      info: shop.open,
    },
    {
      title: "席数",
      info: shop.capacity + "席",
    },
    {
      title: "備考",
      info: shop.other_memo,
    },
  ];

  const maxMember: MaxMemberFunc = (member) => {
    return member === "" ? "未確認" : `最大${member}人`;
  };

  return (
    <>
      <Header />
      <div className={classes.imgBx}>
        <img src="/images/waseda.jfif" />
        <h1 className={classes.detailTopic}>Restaurant</h1>
      </div>
      <div className={classes.titleContent}>
        <div>
          <h1 className={classes.shopName}>{shop.name}</h1>
          <hr className={classes.mainBorder} color="#871b28" />
          <div className={classes.address}>
            <BsFillSignpostFill />
            <p className={classes.addressText} style={{ marginTop: "-5px" }}>
              {shop.address}
            </p>
          </div>
        </div>
      </div>
      <img src="/images/finish.png" className={classes.finishIcon} />
      <div className={classes.shopImgBx} style={{ display: "flex" }}>
        <img src="/images/7.png" className={classes.pushIcon} />
        <img className={classes.shopImg} src={shop.photo.pc.l} />
      </div>
      <h2 className={classes.catch}>{shop.genre.catch}</h2>
      <div className={classes.infoTitle}>
        <img src="/images/comment.png" className={classes.comment} />
        <h1 className={`${classes.informationSectionTitle}`}>
          <span>I</span>nformation
        </h1>
        <img
          src="/images/phone.png"
          width="100px"
          className={classes.phoneIcon}
        />
      </div>
      <div className={classes.lineBc}>
        <div className={classes.informationChatBar}>
          <MdArrowBackIosNew size="30px" className={classes.barArrow} />
          <h3 className={classes.shopBarName}>{shop.name}</h3>
          <IoCallOutline className={classes.callIcon} size="30px" />
        </div>

        {shopsInfo.map((shopInfo, index) => (
          <Chat
            key={index}
            info={shopInfo.info}
            isShop={shopInfo?.isShop}
            shopImg={shopInfo?.shopImg}
          />
        ))}
      </div>
      <ul className={classes.infoForLaptop}>
        <h1 className={classes.infoTitleForLap}>
          <span>I</span>nformation
        </h1>
        {informationList.map((information, index) => (
          <InformationList
            key={index}
            title={information.title}
            info={information.info}
          />
        ))}
      </ul>

      <ul className={classes.otherMemo}>
        <h2 className={classes.informationTitle}>
          <span className={classes.informationSpan}>O</span>ther Memo
        </h2>
        <FadeUp>
          <div className={classes.boxList}>
            <Box flag={card}>
              <AiFillCreditCard className={classes.informationIcon} />
              <p className={classes.creditCardText}>{shop.card}</p>
            </Box>
            <Box flag={wifi}>
              {wifi ? (
                <AiOutlineWifi className={classes.informationIcon} />
              ) : (
                <FiWifiOff className={classes.informationIcon} />
              )}
              <p className={classes.wifiText}>{shop.wifi}</p>
            </Box>
            <Box flag={privateRoom}>
              <img
                src="/images/privateRoom.png"
                className={classes.privateRoomIcon}
                width="75px"
              />
              <p className={classes.privateRoomText}>
                個室{privateRoom ? "あり" : "なし"}
              </p>
            </Box>
            <Box flag={midnight}>
              <MdNightsStay className={classes.informationIcon} />
              <p className={classes.midnightText}>
                23時以降 {midnight ? "営業中" : "営業外"}
              </p>
            </Box>
            <Box flag={true}>
              <img
                className={classes.partyIcon}
                src="/images/party.png"
                width="100px"
              />
              <p className={classes.maxMember}>
                {maxMember(shop.party_capacity)}
              </p>
            </Box>
            <Box flag={reserved}>
              <img
                className={classes.reservedIcon}
                src="/images/reserved.png"
                width="100px"
              />
              <p className={classes.reservedText}>
                {reserved ? "貸切可" : "貸切不可"}
              </p>
            </Box>
          </div>
        </FadeUp>
      </ul>
      <div className={classes.mapSectionTitle}>
        <h1>
          <span className={classes.mapSpan}>M</span>ap
        </h1>
        <img src="/images/mapHuman-min.png" width="125px" />
      </div>

      <iframe
        src={`https://maps.google.com/maps?output=embed&q=${shop.name}&${shop.address}ll=${shop.lat},${shop.allowfullScreenlng}&t=m&hl=ja&z=18`}
        width="100%"
        height="400"
        frameBorder="0"
        className={classes.map}
      ></iframe>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiFillHome />
        <Link href="/">
          &lt;Homeに戻る
        </Link>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(defaultEndpoint + "&id=" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Detail;
