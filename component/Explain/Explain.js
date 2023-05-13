import classes from "../../styles/Explain.module.css";
const Explain = () => {
  return (
    <div className={classes.globalContent}>
      <div className={classes.content}>
        <img src="/images/waseda.jfif" alt="" />
      </div>
      <div className={classes.titleName}>
          <h1 className={classes.main}>
            <span className={classes.spanColor}>W</span>hy establish?
          </h1>
        <p className={classes.sub} >
          コロナで数々の早稲田の青春の味,早大生の愛する飲食店（
          <span>ワセメシ</span>
          ）が窮地に立たされています。そんな状況で微力ながらも私に何かできることはないかと考え、皆さんに少しでも青春を味わってほしいと思いサイトを立ち上げました。お店の検索機能、経路案内、最新情報の確認まで便利なサービスを日々提供できるよう努めてまいります。
        </p>
      </div>
    </div>
  );
};
export default Explain;