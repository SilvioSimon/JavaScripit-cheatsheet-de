// ==============================
// OBJECT LITERALS – GRUNDLAGEN
// Erstellt Objekte für eine Katze, einen Hund und eine Person,
// um zu zeigen, wie zusammengehörige Eigenschaften in einem
// Objekt gespeichert und anschließend in der Konsole ausgegeben werden.
// ==============================
const cat = {
  name: "Garfield",
  favoriteFood: "Lasagna",
};

//statt das verwenden: const
//name = "Garfield";
//const favoriteFood = "Lasagna";

const dog = {
  name: "Odie",
};

const person = {
  name: "Joe Exotic",
  nickname: "Tiger King",
  occupation: "Zookeeper",
  age: 57,
}
console.log(person);
// Gibt das komplette Person-Objekt in der Konsole aus.