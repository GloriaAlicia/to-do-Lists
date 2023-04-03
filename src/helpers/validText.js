export const validText = (textValue) => {
  const regex = /(\w{1,})/g;
  const text = regex.test(textValue);
  const validText = text && textValue.length >= 1;

  return validText;
};
