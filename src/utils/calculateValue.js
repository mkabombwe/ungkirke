export const valueFromCondition = (estimatedCondition, rebaseValue) => {
	let estimatedValue
	if (estimatedCondition === 'perfect') {
		estimatedValue = rebaseValue
	} else if (estimatedCondition === 'good') {
		estimatedValue = Math.floor((90 * rebaseValue) / 100)
	} else if (estimatedCondition === 'poor') {
		estimatedValue = Math.floor((65 * rebaseValue) / 100)
	} else if (estimatedCondition === 'defect') {
		estimatedValue = Math.floor((10 * rebaseValue) / 100)
	} else if (estimatedCondition === 'unknown') {
		estimatedValue = 25
	}
	return estimatedValue
}
