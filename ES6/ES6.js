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
    return 'Hello';
}

const greeting = () => 'Hi';

console.log(getGreeting());
console.log(greeting());

// Konsolenausgabe: Hello
// Konsolenausgabe: Hi


// ============================================================
// 3. ARROW FUNCTION vs. NORMALE FUNCTION
// ============================================================

// Arrow Function
const greetingOli = () => 'HI';

// Entspricht im Prinzip einer normalen Funktion:
function greetingConi() {
    return 'HI';
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
    const discount = 0.10;
    return total - discount * total;
};

console.log(getPriceA(500));

// Konsolenausgabe: 450
