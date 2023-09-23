import React from "react";
import style from "./Main.module.css";
import Form from "../Form/Form";

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <Form />
      <h1>
        <span>--</span>years
      </h1>
      <h1>
        <span>--</span>months
      </h1>
      <h1>
        <span>--</span>days
      </h1>
    </div>
  );
};

export default Main;
