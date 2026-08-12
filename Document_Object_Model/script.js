const heading = document.createElement("h3"); //erstellt neue Element für h3
heading.innerHTML = "Best pizza in Rome (new created from JS)";
document.body.appendChild(heading); //Füge letztes Kind eines anderen Elements hinzu.

/*
===========================================================
                    JAVASCRIPT DOM
                 LEARNING CHEAT SHEET
===========================================================

MERKREGEL:

GET / QUERY  → vorhandenes Element finden
CREATE       → neues Element erstellen
APPEND       → Element in den DOM einfügen
REMOVE       → Element entfernen

===========================================================
*/


/*
===========================================================
1. ELEMENT AUSWÄHLEN
===========================================================

Aufgabe:
Ein bereits vorhandenes Element auswählen.

Methode / Code:
document.querySelector()

Bedeutung:
Sucht das erste passende Element mit einem CSS-Selektor.

Beispiel:
*/

const heading = document.querySelector("h1");

// CSS-Selektoren:
// "h1"       → HTML-Tag
// ".title"   → Klasse
// "#title"   → ID

/*
MERKSATZ:
querySelector() = erstes passendes Element
*/


/*
===========================================================
2. ALLE ELEMENTE AUSWÄHLEN
===========================================================

Aufgabe:
Alle passenden Elemente auswählen.

Methode / Code:
document.querySelectorAll()

Bedeutung:
Sucht alle Elemente, die zum CSS-Selektor passen.

Beispiel:
*/

const items = document.querySelectorAll(".item");

// ".item" → alle Elemente mit der Klasse "item"

/*
MERKSATZ:
querySelectorAll() = alle passenden Elemente
*/


/*
===========================================================
3. NACH ID AUSWÄHLEN
===========================================================

Aufgabe:
Ein Element anhand seiner ID auswählen.

Methode / Code:
document.getElementById()

Bedeutung:
Holt ein bereits vorhandenes Element mit einer bestimmten ID.

Beispiel:
*/

const title = document.getElementById("title");

/*
HTML:

<h1 id="title">Hallo</h1>

MERKSATZ:
getElementById() = Element mit ID holen
*/


/*
===========================================================
4. NACH KLASSE AUSWÄHLEN
===========================================================

Aufgabe:
Elemente anhand ihrer Klasse auswählen.

Methode / Code:
document.getElementsByClassName()

Bedeutung:
Holt alle Elemente mit dieser Klasse.

Beispiel:
*/

const importantItems = document.getElementsByClassName("important");

/*
HTML:

<p class="important">Aufgabe 1</p>
<p class="important">Aufgabe 2</p>

MERKSATZ:
getElementsByClassName() = Elemente mit Klasse holen
*/


/*
===========================================================
5. NACH TAG AUSWÄHLEN
===========================================================

Aufgabe:
Elemente anhand ihres HTML-Tags auswählen.

Methode / Code:
document.getElementsByTagName()

Bedeutung:
Holt alle Elemente eines bestimmten HTML-Tags.

Beispiel:
*/

const paragraphs = document.getElementsByTagName("p");

/*
→ Alle <p>-Elemente werden ausgewählt.

MERKSATZ:
getElementsByTagName() = Elemente eines Tags holen
*/


/*
===========================================================
6. ELEMENT ERSTELLEN
===========================================================

Aufgabe:
Ein neues HTML-Element erstellen.

Methode / Code:
document.createElement()

Bedeutung:
Erstellt ein neues Element.

WICHTIG:
Das Element ist zunächst nur im Speicher.
Es ist noch NICHT auf der Webseite.

Beispiel:
*/

const paragraph = document.createElement("p");

/*
MERKSATZ:
createElement() = neues Element erstellen
*/


/*
===========================================================
7. TEXT SETZEN
===========================================================

Aufgabe:
Text in ein Element schreiben.

Methode / Code:
.textContent

Bedeutung:
Setzt den Textinhalt eines Elements.

Beispiel:
*/

paragraph.textContent = "Hallo Welt";

/*
ERGEBNIS:

<p>Hallo Welt</p>

MERKSATZ:
textContent = Text setzen
*/


/*
===========================================================
8. HTML SETZEN
===========================================================

Aufgabe:
HTML-Inhalt in ein Element schreiben.

Methode / Code:
.innerHTML

Bedeutung:
Setzt HTML-Inhalt innerhalb eines Elements.

Beispiel:
*/

paragraph.innerHTML = "<b>Hallo Welt</b>";

/*
ERGEBNIS:

<p>
    <b>Hallo Welt</b>
</p>

MERKSATZ:
textContent → normaler Text
innerHTML   → HTML interpretieren
*/


