// indexOf() gibt den Index des gesuchten Elements zurück. (Position)
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