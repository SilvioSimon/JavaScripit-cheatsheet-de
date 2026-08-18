// Datentypen
let myString = "http://127.0.0.1:5500/index.html"; // string sind texte
let myNumber = 32.0651; // einfach eine Zahl
let myFloat = 32.0; // Float ist eine Kommazahl
let myInt = 32; // Integer ist eine Ganzzahl
let myBoolean = true; // true oder false
let myArray = [2, 5, "asdasd"]; // eine Liste
let myObject = { age: 32, height: 177 }; // eine Liste mit key/value

function showSelection() {
  const paragraph = document.getElementById("result");
  const selectedOption = document.getElementById("colorSelect").value;
  paragraph.innerHTML = "You picked: " + selectedOption;
}
