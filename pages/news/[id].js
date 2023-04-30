import React from 'react'
import Header from '../../component/Header/Header'
import { client } from "../../libs/client";
import style from "../../styles/news.module.css";

const News = ({news}) => {
  
  return (
    <>
    <Header/>
    <main className={style.main}>
      <h1 className={style.title}>{news.title}</h1>
      <p className={style.publishedAt}>{news.publishedAt.split("T")[0]}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.content}`,
        }}
        className={style.post}
      />
    </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
    revalidate: 30
  };
};

export default News