// # Lesson 1 :  Binary Gap
// function solution(n) {
//   const binary = n.toString(2);
//   const calculate = binary.substr(0,binary.lastIndexOf('1') + 1);
//   const result = Math.max(...(calculate.split('1').map(value => value.length)));
//   return result;
// }

// # Lesson 2 :  CyclicRotation
// function solution(A, K) {
//   if (!A.length) {
//       return [];
//   }
  
//   for (let i = 0 ; i < K ; i++) {
//       A.unshift(A.pop());
//   }
  
//   return A;
// }

// # Lesson 2 : OddOccurrencesInArray
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

// # Lesson 7 : Brackets
function solution(S) {
  let arrS = S.split("");
  let stack = [];
  
  for (let i = 0; i < S.length; i++) {
      
      let c = arrS[i];
      
      if (c === '{' || c === '(' || c === '[') {
          stack.push(c);      
      } else if (c === '}' || c === ')' || c === ']') {
          let t = stack.pop() + c;
          if (t != "{}" && t != "()" && t != "[]") return 0
      } else {
          return 0;
      }  
  }

  if (stack.length > 0) return 0;

  return 1;
}

// console.log(solution("{[()()]}"))
console.log(solution("([)()]"))