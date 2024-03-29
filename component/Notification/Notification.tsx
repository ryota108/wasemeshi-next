import Link from "next/link";
import React from "react";
import style from "../../styles/Notification.module.css";

type Props = {
  title: string;
  date: string;
  id: string;
};

const Notification: React.FC<Props> = ({ title, date, id }) => {
  const contents = (
    <div className={style.newsList}>
      <h3 className={style.newsTitle}>{title}</h3>
      <p className={style.newsDate}>{date}</p>
    </div>
  );

  return <Link href={`/news/${id}`}>{contents}</Link>;
};

export default Notification;
