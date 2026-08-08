// ============================================================
// 1. OBJECTS – Eigenschaften ändern
// ============================================================

const myClothes = {
  shirts: 1,
};

myClothes.shirts++;

console.log(myClothes.shirts);
// Konsolenausgabe: 2

// ============================================================
// 2. ARROW FUNCTIONS – Kurzschreibweise
// ============================================================

// Arrow Functions sind eine ES6-Funktionalität und
// ermöglichen eine kürzere Schreibweise für Funktionen.

function getGreeting() {
  return "Hello";
}

const greeting = () => "Hi";

console.log(getGreeting());
console.log(greeting());

// Konsolenausgabe: Hello
// Konsolenausgabe: Hi

// ============================================================
// 3. ARROW FUNCTION vs. NORMALE FUNCTION
// ============================================================

// Arrow Function
const greetingOli = () => "HI";

// Entspricht im Prinzip einer normalen Funktion:
function greetingConi() {
  return "HI";
}

// Erklärung der Arrow Function:
//
// ()    → keine Parameter
// =>    → Arrow-Function-Syntax
// 'HI'  → wird automatisch zurückgegeben

console.log(greetingOli());
console.log(greetingConi());

// Konsolenausgabe: HI
// Konsolenausgabe: HI

// ============================================================
// 4. ARROW FUNCTION – DISCOUNT
// ============================================================

const getPrice = (discount) => 500 - discount * 500;

console.log(getPrice(0.25));

// Konsolenausgabe: 375

// ============================================================
// 5. ARROW FUNCTION – DISCOUNT BERECHNEN
// ============================================================

const getPriceA = (total) => {
  const discount = 0.1;
  return total - discount * total;
};

console.log(getPriceA(500));

// Konsolenausgabe: 450

// ============================================================
// 6. FUNCTION – RATIO BERECHNEN
// ============================================================

const getRatio = (nom, denom) => {
  return nom / denom;
};

console.log(getRatio(40, 4));

// Konsolenausgabe: 10

// ============================================================
// 7. TEMPLATE LITERALS – STRING INTERPOLATION
// ============================================================

// "Text " + variable → ältere Schreibweise
// `Text ${variable}` → moderne ES6-Schreibweise

const fullName = "John McCree";

console.log("Hello " + fullName + "!");
console.log(`Hello ${fullName}!`);

// ============================================================
// 8. TEMPLATE LITERALS – BERECHNUNG
// ============================================================

const quantity = 20;
const price = 10;

const cost = `Total cost: ${quantity * price}`;

console.log(cost);

// Konsolenausgabe: Total cost: 200
