import React, { useState } from "react";
import style from "./Main.module.css";
import Form from "../Form/Form";

const Main = () => {
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  console.log(years);
  return (
    <div className={style.mainContainer}>
      <Form setDays={setDays} setMonths={setMonths} setYears={setYears} />
      <div className={style.ageContainer}>
        <h1>{years === "" ? <span>--</span> : <span>{years}</span>}years</h1>
        <h1>{months === "" ? <span>--</span> : <span>{months}</span>}months</h1>
        <h1>{days === "" ? <span>--</span> : <span>{days}</span>}days</h1>
      </div>
    </div>
  );
};

export default Main;
