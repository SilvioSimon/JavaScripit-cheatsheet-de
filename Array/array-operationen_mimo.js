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