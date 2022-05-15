import { useRouter } from "next/router";
import { BsFillSignpostFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { MdNightsStay } from "react-icons/md";
import { FiWifiOff } from "react-icons/fi";
import {RiCoinFill} from "react-icons/ri";
import {GiTwoCoins} from "react-icons/gi";
import {FaMoneyBillWaveAlt} from "react-icons/fa";
import {GiMoneyStack} from "react-icons/gi";
import {BsCashCoin} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BsFillCalendarCheckFill} from "react-icons/bs";

import Link from "next/link";
import classes from "../../styles/detail.module.css";
import Header from "../../component/Header/Header";
const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場`;

const Detail = ({ data }) => {
  const random = Math.floor(Math.random() * 11);
  const searchString = (paragraph, search) => {
    if (paragraph.startsWith(search)) {
      return true;
    } else {
      return false;
    }
  };
  const card = searchString(data.results.shop[0].card, "利用可");
  const wifi = searchString(data.results.shop[0].wifi, "あり");
  const privateRoom = searchString(data.results.shop[0].private_room, "あり") ;
  const midnight = searchString(data.results.shop[0].midnight, "営業している");
  const length = data.results.shop[0].name.length
  const openLength = data.results.shop[0].close.length === 2
  const toggleOpenIcon = openLength ?  <BsFillCalendarCheckFill className={classes.calenderIcon} />: null;
  console.log(openLength);
  const moneyCategory = (price)=>{
    let moneyIcon;
   switch (price){
     case "～1000円":
       moneyIcon = <RiCoinFill className={classes.moneyIcon}/>;
       break;
     case "1001～2000円":
       moneyIcon = <GiTwoCoins className={classes.moneyIcon}/>;
       break;
     case "2001～3000円":
       moneyIcon = <FaMoneyBillWaveAlt className={classes.moneyIcon}/>;
       break;
     case "3001～4000円":
       moneyIcon = <BsCashCoin className={classes.moneyIcon}/>;
       break;
      default: 
      moneyIcon = <GiMoneyStack className={classes.moneyIcon}/>;
   }
   return moneyIcon;
  }
  
  return (
    <>
      <Header />
      <div className={classes.imgBx}>
        <img src="/images/waseda.jfif" />
        <h1 className={classes.detailTopic}>Restaurant</h1>
      </div>
      <div className={classes.titleContent}>
        <div>
          <h1 className={classes.shopName}>{data.results.shop[0].name}</h1>
          <hr
            className={classes.mainBorder}
            color="#871b28"
            width="100%"
            align="left"
          />
          <div className={classes.address}>
            <BsFillSignpostFill />
            <p style={{ marginTop: "-5px" }}>{data.results.shop[0].address}</p>
          </div>
        </div>
      </div>
      <img className="classes.shopImg" src={data.results.shop[0].photo.pc.l} />
      <h2 className={classes.catch}>{data.results.shop[0].genre.catch}</h2>
      <div className={classes.lineBc}>
      <hr
        className={classes.mainBorder}
        color="#871b28"
        width="100%"
        align="left"
      />
  <div className={classes.balloon6}>
    <div className={classes.faceicon}>
      <img  src="/images/logoCopy-min.png"/>
    </div>
    <div className={classes.chatting}>
      <div className={classes.says}>
        <p>予算</p>
      </div>
    </div>
  </div>
  <div className={classes.shopIcon}>
  <img className={classes.logoImg} src={data.results.shop[0].logo_image} />
  </div>
  <div className={classes.mycomment}>
  <p className={classes.budgetText}>
    {moneyCategory(data.results.shop[0].budget.name)}
    <br/>
    {data.results.shop[0].budget.name}
    </p>
  </div>
  <div className={classes.balloon6}>
    <div className={classes.faceicon}>
      <img  src="/images/logoCopy-min.png"/>
    </div>
    <div className={classes.chatting}>
      <div className={classes.says}>
        <p>定休日</p>
      </div>
    </div>
  </div>
  <div className={classes.shopIcon}>
  <img className={classes.logoImg} src={data.results.shop[0].logo_image} />
  </div>
  <div className={classes.mycomment}>
    <p className={classes.calenderText}>
      {toggleOpenIcon}
      <br/>
    {data.results.shop[0].close}
    </p>
  </div>
  
</div>

      <ul className={classes}>
        <li className={classes.informationList}>
          <p>{data.results.shop[0].other_memo}</p>
        </li>
        {/* <li className={classes.informationList}>
          <h4>予算</h4>
          {moneyCategory(data.results.shop[0].budget.name)}
          <p className={classes.budgetText}>{data.results.shop[0].budget.name}</p>
        </li>
        <li className={classes.informationList}>
          <h4>定休日</h4>
          <p>{data.results.shop[0].close}</p>
        </li> */}
        <h2 className={classes.informationTitle}><span className={classes.informationSpan}>O</span>ther Memo</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <li className={`${card  ? classes.informationBox:classes.informationNoSomething}`}>
            <AiFillCreditCard className={classes.informationIcon} size="50px" />
            <p className={classes.creditCardText}>{data.results.shop[0].card}</p>
          </li>
          <li className={`${wifi ? classes.informationBox:classes.informationNoSomething}`}>
            {wifi ? (
              <AiOutlineWifi className={classes.informationIcon} size="50px" />
            ) : (
              <FiWifiOff className={classes.informationIcon} size="50px" />
            )}
            <p className={classes.wifiText}>
              {data.results.shop[0].wifi}
            </p>
          </li>
          <li className={`${privateRoom ? classes.informationBox:classes.informationNoSomething}`}>
            <img src="/images/privateRoom.png" className={classes.privateRoomIcon}width="75px" />
            <p className={classes.privateRoomText}>
              個室{privateRoom
                ? "あり"
                : "なし"}
            </p>
          </li>
          <li  className={`${midnight ? classes.informationBox:classes.informationNoSomething}`}>
            <MdNightsStay className={classes.informationIcon} size="50px" />
            <p className={classes.midnightText}> {midnight
                ? "営業中"
                : "営業外"}</p>
          </li>
        </div>
      </ul>
      <div className={classes.mapSectionTitle}>
      <h1><span className={classes.mapSpan}>M</span>ap</h1><img src="/images/mapHuman-min.png" width="125px"/>
      </div>
      <iframe
        src={`https://maps.google.com/maps?output=embed&q=${data.results.shop[0].name}&${data.results.shop[0].address}ll=${data.results.shop[0].lat},${data.results.shop[0].allowfullScreenlng}&t=m&hl=ja&z=18`}
        width="100%"
        height="250"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <AiFillHome/><Link href="/"className={classes.homeLink}>＜Homeに戻る</Link>
      {console.log(data)}
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
