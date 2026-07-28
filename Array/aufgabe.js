// ==================================================
// Aufgabenstellung 1: includes()
// includes() prüft, ob ein bestimmtes Element in einem Array vorhanden ist.
// ==================================================

function containsElement(array, element) {
    return array.includes(element); // Gibt true oder false zurück
}

console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true (Ben ist im Array vorhanden)
console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false (Daniel ist nicht im Array vorhanden)




// ====================================================================
// Aufgabe 2: indexOf() gibt den Index des gesuchten Elements zurück. (Position)
// Existiert das Element nicht im Array, wird -1 zurückgegeben.

//Index	Wert Beispiel
//0	Banana
//1	Orange
//2	Apple
//3	Mango
// ====================================================================
function findElementIndex(array, element) {
    return array.indexOf(element);
}

console.log(findElementIndex([10, 20, 30, 40], 30)); // 2 (30 befindet sich an Index 2)
console.log(findElementIndex([10, 20, 30, 40], 50)); // -1 (50 ist nicht im Array vorhanden)





// ====================================================================
// Aufgabe 3: 
// shift() entfernt das erste Element aus einem Array
// ====================================================================
function removeFirstElement(array) {
    array.shift(); // Entfernt das erste Element aus dem Array
    return array; // Gibt das neue Array zurück
}

console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']




// ====================================================================
// Aufgabe 4: 
// unshift() fügt ein neues Element am Anfang eines Arrays hinzu
// ====================================================================
function addElementToStart(array, element) {
    array.unshift(element); //fügt ein neues Element
    return array; 
}

console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']




// ====================================================================
// Aufgabe 5: 
// slice() erstellt ein neues Array mit einem bestimmten Bereich.
// start = Start-Index (inklusive)
// end = End-Index (nicht inklusive)
// ====================================================================
function getSubArray(array, start, end) { 
    return array.slice(start, end); 
} 

console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']



// ====================================================================
// Aufgabe 6: 
// join() verbindet alle Elemente eines Arrays zu einem String.
// separator bestimmt, welches Zeichen zwischen den Elementen eingefügt wird.
// ====================================================================
function joinArray(array, separator) {
    return array.join(separator); 
}

console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"
console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"