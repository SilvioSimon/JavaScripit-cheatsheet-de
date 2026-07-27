// ==============================
// LEVEL-FORTSCHRITT PRÜFEN
// ==============================

//Konsolenausgabe: You need 400 points to get to Level 2
let points = 7600;
let pointsNeeded = 8000;

if (points >= pointsNeeded) {
  console.log("You're Level 2!");
} else {
  const left = pointsNeeded - points;
  console.log("You need " + left + " points to get to Level 2");
}


// ==============================
// ELSE-ANWEISUNG
// ==============================

// Konsolenausgabe:
// Lights on!

// Erklärung:
// Die else-Anweisung wird ausgeführt,
// wenn die Bedingung der if-Anweisung false ist.
let isDay = false;

if (isDay) {
  console.log("Lights off!");
} else {
  console.log("Lights on!");
}


// ==============================
// ELSE IF-ANWEISUNG
// ==============================
// Konsolenausgabe: Good evening
let hour = 20;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 17) {
  console.log("Good afternoon");
} else if (hour < 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
} 


// ==============================
// LOGISCHER UND-OPERATOR (&&)
// ==============================
// You passed!

// Erklärung:
// Der &&-Operator bedeutet "UND".
// Beide Bedingungen müssen true sein,
// damit der Codeblock ausgeführt wird.
let score = 75;

if (score > 70 && score < 90) {
  console.log("You passed!");
} else if (score >= 90) {
  console.log("You get an A!");
} 



// ==============================
// While - Innerhalb des Codeblocks stoppen
// ==============================
// Konsolenausgabe: and again
// Ohne dauer Schleife "and again", 
//indem wie wir keepGoing auf false setzen, 
//sodass die Bedingung false zurückgibt.

let keepGoing = true;

while (keepGoing === true) {
 console.log("and again");
 keepGoing = false; //--> Hier wird gestoppt
}


// Weitere Beispiel Konsole Ausgabe: 
//keepGoing: true 
//keepGoing: false

let keepGoing = true;
while (keepGoing === true) {
 console.log("keepGoing: " + keepGoing);
 keepGoing = false;
 console.log("keepGoing: " + keepGoing);
}



