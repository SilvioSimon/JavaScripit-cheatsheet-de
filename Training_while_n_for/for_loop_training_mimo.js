// ==============================
// for schleife - amerikanische Flagge
// ==============================
let counter1 = 0;
while (counter1 < 5) {
  console.log("**********---------");
  counter1++;
}
let counter2 = 0;
while (counter2 < 4) {
  console.log("-------------------");
  counter2++;
}

// Oder noch besser (Gleiche Ergebnis)

for (let i = 0; i < 4; i++) {
  console.log("**********---------");
}
for (let i = 0; i < 4; i++) {
  console.log("-------------------");
}
//Mit for-Schleifen können wir dasselbe Programm umschreiben,
//sodass es für andere Programmierer leichter zu verstehen ist.
//resultat:
/*
**********---------
**********---------
**********---------
**********---------
-------------------
-------------------
-------------------
-------------------
*/

// ==============================
// for schleife - Rückwärts
// ==============================

for (let i = 5; i > 0; i--) {
  console.log(i);
}
//Konsolenausgabe
/* 
5 
4 
3 
2 
1 
*/

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
//Um 0 beim Herunterzählen einzuschließen,
// verwenden wir >= anstelle von >
//Konsolenausgabe
/* 
5 
4 
3 
2 
1 
0
*/

function displayNumbers(message) {
  for (let i = 1; i <= 10; i++) {
    console.log(i + message);
  }
}

displayNumbers(" ginger beers on the wall");
displayNumbers(" root beers on the wall");
//1 ginger beers on the wall
//2 ginger beers on the wall
//3 ginger beers on the wall
//4 ginger beers on the wall
//5 ginger beers on the wall
//6 ginger beers on the wall
//7 ginger beers on the wall
//8 ginger beers on the wall
//9 ginger beers on the wall
//10 ginger beers on the wall
//1 root beers on the wall
//2 root beers on the wall
//3 root beers on the wall
//4 root beers on the wall
//5 root beers on the wall
//6 root beers on the wall
//7 root beers on the wall
//8 root beers on the wall
//9 root beers on the wall
//10 root beers on the wall

function drawVerticalLine() {
  for (let i = 0; i < 3; i++) {
    console.log("| Ls |");
  }
}
drawVerticalLine();
//Konsolenausgabe:
// | Ls |
// | Ls |
// | Ls |

function drawVerticalLine(times) {
  for (let i = 0; i < times; i++) {
    console.log("|");
  }
}
drawVerticalLine(5);
//Konsolenausgabe:
// | 
// | 
// | 
// | 
// | 