  //function initArrays(){
   // for (let index = 0; index < array.length; index++) {
            //  start;    solange;      Schritt
       // console.log(1);      
   // }

    // ++ --> Ausgabe +1
    // += --> Ausgabe: let number = 5; number += 3; =8


function initArrays(){

    for (let indexFruits = 0; indexFruits < 3; indexFruits++) {
        console.log(indexFruits);
    }
}

initArrays();

function initArrays2(){

    let contentRef = document.getElementById("my_contant");
    contentRef.innerHTML = "";
    for (let indexFruitsX = -2; indexFruitsX < 7; indexFruitsX ++) {
        contentRef.innerHTML += " asd";
    }
}
initArrays2();