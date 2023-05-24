import React from "react";
import classes from "../../styles/Chat.module.css";

type Props = {
  info: string;
  isShop: boolean;
  shopImg: string;
};

const Chat: React.FC<Props> = ({ info, isShop = false, shopImg }) => {
  const longInfo = info.length > 15;
  return (
    <>
      {isShop ? (
        <>
          <div className={classes.shopIcon}>
            <img className={classes.logoImg} src={shopImg} />
          </div>
          <div
            className={`${classes.myCommentBudget} ${
              longInfo ? classes.longInfo : ""
            }`}
          >
            <p className={classes.budgetText}>{info}</p>
          </div>
        </>
      ) : (
        <div className={classes.balloon1}>
          <div className={classes.faceicon}>
            <img src="/images/logoCopy-min.png" />
          </div>
          <div className={classes.chatting}>
            <div className={classes.says}>
              <p className={classes.budgetInfo}>{info}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
