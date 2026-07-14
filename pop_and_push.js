let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "DOMI Lemon"); // fügt hinzu

function containsElement(array, element){
    return fruits.includes(element);
}
function initArrays(){
console.log(containsElement(fruits, "Banana")); //true case sensitive achten
}






let VEGI = ["spinach", "potatoes", "cauliflower", "leeks", "beans", "eggplants", "zucchini", "button mushrooms"];
VEGI.pop(); // entfernt "button mushrooms"

function initArrays2() {
    console.log(fruits, VEGI);

    document.getElementById("demo2").innerHTML = fruits + "<br>" + VEGI;
}





// Aufgabenstellung 1: includes

function initArrays3(){
let name = ['Anna', 'Ben', 'Clara', 'Ben'];
}

function containsElement(array, element){
    return array.includes(element);
}

console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false