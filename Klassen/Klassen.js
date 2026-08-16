///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Konstruktor und Objekte
///////////////////////////////////////////////////////////////
// Wir können die Werte, die wir für das neue Objekt festlegen
// möchten, beim Erstellen des Objekts in die Klammern einfügen.
class Book {
  constructor(author, title) {
    this.author = author; //this--> Code mitzuteilen, dass wir uns auf das Objekt beziehen
    this.title = title; //this--> ""
  }
}
const book1 = new Book("Leo Tolstoy", "War and Peace"); //Hier werden wir "new" Book() der Konstante book1 zuweisen.
const book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!");
console.log(book1);
console.log(book2);

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Object-Oriented Programming
///////////////////////////////////////////////////////////////
class VirtualPet {
  // Der constructor() wird automatisch aufgerufen,
  // wenn ein neues Objekt mit "new" erstellt wird.
  //
  // "name" ist ein Parameter, über den wir den Namen
  // des virtuellen Haustiers übergeben.
  constructor(name) {
    // "this" bezieht sich auf das aktuell erstellte Objekt.
    // Der übergebene Name wird als Eigenschaft gespeichert.
    this.name = name;
  }

  // Methoden sind Funktionen, die zu einer Klasse gehören.
  // Diese Methode wird ausgeführt, wenn das Haustier "isst".
  eat() {
    console.log("nom nom");
  }
}
// Mit "new VirtualPet()" erstellen wir ein neues Objekt
// aus der Klasse "VirtualPet".
//
// Der Name "Tom" wird an den constructor() übergeben.
const pet = new VirtualPet("Tom");
pet.eat(); // Ruft die Methode "eat()" des Objekts "pet" auf.

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Inventory und Methoden
///////////////////////////////////////////////////////////////
class Inventory {
  // Der constructor() wird beim Erstellen eines neuen
  // Inventory-Objekts automatisch aufgerufen.
  // "size" ist der Startwert für die Größe des Inventars.
  constructor(size) {
    // "this.size" speichert die übergebene Größe
    // als Eigenschaft des aktuellen Objekts.
    this.size = size;
  }
  // Mit dieser Methode kann die Größe des Inventars
  // um einen bestimmten Wert erhöht werden.
  //
  // "unit" ist der Wert, um den das Inventar vergrößert wird.
  increase(unit) {
    // Der Wert von "unit" wird zur aktuellen Größe addiert.
    //
    // Beispiel:
    // size = 10
    // unit = 5
    // Ergebnis: size = 15
    this.size += unit;
  }
}
// Mit "new Inventory(10)" wird ein neues Objekt erstellt.
// Die Startgröße des Inventars beträgt 10.
const bag = new Inventory(10);
// Gibt das aktuelle Inventory-Objekt in der Konsole aus.
// Ergebnis: Inventory { size: 10 }
console.log(bag);

///////////////////////////////////////////////////////////////
// Instanz in einer Klasse
///////////////////////////////////////////////////////////////
class User {
  constructor(name) {
    // Speichert den übergebenen Namen im Objekt.
    this.name = name;
    // Jeder neue Benutzer ist standardmäßig online.
    this.isOnline = true;
  }
}
// Mit "new User()" erstellen wir ein neues Objekt
// aus der Klasse "User".
//
// "Philipp" wird an den constructor() übergeben. etc..
const user1 = new User("Philipp");
const user2 = new User("Bran");
const user3 = new User("Thawatchai");
const user4 = new User("Arya");
user2.isOnline = false;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Food-Objekte
///////////////////////////////////////////////////////////////
class Food {
  constructor(name, calories) {
    // Speichert den Namen des Lebensmittels im Objekt.
    this.name = name;
    // Speichert die Kalorienanzahl im Objekt.
    this.calories = calories;
  }
}
// name = "banana"
// calories = 105
const banana = new Food("banana", 105);
console.log(banana);

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – User und Methoden
///////////////////////////////////////////////////////////////
class Benutzer {
  constructor(name) {
    this.name = name;
    this.isOnline = true;
  }

  // Gibt eine Begrüssung mit dem Namen des Users aus.
  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
}
// Zwei User-Objekte erstellen.
const user8 = new Benutzer("Samira");
const user9 = new Benutzer("Darius");

// Methode der jeweiligen User aufrufen.
user8.sayHi();
user9.sayHi();

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Building
///////////////////////////////////////////////////////////////
class Building {
  // Erstellt ein neues Gebäude mit Türen und Fenstern.
  constructor(doors, windows) {
    this.doors = doors;
    this.windows = windows;
  }
}
// Erstellt ein Haus mit 2 Türen und 6 Fenstern.
const house = new Building(2, 6);
console.log(house);