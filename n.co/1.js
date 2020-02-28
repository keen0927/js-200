// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//     const digit = 5;
//     const digitString = String(Math.abs(N));
//     let temp = [];

//     // console.log(negative);

//     for ( let i = 0; i <= digitString.length ; i++ ) {
//         const splitString = digitString.split('');
//         splitString.splice(i, 0, String(digit));

//         const calcString = splitString.join('');
//         temp.push(Number(calcString));
//     }

//     if (N < 0) {
//         const negativeNumbers = temp.map(v => {
//             const negative = '-' + v;
//             return parseInt(negative);
//         });

//         temp = negativeNumbers;
//     }

//     const result = temp.reduce((a,b) => Math.max(a,b));

//     return result;
// }

function solution(N) {

    if (!N) return 5;
    if (N < -8000 || N > 8000) {
        return 5;
    }

    const digit = 5;
    const digitString = String(Math.abs(N));
    let temp = [];
    
    for ( let i = 0; i <= digitString.length ; i++ ) {
        const splitString = digitString.split('');
        splitString.splice(i, 0, String(digit));
        
        const calcString = splitString.join('');
        temp.push(Number(calcString));
    }
    
    if (N < 0) {
        const negativeNumbers = temp.map(v => {
            const negative = '-' + v;
            return parseInt(negative);
        });
        
        temp = negativeNumbers;
    }
    
    const result = temp.reduce((a,b) => Math.max(a,b));
    
    return result;
}




console.log(solution(8001));

// Number(-9999);

// const ddd = Math.abs(9999);
// console.log(ddd);

// csont

// const eee = String(Math.abs(-999));

