// ==============================
// ARRAY SUMME 1
// ==============================
function sumArray(arr){
    let sum = 0; 
    
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum; 
}
console.log(sumArray([3, 7, 1, 4]));  //Erwarte Ausgaben: 15 (3 + 7 + 1 + 4)



// ==============================
// ARRAY SUMME 2
// ==============================
function sumArray2(arr2){
    let sum2 = 0;

    for (let index = 0; index < arr2.length; index++) {
        sum2 += arr2[index];
    }
    return sum2; 
}
console.log(sumArray2([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)



// ==============================
// Aufgabe 2
// ==============================
function printNumbers(n) {
    let numbers = "";

    for (let index = 1; index <= n; index++) {
        numbers += index;

        if (index < n) {
            numbers += ", ";
        }
    }
    console.log(numbers);
}
printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5
printNumbers(3); // Erwartete Ausgabe: 1, 2, 3



// ==============================
// RÜCKWÄRTS LAUFENDE FOR-SCHLEIFE
// ==============================
function printNumbersReverse(n) {

    let numbers = "";

    // Start bei n
    // Solange index größer oder gleich 1 ist
    // Nach jedem Durchlauf um 1 reduzieren (--)

    for (let index = n; index >=
         1; index--) {
        numbers += index;
        
        if (index > 1) {
            numbers += ", ";
         }
    }
    console.log(numbers);
}
printNumbersReverse(5);// Erwartete Ausgabe: 5, 4, 3, 2, 1
printNumbersReverse(3);// Erwartete Ausgabe: 3, 2, 1


// ==============================
// JEDES DRITTE ELEMENT AUSGEBEN
// ==============================
function printEveryThirdElement(arr) {
    let elements = "";
    // Start bei Index 0
    // Nach jedem Durchlauf 3 Positionen weitergehen

    for (let index = 0; index < arr.length; index += 3) {
        elements += arr[index];
        if (index + 3 < arr.length) {
            elements += ", ";
        }
    }
    console.log(elements);
}

printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Erwartete Ausgabe: 1, 4, 7
printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']); // Erwartete Ausgabe: 'a', 'd' 