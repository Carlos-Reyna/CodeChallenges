/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
// Interview problem from day 1: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

// Code Solution:
function plusMinus(arr) {
  // Write your code here
  let totalPositives = 0;
  let totalNegatives = 0;
  let totalZeros = 0;
  arr.forEach((el) => {
    if (el === 0) {
      totalZeros++;
    } else {
      el >= 1 ? totalPositives++ : totalNegatives++;
    }
  });
  const resultOne = totalPositives / arr.length;
  const resultTwo = totalNegatives / arr.length;
  const resultThree = totalZeros / arr.length;
  console.log(resultOne);
  console.log(resultTwo);
  console.log(resultThree);
}

function miniMaxSum(arr) {
  // Write your code here

  const sorttedArr = arr.sort((a, b) => a - b);
  let totalMax = 0;
  let totalMin = 0;

  sorttedArr.forEach((el, i) => {
    if (i !== 0) {
      totalMax += el;
    }

    if (i !== sorttedArr.length - 1) {
      totalMin += el;
    }
  });

  console.log(totalMin, totalMax);
}

function timeConversion(s) {
  // Write your code here
  const hours = {
    '01': '13',
    '02': '14',
    '03': '15',
    '04': '16',
    '05': '17',
    '06': '18',
    '07': '19',
    '08': '20',
    '09': '21',
    10: '22',
    11: '23',
    12: '00',
  };
  // Hour 12 A6171E2F7F95F1A1
  const currentHour = s.substring(0, s.indexOf(':'));
  const restOfTheHour = s.substring(s.indexOf(':'), s.length - 1);
  // //String :22:22
  if (currentHour === '12' && s.includes('PM')) {
    return s.substring(0, s.indexOf('PM'));
  }
  if (currentHour === '12' && s.includes('AM')) {
    const newStr = hours[currentHour] + restOfTheHour;
    const result = newStr.substring(0, newStr.indexOf('A'));
    return result;
  }
  if (s.includes('PM')) {
    const newStr = hours[currentHour] + restOfTheHour;
    const result = newStr.substring(0, newStr.indexOf('P'));
    return result;
  }
  const result = s.substring(0, s.indexOf('A'));
  return result;
}

plusMinus([1, 34, 23, 0, 0, -2, 4, -10, 1, -1]);
console.log(timeConversion('08:21:23PM'));
miniMaxSum([6, 4, 2, 3, 34, 6, 23, 123, 56, 32]);
