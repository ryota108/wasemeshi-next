import React from "react";
import classes from "../../styles/InformationList.module.css";

const InformationList = ({ title, info }) => {
  if (!info) {
    return;
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
