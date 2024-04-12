const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
]

const word = 'The'

const sortByAlphabeth = () => {
	bands.forEach(item => {
		const startIndex = item.indexOf(word)

		if (startIndex !== -1) {
			const endIndex = startIndex + word.length
			const withoutThe = item.slice(0, startIndex) + item.slice(endIndex)
            console.log(withoutThe);
		}
        
	})
}

sortByAlphabeth()
