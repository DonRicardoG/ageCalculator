import React, { useState } from "react";
import style from "./Form.module.css";
import arrow from "../../assets/icon-arrow.svg";

const Form = () => {
  const [errorYear, setErrorYear] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorDay, setErrorDay] = useState("");
  const [submitOff, setSubmitOff] = useState(false);
  const [inputs, setInputs] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.day === "" || inputs.month === "" || inputs.year === "") {
      return;
    }

    if (errorDay === "" || errorMonth === "" || errorYear === "") {
      return;
    }

    console.log("desde submit");

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

  const handleBlur = (e) => {
    const timeStamp = Date.now();
    const fecha = new Date(timeStamp);
    const añoActual = fecha.getFullYear();

    if (e.target.name === "day") {
      if (e.target.value > 31) {
        setErrorDay("Must be a valid day");
      } else if (e.target.value <= 0) {
        setErrorDay("This field is required");
      } else {
        setErrorDay("");
      }
    }

    if (e.target.name === "month") {
      if (e.target.value > 12) {
        setErrorMonth("Must be a valid month");
      } else if (e.target.value <= 0) {
        setErrorMonth("This field is required");
      } else {
        setErrorMonth("");
      }
    }

    if (e.target.name === "year") {
      if (e.target.value > añoActual) {
        setErrorYear("Must be in the past");
      } else if (e.target.value <= 0) {
        setErrorYear("This field is required");
      } else {
        setErrorYear("");
      }
    }
  };
  return (
    <form
      className={style.formContainer}
      action="submit"
      onSubmit={handleSubmit}
    >
      <div className={style.labelsContainer}>
        <div className={errorDay !== "" ? style.labelError : ""}>
          <label className={style.labelAlone}>Day </label>
          <input
            type="number"
            placeholder="DD"
            name="day"
            value={inputs.day}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorDay !== "" ? (
            <p className={style.errorMessage}>{errorDay}</p>
          ) : (
            ""
          )}
        </div>
        <div className={errorMonth !== "" ? style.labelError : ""}>
          <label className={style.labelAlone}>Month</label>
          <input
            type="number"
            placeholder="MM"
            name="month"
            value={inputs.month}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorMonth !== "" ? (
            <p className={style.errorMessage}>{errorMonth}</p>
          ) : (
            ""
          )}
        </div>
        <div className={errorYear !== "" ? style.labelError : ""}>
          <label className={style.labelAlone}>Year</label>
          <input
            type="number"
            placeholder="YYYY"
            name="year"
            value={inputs.year}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorYear !== "" ? (
            <p className={style.errorMessage}>{errorYear}</p>
          ) : (
            ""
          )}
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
