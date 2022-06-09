// const telephoneValidator = (value) => /^1[1|2|3|4|5|7]\d{9}$/.test(value);
const telephoneValidator = (value) => /^\d{11}$/.test(value);

export default {
  telephoneValidator,
};
