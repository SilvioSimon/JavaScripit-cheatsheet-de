// =====================================
// ARRAY DURCHSUCHEN UND WERT FINDEN
// Sucht mit einer Schleife nach einer bestimmten Note im Array.
// Wird die Note gefunden, wird eine Meldung ausgegeben und die
// Suche mit `break` sofort beendet.
// =====================================
const grades = [91, 66, 77, 84, 66];
const search = 66;

function searchGrade(grades, search) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === search) {
      console.log("The grade exists!");
      break;
    }
  }
}

searchGrade(grades, search);
// Konsolenausgabe: The grade exists!


// =====================================
// ARRAY-ELEMENTE MIT EINER SCHLEIFE AUSGEBEN
// Durchläuft das gesamte Array mit einer `for`-Schleife
// und gibt jedes Element einzeln in der Konsole aus.
// =====================================
const gradesX = [21, 46, 47, 64];

function searchGrade(gradesX) {
  for (let i = 0; i < gradesX.length; i++) {
    console.log(gradesX[i]);
  }
}

searchGrade(gradesX);
// Konsolenausgabe:
// 21
// 46
// 47
// 64