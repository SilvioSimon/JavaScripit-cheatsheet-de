////////////////////////////////
// Bei synchronem Code gilt:
/////////////////////////////////
// Je länger eine Operation dauert,
// desto länger müssen wir warten, bis die nächste Codezeile ausgeführt wird.
console.log("We're calculating the first 6000 prime numbers.");
console.log("Waiting...");
const arr = [2];
let number = 3;

while (arr.length < 16000) {
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
// Asynchroner Code (Promise-Beispiel)
/////////////////////////////////
// Asynchroner Code wartet nicht darauf,
// dass die vorherige Anweisung abgeschlossen wird.
function asyncExample() {
  console.log("We're calculating the first 10,000 prime numbers.");
  const array = [2];
  let numbers = 3;
  while (array.length < 10000) {
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