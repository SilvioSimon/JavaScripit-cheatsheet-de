///////////////////////////////////////////////////////////////
// JavaScript Modules – Mehrere Exports
///////////////////////////////////////////////////////////////

let a = 1;

const reminder = (message, event) => {
  const reason = "Time for " + event;
  return message + reason;
};

// Mehrere Werte aus dieser Datei exportieren.
export { a, reminder };


///////////////////////////////////////////////////////////////
// JavaScript Modules – Flugabfrage
///////////////////////////////////////////////////////////////

const flight = "Air Asia";

function query(flight, location, destination) {
  const ques =
    flight +
    " flight for " +
    location +
    " to " +
    destination +
    " available or not?";

  return ques;
}

// Mehrere Werte aus dieser Datei exportieren.
export { flight, query };


///////////////////////////////////////////////////////////////
// JavaScript Modules – Alternative Named Imports
///////////////////////////////////////////////////////////////

// Andere Namen für die importierten Werte verwenden.
import {
  flight as airline,
  query as searchFlight
} from "./mod.js";
console.log(searchFlight(airline, "Vienna", "New York"));
// Ausgabe: Air Asia flight for Vienna to New York available or not?