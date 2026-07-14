let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "DOMI Lemon"); // fügt hinzu

let VEGI = ["spinach", "potatoes", "cauliflower", "leeks", "beans", "eggplants", "zucchini", "button mushrooms"];
VEGI.pop(); // entfernt "button mushrooms"

function containselement(array, element){
    
}

function initArrays2() {
    console.log(fruits, VEGI);

    document.getElementById("demo2").innerHTML = fruits + "<br>" + VEGI;
}
