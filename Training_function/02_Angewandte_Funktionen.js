// =====================================
// JAVASCRIPT FUNCTIONS - CONDITIONS & RETURN
// Beispiele: if, else, return und Funktionsablauf
// =====================================

// =====================================
// IF CONDITION - AGE CHECK
// =====================================
function isRentingAge(age) {
  if (age >= 21) {
    console.log("Approved");
  }
}
isRentingAge(26);
//Konsolenausgabe: Approved

// =====================================
// IF CONDITION - TIME CHECK
// =====================================
function displayAlarm(time) {
  if (time === "7:00") {
    console.log("Waky waky");
  }
}
displayAlarm("7:00");
//Konsolenausgabe: Waky waky

// =====================================
// IF CONDITION - CODE FLOW
// =====================================
function isRentingAgeX(age) {
  if (age >= 21) {
    console.log("Approved");
  }
  console.log("Check Complete");
}
isRentingAgeX(20);
//Konsolenausgabe: Check Complete
//IGNORIERT --console.log("Approved");--

// =====================================
// IF / ELSE CONDITION - PASSWORD CHECK
// =====================================
function checkPassword(word) {
  if (word === "12345") {
    console.log("Logging in");
  } else {
    console.log("Wrong password");
  }
}
checkPassword("swordfish");
//Konsolenausgabe: Wrong password

// =====================================
// RETURN VALUE - BASIC FUNCTION
// =====================================
function multiplyByTenX(number) {
  return number * 10;
}
const resultX = multiplyByTenX(210);
console.log(resultX);
//Konsolenausgabe:2100

// =====================================
// RETURN STOPS FUNCTION EXECUTION
// =====================================
function multiplyByTenXLL(number) {
  return number * 10;
  return "This line doesn't execute";
}
const resultXLL = multiplyByTenXLL(211);
console.log(resultXLL);
//Bei JavaScript beendet return sofort die Funktion
//Konsolenausgabe:2100

// =====================================
// RETURN WITH CONDITION
// =====================================
function getDiscount(age) {
  if (age >= 65) {
    return "50% OFF";
  }
  return "0% OFF";
}
const discount = getDiscount(18);
console.log(discount);
//Konsolenausgabe:0% OFF

// =====================================
// AGE-BASED DISCOUNT - IF / ELSE IF / ELSE
// =====================================
function getDiscountX(age) {
  if (age <= 18) {
    return "50% OFF";

  } else if (age >= 65) {
    return "30%";
  }
  return "Full price";
}
const discountX = getDiscountX(25);
console.log(discountX);
//Konsolenausgabe: Full price