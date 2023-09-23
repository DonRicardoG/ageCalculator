export default function validate(inputs) {
  let errors = {};

  if (inputs.day === "") {
    errors.day = "This field is required";
  } else if (inputs.day < 1 || inputs.day > 31) {
    errors.day = "Must be a valid day";
  }

  if (inputs.month === "") {
    errors.month = "This field is required";
  } else if (inputs.month < 1 || inputs.month > 12) {
    errors.month = "Must be a valid month";
  }

  if (inputs.year === "") {
    errors.year = "This field is required";
  } else if (inputs.year < 0) {
    errors.year = "Must be a positive number";
  } else if (inputs.year > 2023) {
    console.log("desde año");
    errors.year = "Must be in the past";
  }

  return errors;
}
