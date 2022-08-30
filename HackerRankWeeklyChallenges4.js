function simpleArraySum(ar) {
  // Write your code here
  let totalSum = 0;

  ar.forEach((number) => {
    totalSum += number;
  });
  return totalSum;
}

console.log(simpleArraySum[(3, 5, 34, 2, 1, 3, 4, 2, 1, 23, 3, 4, 34)]);

/*
Alice and Bob each created one problem for HackerRank.
A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories:
problem clarity, originality, and difficulty.
The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]),
and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
The task is to find their comparison points by comparing:
a[0] with b[0], a[1] with b[1], and a[2] with b[2].
If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.
Given a and b, determine their respective comparison points.
Example
a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

*/

function compareTriplets(a, b) {
  // Write your code here
  let pointsA = 0;
  let pointsB = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      // eslint-disable-next-line no-plusplus
      pointsA++;
    } else if (b[i] > a[i]) {
      // eslint-disable-next-line no-plusplus
      pointsB++;
    }
  }

  return [pointsA, pointsB];
}

console.log(compareTriplets([3, 4, 5], [5, 4, 3]));

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        sum1 += arr[i][j];
      }
    }
  }

  let aux1 = arr.length - 1;
  let aux2 = 0;
  while (aux2 < arr.length) {
    sum2 += arr[aux2][aux1];
    aux2++;
    aux1--;
  }

  if (sum1 - sum2 < 0) {
    return (sum1 - sum2) * -1;
  }

  return sum1 - sum2;
}


/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  let numberOfSpaces = n - 1;
  let stair = '';
  // Insert spaces
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < numberOfSpaces; j++) {
      stair += ' ';
    }
    // Insert #
    for (let l = 0; l < n - numberOfSpaces; l++) {
      stair += '#';
    }
    numberOfSpaces--;
    stair += '\n';
  }
  console.log(stair);
}

staircase(100);

/*
You are in charge of the cake for a child's birthday.
You have decided the cake will have one candle for each year of their total age.
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
Example

The maximum height candles are  units high. There are  of them, so return .
Function Description
Complete the function birthdayCakeCandles in the editor below.
birthdayCakeCandles has the following parameter(s):
int candles[n]: the candle heights
Returns
int: the number of candles that are tallest

 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here

  const sorttedArr = candles.sort((a, b) => b - a);
  const totalMax = sorttedArr[0];
  let total = 0;

  sorttedArr.forEach((el) => {
    if (el === totalMax) {
      total++;
    }
  });

  return total;
}

console.log(
  birthdayCakeCandles[(1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 3, 5, 6, 7)],
);

function formatTable(str) {
  const table = str.split('\n').map((line) => line.split(' |'));
  const widths = table[0].map(() => 0);
  for (const row of table) {
    for (let i = 0; i < row.length; i++) {
      widths[i] = Math.max(widths[i], row[i].length);
    }
  }
  return table
    .map((row, i) => row.map((cell, j) => cell.padEnd(widths[j], i === 1 ? '-' : ' ')).join(' |')).join('\n');
}

console.log(formatTable(`| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |`));
