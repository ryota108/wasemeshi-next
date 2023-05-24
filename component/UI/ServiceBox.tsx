import React from "react";
import classes from "../../styles/ServiceBox.module.css";

type Props = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

const ServiceBox: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className={classes.serviceBox}>
      <div className={classes.serviceIcon}>
        <div className={classes.icon}>{icon}</div>
      </div>
      <div className={classes.serviceTitle}>{title}</div>
      <div className={classes.serviceDesc}>{description}</div>
    </div>
  );
};

export default ServiceBox;
