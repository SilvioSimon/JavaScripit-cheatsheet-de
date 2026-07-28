// ==============================
// ARRAY-ELEMENT ÄNDERN
// ==============================
const temperatures = [17, 20, 26, 24];
temperatures[2] = 25; //Ändere Temperatur 26-->25 im Arrays
console.log(temperatures);
// Konsolenausgabe [ 17, 20, 25, 24 ]



// ==============================
// ARRAY-ELEMENT ÜBER INDEX LESEN
// ==============================
const items = ["milk", "tomato", "apple"];
console.log(items[1]);
// Konsolenausgabe: tomato



// ==============================
// .push() - ELEMENT HINZUFÜGEN
// ==============================
{
  const toDo = ["Anrufen", "Tischen"];
  toDo.push("Aufräumen");
  console.log(toDo);
  //Konsolenausgabe ['Anrufen', 'Tischen', 'Aufräumen']
  // .push() gibt Wert dazu
}



// ==============================
// .pop() - LETZTES ELEMENT ENTFERNEN
// ==============================
{
  const toDo = ["Anrufen", "Tischen", "Aufräumen"];
  toDo.pop();
  console.log(toDo);
  //Konsolenausgabe ['Anrufen', 'Tischen']
  // .pop() entfernt letzte Wert
}



// ==============================
// .push() - MEHRERE ELEMENTE HINZUFÜGEN
// ==============================
{
  const transactions = [-100, 5];
  transactions.push(2, 500);
  console.log(transactions);
  //Konsolenausgabe [ -100, 5, 2, 500 ]
}



// ==============================
// .length - ANZAHL DER ELEMENTE
// ==============================
{
  const tasks = ["dishes", "windows", "vacuum"];
  console.log(tasks.length);
  //Konsolenausgabe: 3
}



// ==============================
// .length MIT IF-BEDINGUNG
// ==============================
{
  const tasks = ["dishes", "windows", "vacuum"];
  if (tasks.length > 0) {
    console.log("Ugh, more work!");
  }
  // Konsolenausgabe: Ugh, more work!
}



// ==============================
// .pop() - RÜCKGABEWERT SPEICHERN
// ==============================
const doorCode = [2, 5, 1, 6, 99];
let digit = doorCode.pop();
console.log(digit);  // [99]
console.log(doorCode); // [2, 5, 1, 6]



// ==============================
// ARRAY MIT FOR-SCHLEIFE DURCHLAUFEN
// ==============================
const friends = ["Hannah", "Eve", "Samuel"];
for (let i = 0; i < friends.length; i++) {
 console.log(friends[i]);
}
// friends[i] 
// --> i ist die Wert & (friends) ist eine Variable

//Konsolenausgabe:
//Ana
//Eve
//Sam

// Index	Wert
// 0	    "Hannah"
// 1	    "Eve"
// 2	    "Samuel"