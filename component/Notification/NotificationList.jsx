import React from "react";
import { client } from "../../libs/client";
import { useEffect, useState } from "react";
import style from "../../styles/Notification.module.css"
import Notification from "./Notification";



const NotificationList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await client.get({ endpoint: "news" });
      setNewsList(data.contents);
    };
    getNews();
  }, []);

  return (
    <div className={style.notifyWrapper}>
       <h1 className={style.informationSectionTitle}><span>N</span>ews</h1>
      {newsList.map((news) => (
           <Notification key={news.id} title={news.title} date={news.publishedAt.split("T")[0]} id={news.id}/>
      ))}
    </div>
  );
};

export default NotificationList;
