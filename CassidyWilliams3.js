const validParan = function (s) {
  if (s.length === 0) {
    return 0;
  }

  const stack = [];
  let max = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      // if stack is empty then push the close param also
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};

console.log(validParan(')()()'));
