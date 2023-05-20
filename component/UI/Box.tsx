import React, { ReactNode } from "react";
import classes from "../../styles/detail.module.css";

type Props = {
  flag: boolean;
  children: ReactNode;
};

const Box: React.FC<Props> = ({ flag, children }) => {
  return (
    <li
      className={`${
        flag ? classes.informationBox : classes.informationNoSomething
      }`}
    >
      {children}
    </li>
  );
};

export default Box;
