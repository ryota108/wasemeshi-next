import React from 'react'

const CategoryButton = () => {
  return (
    <div>CategoryButton</div>
  )
}

export default CategoryButton

// import React from "react";
// import classes from "../../styles/Category.module.css";

// type Props = {
//   flag: boolean;
//   dispatch: (type: {}) => {};
//   title: string;
// };

// const CategoryButton: React.FC<Props> = ({ flag, dispatch, title }) => {
//   return (
//     <li
//       onClick={() => {
//         categoryDispatch({ type: "MEAT" });
//       }}
//       className={classes.categoryList}
//     >
//       <div
//         className={`${flag ? classes.clickedCategoryBtn : classes.categoryBtn}`}
//       >
//         <img className={classes.categoryImg} src="/images/meatcategory.jpg" />
//         <h2 className={classes.categoryText}>{title}</h2>
//       </div>
//     </li>
//   );
// };

// export default CategoryButton;
