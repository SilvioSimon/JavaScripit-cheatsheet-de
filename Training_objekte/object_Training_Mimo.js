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

// ==============================
// Beispiel Obejekt für Person
// ==============================
const person = {
  name: "Joe Exotic",
  nickname: "Tiger King",
  occupation: "Zookeeper",
  age: 57,
};
console.log(person);
// Gibt das komplette Person-Objekt in der Konsole aus.

console.log(person.nickname);
// Eigenschaft eines Objekts zugreifen

person.nickname = "Tiger Prince";
console.log(person);
// Eigenschaft eines Objekts ändern

// ==============================
// OBJECT METHOD – HUND BELLEN LASSEN
// Erstellt ein Hund-Objekt mit einem Namen und einer Methode.
// Die Methode `bark()` gibt den Laut "woof woof!" in der Konsole aus.
// ==============================
const dog = {
  name: "Odie",
  bark: function (word) {
    console.log("woof woof!");

    return "woof woof wooooof, " + word;
  },
};

dog.bark(); // Konsolenausgabe: woof woof!
console.log(dog.bark("hungry")); //Konsolenausgabe: woof woof, hungry

// ==============================
//Weitere Beispiel
// ==============================
const phone = {
  brand: "Apple",
  number: "555-555-5555",
  ring: function () {
    console.log("ding ding ding!");
  },
};
phone.ring();
// Konsolenausgabe: ding ding ding!