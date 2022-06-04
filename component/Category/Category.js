import { FaSearchDollar } from "react-icons/fa";
import { IoMdFunnel } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { GiMeat } from "react-icons/gi";
import { MdCleaningServices, MdRamenDining } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import { RiCoinFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import classes from "../../styles/Category.module.css";
import { BiSortDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useState ,useReducer} from "react";
import FadeUp from "../UI/FadeUp";

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


  const categoryReducer = (state , action) =>{
    if(action.type === "MEAT"){
      return { meat:!state.meat,cafe:false,noodle:false}
    }
    if(action.type === "CAFE"){
      return { cafe:!state.cafe,meat:false,noodle:false}
    }
    if(action.type === "NOODLE"){
      return { noodle:!state.noodle ,meat:false,cafe:false}
    }
    if(action.type === "RESET"){
      return categoryInitialState;
    }
  }
  const moneyReducer =  (state,action) =>{
    if(action.type === "ONE_COIN"){
      return {oneCoin:!state.oneCoin,twoCoin:false,oneBill:false,twoBill:false,manyBill:false}
    }
    if(action.type === "TWO_COIN"){
      return {oneCoin:false,twoCoin:!state.twoCoin,oneBill:false,twoBill:false,manyBill:false}
    }
    if(action.type === "ONE_BILL"){
      return {oneCoin:false,twoCoin:false,oneBill:!state.oneBill,twoBill:false,manyBill:false}
    }
    if(action.type === "TWO_BILL"){
      return {oneCoin:false,twoCoin:false,oneBill:false,twoBill:!state.twoBill,manyBill:false}
    }
    if(action.type === "MANY_BILL"){
      return {oneCoin:false,twoCoin:false,oneBill:false,twoBill:false,manyBill: !state.manyBill}
    }
    if(action.type === "RESET"){
      return moneyInitialState;
    }
  }

  const sceneReducer = (state,action) => {
  if(action.type === "QUESTION"){
    return{date:false,study:false,question:!state.question}
  }
  if(action.type === "STUDY"){
    return{date:false,study:!state.study,question:false}
  }
  if(action.type === "DATE"){
    return{date:!state.date,study:false,question:false}
  }
  if(action.type === "RESET"){
    return sceneInitialState;
  }
  }

  const sceneInitialState = {date:false,study:false,question:false}

  const moneyInitialState = {oneCoin:false,twoCoin:false,oneBill:false,twoBill:false,manyBill:false}
  const categoryInitialState = {noodle:false,cafe:false,meat:false};
 
 const [categoryState,categoryDispatch] = useReducer(categoryReducer,categoryInitialState)

 const [moneyState, moneyDispatch] = useReducer(moneyReducer,moneyInitialState);

 const [sceneState, sceneDispatch] = useReducer(sceneReducer,sceneInitialState);
  const clickDetailHandler = () => {
    setClickDetail((prevClicked) => !prevClicked);
  };
  const clickDateHandler = () => {
    // setClickDate((prevClicked) => !prevClicked);
    sceneDispatch({type:"DATE"})
  };
  const clickStudyHandler = () => {
    // setClickStudy((prevClicked) => !prevClicked);
    sceneDispatch({type:"STUDY"})
  };
  const clickRandomHandler = () => {
    // setClickRandom((prevClicked) => !prevClicked);
    sceneDispatch({type:"QUESTION"})
  };
  const clickRamenHandler = () => {
    // setClickRamen((prevClicked) => !prevClicked);
    categoryDispatch({type:"NOODLE"})
  };
  const clickCafeHandler = () => {
    // setClickCafe((prevClicked) => !prevClicked);
    categoryDispatch({type:"CAFE"})
  };
  const clickMeatHandler = () => {
    // setClickMeat((prevClicked) => !prevClicked);
    categoryDispatch({type:"MEAT"})
  };
  const clickOneCoinHandler = () => {
    // setClickOneCoin((prevClicked) => !prevClicked);
    moneyDispatch({type:"ONE_COIN"})
  };
  const clickTwoCoinHandler = () => {
    // setClickTwoCoin((prevClicked) => !prevClicked);
    moneyDispatch({type:"TWO_COIN"})
  };
  const clickOneBillHandler = () => {
    // setClickOneBill((prevClicked) => !prevClicked);
    moneyDispatch({type:"ONE_BILL"})
  };
  const clickTwoBillHandler = () => {
    // setClickTwoBill((prevClicked) => !prevClicked);
    moneyDispatch({type:"TWO_BILL"})
  };
  const clickManyBillHandler = () => {
    moneyDispatch({type:"MANY_BILL"})
  };
  const resetHandler = () =>{
    moneyDispatch({type:"RESET"})
    sceneDispatch({type:"RESET"})
    categoryDispatch({type:"RESET"})
  }
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
 console.log(moneyState,categoryState,sceneState)
  return (
    <>
      <div className={classes.laptopCategory}>
        <div className={classes.genreTitleBox}>
          <FaSearch size="20px" className={classes.searchIcon} />
          <h2 className={classes.genreTitle}>ジャンルから探す</h2>
        </div>
        <ul className="flex">
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/cafeCategory.jpg"
              />
              <h2 className={classes.categoryText}>カフェ</h2>
            </div>
          </li>
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/meatcategory.jpg"
              />
              <h2 className={classes.categoryText}>肉料理</h2>
            </div>
          </li>
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/ramenCategory.jpg"
              />
              <h2 className={classes.categoryText}>麵料理</h2>
            </div>
          </li>
        </ul>
        <div className={classes.genreTitleBox}>
          <FaSearch size="20px" className={classes.searchIcon} />
          <h2 className={classes.genreTitle}>利用シーンから探す</h2>
        </div>
        <ul className="flex">
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/studyCategory.jpg"
              />
              <h2 className={classes.categoryText}>勉強</h2>
            </div>
          </li>
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/dateCategory.jpg"
              />
              <h2 className={classes.categoryText}>デート</h2>
            </div>
          </li>
          <li className={classes.categoryList}>
            <div className={classes.categoryBtn}>
              <img
                className={classes.categoryImg}
                src="/images/question.jpg"
              />
              <h2 className={classes.categoryText}>悩み中</h2>
            </div>
          </li>
        </ul>
        <div className={classes.genreTitleBox}>
          <FaSearch size="20px" className={classes.searchIcon} />
          <h2 className={classes.genreTitle}>価格帯から探す</h2>
        </div>
        <ul className={classes.moneyCategory}>
              <li
                className={`${
                  moneyState.oneCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneCoinHandler}
              >
                <RiCoinFill className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥~1000</p>
              </li>
              <li
                className={`${
                  moneyState.twoCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoCoinHandler}
              >
                <GiTwoCoins className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥1001~¥2000</p>
              </li>
              <li
                className={`${
                  moneyState.oneBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneBillHandler}
              >
                <FaMoneyBillWaveAlt className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥2001~￥3000</p>
              </li>
              <li
                className={`${
                  moneyState.twoBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoBillHandler}
              >
                <BsCashCoin className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥3001~￥4000</p>
              </li>
              <li
                className={`${
                  moneyState.manyBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickManyBillHandler}
              >
                <GiMoneyStack className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥4001~</p>
              </li>
            </ul>
            <button
                onClick={detailSearchHandler}
                className={classes.searchButton}
              >
                <AiOutlineSearch className={classes.detailSearchIcon} size="15px" />
                上記の内容で検索
              </button>
      </div>
      {clickDetail && (
        <FadeUp>
          <div className={classes.genreSearch}>
            <h3 className={classes.sectionTitle}>ジャンルから探す</h3>
            <ul className={classes.categoryAll}>
              <li
                onClick={clickMeatHandler}
                className={`${
                  categoryState.meat ? classes.clickedCategory : classes.categoryBox
                }`}
              >
                <GiMeat className={classes.categoryIcon} size="55px" />
                <p className={classes.categoryExplain}>肉料理</p>
              </li>
              <li
                onClick={clickRamenHandler}
                className={`${
                  categoryState.noodle ? classes.clickedCategory : classes.categoryBox
                }`}
              >
                <MdRamenDining className={classes.categoryIcon} size="55px" />
                <p className={classes.categoryExplain}>麺料理</p>
              </li>
              <li
                onClick={clickCafeHandler}
                className={`${
                  categoryState.cafe ? classes.clickedCategory : classes.categoryBox
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
                className={`${sceneState.study ? classes.clicked : classes.sceneBox}`}
                onClick={clickStudyHandler}
              >
                <img src="/images/2.png" className={classes.study} />
                <p className={classes.sceneExplain}>勉強におすすめ</p>
              </li>
              <li
                className={`${sceneState.date ? classes.clicked : classes.sceneBox}`}
                onClick={clickDateHandler}
              >
                <img src="/images/romance.png" className={classes.study} />
                <p className={classes.sceneExplain}>デートにおすすめ</p>
              </li>
              <li
                onClick={clickRandomHandler}
                className={`${
                  sceneState.question ? classes.clicked : classes.sceneBox
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
                  moneyState.oneCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneCoinHandler}
              >
                <RiCoinFill className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥~1000</p>
              </li>
              <li
                className={`${
                  moneyState.twoCoin ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoCoinHandler}
              >
                <GiTwoCoins className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥1001~¥2000</p>
              </li>
              <li
                className={`${
                  moneyState.oneBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickOneBillHandler}
              >
                <FaMoneyBillWaveAlt className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥2001~￥3000</p>
              </li>
              <li
                className={`${
                  moneyState.twoBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickTwoBillHandler}
              >
                <BsCashCoin className={classes.moneyIcon} />
                <p className={classes.moneyExplainLong}>¥3001~￥4000</p>
              </li>
              <li
                className={`${
                  moneyState.manyBill ? classes.moneyBoxClicked : classes.moneyBox
                }`}
                onClick={clickManyBillHandler}
              >
                <GiMoneyStack className={classes.moneyIcon} />
                <p className={classes.moneyExplain}>¥4001~</p>
              </li>
            </ul>
          </div>
          <div className={classes.detailSearch}>
            {/* <h3 className={classes.sectionTitle}>その他詳細検索</h3> */}
            <div>
              {/* <input type="radio" name="wifi" value="0">どちらでも可</input>
            <input type="radio" name="wifi" value="1">あり</input>
            <input type="radio" name="wifi" value="0">なし</input> */}
               <button onClick={resetHandler}>
                <img src="/images/1.png" width="50px"/>上記の内容をリセットする
                 </button> 
              <button
                onClick={detailSearchHandler}
                className={classes.searchButton}
              >
                <AiOutlineSearch size="15px" />
                上記の内容で検索
              </button>
            </div>
          </div>
        </FadeUp>
      )}
      <button onClick={clickDetailHandler} className={classes.detailButton}>
        条件の絞り込み
        {!clickDetail ? (
          <IoMdFunnel className={classes.icon} size="17px" />
        ) : (
          <FaMinus className={classes.icon} size="15px" />
        )}
      </button>
      <button className={classes.sortBtn}>
        <BiSortDown className={classes.sortIcon} size="25px" />
      </button>
    </>
  );
};

export default Category;
