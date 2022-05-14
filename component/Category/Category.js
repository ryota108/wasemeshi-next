import { FaSearchDollar } from "react-icons/fa";
import { IoMdFunnel } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { GiMeat } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import { RiCoinFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import classes from "../../styles/Category.module.css";
import { useState } from "react";

const Category = (props) => {
  const [clickDetail, setClickDetail] = useState(false);
  const [clickDate, setClickDate] = useState(false);
  const [clickStudy, setClickStudy] = useState(false);
  const [clickRandom, setClickRandom] = useState(false);
  const [clickRamen, setClickRamen] = useState(false);
  const [clickCafe, setClickCafe] = useState(false);
  const [clickMeat, setClickMeat] = useState(false);
  const [clickOneCoin, setClickOneCoin] = useState(false);
  const [clickTwoCoin, setClickTwoCoin] = useState(false);
  const [clickOneBill, setClickOneBill] = useState(false);
  const [clickTwoBill, setClickTwoBill] = useState(false);
  const [clickManyBill, setClickManyBill] = useState(false);

  const clickDetailHandler = () => {
    setClickDetail((prevClicked) => !prevClicked);
  };
  const clickDateHandler = () => {
    setClickDate((prevClicked) => !prevClicked);
  };
  const clickStudyHandler = () => {
    setClickStudy((prevClicked) => !prevClicked);
  };
  const clickRandomHandler = () => {
    setClickRandom((prevClicked) => !prevClicked);
  };
  const clickRamenHandler = () => {
    setClickRamen((prevClicked) => !prevClicked);
  };
  const clickCafeHandler = () => {
    setClickCafe((prevClicked) => !prevClicked);
  };
  const clickMeatHandler = () => {
    setClickMeat((prevClicked) => !prevClicked);
  };
  const clickOneCoinHandler = () => {
    setClickOneCoin((prevClicked) => !prevClicked);
  };
  const clickTwoCoinHandler = () => {
    setClickTwoCoin((prevClicked) => !prevClicked);
  };
  const clickOneBillHandler = () => {
    setClickOneBill((prevClicked) => !prevClicked);
  };
  const clickTwoBillHandler = () => {
    setClickTwoBill((prevClicked) => !prevClicked);
  };
  const clickManyBillHandler = () => {
    setClickManyBill((prevClicked) => !prevClicked);
  };
  const detailSearchHandler = () => {
    props.onSubmit({
      meat: clickMeat,
      cafe: clickCafe,
      ramen: clickRamen,
      date: clickDate,
      study: clickStudy,
      Random: clickRandom,
      oneCoin: clickOneCoin,
      twoCoin: clickTwoCoin,
      oneBill: clickOneBill,
      twoBill: clickTwoBill,
      manyBill: clickManyBill,
    });
  };

  return (
    <>
      {/* <div><h3></h3></div> */}
      {clickDetail && (
        <>
          <div className={classes.genreSearch}>
            <h3 className={classes.sectionTitle}>ジャンルから探す</h3>
            <ul className={classes.categoryAll}>
              <li
                onClick={clickMeatHandler}
                className={`${
                  clickMeat ? classes.clickedCategory : classes.categoryBox
                }`}
              >
                <GiMeat className={classes.categoryIcon} size="55px" />
                <p className={classes.categoryExplain}>肉料理</p>
              </li>
              <li
                onClick={clickRamenHandler}
                className={`${
                  clickRamen ? classes.clickedCategory : classes.categoryBox
                }`}
              >
                <MdRamenDining className={classes.categoryIcon} size="55px" />
                <p className={classes.categoryExplain}>麺料理</p>
              </li>
              <li
                onClick={clickCafeHandler}
                className={`${
                  clickCafe ? classes.clickedCategory : classes.categoryBox
                }`}
              >
                <IoIosCafe className={classes.categoryIcon} size="55px" />
                <p className={classes.categoryExplain}>カフェ</p>
              </li>
            </ul>
          </div>
          <div className={classes.sceneSearch}>
            <h3 className={classes.sectionTitle}>目的によって探す</h3>
            <ul className={classes.sceneAll}>
              <li
                className={`${clickStudy ? classes.clicked : classes.sceneBox}`}
                onClick={clickStudyHandler}
              >
                <img src="/images/2.png" className={classes.study} />
                <p className={classes.sceneExplain}>勉強におすすめ</p>
              </li>
              <li
                className={`${clickDate ? classes.clicked : classes.sceneBox}`}
                onClick={clickDateHandler}
              >
                <img src="/images/romance.png" className={classes.study} />
                <p className={classes.sceneExplain}>デートにおすすめ</p>
              </li>
              <li
                onClick={clickRandomHandler}
                className={`${
                  clickRandom ? classes.clicked : classes.sceneBox
                }`}
              >
                <img src="/images/question.png" className={classes.study} />
                <p className={classes.sceneExplain}>何食べるか迷う</p>
              </li>
            </ul>
          </div>
          <div className={classes.moneySearch}>
            <h3 className={classes.sectionTitle}>
              <FaSearchDollar />
              価格帯によって探す
            </h3>
            <ul className={classes.moneyCategory}>
              <li
                className={`${
                  clickOneCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneCoinHandler}
              >
                <RiCoinFill className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥~1000</p>
              </li>
              <li
                className={`${
                  clickTwoCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoCoinHandler}
              >
                <GiTwoCoins className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥1001~¥2000</p>
              </li>
              <li
                className={`${
                  clickOneBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneBillHandler}
              >
                <FaMoneyBillWaveAlt className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥2001~￥3000</p>
              </li>
              <li
                className={`${
                  clickTwoBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoBillHandler}
              >
                <BsCashCoin className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥3001~￥4000</p>
              </li>
              <li
                className={`${
                  clickManyBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickManyBillHandler}
              >
                <GiMoneyStack className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥4001~</p>
              </li>
            </ul>
          </div>
          <div className={classes.detailSearch}>
            <h3 className={classes.sectionTitle}>その他詳細検索</h3>
            <div>
              {/* <input type="radio" name="wifi" value="0">どちらでも可</input>
            <input type="radio" name="wifi" value="1">あり</input>
            <input type="radio" name="wifi" value="0">なし</input> */}
              <button
                onClick={detailSearchHandler}
                className={classes.searchButton}
              >
                <AiOutlineSearch size="15px" />
                上記の内容で検索
              </button>
            </div>
          </div>
        </>
      )}
      <button onClick={clickDetailHandler} className={classes.detailButton}>
        条件の絞り込み
        {!clickDetail ? (
          <IoMdFunnel className={classes.icon} size="17px" />
        ) : (
          <FaMinus className={classes.icon} size="15px" />
        )}
      </button>
    </>
  );
};

export default Category;
