import React, { useState } from "react";
import style from "./Form.module.css";
import arrow from "../../assets/icon-arrow.svg";

const Form = () => {
  const [inputs, setInputs] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    setInputs({
      day: "",
      month: "",
      year: "",
    });
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <form
      className={style.formContainer}
      action="submit"
      onSubmit={handleSubmit}
    >
      <div className={style.labelsContainer}>
        <div className={style.formLabel}>
          <label>Day</label>
          <input
            type="number"
            placeholder="DD"
            name="day"
            value={inputs.day}
            onChange={handleChange}
          />
        </div>
        <div className={style.formLabel}>
          <label>Month</label>
          <input
            type="number"
            placeholder="MM"
            name="month"
            value={inputs.month}
            onChange={handleChange}
          />
        </div>
        <div className={style.formLabel}>
          <label>Year</label>
          <input
            type="number"
            placeholder="YYYY"
            name="year"
            value={inputs.year}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <img src={arrow} alt="arrow button" />
        </button>
      </div>
      <hr />
    </form>
  );
};

export default Form;
