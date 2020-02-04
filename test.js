// # Binary Gap
// function solution(n) {
//   const binary = n.toString(2);
//   const calculate = binary.substr(0,binary.lastIndexOf('1') + 1);
//   const result = Math.max(...(calculate.split('1').map(value => value.length)));
//   return result;
// }

// # CyclicRotation
// function solution(A, K) {
//   if (!A.length) {
//       return [];
//   }
  
//   for (let i = 0 ; i < K ; i++) {
//       A.unshift(A.pop());
//   }
  
//   return A;
// }

// # OddOccurrencesInArray
// function solution(A) {
//   let obj = {};
//   for (let i = 0; i < A.length ; i++) {
//     let value = A[i];
//     if (obj[value] === undefined) {
//       obj[value] = value;
//     } else {
//       delete obj[value];
//     }
//   }
//   return Object.values(obj)[0];
// }