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

// ==============================
// Zahl + Euro Angeben 
// ==============================
function displayCash() {
  const money = 12030;
  const currency = " Euros";
  console.log(money + currency);
}
displayCash();
// Konsolenausgabe: 12030 Euros


// ==============================
// Funktion mit mehrere Parameter
// ==============================
function display(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
display("John", "Morgan");
// Konsolenausgabe: John Morgan


// ==============================
// ARRAY AN FUNKTION ÜBERGEBEN
// ==============================
// Diese Funktion erhält ein Array als Parameter.
// Mit den Indexwerten [0] und [1] werden
// der Benutzername und die Benutzer-ID
// aus dem Array ausgelesen und ausgegeben.
function displayUserID(user) {
  console.log(user[0], user[1]);
}

const user = ["Don Quixote", 992];
displayUserID(user);
// Konsolenausgabe:Don Quixote 992


// ==============================
// Funktion mit "return"
// ==============================
// Um etwas aus einer Funktion zurückzugeben,
// fügen wir das return-Schlüsselwort
function userAge(number) {
  const age = "User age: " + number;
  return age;
}
console.log(userAge(26));
//Konsolenausgabe: User age: 26


// ==============================
// FUNKTION MIT PARAMETER UND RETURN
// ==============================
//Wir können den Rückgabewert auch in einer
//Variable speichern.
function userAge(number) {
  const age = "User age: " + number;
  return age;
}
const result = userAge(39);
console.log(result);
//Konsolenausgabe: User age: 39

//Wenn wir keine return-Anweisung einfügen,
//gibt die Funktion stattdessen den Wert "undefined" zurück.

function addGreeting(user) {
  const greeting = "Greetings " + user;
  return greeting;
}
const resultXhi = addGreeting("Saoirse");
console.log(resultXhi);
// Konsolenausgabe: Greetings Saoirse

// ==============================
// Funktion für die Rechnung
// ==============================
// Diese Funktion überprüft,
// ob eine übergebene Zahl kleiner als 5 ist.
// Sie gibt true oder false zurück.
function lessThanFive(number) {
  const lessThan = number < 5;

  return lessThan;
}
const resultXXL = lessThanFive(10);
console.log(resultXXL);
// Konsolenausgabe: false

function addTen(number) {
  const addedTen = 10 + number;
  return addedTen;
}
console.log(addTen(20));
// Konsolenausgabe: 30
// 10 + 20 = 30