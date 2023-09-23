import React, { useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";
import arrow from "../../assets/icon-arrow.svg";

const Form = () => {
  const [errors, setErrors] = useState("");
  const [inputs, setInputs] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      if (Number(inputs.month) === 2) {
        if (Number(inputs.day) > 28) {
          errors.date === "Must be a valid date";
        }
      }

      if (
        Number(inputs.month) === 4 ||
        Number(inputs.month) === 6 ||
        Number(inputs.month) === 9 ||
        Number(inputs.month) === 11
      ) {
        if (Number(inputs.day) > 30) {
          errors.date === "Must be a valid date";
        }
      }
    }

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

    setErrors(
      validate({
        ...inputs,
        [e.target.name]: [e.target.value],
      })
    );
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
