const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/**
 * Returns an array of search results based on a given search string.
 * If the search string is empty, return an empty array.
 * Else return an array of results that include the search string.
 * Exclude results that completely match the search string.
 * 
 * @param {String} str String to search for.
 * @returns Returns an array of search results.
 */
function search(str) {
	return str === '' ? [] : fruit.filter( name => name.toLowerCase() != str.toLowerCase() 
		&& name.toLowerCase().match(str.toLowerCase()));
}

/**
 * Call search and pass search results to showSuggestions.
 * @param {Event} e 
 */
function searchHandler(e) {
	let results = search(e.target.value);
	showSuggestions(results);
}

/**
 * Shows new suggestions. Clear suggestions before displaying.
 * @param {Array} results
 */
function showSuggestions(results) {
	suggestions.innerHTML = '';
	results.forEach(result => suggestions.append(
		createElt('li', result)
	));
}

/**
 * Updates the input value with the suggestion to use.
 * Research the results and show new suggestions with the updated value.
 * @param {Event} e 
 */
function useSuggestion(e) {
	input.value = e.target.textContent;
	let results = search(e.target.textContent);
	showSuggestions(results);
}

/**
 * Helper function to create new elements.
 * @param {String} name Tag name of the element.
 * @param {String} text Text content of the element.
 * @returns 
 */
function createElt(name, text) {
	const elt = document.createElement('li');
	elt.textContent = text;
	return elt;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);