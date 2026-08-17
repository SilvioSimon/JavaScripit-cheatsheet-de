///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Vererbung mit extends
///////////////////////////////////////////////////////////////
class Animal {
  // Erstellt ein Tier mit einem Namen.
  constructor(name) {
    this.name = name;
  }
}
// Dog erbt Eigenschaften von Animal.
class Dog extends Animal {}

// Neues Dog-Objekt erstellen.
const dog = new Dog("Pug");
// Namen des Hundes ausgeben.
console.log(dog.name); // Ausgabe: Pug

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Vererbung von Methoden
///////////////////////////////////////////////////////////////
class Animal {
  // Erstellt ein Tier mit einem Namen.
  constructor(name) {
    this.name = name;
  }
  // Methode zum Essen.
  eat() {
    console.log(this.name + " is eating"); // Ausgabe: Chocolate Lab is eating
  }
}
// Dog erbt Eigenschaften und Methoden von Animal.
class Dog extends Animal {}

// Neues Dog-Objekt erstellen.
const dog = new Dog("Chocolate Lab");
// Geerbte Methode aufrufen.
dog.eat();

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Vererbung mit mehreren Klassen
///////////////////////////////////////////////////////////////
class Animal {
  constructor(name) {
    this.name = name;
  }
  // Methode zum Essen.
  eat() {
    console.log(this.name + " is eating"); // Ausgabe: Chocolate Lab is eating
    //                                                 Blue Jay is eating
  }
}
// Dog & Bird erbt von Animal.
class Dog extends Animal {}
class Bird extends Animal {}

// Zwei verschiedene Objekte erstellen.
const dog = new Dog("Chocolate Lab");
const bird = new Bird("Blue Jay");

// Geerbte Methode aufrufen.
dog.eat();
bird.eat();

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – Methoden überschreiben (RPG)
///////////////////////////////////////////////////////////////
class Human {
  // Erstellt einen Menschen mit einer Waffe und 100 Gesundheit.
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }

  // Verringert die Gesundheit um 10.
  receiveDamage() {
    this.health = this.health - 10;
  }
}

// Wizard erbt von Human.
class Wizard extends Human {
  // Überschreibt die receiveDamage()-Methode.
  // Der Wizard verliert nur 5 Gesundheit.
  receiveDamage() {
    this.health = this.health - 5;
  }
}

// Neues Wizard-Objekt erstellen.
const wizard = new Wizard("staff");

// Startgesundheit ausgeben.
console.log(wizard.health);
// Schaden erhalten.
wizard.receiveDamage();
// Neue Gesundheit ausgeben.
console.log(wizard.health);

// Konsolenausgabe:
// 100
// 95

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – super
///////////////////////////////////////////////////////////////
class Human {
  // Methode des Elternobjekts.
  attack() {
    console.log("Human attacks");
  }
}
// Wizard erbt von Human.
class Wizard extends Human {
  // Überschreibt die attack()-Methode.
  attack() {
    // Ruft die attack()-Methode der Elternklasse auf.
    super.attack();

    console.log("Wizard uses magic");
  }
}
// Neues Wizard-Objekt erstellen.
const wizardSuper = new Wizard();
// Methode aufrufen.
wizardSuper.attack();
// Konsolenausgabe:
// Human attacks
// Wizard uses magic

///////////////////////////////////////////////////////////////
// Klassen in JavaScript – super und Vererbung
///////////////////////////////////////////////////////////////
class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }

  // Gibt den Angriff mit der Waffe aus.
  attack() {
    console.log("Swings " + this.weapon);
  }
}

// Warrior erbt von Human.
class Warrior extends Human {

  // Übergibt die Waffe an die Elternklasse.
  constructor(weapon, warCry) {
    super(weapon);
    this.warCry = warCry;
  }
  // Warrior verliert nur 5 Gesundheit.
  receiveDamage() {
    this.health = this.health - 5;
  }
  // Überschreibt die attack()-Methode.
  attack() {
    super.attack();
    console.log(this.warCry);
  }
}
// Neues Warrior-Objekt erstellen.
const warrior = new Warrior("sword", "Barritus!");
console.log(warrior.warCry);
// Kriegsruf ausgeben. --> Konsolenausgabe: Barritus!