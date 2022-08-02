
function numberOfOnes(num){
    let totalNumber = 0;
    while (num != 0){
        let result = num.toString().split("1").length-1;
        totalNumber+=result;
        num--;
    }

    return totalNumber;
}

console.log(numberOfOnes(11));

console.log(numberOfOnes(10));

console.log(numberOfOnes(32));

console.log(numberOfOnes(68));

console.log(numberOfOnes(111));

console.log(numberOfOnes(120));

console.log(numberOfOnes(0));