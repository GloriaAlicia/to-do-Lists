export const increaseProgress = (total, completed) => {
	const onePercentage = Math.floor(100 / total)
	const percentage = onePercentage * completed
	//+= "%"
	return percentage
}
