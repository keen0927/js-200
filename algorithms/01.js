// const arr = ['일','월','화','수','목','금','토'];
// const solution = function(year, month, day) {
//   const getDate = new Date(year, month - 1, day).getDay();
//   return arr[getDate];
// };
// console.log(solution(2020, 1, 3));




// const word1 = 'abcde';
// const word2 = 'abcd';
// const solution = word => {
//   return word.substr(Math.ceil(word.length / 2) - 1,word.length % 2 ? 1 : 2 );
// };
// console.log(solution(word1));
// console.log(solution(word2));




// const numbers = [1,1,3,3,0,1,1];
// const solution = numArr => {
//   return numArr.filter((v, i) => v !== numArr[i + 1]);
// };
// console.log(solution(numbers));





// const numbers = [5,9,7,10];
// const solutionNumber = 4;

// const solution = (numbers, solutionNumber) => {
//   return numbers.filter(v => v % solutionNumber === 0)
// };






// 3과 5가 주어지면 3 + 4 + 5를 리턴하면된다
// const solution = (a, b) => {
//   const tempArray = [];
//   for (i = a ; i <= b ; i++) {
//     tempArray.push(i);
//   }
//   const result = tempArray.reduce((pre, cur) => pre + cur);
//   return result;
// }

// const solution = (a, b) => {
//   a > b && ([a,b] = [b,a]);
//   return Array(b - a + 1).fill().map((v, i) => a + i).reduce((a, c) => a + c);
// }

// const solution = (a,b) => {
//   return (a + b) * ((a > b ? a - b : b - a) + 1) / 2;
// }

// console.log(solution(3,6));
