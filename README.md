# JavaScript Grundbegriffe

Eine kurze Übersicht der wichtigsten Begriffe – mit besonderem Fokus auf **Variable** und **Element**, da diese am häufigsten durcheinandergehen.

## 1. Variable = ein Name für einen Wert

```js
let alter = 30;
```

- `alter` → Variable
- `30` → Wert

Wie eine beschriftete Schachtel:

```
alter → 📦 30
```

Der Wert kann sich ändern, der Name (die Variable) bleibt:

```js
alter = 31;
```

```
alter → 📦 31
```

## 2. Array = mehrere Werte

```js
let zahlen = [10, 20, 30];
```

- `zahlen` → Variable
- `[10, 20, 30]` → Array
- `10, 20, 30` → einzelne Werte

```
zahlen → 📦 [10, 20, 30]
```

## 3. Element = ein einzelnes Ding innerhalb einer Struktur

Bei einem Array:

```js
let zahlen = [10, 20, 30];
```

→ `10`, `20` und `30` sind jeweils ein **Element** des Arrays.

```
Array
└── [ 10, 20, 30 ]
     ↑   ↑   ↑
  Element
```

**Die wichtigste Unterscheidung:**

| Begriff | Bedeutung |
|---|---|
| **Variable** | Name, unter dem etwas gespeichert/angesprochen wird |
| **Wert** | Das, was in der Variable drinsteckt |
| **Element** | Ein einzelner Bestandteil *innerhalb* einer Struktur (z. B. Array) |

Eine Variable *enthält* also z. B. ein Array – und die Werte darin heißen Elemente. Eine Variable selbst ist **nie** ein Element, sie ist der Name/Container.

## 4. Achtung: „Element" bei HTML

Hier wird's etwas verwirrend, weil das Wort doppelt benutzt wird.

```html
<button>Drück mich</button>
```

Das `<button>` ist ein **HTML-Element**.

```js
let button = document.querySelector("button");
```

- `button` → Variable
- `document.querySelector("button")` → findet das HTML-Element
- Das gefundene `<button>...</button>` → HTML-Element (in der Variable gespeichert)

```
button ───────────────► <button>Drück mich</button>
Variable                    HTML-Element
```

👉 `element` als Variablenname (z. B. `let element = ...`) ist **kein** Befehl, sondern einfach ein gewählter Name – wie jeder andere auch.

### `querySelector()` und die Zeichen `#` / `.`

`querySelector()` findet HTML-Elemente über CSS-Selektor-Syntax:

| Selektor | Sucht nach | Beispiel |
|---|---|---|
| `"p"` | Tag-Name | `<p>` |
| `".klasse"` | Klasse (Punkt `.`) | `<div class="klasse">` |
| `"#id"` | ID (Raute `#`) | `<div id="id">` |

```js
let button = document.querySelector("button"); // Tag
let box    = document.querySelector(".box");    // Klasse .
let status = document.querySelector("#status"); // ID #
```

Das `#` sagt JavaScript also: „Suche nicht nach einem Tag oder einer Klasse, sondern nach dem Element mit genau dieser **ID**." Ohne `#` würde nach einem Tag namens `<status>` gesucht – das gibt es nicht, und das Ergebnis wäre `null`.

## 5. Weitere Begriffe (kurz)

| Begriff | Einfach gesagt | Beispiel |
|---|---|---|
| Datentyp | Welche Art von Wert | `number`, `string`, `boolean` |
| String | Text | `"Hallo"` |
| Number | Zahl | `42` |
| Boolean | Wahr/Falsch | `true` |
| Objekt | Sammlung von Eigenschaften | `{name: "Max", alter: 30}` |
| Property | Merkmal eines Objekts | `name` |
| Funktion | Ausführbarer Code | `function hallo() {}` |
| Methode | Funktion, die zu etwas gehört | `user.login()` |
| Parameter | Eingabe einer Funktion | `function addiere(a, b)` |
| Argument | Tatsächlich übergebener Wert | `addiere(5, 3)` |

## Merksatz

> **Variable** = Name
> **Wert** = Inhalt
> **Array** = Sammlung von Werten
> **Element** = einzelner Bestandteil einer Sammlung/Struktur
> **HTML-Element** = `<button>`, `<div>`, `<p>` usw.

## Lernreihenfolge (empfohlen)

Variable → Wert → Datentyp → String → Number → Boolean → Array → **Element** → Objekt
