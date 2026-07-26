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