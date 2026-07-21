function sumArray(arr){

    let sum = 0; 
    
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum; 
}
console.log(sumArray([3, 7, 1, 4]));  //Erwarte Ausgaben: 15 (3 + 7 + 1 + 4)