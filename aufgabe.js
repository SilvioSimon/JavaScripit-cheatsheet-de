// Aufgabe 2: indexOf() gibt den Index des gesuchten Elements zurück. (Position)
// Existiert das Element nicht im Array, wird -1 zurückgegeben.


//Index	Wert Beispiel
//0	Banana
//1	Orange
//2	Apple
//3	Mango

function findElementIndex(array, element) {
    return array.indexOf(element);
}

console.log(findElementIndex([10, 20, 30, 40], 30)); // 2 (30 befindet sich an Index 2)
console.log(findElementIndex([10, 20, 30, 40], 50)); // -1 (50 ist nicht im Array vorhanden)





// ====================================================================
// Aufgabe 3: shift() entfernt das erste Element aus einem Array

function removeFirstElement(array) {
    array.shift(); // Entfernt das erste Element aus dem Array
    return array; // Gibt das neue Array zurück
}

console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']






// ====================================================================
// Aufgabe 4: unshift() fügt ein neues Element am Anfang eines Arrays hinzu

function addElementToStart(array, element) {
    array.unshift(element);
    return array;
}

console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

