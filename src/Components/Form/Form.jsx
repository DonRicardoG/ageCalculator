import React, { useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";
import arrow from "../../assets/icon-arrow.svg";

const Form = () => {
  const [errorYear, setErrorYear] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorDay, setErrorDay] = useState("");
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
          setWrongDate(true);
          return;
        }
      }

      if (
        Number(inputs.month) === 4 ||
        Number(inputs.month) === 6 ||
        Number(inputs.month) === 9 ||
        Number(inputs.month) === 11
      ) {
        if (Number(inputs.day) > 30) {
          setWrongDate(true);
          return;
        }
      }
    }

    setInputs({
      day: "",
      month: "",
      year: "",
    });

    setErrors({
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

    // setErrors(
    //   validate({
    //     ...inputs,
    //     [e.target.name]: [e.target.value],
    //   })
    // );
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
        <div className={errorDay === "" ? style.formLabel : style.labelError}>
          <label>Day</label>
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
        <div className={errorMonth === "" ? style.formLabel : style.labelError}>
          <label>Month</label>
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
        <div className={errorYear === "" ? style.formLabel : style.labelError}>
          <label>Year</label>
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
        <button disabled={setErrorDay === false ? false : true} type="submit">
          <img src={arrow} alt="arrow button" />
        </button>
      </div>
      <hr />
    </form>
  );
};

export default Form;
