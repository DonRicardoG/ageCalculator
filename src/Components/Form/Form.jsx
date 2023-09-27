import React, { useState } from "react";
import style from "./Form.module.css";
import arrow from "../../assets/icon-arrow.svg";

const Form = (props) => {
  const [errorYear, setErrorYear] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorDay, setErrorDay] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [inputs, setInputs] = useState({
    day: "",
    month: "",
    year: "",
  });

  const { setDays, setMonths, setYears } = props;

  function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
      return true; // El año es bisiesto
    } else {
      return false; // El año no es bisiesto
    }
  }

  const ageCalculator = (date) => {
    const birthDate = new Date(date);
    const actualDate = new Date();

    const ageMiliseconds = actualDate - birthDate;
    const age = new Date(ageMiliseconds);

    const years = Math.abs(age.getUTCFullYear() - 1970);
    const months = Math.abs(age.getUTCMonth());
    const days = Math.abs(age.getUTCDate() - 1);

    setDays(days);
    setMonths(months);
    setYears(years);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.day === "" || inputs.month === "" || inputs.year === "") {
      return;
    }

    if (errorDay !== "" || errorMonth !== "" || errorYear !== "") {
      return;
    }

    if (Number(inputs.month) === 2) {
      if (esBisiesto(inputs.year)) {
        if (Number(inputs.day) > 29) {
          setErrorDate(true);
          return;
        }
      } else {
        if (Number(inputs.day) > 28) {
          setErrorDate(true);
          return;
        }
      }
    }

    if (
      Number(inputs.month) === 4 ||
      Number(inputs.month) === 6 ||
      Number(inputs.month) === 9 ||
      Number(inputs.month) === 11
    ) {
      if (Number(inputs.day) > 30) {
        setErrorDate(true);
        return;
      }
    }

    setErrorDate(false);

    ageCalculator(inputs.year + "-" + inputs.month + "-" + inputs.day);

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
      <div
        className={
          errorDate === true
            ? style.labelsContainerError
            : style.labelsContainer
        }
      >
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
          {errorDate === true ? (
            <p className={style.errorMessage}>Must be a valid date</p>
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
          {errorDate}
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
