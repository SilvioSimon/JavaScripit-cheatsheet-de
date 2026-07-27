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