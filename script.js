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

const list = document.querySelector('#bands')

const regex = /^(the |a |an )/i

const ignore = item => {
	return item.replace(regex, '').trim()
}

const newArr = bands.sort(function (a, b) {
	if (ignore(a) > ignore(b)) {
		return 1
	} else {
		return -1
	}
})

console.log(newArr)


list.innerHTML = newArr.map(band => `<li>${band}</li>`).join('')

// function strip(bandName) {
// 	return bandName.replace(/^(a |the |an )/i, '').trim()
// }

// const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1))

// console.log(sortedBands);

// document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')

// Definiujemy tablicę bands, która zawiera nazwy zespołów muzycznych.
// Tworzymy funkcję strip, która usuwa z nazw zespołów określone przedrostki, takie jak "a", "the" lub "an". Wykorzystujemy do tego wyrażenie regularne /(^(a |the |an ))/i, które pasuje do tych przedrostków na początku ciągu znaków ignorując wielkość liter. Funkcja trim() usuwa dodatkowe białe znaki na początku i na końcu nazwy zespołu.
// Sortujemy tablicę bands za pomocą metody sort(). Przekazujemy do niej funkcję porównującą, która porównuje nazwy zespołów po usunięciu przedrostków. Jeśli nazwa a powinna być przed b w porządku alfabetycznym, funkcja porównująca zwraca wartość większą od zera, w przeciwnym razie zwraca wartość mniejszą od zera.
// Wybieramy element z dokumentu o identyfikatorze bands za pomocą document.querySelector('#bands') i ustawiamy jego innerHTML na listę posortowanych zespołów muzycznych. Do tego celu wykorzystujemy metodę map(), aby stworzyć listę elementów <li> zawierających nazwy zespołów, a następnie łączymy je w jedną długi ciąg znaków za pomocą metody join('').
// Ogólnie rzecz biorąc, ten kod usuwa przedrostki "a", "the" lub "an" z nazw zespołów muzycznych, sortuje je alfabetycznie i wyświetla posortowaną listę na stronie internetowej.

// const sort = nameItem => {
// 	return nameItem.replace(/^(a |the |an )/i, '').trim()
// }
// pod nameItem jest podstawiana każda nazwa z tablicy bands(patrz wywołanie w metodzie sort poniżej) i słowa z wyrażenia regularnego są zastępowane pustym stringiem. Metoda trim usuwa białe znaki.

// const sortedBans = bands.sort((a, b) => {
// 	if (sort(a) > sort(b)) {
// 		return 1
// 	} else {
// 		return -1
// 	}
// })
// // ↑ To jest sortowanie alfabetyczne tablicy. Wynik zwrócony większy od zera przesunie item w górę, a mniejszy od zera w dół.
// console.log(sortedBans)

// const list = document.querySelector('#bands')

// list.innerHTML = sortedBans.map(band => `<li>${band}</li>`).join('')
