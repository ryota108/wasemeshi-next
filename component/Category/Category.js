import { AiOutlineSearch } from "react-icons/ai";
import { RiCoinFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import classes from "../../styles/Category.module.css";
import { FaSearch } from "react-icons/fa";
import { useState, useReducer } from "react";
import {
  categoryReducer,
  moneyReducer,
  categoryInitialState,
  moneyInitialState,
} from "../../utils/reducer";

const Category = (props) => {
  const [reset, setReset] = useState(false);
  const resetStateHandler = () => {
    setReset((prev) => !prev);
  };

  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    categoryInitialState
  );

  const [moneyState, moneyDispatch] = useReducer(
    moneyReducer,
    moneyInitialState
  );

  const resetHandler = () => {
    moneyDispatch({ type: "RESET" });
    categoryDispatch({ type: "RESET" });
    resetStateHandler();
    props.onSubmit({});
    props.onReset();
  };
  const detailSearchHandler = () => {
    props.onSubmit({
      meat: categoryState.meat,
      cafe: categoryState.cafe,
      noodle: categoryState.noodle,
      izkaya: categoryState.izakaya,
      chinese: categoryState.chinese,
      oneCoin: moneyState.oneCoin,
      twoCoin: moneyState.twoCoin,
      oneBill: moneyState.oneBill,
      twoBill: moneyState.twoBill,
      manyBill: moneyState.manyBill,
    });
  };
  return (
    <>
      <div className={classes.genreTitleBox}>
        <FaSearch size="20px" className={classes.searchIcon} />
        <h2 className={classes.genreTitle}>ジャンルから探す</h2>
      </div>
      <ul className={classes.categoryContainer}>
        <li
          onClick={() => {
            categoryDispatch({ type: "CAFE" });
          }}
          className={classes.categoryList}
        >
          <div
            className={`${
              categoryState.cafe
                ? classes.clickedCategoryBtn
                : classes.categoryBtn
            }`}
          >
            <img
              className={classes.categoryImg}
              src="/images/cafeCategory.jpg"
            />
            <h2 className={classes.categoryText}>カフェ</h2>
          </div>
        </li>
        <li
          onClick={() => {
            categoryDispatch({ type: "MEAT" });
          }}
          className={classes.categoryList}
        >
          <div
            className={`${
              categoryState.meat
                ? classes.clickedCategoryBtn
                : classes.categoryBtn
            }`}
          >
            <img
              className={classes.categoryImg}
              src="/images/meatcategory.jpg"
            />
            <h2 className={classes.categoryText}>肉料理</h2>
          </div>
        </li>
        <li
          onClick={() => {
            categoryDispatch({ type: "NOODLE" });
          }}
          className={classes.categoryList}
        >
          <div
            className={`${
              categoryState.noodle
                ? classes.clickedCategoryBtn
                : classes.categoryBtn
            }`}
          >
            <img
              className={classes.categoryImg}
              src="/images/ramenCategory.jpg"
            />
            <h2 className={classes.categoryRamenText}>ラーメン</h2>
          </div>
        </li>
        <li
          onClick={() => {
            categoryDispatch({ type: "IZAKAYA" });
          }}
          className={classes.categoryList}
        >
          <div
            className={`${
              categoryState.izakaya
                ? classes.clickedCategoryBtn
                : classes.categoryBtn
            }`}
          >
            <img className={classes.categoryImg} src="/images/beer.jpg" />
            <h2 className={classes.categoryRamenText}>居酒屋</h2>
          </div>
        </li>
        <li
          onClick={() => {
            categoryDispatch({ type: "CHINESE" });
          }}
          className={classes.categoryList}
        >
          <div
            className={`${
              categoryState.chinese
                ? classes.clickedCategoryBtn
                : classes.categoryBtn
            }`}
          >
            <img
              className={classes.categoryImg}
              src="/images/chineseCategory.jpg"
            />
            <h2 className={classes.categoryRamenText}>中華</h2>
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
          onClick={() => {
            moneyDispatch({ type: "ONE_COIN" });
          }}
        >
          <RiCoinFill className={classes.moneyIcon} />
          <p className={classes.moneyExplain}>¥~1000</p>
        </li>
        <li
          className={`${
            moneyState.twoCoin ? classes.moneyBoxClicked : classes.moneyBox
          }`}
          onClick={() => {
            moneyDispatch({ type: "TWO_COIN" });
          }}
        >
          <GiTwoCoins className={classes.moneyIcon} />
          <p className={classes.moneyExplainLong}>¥1001~¥2000</p>
        </li>
        <li
          className={`${
            moneyState.oneBill ? classes.moneyBoxClicked : classes.moneyBox
          }`}
          onClick={() => {
            moneyDispatch({ type: "ONE_BILL" });
          }}
        >
          <FaMoneyBillWaveAlt className={classes.moneyIcon} />
          <p className={classes.moneyExplainLong}>¥2001~￥3000</p>
        </li>
        <li
          className={`${
            moneyState.twoBill ? classes.moneyBoxClicked : classes.moneyBox
          }`}
          onClick={() => {
            moneyDispatch({ type: "TWO_BILL" });
          }}
        >
          <BsCashCoin className={classes.moneyIcon} />
          <p className={classes.moneyExplainLong}>¥3001~￥4000</p>
        </li>
        <li
          className={`${
            moneyState.manyBill ? classes.moneyBoxClicked : classes.moneyBox
          }`}
          onClick={() => {
            moneyDispatch({ type: "MANY_BILL" });
          }}
        >
          <GiMoneyStack className={classes.moneyIcon} />
          <p className={classes.moneyExplain}>¥4001~</p>
        </li>
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <button className={classes.resetButton} onClick={resetHandler}>
          <img className={classes.resetIcon} src="/images/1.png" width="50px" />
          <p>上記の内容をリセットする</p>
        </button>
        <button onClick={detailSearchHandler} className={classes.searchButton}>
          <AiOutlineSearch className={classes.detailSearchIcon} size="15px" />
          上記の内容で検索
        </button>
      </div>
    </>
  );
};

export default Category;
