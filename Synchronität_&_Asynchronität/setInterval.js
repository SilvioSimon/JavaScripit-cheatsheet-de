/* 
setInterval → alle 0,5 Sekunden
       ↓
Blinker on
       ↓
Blinker off
       ↓
Blinker on
       ↓
Blinker off
       ↓
setTimeout nach 2,5 Sekunden
       ↓
clearInterval()
       ↓
    STOP! */
//Die Anzahl der Millisekunden, die zwischen den Ausführungen des Callback vergehen
let blinkerOn_X = false;
let blinkerInterval_X = setInterval(() => {
  if (blinkerOn_X) {
    console.log("Blinker off_X");
    blinkerOn_X = false;
  } else {
    console.log("Blinker on_X");
    blinkerOn_X = true;
  }
}, 500);
setTimeout(() => {
  clearInterval(blinkerInterval_X); //setInterval zu stoppen
  console.log("STOP!");
}, 2500);



///////////////////////////////////////////////////////////////
// Promise – resolved oder rejected
///////////////////////////////////////////////////////////////

// Ein Promise beschreibt eine Operation,
// deren Ergebnis später verfügbar ist.
//
// Ein Promise kann zwei wichtige Zustände haben:
// resolved  → die Operation war erfolgreich
// rejected  → die Operation ist fehlgeschlagen

const aBrandNewPromise = new Promise(function (resolve, reject) {
  // Hier wird entschieden, ob das Promise erfolgreich ist
  // oder fehlschlägt.

  const success = true;

  if (success) {
    // resolve() → Promise erfolgreich abgeschlossen
    resolve("Promise was resolved!");
  } else {
    // reject() → Promise fehlgeschlagen
    reject("Promise was rejected!");
  }
});

// .then() wird ausgeführt, wenn das Promise resolved wurde.
aBrandNewPromise.then(function (value) {
  console.log(value);
});

// .catch() wird ausgeführt, wenn das Promise rejected wurde.
aBrandNewPromise.catch(function (error) {
  console.log(error);
});


///////////////////////////////////////////////////////////////
// Promise – Bestellung und Lagerbestand
///////////////////////////////////////////////////////////////

// Lagerbestand der Desserts
const dessertStock = {
  cheeseCake: 10,
  moltenCake: 7,
  spongeCake: 0
};

// Funktion für eine Cheesecake-Bestellung
function orderCheeseCake() {
  // Ein neues Promise wird erstellt.
  // resolve = Bestellung erfolgreich
  // reject  = Bestellung fehlgeschlagen
  return new Promise(function (resolve, reject) {

    // Prüfen, ob Cheesecake vorhanden ist
    if (dessertStock.cheeseCake > 0) {

      // Promise erfolgreich abschließen
      resolve(
        "Cheesecake is available in the stock. Order has been processed."
      );

    } else {

      // Promise ablehnen, wenn kein Cheesecake vorhanden ist
      reject("Cheesecake is out of stock.");
    }
  });
}

// Bestellung starten.
// makeOrder enthält das zurückgegebene Promise.
const makeOrder = orderCheeseCake();

// .then() wird ausgeführt, wenn das Promise erfolgreich
// mit resolve() abgeschlossen wurde.
makeOrder.then(function (message) {
  console.log(message);
});

// .catch() wird ausgeführt, wenn das Promise
// mit reject() abgelehnt wurde.
makeOrder.catch(function (error) {
  console.log(error);
});



///////////////////////////////////////////////////////////////
// Promise – Bestellung eines Produkts
///////////////////////////////////////////////////////////////

// Lagerbestand der Produkte
const productStock = {
  nintendoSwitch: 10,
  playStation: 7,
  xbox: 5,
  laptop: 0
};

// Funktion für eine Nintendo-Switch-Bestellung
function orderNintendoSwitch() {
  return new Promise(function (resolve, reject) {
    // Prüfen, ob eine Nintendo Switch auf Lager ist
    if (productStock.nintendoSwitch > 0) {
      // Bestellung erfolgreich → Promise wird resolved
      resolve(
        "Nintendo Switch 2 is available in stock. Order has been processed."
      );
    } else {
      // Bestellung fehlgeschlagen → Promise wird rejected
      reject("Nintendo Switch is sold out.");
    }
  });
}

// Wird aufgerufen, wenn das Promise erfolgreich resolved wurde.
// successValue enthält den Wert aus resolve().
function handleSuccess(successValue) {
  console.log(successValue);
}

// Bestellung starten
const makeOrderX = orderNintendoSwitch();

// .then() erhält die Callback-Funktion.
// Der Wert von resolve() wird an successValue übergeben.
makeOrderX.then(handleSuccess);





///////////////////////////////////////////////////////////////
// Promise – Bestellung eines Instruments
///////////////////////////////////////////////////////////////
// Lagerbestand der Instrumente
const instrumentStock = {
  piano: 10,
  drum: 7,
  violin: 5,
  bass: 0
};

// Funktion für eine Bass-Bestellung
function orderBass() {
  return new Promise(function (resolve, reject) {

    // Prüfen, ob ein Bass auf Lager ist
    if (instrumentStock.bass > 0) {

      // Bestellung erfolgreich → Promise wird resolved
      resolve(
        "Bass is available in stock. Order has been processed."
      );

    } else {

      // Bestellung fehlgeschlagen → Promise wird rejected
      reject("Bass is sold out.");
    }
  });
}

// Wird ausgeführt, wenn das Promise erfolgreich resolved wurde.
function handleSuccess(successValue) {
  console.log(successValue);
}

// Wird ausgeführt, wenn das Promise rejected wurde.
function handleFailure(failureValue) {
  console.log(failureValue);
}

// Bestellung starten
const bassOrder = orderBass();

// Erfolg → .then()
// Fehler → .catch()
bassOrder.then(handleSuccess).catch(handleFailure);