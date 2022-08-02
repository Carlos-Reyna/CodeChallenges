// Interview problem from day 1: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

// Code Solution: 
function plusMinus(arr) {
    // Write your code here
    let totalPositives = 0; 
    let totalNegatives = 0; 
    let totalZeros = 0; 
    arr.forEach(el=>{
        if(el==0){
            totalZeros++;
        }else{
            el>=1? totalPositives++:totalNegatives++;
        }
    })
    let resultOne = totalPositives/arr.length;
    let resultTwo = totalNegatives/arr.length;
    let resultThree = totalZeros/arr.length;
    console.log(resultOne)
    console.log(resultTwo)
    console.log(resultThree)
    
}


plusMinus([1,34,23,0,0,-2,4,-10,1,-1])