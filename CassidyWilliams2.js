const args = [2, 1, 4, 3];

const swapPairs = (args) => {
  let secondInPair = [];
  let firstInPair = [];
  let swapedPairs = [];
  let error = 'Input Array not even, please provide an array with an even number of children';
  if (args.length % 2 !== 0) return error;

  for (const item in args) {
    if (args[item] % 2 !== 0) {
      secondInPair = [...secondInPair, args[item]];
    } else {
      firstInPair = [...firstInPair, args[item]];
    }
  }

  for (let item in secondInPair) {
    let newPair = [secondInPair[item], firstInPair[item]];
    swapedPairs = [...swapedPairs, ...newPair];
  }
  return swapedPairs;
};

const swapedPairs = swapPairs(args);