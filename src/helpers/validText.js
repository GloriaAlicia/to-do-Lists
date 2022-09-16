export const validText = (textValue) => {
	const regex = /(\s{1,})(\w{0})/g
	const whitespace = regex.test(textValue)
	const validText = textValue !== '' && !whitespace && textValue.length >= 2

	return validText
}
