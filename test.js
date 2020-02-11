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
// function solution(S) {
//   let arrS = S.split("");
//   let stack = [];
  
//   for (let i = 0; i < S.length; i++) {
      
//       let c = arrS[i];
      
//       if (c === '{' || c === '(' || c === '[') {
//           stack.push(c);      
//       } else if (c === '}' || c === ')' || c === ']') {
//           let t = stack.pop() + c;
//           if (t != "{}" && t != "()" && t != "[]") return 0
//       } else {
//           return 0;
//       }  
//   }

//   if (stack.length > 0) return 0;

//   return 1;
// }

// console.log(solution("{[()()]}"))
// console.log(solution("([)()]"))


// # triangle

// function triangle(A) {
//     A.sort((a,b) => (a-b)); // 정렬
//     console.log('A.length : ',A.length);
//     for (let i = 0; i < A.length - 2 ; i++) {
//         let p = A[i],
//             q = A[i + 1],
//             r = A[i + 2];

//         console.log('p + q > r : ',p + q > r);
//         console.log('q + r > q : ',q + r > q);
//         console.log('r + p > q : ',p + q > r);
//         if (p + q > r && q + r > q && r + p > q) return 1
//     }

//     return 0;
// }


// function solution(P,C) {
    // 5명의 플레이어와 3개의 코트가 주어디면 동시에 2게임을 할 수 있다
    // 5 / 2 = 2.5 3보다 작음 Math.floor 2 리턴

    // 2명의 플레이어와 3개의 코트가 주어졌다면
    // 2 / 2 = 1 3보다 작음 1 리턴

    // 10명의 플레이어와 2개의 코트가 주어졌다면
    // 10 / 2 = 5 2 보다 크면 코트 수를 줌

    // 2명의 플레이어와 1개의 코트가 주어진다면
    // 2 / 2 = 1 

//     const players = P;
//     const courts = C;
//     const limitPlayer = 2;

//     return Math.floor(players / limitPlayer) >= courts ? courts : Math.floor(players / limitPlayer);
// }

// console.log(solution(5,3));
// console.log(solution(2,3));
// console.log(solution(12,1));

let cleacnSocks = [1,2,1,1];

for(let i = 0; i < cleacnSocks.length ; i++) {
    console.log(cleacnSocks.filter(v => v === cleacnSocks[v]));
}