///////////////////////////////////////////////////////////////
// JavaScript Modules – Named Imports
///////////////////////////////////////////////////////////////

// "a" und "reminder" aus mod.js importieren.
import { a, reminder } from "./mod.js";
console.log(a + 10);
// Ausgabe: 11

console.log(reminder("Wake up.", "coding"));
// Ausgabe: Wake up.Time for coding



///////////////////////////////////////////////////////////////
// JavaScript Modules – Mehrere Named Imports
///////////////////////////////////////////////////////////////

// "flight" und "query" aus mod.js importieren.
import { flight, query } from "./mod.js";

// Funktion mit dem importierten "flight" aufrufen.
console.log(query(flight, "Vienna", "New York"));

// Ausgabe: Air Asia flight for Vienna to New York available or not?


///////////////////////////////////////////////////////////////
// JavaScript Modules – Import mit Alias
///////////////////////////////////////////////////////////////
// "flight" und "query" unter eigenen Namen importieren.
import {
  flight as airline,
  query as searchFlight
} from "./mod.js";
// Funktion mit den importierten Werten aufrufen.
console.log(searchFlight(airline, "Vienna", "New York"));
// Ausgabe:
// Air Asia flight for Vienna to New York available or not?