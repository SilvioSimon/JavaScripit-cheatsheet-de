// ============================================================
// 06 – Aufgaben: setAttribute
// ============================================================
 
// ── Aufgabe 2: title per setAttribute hinzufügen ──────────────
// Das title-Attribut erscheint als Tooltip beim Hover.
const pTag = document.getElementById("uebung");
pTag.setAttribute("title", "King Jesus");
console.log("Aufgabe 2 – title gesetzt:", pTag.getAttribute("title"));
// → "King Jesus"
 
 
// ── Aufgabe 3: CSS-Klasse per setAttribute hinzufügen ─────────
// Ja, das funktioniert! setAttribute("class", ...) setzt das
// class-Attribut direkt – genau wie bei jedem anderen Attribut.
pTag.setAttribute("class", "test_class");
console.log("Aufgabe 3 – class per setAttribute:", pTag.className);
// → "test_class"
 
 
// ── Aufgabe 4: Unterschied classList.add vs. setAttribute ─────
const demo = document.getElementById("class-demo");
const statusDiv = document.getElementById("status");
// Ausgangszustand: demo hat bereits "existing-class" (im HTML gesetzt)
console.log("Vorher – className:", demo.className);
// → "existing-class"


 
// --- Variante A: setAttribute("class", "test_class") ----------
// ÜBERSCHREIBT das gesamte class-Attribut!
// "existing-class" geht verloren.
demo.setAttribute("class", "test_class");
console.log("Nach setAttribute:", demo.className);
// → "test_class"   ← existing-class weg!
 
// --- Variante B: classList.add("existing-class") --------------
// FÜGT die Klasse hinzu, ohne vorhandene zu löschen.
demo.classList.add("existing-class");
console.log("Nach classList.add:", demo.className);
// → "test_class existing-class"   ← beide Klassen vorhanden ✔
 



// → "test_