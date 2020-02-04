// # Binary Gap
// function solution(n) {
//   const binary = n.toString(2);
//   const calculate = binary.substr(0,binary.lastIndexOf('1') + 1);
//   const result = Math.max(...(calculate.split('1').map(value => value.length)));
//   return result;
// }

// # CyclicRotation
// function solution(A, K) {
//   let newArr = [];
//   newArr = A.splice(K).concat(A.slice(0,K));
//   return newArr;
// }