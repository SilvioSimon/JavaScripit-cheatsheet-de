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

console.log(celsius);

// Konsolenausgabe:
// [22.222..., 20, 21.111..., 23.333..., 25, 23.888..., 26.111...]


// ============================================================
// 18. ARRAY MAP() – GERADE ODER UNGERADE PRÜFEN
// ============================================================


// Mit der map()-Methode werden alle Elemente des Arrays
// nacheinander durchlaufen.
//
// Für jedes Element wird geprüft, ob es ohne Rest durch 2
// teilbar ist.
//
// Der Modulo-Operator (%) gibt den Rest einer Division zurück.
// Ist der Rest 0, handelt es sich um eine gerade Zahl.
//
// map() erstellt dabei ein neues Array mit den Ergebnissen.
// true  = gerade
// false = ungerade
const values = [56, 27, 19, 20, 38];
const evenOrOdd = values.map(function(
element
) {
 return (element % 2) == 0;
});
console.log(evenOrOdd);

//56 % 2 // 0 → gerade (true)
// 27 % 2 // 1 → ungerade (false)
// Konsolenausgabe:
// [true, false, false, true, true]