/*
===========================================================
9. ELEMENT HINZUFÜGEN
===========================================================

Aufgabe:
Ein Element als Kind eines anderen Elements einfügen.

Methode / Code:
.appendChild()

Bedeutung:
Fügt ein Element als letztes Kind hinzu.

Beispiel:
*/

document.body.appendChild(paragraph);

/*
ERGEBNIS:

<body>
    ...
    <p>Hallo Welt</p>
</body>

MERKSATZ:
parent.appendChild(child)

Elternteil → Kind anhängen
*/


/*
===========================================================
10. ELEMENT / TEXT AM ENDE HINZUFÜGEN
===========================================================

Aufgabe:
Element oder Text am Ende hinzufügen.

Methode / Code:
.append()

Bedeutung:
Fügt Inhalt am Ende eines Elements ein.

Beispiel:
*/

document.body.append(paragraph);

/*
MERKSATZ:
append() = hinten hinzufügen
*/


/*
===========================================================
11. ELEMENT / TEXT AM ANFANG HINZUFÜGEN
===========================================================

Aufgabe:
Element oder Text am Anfang hinzufügen.

Methode / Code:
.prepend()

Bedeutung:
Fügt Inhalt als erstes Kind ein.

Beispiel:
*/

document.body.prepend(paragraph);

/*
MERKSATZ:
prepend() = vorne hinzufügen
*/


/*
===========================================================
12. ATTRIBUT SETZEN
===========================================================

Aufgabe:
Ein HTML-Attribut setzen.

Methode / Code:
.setAttribute()

Bedeutung:
Setzt oder verändert ein HTML-Attribut.

Beispiel:
*/

const image = document.querySelector("img");

image.setAttribute("src", "image.jpg");

/*
ERGEBNIS:

<img src="image.jpg">

MERKSATZ:
setAttribute() = Attribut setzen
*/


/*
===========================================================
13. ATTRIBUT LESEN
===========================================================

Aufgabe:
Ein HTML-Attribut auslesen.

Methode / Code:
.getAttribute()

Bedeutung:
Liest den Wert eines Attributs.

Beispiel:
*/

const imageSource = image.getAttribute("src");

console.log(imageSource);

/*
ERGEBNIS:

image.jpg

MERKSATZ:
getAttribute() = Attribut lesen
*/


/*
===========================================================
14. ATTRIBUT ENTFERNEN
===========================================================

Aufgabe:
Ein HTML-Attribut löschen.

Methode / Code:
.removeAttribute()

Bedeutung:
Entfernt ein Attribut.

Beispiel:
*/

image.removeAttribute("disabled");

/*
MERKSATZ:
removeAttribute() = Attribut löschen
*/


/*
===========================================================
15. CSS-KLASSE HINZUFÜGEN
===========================================================

Aufgabe:
Eine CSS-Klasse hinzufügen.

Methode / Code:
.classList.add()

Bedeutung:
Fügt eine Klasse hinzu.

Beispiel:
*/

paragraph.classList.add("bold");

/*
ERGEBNIS:

<p class="bold">Hallo Welt</p>

MERKSATZ:
classList.add() = Klasse hinzufügen
*/


/*
===========================================================
16. CSS-KLASSE ENTFERNEN
===========================================================

Aufgabe:
Eine CSS-Klasse entfernen.

Methode / Code:
.classList.remove()

Bedeutung:
Entfernt eine vorhandene Klasse.

Beispiel:
*/

paragraph.classList.remove("bold");

/*
MERKSATZ:
classList.remove() = Klasse entfernen
*/


/*
===========================================================
17. CSS-KLASSE UMSCHALTEN
===========================================================

Aufgabe:
Eine Klasse an- oder ausschalten.

Methode / Code:
.classList.toggle()

Bedeutung:
Wenn die Klasse existiert → entfernen.
Wenn sie nicht existiert → hinzufügen.

Beispiel:
*/

paragraph.classList.toggle("active");

/*
MERKSATZ:
toggle() = AN ↔ AUS
*/


/*
===========================================================
18. CSS-KLASSE PRÜFEN
===========================================================

Aufgabe:
Prüfen, ob ein Element eine bestimmte Klasse besitzt.

Methode / Code:
.classList.contains()

Bedeutung:
Gibt true oder false zurück.

Beispiel:
*/

const isActive = paragraph.classList.contains("active");

console.log(isActive);

/*
ERGEBNIS:

true
oder
false

MERKSATZ:
contains() = Ist die Klasse vorhanden?
*/


/*
===========================================================
19. STYLE ÄNDERN
===========================================================

Aufgabe:
CSS direkt über JavaScript ändern.

Methode / Code:
.style

Bedeutung:
Ändert einen Inline-CSS-Wert.

Beispiel:
*/

paragraph.style.color = "red";

