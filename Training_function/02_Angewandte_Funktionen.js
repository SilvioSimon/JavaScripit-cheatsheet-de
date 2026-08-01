function isRentingAge(age) {
  if (age >= 21) {
    console.log("Approved");
  }
}
isRentingAge(26);
//Konsolenausgabe: Approved

function displayAlarm(time) {
  if (time === "7:00") {
    console.log("Waky waky");
  }
}
displayAlarm("7:00");
//Konsolenausgabe: Waky waky

function isRentingAgeX(age) {
  if (age >= 21) {
    console.log("Approved");
  }
  console.log("Check Complete");
}

isRentingAgeX(20);
//Konsolenausgabe: Check Complete
//IGNORIERT --console.log("Approved");--

function checkPassword(word) {
  if (word === "12345") {
    console.log("Logging in");
  } else {
    console.log("Wrong password");
  }
}
checkPassword("swordfish");
//Konsolenausgabe: Wrong password