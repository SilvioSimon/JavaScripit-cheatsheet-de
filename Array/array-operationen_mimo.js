// ============================================================
// 17. FOR...OF – FAHRENHEIT IN CELSIUS UMRECHNEN
// ============================================================

// Mit einer for...of-Schleife werden alle Elemente des
// Fahrenheit-Arrays nacheinander durchlaufen.
//
// Jedes Element wird mit der Fahrenheit-Celsius-Formel
// umgerechnet und anschließend mit push() im Celsius-Array
// gespeichert.

const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celsius = [];

for (const element of fahrenheit) {
  const c = (element - 32) * (5 / 9); //Celsius = (Fahrenheit − 32) × 5/9
  celsius.push(c);
}
console.log(celsius); // Konsolenausgabe: [22.222..., 20, 21.111..., 23.333..., 25, 23.888..., 26.111...]

// ============================================================
// 18. ARRAY MAP() – GERADE ODER UNGERADE PRÜFEN
// ============================================================
// map() brauchst du in JavaScript immer dann,
// wenn du aus jedem Element eines Arrays einen neuen Wert erzeugen möchtest.

// Mit der map()-Methode werden alle Elemente des Arrays nacheinander durchlaufen.
// Für jedes Element wird geprüft, ob es ohne Rest durch 2 teilbar ist.

// Der Modulo-Operator (%) gibt den Rest einer Division zurück.
//56 % 2 // 0 → gerade (true)
// 27 % 2 // 1 → ungerade (false)

const values = [56, 27, 19, 20, 38];
const evenOrOdd = values.map(function (element) {
  return element % 2 == 0;
});
console.log(evenOrOdd); // Konsolenausgabe: [true, false, false, true, true]

// ============================================================
// 18. ARRAY MAP() – GERADE ODER UNGERADE PRÜFEN
// ============================================================

//map() geht jedes Element des Arrays durch und erstellt daraus ein neues Array.
//Sarah     → bearbeiten
//Hank      → bearbeiten
//Anna      → bearbeiten
//Beatrice  → bearbeiten

//element (element = "Sarah";) ist der Parameter, der das aktuelle Array-Element enthält.
//index -> Position des Elements (map() kann neben dem Element auch den Index an die Funktion übergeben:)
// zb. index = 0

const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function (element, index) {
  return index + ": " + element;
});
console.log(displayQueue);

// ============================================================
// 19. MAP() – STATES IN GROSSBUCHSTABEN UMWANDELN
// ============================================================
// Mit map() werden alle Elemente des Arrays durchlaufen
// und in Grossbuchstaben umgewandelt.
// Pfeilfunktion (=>) code vereinfachen

const states = ["ak", "md", "va", "ca", "or"];
const uppercaseStates = states.map((element) => element.toUpperCase());
console.log(uppercaseStates); // Konsolenausgabe: ['AK', 'MD', 'VA', 'CA', 'OR']

// ============================================================
// 20. MAP() – ZAHLEN QUADRIEREN
// ============================================================
// Mit map() werden alle Elemente des Arrays durchlaufen.
// Jedes Element wird mit sich selbst multipliziert.

const valuesQ = [1, 3, 4, 7];
const squares = valuesQ.map((element) => element * element);
console.log(squares); // Konsolenausgabe: [1, 9, 16, 49]

// ============================================================
// 21. FOR...OF – TESTERGEBNISSE AB 90 PUNKTEN FILTERN
// ============================================================
const testScores = [72, 95, 90, 71, 75, 79];
const arr = []; //--> arr.push die wert [95] und [90]
for (const element of testScores) {
  if (element >= 90) {
    //Check: true oder false
    arr.push(element);
  }
}
console.log(arr); //[ 95, 90 ]

// ============================================================
// 22. FILTER() – NAMEN MIT S HERAUSFILTERN
// ============================================================

const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function(element) {
    return element[0] === "S"; // element[0] => erstes Zeichen
});
console.log(sNames); //["Sarah", "Sean"]


// ============================================================
// 23. FILTER() – WOCHENTAGE OHNE WOCHENENDE
// ============================================================
// filter() prüft jedes Element und übernimmt nur die Werte,
// bei denen die Bedingung true ist.
// index > 0 und index < 6 schließt Sunday (0) und Saturday (6) aus.
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const workWeek = week.filter(function(element, 
index
) {
 return (index > 0 && index < 6); //&& bedeutet UND 
});
console.log(workWeek); // Konsolenausgabe: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]