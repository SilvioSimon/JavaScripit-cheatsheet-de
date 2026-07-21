 // ==============================
// FOR-SCHLEIFE (Grundaufbau)
// ==============================

// for (Startwert; Bedingung; Schritt) {
//     Code
// }

// Startwert: Wird einmal zu Beginn ausgeführt.
// Bedingung: Solange sie true ist, läuft die Schleife weiter.
// Schritt: Wird nach jedem Durchlauf ausgeführt.

// ++  -> erhöht eine Variable um 1
// +=  -> addiert einen Wert hinzu
// Beispiel:
// let number = 5;
// number += 3; // Ergebnis: 8


function initArrays(){

    for (let indexFruits = 0; indexFruits < 3; indexFruits++) {
        console.log(indexFruits);
    }
}

initArrays();


// ==============================
// ARRAYS
// ==============================

let fruitsX = ["Banana", "Orange", "Apple", "Mango"];
 
// Die Schleife läuft von Index 0 bis 4.
    // Da das Array nur 4 Elemente besitzt,
    // liefert fruitsX[4] den Wert "undefined".
        //0 -> Banana
        //1 -> Orange
        //2 -> Apple
        //3 -> Mango
        //4 -> undefined ???

function initArrays2(){

    let contentRef = document.getElementById("my_contant");
    contentRef.innerHTML = "";
    for (let indexFruitsX = 0; indexFruitsX < 5; indexFruitsX ++) {
        contentRef.innerHTML += indexFruitsX + " " + fruitsX[indexFruitsX] + ", " + "<br>";
    }
}


initArrays2();