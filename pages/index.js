import Head from "next/head";
import Link from "next/link";
import Category from "../component/Category/Category";
import FadeUp from "../component/UI/FadeUp";
import Explain from "../component/Explain/Explain";
import Header from "../component/Header/Header";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillMoneyCollect } from "react-icons/ai";
import { MdSmokingRooms } from "react-icons/md";
import { BiChair } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場&count=10`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { ref, inView } = useInView({ delay: 1000 });
  const [reset, setReset] = useState(false);
  const {
    results_available = 0,
    results_start = 1,
    results_returned = 1,
    shop: defaultShops = [],
  } = data.results;

  const [categoryValue, setCategoryValue] = useState({
    meat: false,
    cafe: false,
    noodle: false,
    date: false,
    study: false,
    Random: false,
    oneCoin: false,
    twoCoin: false,
    oneBill: false,
    twoBill: false,
    manyBill: false,
  });
  const [shop, updateShops] = useState(defaultShops);
  const [page, updatePage] = useState({
    results_available: results_available,
    results_returned: results_returned,
    results_start: results_start,
  });
  const resetSubmitHandler = (prev) => {
    setReset(prev);
  };

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const params = { keyword: keyword };
    const query = new URLSearchParams(params);

    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;

      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      });

      updateShops(nextData.shop);
    };

    request();
  }, [keyword]);

  useEffect(() => {
    if (page.results_start === 1) return;

    const params = {
      start: page.results_start,
      keyword: keyword,
      category: categoryValue,
    };
    const query = new URLSearchParams(params);

    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;

      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      });

      if (nextData.results_start === 1) {
        updateShops(nextData.shop);
        return;
      }

      updateShops((prev) => {
        return [...prev, ...nextData.shop];
      });
    };

    request();
  }, [page.results_start]);

  useEffect(() => {
    const params = {
      twoCoin: categoryValue.twoCoin,
      noodle: categoryValue.noodle,
      meat: categoryValue.meat,
      cafe: categoryValue.cafe,
      oneCoin: categoryValue.oneCoin,
      oneBill: categoryValue.oneBill,
      twoBill: categoryValue.twoBill,
      manyBill: categoryValue.manyBill,
    };
    const query = new URLSearchParams(params);
    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;

      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      });

      if (nextData.results_start === 1) {
        updateShops(nextData.shop);
        return;
      }

      updateShops((prev) => {
        return [...prev, ...nextData.shop];
      });
    };
    request();
  }, [categoryValue]);

  useEffect(() => {
    if (inView === false) return;
    updatePage((prev) => {
      return {
        ...prev,
        results_start: prev.results_start + 10,
      };
    });
  }, [inView]);

  const resetHandler = () => {
    setKeyword("");
  };
  const handlerOnSubmitSearch = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");
    const value = fieldQuery.value || "";
    setKeyword(value);
  };

  const submitCategoryHandler = (data) => {
    setCategoryValue(data);
  };
  return (
    <>
      <Header />
      <Explain />
      <form onSubmit={handlerOnSubmitSearch} className="text-center">
        <input
          type="search"
          name="query"
          className="searchInput"
          placeholder="キーワードを入力して下さい"
        />
        <button className="searchButton">
          <AiOutlineSearch color="white" size="18px" />
        </button>
      </form>
      <Category onReset={resetHandler} onSubmit={submitCategoryHandler} />
      <div className="flex">
        <img src="/images/resultShow.png" className="resultShow" />
        <span className="resultReturn">{page.results_available}</span>
        <h3 className="resultReturnText">件</h3>
      </div>
      <ul className="flex" style={{ flexWrap: "wrap" }}>
        {shop.map((item, index) => {
          return (
            <FadeUp key={index}>
              <li className="shop" key={index}>
                <Link key={index} href={`restaurants/${item.id}`}>
                  <div className="shop-card">
                    <div className="img-box">
                      <img className="shop-img" src={item.photo.pc.l} />
                    </div>
                    <h3 className="shop-title">{item.name}</h3>
                    <p className="shopCardCatch">{item.catch}</p>
                    <hr align="left" color="#871b28" width="300px" />
                    <div className="flex">
                      <div className="price-area">
                        <AiFillMoneyCollect
                          key={index}
                          size="25px"
                          className="moneyMiniIcon"
                        />{" "}
                        <h4 className="moneyInfo">{item.budget.name}</h4>
                      </div>
                      <div className="flex">
                        <BiChair size="20px" />
                        <p className="chairCharacter">
                          {item.capacity}
                          <span>席</span>
                        </p>
                      </div>
                      <div className="flex">
                        <MdSmokingRooms size="20px" />
                        <p className="smokingText">{item.non_smoking}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </FadeUp>
          );
        })}
      </ul>
      <div ref={ref}></div>
      {!inView && <img src="/images/loading.gif" className="loadingSpinner" />}
      <a href="http://webservice.recruit.co.jp/">
        <img
          src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif"
          alt="ホットペッパー Webサービス"
          width="135"
          height="17"
          border="0"
          title="ホットペッパー Webサービス"
        />
      </a>
    </>
  );
}
