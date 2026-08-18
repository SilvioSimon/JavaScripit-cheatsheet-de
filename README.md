# 📘 JavaScript Nachschlagewerk

Ein umfassendes Referenzwerk zu JavaScript-Grundlagen: DOM, ES6, Arrays, Schleifen, Funktionen, Objekte, Klassen und Asynchronität. Basierend auf gesammelten Lernnotizen und Übungen.

---

## 📑 Inhaltsverzeichnis (Register)

1. [DOM-Manipulation](#1-dom-manipulation)
   - 1.1 [Elemente auswählen](#11-elemente-auswählen)
   - 1.2 [Elemente erstellen & einfügen](#12-elemente-erstellen--einfügen)
   - 1.3 [Inhalte ändern](#13-inhalte-ändern)
   - 1.4 [Attribute](#14-attribute)
   - 1.5 [CSS-Klassen](#15-css-klassen)
   - 1.6 [Styles direkt ändern](#16-styles-direkt-ändern)
   - 1.7 [DOM-Struktur navigieren](#17-dom-struktur-navigieren)
   - 1.8 [Events](#18-events)
   - 1.9 [Elemente entfernen](#19-elemente-entfernen)
   - 1.10 [DOM Super-Merkzettel](#110-dom-super-merkzettel)
2. [ES6-Features](#2-es6-features)
   - 2.1 [Arrow Functions](#21-arrow-functions)
   - 2.2 [Template Literals](#22-template-literals)
   - 2.3 [Array Destructuring](#23-array-destructuring)
   - 2.4 [Object Destructuring](#24-object-destructuring)
3. [Variablen & Objekte](#3-variablen--objekte)
   - 3.1 [Object Literals](#31-object-literals)
   - 3.2 [Objekt-Methoden & `this`](#32-objekt-methoden--this)
   - 3.3 [JSON](#33-json)
4. [Funktionen](#4-funktionen)
   - 4.1 [Grundlagen](#41-grundlagen)
   - 4.2 [Parameter & Rückgabewerte](#42-parameter--rückgabewerte)
   - 4.3 [Bedingungen in Funktionen](#43-bedingungen-in-funktionen)
5. [Schleifen](#5-schleifen)
   - 5.1 [for-Schleife](#51-for-schleife)
   - 5.2 [while-Schleife](#52-while-schleife)
   - 5.3 [for...of-Schleife](#53-forof-schleife)
   - 5.4 [break & continue](#54-break--continue)
6. [Arrays & Array-Methoden](#6-arrays--array-methoden)
   - 6.1 [Arrays erstellen & verändern](#61-arrays-erstellen--verändern)
   - 6.2 [push(), pop(), includes()](#62-push-pop-includes)
   - 6.3 [Schleifen über Arrays](#63-schleifen-über-arrays)
   - 6.4 [map()](#64-map)
   - 6.5 [filter()](#65-filter)
   - 6.6 [reduce()](#66-reduce)
   - 6.7 [find()](#67-find)
7. [Klassen (OOP)](#7-klassen-oop)
   - 7.1 [Konstruktor & Objekte](#71-konstruktor--objekte)
   - 7.2 [Methoden](#72-methoden)
   - 7.3 [Vererbung mit `extends`](#73-vererbung-mit-extends)
   - 7.4 [Methoden überschreiben](#74-methoden-überschreiben)
   - 7.5 [`super`](#75-super)
8. [Synchronität & Asynchronität](#8-synchronität--asynchronität)
   - 8.1 [Synchroner Code](#81-synchroner-code)
   - 8.2 [Asynchroner Code / Promises](#82-asynchroner-code--promises)
   - 8.3 [Callback-Funktionen](#83-callback-funktionen)
9. [Wichtige Operatoren & Konzepte](#9-wichtige-operatoren--konzepte)
10. [Schnellreferenz-Tabellen](#10-schnellreferenz-tabellen)

---

## 1. DOM-Manipulation

Das **DOM (Document Object Model)** ist die Schnittstelle, über die JavaScript auf HTML-Elemente einer Webseite zugreifen und sie verändern kann.

**Merkregel:**
```
GET / QUERY  → vorhandenes Element finden
CREATE       → neues Element erstellen
APPEND       → Element in den DOM einfügen
REMOVE       → Element entfernen
```

### 1.1 Elemente auswählen

| Methode | Beschreibung | Rückgabe |
|---|---|---|
| `document.querySelector(css)` | Erstes passendes Element (CSS-Selektor) | Einzelnes Element |
| `document.querySelectorAll(css)` | Alle passenden Elemente | NodeList |
| `document.getElementById(id)` | Element per ID | Einzelnes Element |
| `document.getElementsByClassName(class)` | Elemente per Klasse | HTMLCollection |
| `document.getElementsByTagName(tag)` | Elemente per Tag-Name | HTMLCollection |

```js
const heading = document.querySelector("h1");
const items = document.querySelectorAll(".item");
const title = document.getElementById("title");
const importantItems = document.getElementsByClassName("important");
const paragraphs = document.getElementsByTagName("p");
```

CSS-Selektoren zur Erinnerung:
- `"h1"` → HTML-Tag
- `".title"` → Klasse
- `"#title"` → ID

### 1.2 Elemente erstellen & einfügen

```js
const paragraph = document.createElement("p"); // nur im Speicher, noch nicht sichtbar!
document.body.appendChild(paragraph);          // ans Ende anhängen
document.body.append(paragraph);                // ans Ende anhängen (Text oder Element)
document.body.prepend(paragraph);                // an den Anfang anhängen
```

| Methode | Bedeutung |
|---|---|
| `appendChild(child)` | Fügt ein Element als **letztes Kind** hinzu |
| `append(content)` | Fügt Inhalt (Text oder Element) am **Ende** ein |
| `prepend(content)` | Fügt Inhalt am **Anfang** ein |

### 1.3 Inhalte ändern

```js
paragraph.textContent = "Hallo Welt";        // reiner Text
paragraph.innerHTML = "<b>Hallo Welt</b>";    // HTML wird interpretiert
```

> ⚠️ `innerHTML` interpretiert HTML-Tags – bei Nutzereingaben Vorsicht (XSS-Risiko)!

### 1.4 Attribute

```js
image.setAttribute("src", "image.jpg");     // Attribut setzen
const src = image.getAttribute("src");      // Attribut lesen
image.removeAttribute("disabled");           // Attribut entfernen
```

⚠️ **Wichtig:** `setAttribute("class", "test_class")` **überschreibt** das komplette `class`-Attribut. Bereits vorhandene Klassen gehen dabei verloren! Für additives Hinzufügen `classList.add()` verwenden.

```js
// Überschreibt existing-class!
demo.setAttribute("class", "test_class");

// Fügt hinzu, ohne vorhandene Klassen zu löschen
demo.classList.add("existing-class");
```

### 1.5 CSS-Klassen

| Methode | Bedeutung |
|---|---|
| `classList.add("klasse")` | Klasse hinzufügen |
| `classList.remove("klasse")` | Klasse entfernen |
| `classList.toggle("klasse")` | An ↔ Aus schalten |
| `classList.contains("klasse")` | Prüfen, ob Klasse vorhanden ist (`true`/`false`) |

```js
paragraph.classList.add("bold");
paragraph.classList.remove("bold");
paragraph.classList.toggle("active");
const isActive = paragraph.classList.contains("active");
```

### 1.6 Styles direkt ändern

```js
paragraph.style.color = "red"; // <p style="color: red;">
```

### 1.7 DOM-Struktur navigieren

| Eigenschaft | Bedeutung |
|---|---|
| `.parentElement` | Direktes Elternelement |
| `.children` | Alle Kind-Elemente |
| `.firstElementChild` | Erstes Kind |
| `.lastElementChild` | Letztes Kind |

### 1.8 Events

```js
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Button wurde geklickt!");
});
```

Syntax: `element.addEventListener("EVENT", FUNKTION)` — z. B. `"click"`, `"input"`, `"submit"`.

### 1.9 Elemente entfernen

```js
paragraph.remove();
```

### 1.10 DOM Super-Merkzettel

```
SUCHEN                          ERSTELLEN
querySelector()  → 1. Element   createElement() → neues Element
querySelectorAll() → alle

INHALT              EINFÜGEN                ATTRIBUTE
textContent → Text   appendChild()           setAttribute()
innerHTML   → HTML   append() / prepend()    getAttribute()
                                              removeAttribute()

CSS-KLASSEN               STRUKTUR              EVENTS / ENTFERNEN
classList.add/remove/      parentElement         addEventListener()
toggle/contains            children              remove()
                            firstElementChild
                            lastElementChild
```

**Denkweise:** Finden → Erstellen → Verändern → Einfügen → Reagieren → Entfernen

---

## 2. ES6-Features

### 2.1 Arrow Functions

Kürzere Schreibweise für Funktionen, eingeführt mit ES6.

```js
function getGreeting() { return "Hello"; }
const greeting = () => "Hi";
```

Erklärung: `()` keine Parameter · `=>` Arrow-Syntax · Rückgabewert automatisch (bei One-Liner ohne `{}`).

```js
const getPrice = (discount) => 500 - discount * 500;
console.log(getPrice(0.25)); // 375

// Mit Codeblock braucht es ein explizites return:
const getPriceA = (total) => {
  const discount = 0.1;
  return total - discount * total;
};
```

### 2.2 Template Literals

Backticks (`` ` ``) statt String-Verkettung, mit `${}` für Interpolation.

```js
const fullName = "John McCree";
console.log("Hello " + fullName + "!"); // klassisch
console.log(`Hello ${fullName}!`);       // ES6

const cost = `Total cost: ${20 * 10}`; // Total cost: 200
```

**Tagged Template Literals:** Backticks können statt Klammern direkt hinter einer Funktion stehen:
```js
const greetings = (name) => `Bonjour ${name}!`;
console.log(greetings`Jane`); // entspricht greetings('Jane')
```

### 2.3 Array Destructuring

```js
const cars = ["Honda", "Volkswagen", "Bentley"];
const [firstCar, secondCar] = cars; // Honda, Volkswagen

// Rest-Operator: restliche Elemente sammeln
const [companyName, ...rest] = ["Leo Pizza", "123", "Adresse"];

// Elemente überspringen mit Kommas
const [, , address] = ["Leo Pizza", "123", "Adresse"]; // "Adresse"

// In Funktionsparametern destrukturieren
function getMaterials([first, second]) {
  console.log(`${first} und ${second}`);
}
```

### 2.4 Object Destructuring

```js
const carInfo = { item1: "Mazda", item2: "cx30", item3: "red" };

// Umbenennen beim Destructuring
const { item1: brand, item2: model, item3: color } = carInfo;

// Rest-Operator bei Objekten
const user = { firstName: "John", lastName: "Smith", age: 41 };
const { firstName, lastName, ...otherInfo } = user;
// otherInfo → { age: 41 }
```

**Vorher (ES5) vs. Nachher (ES6):**
```js
// ES5
var brand = carInfo.item1;
// ES6
const { item1: brand } = carInfo;
```

---

## 3. Variablen & Objekte

### 3.1 Object Literals

```js
const cat = { name: "Garfield", favoriteFood: "Lasagna" };

const person = { name: "Joe Exotic", nickname: "Tiger King", age: 57 };
console.log(person.nickname);   // Zugriff
person.nickname = "Tiger Prince"; // Ändern
```

### 3.2 Objekt-Methoden & `this`

```js
const dog = {
  name: "Odie",
  bark: function (word) {
    console.log("woof woof!");
    return "woof woof wooooof, " + word;
  },
};
dog.bark("hungry");
```

`this` bezieht sich innerhalb einer Objekt-Methode auf das **aktuelle Objekt**:
```js
const myCereal = {
  name: "Trix",
  display: function () { console.log(this.name); }, // "Trix"
};
```

### 3.3 JSON

| Methode | Richtung |
|---|---|
| `JSON.stringify(obj)` | JS-Objekt → JSON-String |
| `JSON.parse(str)` | JSON-String → JS-Objekt |

```js
const concert = { band: "Super Carrots", music: "Indie" };
JSON.stringify(concert); // '{"band":"Super Carrots","music":"Indie"}'

const puppy = '{"name":"Rocko","age":1}';
JSON.parse(puppy); // { name: 'Rocko', age: 1 }
```

---

## 4. Funktionen

### 4.1 Grundlagen

```js
function greetUser() {
  console.log("Good morning Anna");
}
greetUser();
```

### 4.2 Parameter & Rückgabewerte

```js
function greet(name) {
  console.log("Hello, " + name);
}
greet("MAMA");

function userAge(number) {
  return "User age: " + number;
}
const result = userAge(39);
```

- Ohne `return` gibt eine Funktion `undefined` zurück.
- `return` **beendet** die Funktion sofort — Code danach wird nicht mehr ausgeführt:

```js
function multiplyByTen(number) {
  return number * 10;
  return "wird nie erreicht";
}
```

Ein Array kann ebenfalls als Parameter übergeben werden:
```js
function displayUserID(user) {
  console.log(user[0], user[1]);
}
displayUserID(["Don Quixote", 992]);
```

### 4.3 Bedingungen in Funktionen

```js
function isRentingAge(age) {
  if (age >= 21) {
    console.log("Approved");
  }
  console.log("Check Complete"); // wird immer ausgeführt
}

function checkPassword(word) {
  if (word === "12345") {
    console.log("Logging in");
  } else {
    console.log("Wrong password");
  }
}

function getDiscount(age) {
  if (age <= 18) return "50% OFF";
  else if (age >= 65) return "30%";
  return "Full price";
}
```

---

## 5. Schleifen

### 5.1 for-Schleife

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
Aufbau: `for (Start; Bedingung; Schritt)`

**Rückwärts zählen:**
```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
```

**In Schritten von 3:**
```js
for (let i = 0; i < arr.length; i += 3) {
  console.log(arr[i]);
}
```

### 5.2 while-Schleife

```js
let counter = 1;
while (counter < 5) {
  console.log(counter);
  counter++;
}
```

`while` prüft die Bedingung **vor** jedem Durchlauf und läuft, solange sie `true` ist.

### 5.3 for...of-Schleife

Durchläuft direkt die **Werte** eines iterierbaren Objekts (z. B. Array), ohne Index:

```js
const fahrenheit = [72, 68, 70];
const celsius = [];
for (const element of fahrenheit) {
  celsius.push((element - 32) * (5 / 9));
}
```

### 5.4 break & continue

| Keyword | Wirkung |
|---|---|
| `break` | Beendet die Schleife **sofort komplett** |
| `continue` | Überspringt **nur den aktuellen Durchlauf**, Schleife läuft weiter |

```js
function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] == "error") break; // stoppt komplett
  }
  return sum;
}

function sumArray2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "error") continue; // überspringt nur dieses Element
    sum += arr[i];
  }
  return sum;
}
```

---

## 6. Arrays & Array-Methoden

### 6.1 Arrays erstellen & verändern

```js
let myList = [12, "Cyber Crime", true];
myList[0] = "No Banana"; // Wert per Index ändern

const cars = [];
cars[0] = "Saab";
cars[2] = "BMW"; // cars[1] bleibt "empty" — sollte vermieden werden
```

### 6.2 push(), pop(), includes()

| Methode | Bedeutung |
|---|---|
| `.push(el)` | Fügt Element(e) am **Ende** hinzu |
| `.pop()` | Entfernt das **letzte** Element |
| `.includes(el)` | Prüft, ob ein Wert enthalten ist (`true`/`false`, case-sensitive) |

```js
let fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
fruits.includes("Banana"); // true

let vegi = ["spinach", "potatoes", "beans"];
vegi.pop(); // entfernt "beans"
```

### 6.3 Schleifen über Arrays

```js
function searchGrade(grades, search) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === search) {
      console.log("gefunden!");
      break;
    }
  }
}
```

**Elemente an gleicher Position vergleichen:**
```js
function compareArrays(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (one[i] === two[i]) console.log("Common element:", one[i]);
  }
}
```

**Zwei Arrays elementweise verrechnen:**
```js
function multiply(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] * b[i]);
  }
  return result;
}
multiply([1, 2, 3, 4], [5, 6, 7, 8]); // [5, 12, 21, 32]
```

### 6.4 map()

> **Jedes Element umwandeln → neues Array** (gleiche Länge wie Original)

```js
const values = [56, 27, 19];
const evenOrOdd = values.map((el) => el % 2 === 0); // [true, false, false]

const states = ["ak", "md", "va"];
const upper = states.map((el) => el.toUpperCase()); // ['AK', 'MD', 'VA']

const withIndex = ["Sarah", "Hank"].map((el, i) => `${i}: ${el}`);
```

### 6.5 filter()

> **Elemente auswählen, die eine Bedingung erfüllen → neues (kürzeres) Array**

```js
const testScores = [72, 95, 90, 71];
const high = testScores.filter((el) => el >= 90); // [95, 90]

const names = ["Ben", "Sarah", "Sean"];
const sNames = names.filter((el) => el[0] === "S"); // ["Sarah", "Sean"]

// Mit Index filtern (z. B. Top 3)
const top3 = ["Sarah","Sally","Jake","Alex"].filter((el, i) => i < 3);
```

### 6.6 reduce()

> **Alle Elemente zu einem einzigen Wert zusammenfassen**

```js
const miles = [33, 95, 79];
const total = miles.reduce((prev, curr) => prev + curr); // 207

// Mit Index auf ein zweites Array zugreifen
const prices = [17.5, 20.25, 24.75];
const factors = [0.9, 0.9, 1.0];
const totalPrice = prices.reduce((prev, curr, i) => prev + curr * factors[i], 0);

// Strings zusammenfügen
const sentence = ["The", "house", "is", "red"].reduce((p, c) => p + " " + c);
// "The house is red"
```

### 6.7 find()

> Gibt das **erste** Element zurück, das eine Bedingung erfüllt (oder `undefined`)

```js
const fruits = ["apples", "bananas", "oranges"];
const found = fruits.find((fruit) => fruit === "apples"); // "apples"
```

**Übersicht der Array-Methoden:**

| Methode | Zweck | Rückgabe |
|---|---|---|
| `.map()` | Jedes Element umwandeln | Neues Array (gleiche Länge) |
| `.filter()` | Elemente nach Bedingung auswählen | Neues (Teil-)Array |
| `.reduce()` | Alle Werte zu einem Ergebnis kombinieren | Einzelner Wert |
| `.find()` | Erstes passendes Element finden | Einzelnes Element / `undefined` |
| `.push()` / `.pop()` | Element hinzufügen / entfernen (Ende) | verändert Original |
| `.includes()` | Enthält-Prüfung | `true`/`false` |

---

## 7. Klassen (OOP)

### 7.1 Konstruktor & Objekte

```js
class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
const book1 = new Book("Leo Tolstoy", "War and Peace");
```

`this` bezieht sich im Konstruktor auf das **neu erstellte Objekt**. `new Klasse(...)` erzeugt eine Instanz.

### 7.2 Methoden

```js
class VirtualPet {
  constructor(name) { this.name = name; }
  eat() { console.log("nom nom"); }
}
const pet = new VirtualPet("Tom");
pet.eat();
```

### 7.3 Vererbung mit `extends`

```js
class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(this.name + " is eating"); }
}
class Dog extends Animal {} // erbt Eigenschaften & Methoden

const dog = new Dog("Pug");
dog.eat(); // "Pug is eating"
```

Mehrere Klassen können von derselben Elternklasse erben:
```js
class Bird extends Animal {}
```

### 7.4 Methoden überschreiben

Eine Kindklasse kann eine geerbte Methode **komplett ersetzen**:

```js
class Human {
  constructor(weapon) { this.weapon = weapon; this.health = 100; }
  receiveDamage() { this.health -= 10; }
}
class Wizard extends Human {
  receiveDamage() { this.health -= 5; } // überschreibt Human.receiveDamage()
}
```

### 7.5 `super`

`super` ruft die Methode bzw. den Konstruktor der **Elternklasse** auf.

```js
class Human {
  constructor(weapon) { this.weapon = weapon; this.health = 100; }
  attack() { console.log("Swings " + this.weapon); }
}
class Warrior extends Human {
  constructor(weapon, warCry) {
    super(weapon);       // ruft Human-Konstruktor auf
    this.warCry = warCry;
  }
  attack() {
    super.attack();       // ruft Human.attack() auf
    console.log(this.warCry);
  }
}
const warrior = new Warrior("sword", "Barritus!");
warrior.attack();
// Swings sword
// Barritus!
```

**Merkregeln Klassen:**
| Begriff | Bedeutung |
|---|---|
| `class` | Bauplan für Objekte |
| `constructor()` | Wird bei `new Klasse()` automatisch ausgeführt |
| `this` | Verweist auf die aktuelle Instanz |
| `extends` | Vererbung — Kind erbt von Eltern |
| `super()` | Ruft Eltern-Konstruktor auf |
| `super.methode()` | Ruft Eltern-Methode auf |

---

## 8. Synchronität & Asynchronität

### 8.1 Synchroner Code

Bei synchronem Code wird jede Zeile **nacheinander** abgearbeitet. Je länger eine Operation dauert, desto länger blockiert sie die nächste Zeile.

```js
console.log("Start");
// ... lange Berechnung, blockiert alles ...
console.log("Ende"); // wartet, bis die Berechnung fertig ist
```

### 8.2 Asynchroner Code / Promises

Asynchroner Code **wartet nicht**, bis eine Operation fertig ist – der restliche Code läuft parallel weiter.

```js
function asyncExample() {
  // ... Berechnung ...
  return Promise.resolve(array);
}
asyncExample().then(function (value) {
  console.log(`Fertig mit ${value.length} Elementen`);
});
console.log("Diese Zeile wird während der Berechnung ausgegeben.");
```

`.then()` wird erst ausgeführt, **wenn das Promise erfüllt (resolved) ist** — der Code danach läuft aber sofort weiter.

### 8.3 Callback-Funktionen

Ein **Callback** ist eine Funktion, die einer anderen Funktion als Argument übergeben wird, damit sie später (bzw. an bestimmter Stelle) ausgeführt wird.

```js
function add(number1, number2, callback) {
  const result = number1 + number2;
  callback(result);
}
function logResult(result) {
  console.log(`The result is: ${result}`);
}
add(2, 3, logResult); // "The result is: 5"
```

Array-Methoden wie `.map()` nutzen Callbacks intern:
```js
function double(num) { return num * 2; }
[1, 2, 3].map(double); // [2, 4, 6]
```

Auch mit Arrow Functions:
```js
const sayHello = (name, callback) => {
  console.log(`Hello, ${name}!`);
  callback();
};
const sayGoodbye = () => console.log("Goodbye!");
sayHello("Jony", sayGoodbye);
```

---

## 9. Wichtige Operatoren & Konzepte

| Operator / Konzept | Bedeutung | Beispiel |
|---|---|---|
| `%` (Modulo) | Rest einer Division | `10 % 3` → `1` |
| `===` | Strikter Vergleich (Typ + Wert) | `"5" === 5` → `false` |
| `&&` | logisches UND | `a > 1 && a < 10` |
| `\|\|` | logisches ODER | `a === 1 \|\| a === 2` |
| `++` / `--` | Erhöhen / Verringern um 1 | `counter++` |
| `+=` | Wert addieren & zuweisen | `sum += x` |
| Spread `...` | Elemente "auspacken" | `[...arr]` |
| Rest `...` | restliche Elemente sammeln | `const [a, ...rest] = arr` |
| Template Literals | String-Interpolation | `` `Hallo ${name}` `` |

**Primzahlen-Check (klassisches Schleifen-Pattern):**
```js
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
```

---

## 10. Schnellreferenz-Tabellen

### DOM
| Aufgabe | Code |
|---|---|
| Element finden | `document.querySelector(".klasse")` |
| Element erstellen | `document.createElement("div")` |
| Einfügen | `.appendChild(el)` |
| Text setzen | `.textContent = "..."` |
| HTML setzen | `.innerHTML = "..."` |
| Klasse umschalten | `.classList.toggle("aktiv")` |
| Event abfangen | `.addEventListener("click", fn)` |
| Entfernen | `.remove()` |

### Arrays
| Aufgabe | Code |
|---|---|
| Umwandeln | `arr.map(fn)` |
| Filtern | `arr.filter(fn)` |
| Zusammenfassen | `arr.reduce(fn)` |
| Suchen | `arr.find(fn)` |
| Hinzufügen (Ende) | `arr.push(x)` |
| Entfernen (Ende) | `arr.pop()` |
| Enthalten? | `arr.includes(x)` |

### Schleifen
| Typ | Wann verwenden |
|---|---|
| `for` | Feste Anzahl Durchläufe, Index nötig |
| `while` | Unbekannte Anzahl Durchläufe, Bedingung entscheidet |
| `for...of` | Direkt über Werte eines Arrays iterieren |
| `break` | Schleife sofort komplett verlassen |
| `continue` | Nur aktuellen Durchlauf überspringen |

### Funktionen & Klassen
| Konzept | Kurzform |
|---|---|
| Funktion | `function name(param) { ... }` |
| Arrow Function | `const name = (param) => { ... }` |
| Rückgabewert | `return wert;` |
| Klasse | `class Name { constructor() {...} }` |
| Vererbung | `class Kind extends Eltern {}` |
| Eltern-Zugriff | `super()` / `super.methode()` |

---

*Dieses Dokument dient als persönliches Nachschlagewerk für JavaScript-Grundlagen und wird laufend erweitert.*

## 5. Weitere Begriffe (kurz)

| Begriff | Einfach gesagt | Beispiel |
|---|---|---|
| Datentyp | Welche Art von Wert | `number`, `string`, `boolean` |
| String | Text | `"Hallo"` |
| Number | Zahl | `42` |
| Boolean | Wahr/Falsch | `true` |
| Objekt | Sammlung von Eigenschaften | `{name: "Max", alter: 30}` |
| Property | Merkmal eines Objekts | `name` |
| Funktion | Ausführbarer Code | `function hallo() {}` |
| Methode | Funktion, die zu etwas gehört | `user.login()` |
| Parameter | Eingabe einer Funktion | `function addiere(a, b)` |
| Argument | Tatsächlich übergebener Wert | `addiere(5, 3)` |

## Merksatz

> **Variable** = Name
> **Wert** = Inhalt
> **Array** = Sammlung von Werten
> **Element** = einzelner Bestandteil einer Sammlung/Struktur
> **HTML-Element** = `<button>`, `<div>`, `<p>` usw.

## Lernreihenfolge (empfohlen)

Variable → Wert → Datentyp → String → Number → Boolean → Array → **Element** → Objekt
