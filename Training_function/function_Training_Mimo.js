// ==============================
// EINFACHE FUNKTION DEFINIEREN UND AUFRUFEN
// ==============================
function greetUser() {
  console.log("Good morning Anna");
  console.log("Welcome back");
}
greetUser();
//Konsolenausgabe: Good morning Anna
//                 Welcome back



// ==============================
// FUNKTION MIT LOKALER VARIABLE
// ==============================
function greetRon() {
  const name = "Robin Hood";
  console.log("Hello, " + name);
}
greetRon();
//Konsolenausgabe: Hello, Robin Hood



// ==============================
// FUNKTION MIT PARAMETER
// ==============================
function greet(name) {
  console.log("Hello, " + name);
}
greet("MAMA");
//Konsolenausgabe: Hello, MAMA



// ==============================
// ZAHL VERDOPPELN
// ==============================
function doubleNumber(number) {
  const result = number * 2;
  console.log(result);
}
doubleNumber(5);
//Konsolenausgabe: 10



// ==============================
// HÄLFTE EINER ZAHL BERECHNEN
// ==============================
function displayHalf(number) {
  const half = number / 2;
  console.log(half);
}
displayHalf(10);
//Konsolenausgabe: 5
