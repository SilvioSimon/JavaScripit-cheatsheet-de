let points = 7600;
let pointsNeeded = 8000;

if (points >= pointsNeeded) {
    console.log("You're Level 2!");
} 
else {
    const left = pointsNeeded - points;
    console.log("You need " + left + " points to get to Level 2");
}
//Konsolenausgabe: You need 400 points to get to Level 2






let isDay = false;

if (isDay) {
    console.log("Lights off!");
} 
else {
    console.log("Lights on!");
}  
// RESULT = Lights on!
//Was ist ein "else" Anweisung?: Eine Bedingung, die ausgeführt wird, wenn die Bedingung der if-Anweisung false ist