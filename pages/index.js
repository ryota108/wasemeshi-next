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
import Footer from "../component/Footer/Footer";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Card from "../component/UI/Card";
import Notification from "../component/Notification/NotificationList";

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

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#871b28',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


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
    <ThemeProvider theme={theme}>
      <Header />
      <Explain />
      <Notification/>
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
      <ul className="restaurantsList" >
        {shop.map((item)=>(
          <FadeUp key={item.id}>
            <Card title={item.name} explain={item.catch} image={item.photo.pc.l} seat={item.capacity}price={item.budget.name}smoking={item.non_smoking} key={item.id} id={item.id}/>
          </FadeUp>
        ))}
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
    </ThemeProvider>
  );
}
