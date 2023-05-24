import React from "react";
import classes from "../../styles/InformationList.module.css";

type Props = {
  title: string;
  info: string;
};

const InformationList: React.FC<Props> = ({ title, info }) => {
  if (!info) {
    return null;
  }
  return (
    <>
      <li className={classes.informationListTitle}>
        <div className={classes.infoArea}>
          <h2>{title}</h2>
          <p className={classes.budgetForLapText}>{info}</p>
        </div>
      </li>
      <hr className={classes.infoBorder} color="#871b28" />
    </>
  );
};

export default InformationList;
