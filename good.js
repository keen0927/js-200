// function s(N) {

//     if (N === undefined || N === '') return -1
//     // #1 solution
//     const strArray = N.split('');
//     const strLength = strArray.length;

//     console.log('strlength : ', strLength);

//     if (strLength <= 1) return -1;

//     // let temp1 = [];
//     // let temp2 = [];

//     // for (let i = 0; i < strLength / 2 ; i++) {
//     //     temp1.push(strArray[i]);
//     // }

//     // for (let i = strLength - 1; i > strLength / 2; i--) {
//     //     temp2.push(strArray[i]);
//     // }

//     // console.log(`temp1 : ${temp1}`);
//     // console.log(`temp2 : ${temp2}`);

//     // 앞에꺼 언쉬프트 한 값과 팝한 값을 비교해서 같으면 count를 ++함
//     // 값이 없으면 카운트 값을 리턴

//     // const strArray = N.split('');
//     // const strLength = strArray.length;
//     let count = 0;

//     for(let i = 0; i < Math.floor(strLength / 2) ; i++) {
//         if (strArray[i] ===  strArray[strLength - i - 1]) count++
//     }


//     console.log('count: ',count);
// }


// console.log(s());


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// "CARERAC"
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (!S) return - 1;

    const midString = Math.floor(S.length / 2);

    const leftString = S.substr(0,midString);
    const rightString = S.substr(midString + 1, S.length - 1);
    rightString = reverse(rightString);
    
    if (leftString === rightString) {
        return midString;
    } else {
        return -1;
    }
}


console.log(solution('RACECAR'));