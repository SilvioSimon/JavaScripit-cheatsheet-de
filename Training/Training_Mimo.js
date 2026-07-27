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



// ==============================
// While - mit Zählervariable
// ==============================
let counter = 1;

while (counter < 5) {
 console.log(counter);
 counter++;
} //Konsolenausgabe
//1
//2
//3
//4

let counter = 5;
while (counter < 10) {
  counter++;
  console.log(counter);
}//Konsolenausgabe
//6
//7
//8
//9
//10


let listNumber = 1;
while (listNumber < 11) {
 console.log(listNumber + ". Camera");
 listNumber++;
}//Konsolenausgabe
//1. Camera
//2. Camera
//3. Camera
//4. Camera
//5. Camera
//6. Camera
//7. Camera
//8. Camera
//9. Camera
//10. Camera
