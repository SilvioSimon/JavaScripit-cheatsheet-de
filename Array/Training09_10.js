// ==================================================
// Sektion IV Module 09 & 10 
// ==================================================


function initArrays(){
// let contentRef = document.getElementById('my_content');
// contentRef.innerHTML = "";
// for (let indexFruits =0; indexFruits < fruits.length; indexFruits++) {
// contentRef.innerHTML += *< p>+ ${fruits[indexFruits]}</p>'
}

let refList = document.getElementsByClassName('red_box')

for (let index = 0; index < refList.length; index++){
const singleRef = refList[index];
singleRef.innerText = index;
}