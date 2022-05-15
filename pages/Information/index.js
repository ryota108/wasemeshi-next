import { memo, useEffect } from "react";
import Header from "../../component/Header/Header";

const Tweet = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
    <Header/>
     <div  style={{marginTop:"75px"}}>
      <a
      className="twitter-timeline"
      data-align="center"
      data-width="600"
      data-height="1000"
      data-theme="light"
      data-border-color="#871b28"
      data-chrome="nofooter transparent"
      href="https://twitter.com/Wasemeshi1/lists/1459143350297104389?ref_src=twsrc%5Etfw"
    >
      A Twitter List by Wasemeshi
    </a>
    </div>
    </>
  );
};
export default Tweet;