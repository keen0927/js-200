// const arr = ['일','월','화','수','목','금','토'];

// const solution = function(year, month, day) {
//   const getDate = new Date(year, month - 1, day).getDay();
//   return arr[getDate];
// };

// console.log(solution(2020, 1, 3));


const word1 = 'abcde';
const word2 = 'abcd';

const solution = word => {
  // const wordLength = word.length % 2;
  // const getCenter = Math.ceil(word.length / 2);
  // console.log(wordLength);


  // console.log(`짝수? 홀수? : ${Math.ceil(word.length / 2)}`);

  // console.log(`wordLength : ${wordLength}`);
  // console.log(`getCenter : ${getCenter}`);

  // console.log(word.substr(wordLength === 0 ? getCenter - 1 : getCenter - 1 ,wordLength === 0 ? 2 : 1 ));
  return word.substr(Math.ceil(word.length / 2) - 1, word.length % 2 ? 2 : 1);
}

// 2로 나눈다 -> 나머지가 0이면 짝수 +1 해서 리턴
// 2로 나눈다 -> 나머지가 1이면 홀수 
console.log(solution(word1));
console.log(solution(word2));

