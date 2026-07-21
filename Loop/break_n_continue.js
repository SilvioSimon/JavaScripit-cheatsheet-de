// ==============================
// BREAK - DEBUGGER BEISPIEL
// ==============================
function sumArray1(arr) {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];

        if (arr[index] == "error") {
            console.error("Verdammt, da war ein Fehler!");
            break;
        }
    }
    return sum;
}
console.log(sumArray1([3, 7, 1, "error", 4, 5]));
// Erwartete Ausgabe: 11 (3 + 7 + 1, danach stoppt break)




// ==============================
// CONTINUE - DEBUGGER BEISPIEL
// ==============================
function sumArray2(arr) {
    let sum = 0;
    
    for (let index = 0; index < arr.length; index++) {

        if (arr[index] == "error") {
            console.error("Fehler gefunden - wird übersprungen!");
            continue; // überspringt diesen Durchlauf
        }

        sum += arr[index];
    }
    return sum;
}
console.log(sumArray2([3, 7, 1, "error", 4, 5]));
// Erwartete Ausgabe: 20 (3 + 7 + 1 + 4 + 5)
// Debugger Beispiel: continue überspringt nur das fehlerhafte Element
