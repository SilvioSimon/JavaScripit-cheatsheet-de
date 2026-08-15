//setTimeout()-Methode ist eine asynchrone JavaScript-Methode (ausführenwie setTimeout() und setInterval().)

///////////////////////////////////////////////////////////////
// Asynchroner Code – setTimeout() und Code verzögert ausführen
///////////////////////////////////////////////////////////////
console.log("Executed First");
setTimeout(() => {
  console.log("Executed Last"); //console letzte ausführung
}, 2000); //2000 milisekunde verzögerung
console.log("Executed Second");


///////////////////////////////////////////////////////////////
// setTimeout(0) – Callback wird trotzdem später ausgeführt
///////////////////////////////////////////////////////////////
///Executed Erste
//Executed Zweite
//Executed Letzte, even if we set 0 seconds
console.log("Executed Erste");
setTimeout(() => {
  console.log("Executed Letzte, auch bei 0 sec");
}, 0);
console.log("Executed Zweite");


///////////////////////////////////////////////////////////////
// setTimeout() – Callback verzögert ausführen
///////////////////////////////////////////////////////////////
// Callback-Funktion:
// Wird von setTimeout() nach der angegebenen Zeit ausgeführt.
function callback() {
  console.log("Executed Last because of setTimeout");
}

// Wird sofort ausgeführt.
console.log("Executed First");

// callback wird als Funktion an setTimeout() übergeben.
// 2000 Millisekunden = 2 Sekunden Verzögerung.
// Danach wird callback() ausgeführt.
setTimeout(callback, 2000);

// Wird sofort ausgeführt – bevor der Callback fertig ist.
console.log("Executed Second");