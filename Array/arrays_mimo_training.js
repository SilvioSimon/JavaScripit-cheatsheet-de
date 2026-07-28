const temperatures = [17, 20, 26, 24];
temperatures[2] = 25; //Ändere Temperatur 26-->25 im Arrays
console.log(temperatures);
// Konsolenausgabe [ 17, 20, 25, 24 ]

const items = ["milk", "tomato", "apple"];
console.log(items[1]);
// Konsolenausgabe: tomato

{
  const toDo = ["Anrufen", "Tischen"];
  toDo.push("Aufräumen");
  console.log(toDo);
  //Konsolenausgabe ['Anrufen', 'Tischen', 'Aufräumen']
  // .push() gibt Wert dazu
}

{
  const toDo = ["Anrufen", "Tischen", "Aufräumen"];
  toDo.pop();
  console.log(toDo);
  //Konsolenausgabe ['Anrufen', 'Tischen']
  // .pop() entfernt letzte Wert
}

{
  const transactions = [-100, 5];
  transactions.push(2, 500);
  console.log(transactions);
  //Konsolenausgabe [ -100, 5, 2, 500 ]
}

{
  const tasks = ["dishes", "windows", "vacuum"];
  console.log(tasks.length);
  //Konsolenausgabe: 3
}

{
  const tasks = ["dishes", "windows", "vacuum"];
  if (tasks.length > 0) {
    console.log("Ugh, more work!");
  }
  // Konsolenausgabe: Ugh, more work!
}

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