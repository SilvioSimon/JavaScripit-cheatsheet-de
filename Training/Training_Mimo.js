let points = 7600;
let pointsNeeded = 8000;

if (points >= pointsNeeded) {
  console.log("You're Level 2!");
} else {
  const left = pointsNeeded - points;
  console.log("You need " + left + " points to get to Level 2");
}
//Konsolenausgabe: You need 400 points to get to Level 2

let isDay = false;

if (isDay) {
  console.log("Lights off!");
} else {
  console.log("Lights on!");
}
// RESULT = Lights on!
//Was ist ein "else" Anweisung?: Eine Bedingung, die ausgeführt wird, wenn die Bedingung der if-Anweisung false ist





let hour = 20;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 17) {
  console.log("Good afternoon");
} else if (hour < 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
} // RESULT = good evening
