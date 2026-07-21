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
// ARRAYS 2
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


// ==============================
// ARRAYS 3
// ==============================
 // Zweites HTML-Element auswählen.
// Ausgabe erfolgt in <div id="my_content2"></div>

function initArrays3() {
    let contentRef = document.getElementById("my_content2");
    contentRef.innerHTML = "";

    // .length gibt die Anzahl der Elemente im Array zurück.
    // Die Schleife läuft automatisch genau so oft,
    // wie Elemente im Array vorhanden sind.

    for (let indexFruits = 0; indexFruits < fruitsX.length; indexFruits++) {
        contentRef.innerHTML += `<p> DOMI--> ${fruitsX[indexFruits]}</p>`;
    }
    // Template Literal:
    // ${} ersetzt die Variable direkt im Text.

}
initArrays3();