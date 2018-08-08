const camelCaseReader = (text) => (
	text
		.replace(/([A-Z])/g, ' $1')
		.replace(/./, firstLetter => firstLetter.toUpperCase())
)

export default camelCaseReader
