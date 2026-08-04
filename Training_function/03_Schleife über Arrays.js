// =====================================
// ARRAY DURCHSUCHEN UND WERT FINDEN
// Sucht mit einer Schleife nach einer bestimmten Note im Array.
// Wird die Note gefunden, wird eine Meldung ausgegeben und die
// Suche mit `break` sofort beendet. (suche bis man findet)
// =====================================
const grades = [91, 96, 77, 84, 66];
const search = 66;

function searchGrade(grades, search) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === search) {
      console.log("The grade exists!");
      break;
    }
  }
}

searchGrade(grades, search);
// Konsolenausgabe: The grade exists!

// =====================================
// ARRAY-ELEMENTE MIT EINER SCHLEIFE AUSGEBEN
// Durchläuft das gesamte Array mit einer `for`-Schleife
// und gibt jedes Element einzeln in der Konsole aus.
// =====================================
const gradesX = [21, 46, 47, 64];

function searchGradeX(gradesX) {
  for (let i = 0; i < gradesX.length; i++) {
    console.log(gradesX[i]);
  }
}

searchGradeX(gradesX);
// Konsolenausgabe:
// 21
// 46
// 47
// 64

// =====================================
// GEMEINSAME ELEMENTE AN GLEICHER POSITION FINDEN
// =====================================
const one = [91, 66, 77, 84, 69, 88];
const two = [81, 78, 88, 98, 69, 91];

function compareArrays(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (one[i] === two[i]) {
      console.log("Common element:", one[i]);
    }
  }
  return false;
}
compareArrays(one, two);
//Konsolenausgabe: Common element: 69

// =====================================
// RABATT FÜR ALLE ARRAY-WERTE BERECHNEN
// Berechnet mit einer `for`-Schleife den Rabatt für jeden Preis
// im Array und gibt den jeweiligen Rabattbetrag in der Konsole aus.
// Der ursprüngliche Preis im Array bleibt dabei unverändert.
// =====================================
{
  const prices = [99, 129, 149];
  const discount = 0.1;

  function applyDiscount(prices, discount) {
    for (let i = 0; i < prices.length; i++) {
      console.log(prices[i] * discount);
    }
  }
  applyDiscount(prices, discount);
}
//Konsolenausgabe:
//9.9
//12.9
//14.9

// =====================================
// INDIVIDUELLE RABATTWERTE FÜR ARRAY-ELEMENTE BERECHNEN
// Berechnet für jeden Preis den passenden Rabatt anhand des
// zugehörigen Rabattwertes im zweiten Array.
// Die berechneten Rabattbeträge werden in einem neuen Array
// gespeichert und anschließend ausgegeben.
// =====================================
const prices = [99, 129, 149];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
  const values = [];
  for (let i = 0; i < prices.length; i++) {
    values[i] = prices[i] * discounts[i];
  }
  console.log(values);
}
getValues(prices, discounts);
// Konsolenausgabe:
// [9.9, 25.8, 37.25]

// =====================================
// STUNDENBEREICH MIT EINER SCHLEIFE AUSGEBEN
// Durchläuft einen angegebenen Zeitbereich von Start bis Ende
// mit einer `for`-Schleife und gibt jede Stunde im Format
// "Stunde:00" in der Konsole aus.
// =====================================
function displayHours(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i + ":00");
  }
}
displayHours(1, 24);
// Konsolenausgabe:
// 1:00
// 2:00
// 3:00
// ...
// 24:00

// =====================================
// ARRAY NACH EINEM ELEMENT DURCHSUCHEN
// Sucht mit der JavaScript-Methode `find()` nach einem bestimmten
// Wert im Array.
// Wird das Element gefunden, wird eine Erfolgsmeldung ausgegeben.
// Falls kein passendes Element vorhanden ist, erscheint eine
// Meldung, dass die Suche erfolglos war.
// =====================================
const fruits = ["apples", "bananas", "oranges"];

function searchFruits(fruits, searchPhrase) {
  const foundFruit = fruits.find((fruit) => fruit === searchPhrase);

  if (foundFruit) {
    console.log(searchPhrase + " are in the fruit basket!");
  } else {
    console.log("No such fruit in the fruit basket!");
  }
}

searchFruits(fruits, "apples");
// Konsolenausgabe: apples are in the fruit basket!


// =====================================
// ZWEI ARRAYS MULTIPLIZIEREN UND ERGEBNISSE SPEICHERN
// =====================================
const newNumbers = [];

function multiply(arrayOne, arrayTwo) {
 let product;
 for (let i = 0; i < arrayOne.length; i++) {
  product = arrayOne[i] * arrayTwo[i];
  newNumbers.push(product);
 }
}

multiply([1,2,3,4], [5,6,7,8]);

console.log(newNumbers);
//Konsolenausgabe [ 5, 12, 21, 32 ]