////////////////////////////////
// Bei synchronem Code gilt:
/////////////////////////////////
// Je länger eine Operation dauert,
// desto länger müssen wir warten, bis die nächste Codezeile ausgeführt wird.
console.log("We're calculating the first 6000 prime numbers.");
console.log("Waiting...");
const arr = [2];
let number = 3;

while (arr.length < 12000) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      number++;
      break;
    }
    if (i === number - 1) {
      arr.push(number);
      number++;
      break;
    }
  }
}
console.log(`We finished calculating the first ${arr.length} prime numbers.`);
console.log("We had to wait for this line to print.");

////////////////////////////////
// Asynchroner Code (Promise-Beispiel) /
// Was ist asynchroner Code?--> Code, der gleichzeitig mit anderem Code ausgeführt werden kann
/////////////////////////////////
// Asynchroner Code wartet nicht darauf,
// dass die vorherige Anweisung abgeschlossen wird.
function asyncExample() {
  console.log("We're calculating the first 10,000 prime numbers.");
  const array = [2];
  let numbers = 3;
  while (array.length < 12000) {
    for (let i = 2; i < numbers; i++) {
      if (numbers % i === 0) {
        numbers++;
        break;
      }
      if (i === numbers - 1) {
        array.push(numbers);
        numbers++;
        break;
      }
    }
  }
  return Promise.resolve(array);
}
asyncExample().then(function (value) {
  console.log(`We calculated the first ${value.length} prime numbers`);
});
console.log("This line is printed during the calculation.");

///////////////////////////////////////////////////////////////
// Schleife
///////////////////////////////////////////////////////////////
const arrX = [1, 2, 3, 4, 5];
for (let i = 0; i < arrX.length; i++) {
  // Die Schleife läuft, solange i kleiner als die Array-Länge ist
  arrX[i] *= 5; // Das aktuelle Array-Element mit 5 multiplizieren
  console.log(arrX[i]);
}
console.log("Finished!");

///////////////////////////////////////////////////////////////
//Callback-Funktion//
///////////////////////////////////////////////////////////////
//Ein Callback ist eine Funktion, die du einer anderen Funktion übergibst,
//damit diese sie später bzw. an einer bestimmten Stelle ausführen kann.
function add(number1, number2, callback) {
  let result = number1 + number2;
  callback(result);
}

function logResult(result) {
  console.log(`The result is: ${result}`);
}
add(2, 3, logResult);

///////////////////////////////////////////////////////////////
//Callback-Funktionen in Methoden .map() verwendet.
///////////////////////////////////////////////////////////////
// .map() ist eine Array-Methode.
// Sie durchläuft jedes Element eines Arrays,
// führt für jedes Element eine Callback-Funktion aus
// und erstellt daraus ein neues Array.
// Das ursprüngliche Array bleibt dabei unverändert.

// Beispiel:
// [1, 2, 3] → map() → [2, 4, 6]

const arrQ = [1, 2, 3, 4, 5];

function callback(num) {
  return num * 2; // Verdoppelt jede Zahl und gibt das Ergebnis zurück.
}
const newArray = arrQ.map(callback);
console.log(newArray); // Gibt das neue Array aus: [2, 4, 6, 8, 10]
console.log("This code is synchronous.");


///////////////////////////////////////////////////////////////
// Callback-Funktion – Funktion als Argument übergeben
///////////////////////////////////////////////////////////////
//                   |       |
const sayHello = (name, callback) => {
  console.log(`Hello, ${name}!`); //name = "Jon"
  callback(); //callback = sayGoodbye
};
//callback: Führe die Funktion aus, die im Parameter callback gespeichert ist
//Alternative als Arrow Function:
//const sayGoodbye = () => console.log("Goodbye!");
const sayGoodbye = function () {
  console.log("Goodbye!");
};
// "Jon" wird an name übergeben.
// "sayGoodbye" wird an callback übergeben.
sayHello("Jony", sayGoodbye);

///////////////////////////////////////////////////////////////
// Callback-Funktion (2) – Funktion als Argument übergeben
///////////////////////////////////////////////////////////////
// 1. Start: doSomeMath(2, multiplyCallback) (Unten nach Oben)
// 2. 2 wird an "input" übergeben.
// 3. multiplyCallback wird an "callback" übergeben.
// 4. doSomeMath() wird ausgeführt.
// 5. callback(input) → multiplyCallback(2)
// 6. num = 2 → result = 2 * 2 → 4
// 7. Ausgabe: "The input doubled is equal to 4"
function multiplyCallback(num) {
  const result = num * 2;
  console.log(`The input doubled is equal to ${result}`);
}

function doSomeMath(input, callback) {
  console.log("We are doubling the input number.");
  callback(input);
}
doSomeMath(2, multiplyCallback);