/*
ERGEBNIS:

<p style="color: red;">Hallo Welt</p>

MERKSATZ:
.style = CSS direkt verändern
*/


/*
===========================================================
20. ELEMENT ENTFERNEN
===========================================================

Aufgabe:
Ein Element aus dem DOM löschen.

Methode / Code:
.remove()

Bedeutung:
Entfernt das Element.

Beispiel:
*/

paragraph.remove();

/*
MERKSATZ:
remove() = Element löschen
*/


/*
===========================================================
21. EVENT HINZUFÜGEN
===========================================================

Aufgabe:
Auf ein Ereignis reagieren.

Methode / Code:
.addEventListener()

Bedeutung:
Führt eine Funktion aus, wenn ein Event passiert.

Beispiel:
*/

const button = document.querySelector("button");

button.addEventListener("click", function () {
    console.log("Button wurde geklickt!");
});

/*
MERKSATZ:

addEventListener("EVENT", FUNKTION)

Beispiel:

"click" → wenn geklickt wird
*/


/*
===========================================================
22. PARENT FINDEN
===========================================================

Aufgabe:
Das Elternelement eines Elements finden.

Methode / Code:
.parentElement

Bedeutung:
Gibt das direkte Elternelement zurück.

Beispiel:
*/

const parent = paragraph.parentElement;

/*
HTML:

<div>
    <p>Hallo</p>
</div>

p.parentElement
      ↓
<div>

MERKSATZ:
parentElement = Elternteil
*/


/*
===========================================================
23. CHILDREN FINDEN
===========================================================

Aufgabe:
Die Kind-Elemente eines Elements finden.

Methode / Code:
.children

Bedeutung:
Gibt die HTML-Kindelemente zurück.

Beispiel:
*/

const children = document.querySelector("div").children;

/*
HTML:

<div>
    <p>Text 1</p>
    <p>Text 2</p>
</div>

children
   ↓
<p>Text 1</p>
<p>Text 2</p>

MERKSATZ:
children = Kinder
*/


/*
===========================================================
24. ERSTES CHILD FINDEN
===========================================================

Aufgabe:
Das erste Kindelement finden.

Methode / Code:
.firstElementChild

Bedeutung:
Gibt das erste HTML-Kindelement zurück.

Beispiel:
*/

const firstChild = document.querySelector("div").firstElementChild;

/*
MERKSATZ:
firstElementChild = erstes Kind
*/


/*
===========================================================
25. LETZTES CHILD FINDEN
===========================================================

Aufgabe:
Das letzte Kindelement finden.

Methode / Code:
.lastElementChild

Bedeutung:
Gibt das letzte HTML-Kindelement zurück.

Beispiel:
*/

const lastChild = document.querySelector("div").lastElementChild;

/*
MERKSATZ:
lastElementChild = letztes Kind
*/


/*
===========================================================
                    SUPER-MERKZETTEL
===========================================================

SUCHEN
-----------------------------------------------------------
querySelector()                  → erstes Element
querySelectorAll()               → alle Elemente

getElementById()                 → ID
getElementsByClassName()         → Klasse
getElementsByTagName()           → Tag


ERSTELLEN
-----------------------------------------------------------
createElement()                  → neues Element


INHALT
-----------------------------------------------------------
textContent                      → Text
innerHTML                        → HTML


EINFÜGEN
-----------------------------------------------------------
appendChild()                    → Kind anhängen
append()                         → hinten hinzufügen
prepend()                        → vorne hinzufügen


ATTRIBUTE
-----------------------------------------------------------
setAttribute()                   → setzen
getAttribute()                   → lesen
removeAttribute()                → löschen


CSS-KLASSEN
-----------------------------------------------------------
classList.add()                  → hinzufügen
classList.remove()               → entfernen
classList.toggle()               → an / aus
classList.contains()             → prüfen


CSS
-----------------------------------------------------------
style                            → CSS ändern


DOM-STRUKTUR
-----------------------------------------------------------
parentElement                    → Elternteil
children                         → Kinder
firstElementChild                → erstes Kind
lastElementChild                 → letztes Kind


EVENTS
-----------------------------------------------------------
addEventListener()               → auf Event reagieren


ENTFERNEN
-----------------------------------------------------------
remove()                         → Element löschen


===========================================================
                    DOM DENKWEISE
===========================================================

1. FINDEN
   ↓
   querySelector()
   getElementById()
   ...

2. ERSTELLEN
   ↓
   createElement()

3. VERÄNDERN
   ↓
   textContent
   innerHTML
   classList
   style
   setAttribute()

4. EINFÜGEN
   ↓
   appendChild()
   append()
   prepend()

5. REAGIEREN
   ↓
   addEventListener()

6. ENTFERNEN
   ↓
   remove()

===========================================================
*/