///////////////////////////////////////////////////////////////
// async-Funktion – Funktion gibt ein Promise zurück
///////////////////////////////////////////////////////////////
async function asyncFunc() {
  console.log("I am an async function!");
}
asyncFunc();

///////////////////////////////////////////////////////////////
// async / await – auf ein Promise warten
///////////////////////////////////////////////////////////////
// Promise erstellen.
// async-Funktion. await wartet darauf, dass das Promise aufgelöst wird.
// Nach 2 Sekunden wird das Promise mit einer Nachricht aufgelöst.
let traditionalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This promise will always resolve after 2 seconds");
  }, 2000);
});
// "async" ermöglicht die Verwendung von "await" innerhalb der Funktion.
async function asyncFunction() {
  // await wartet, bis das Promise aufgelöst (resolved) wurde.
  // Erst danach wird der Wert in "value" gespeichert.
  let value = await traditionalPromise;
  console.log(value);
}
// async-Funktion aufrufen
asyncFunction();

///////////////////////////////////////////////////////////////
// Promise-Kette – mehrere abhängige Promises
///////////////////////////////////////////////////////////////
// Getränke, aus denen zufällig ausgewählt wird.
let beverages = ["tea", "coffee", "apple cider"];

// 1. Schritt:
// Zufällig ein Getränk auswählen.
function pickRandomBeverage() {
  return new Promise(function (resolve, reject) {
    let randomIndex = Math.floor(Math.random() * beverages.length);
    let selectedBeverage = beverages[randomIndex];

    // Nach 1 Sekunde wird das ausgewählte Getränk zurückgegeben.
    setTimeout(function () {
      console.log(`${selectedBeverage} selected`);
      resolve(selectedBeverage);
    }, 1000);
  });
}

// 2. Schritt:
// Prüfen, ob ein Getränk ausgewählt wurde.
function checkIfHotWaterIsReady(isBeverageSelected) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (isBeverageSelected) {
        console.log("Preparing...");
        resolve(isBeverageSelected);
      } else {
        reject("No beverage has been picked up.");
      }
    }, 1000);
  });
}

// 3. Schritt:
// Getränk zubereiten.
function prepareDrink(selectedBeverage) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (selectedBeverage) {
        console.log(`Enjoy your ${selectedBeverage}!`);
        resolve(true);
      } else {
        reject("Drink not ready yet...");
      }
    }, 1000);
  });
}

// Traditionelle Promise-Kette
function nativePromiseHandling() {
  const pickedDrink = pickRandomBeverage();

  const handleWaterReadyCheck = function (selectedBeverage) {
    return checkIfHotWaterIsReady(selectedBeverage);
  };

  const handlePrepareDrink = function (isBeverageSelected) {
    return prepareDrink(isBeverageSelected);
  };

  // Die Promises werden nacheinander ausgeführt.
  pickedDrink.then(handleWaterReadyCheck).then(handlePrepareDrink);
}

nativePromiseHandling();

//Abklärung
/* function asyncAwaitPromiseHandling() {
  const pickedDrink = pickRandomBeverage();
  const isHotWaterReady = checkIfHotWaterIsReady(pickedDrink);
  const isDrinkPrepared = prepareDrink(isHotWaterReady);

  return isDrinkPrepared; */

//Der Code ruft die drei Funktionen nacheinander auf,
// aber er wartet nicht auf die Promises. Das ist der entscheidende Punkt.


///////////////////////////////////////////////////////////////
// async/await + try/catch – Promise-Fehler behandeln
///////////////////////////////////////////////////////////////
// Lagerbestand der Produkte
const stock = {
  sunglasses: { quantity: 0, price: 29.99 },
  bags: { quantity: 2, price: 109.99 }
};

// Promise erstellen
const purchasePromise = new Promise(function (resolve, reject) {
  // Prüfen, ob Sonnenbrillen auf Lager sind
  if (stock.sunglasses.quantity > 0) {
    // Erfolgreich → Promise wird resolved
    resolve("Sunglasses are available. Proceeding with order now.");
  } else {
    // Nicht verfügbar → Promise wird rejected
    reject("Sunglasses are out of stock. Canceling Order.");
  }
});

// async-Funktion ermöglicht die Verwendung von await.
async function orderSunglasses() {
  try {
    // await wartet auf das Ergebnis des Promise.
    // Bei resolve() wird der Wert in "result" gespeichert.
    let result = await purchasePromise;

    console.log(result);
  } catch (error) {
    // Wird ausgeführt, wenn das Promise rejected wurde.
    console.log(error);
  }
}

// async-Funktion starten
orderSunglasses();

/* Um Ablehnungen zu behandeln, verwenden wir die "try-catch-Syntax". 
Zuerst versucht der Code zu laufen und wenn er fehlschlägt, wird der Fehler abgefangen. */
