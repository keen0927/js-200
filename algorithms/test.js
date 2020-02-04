// const getPromise = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 2) {
//             return resolve
//         } else {
//             return reject
//         }
//     });
// };

// const a = getPromise(2);

// console.log(a);


// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));


// wait(3000)
//     .then(() => console.log('Hello'));


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     },1000)
// });

// promise1
//     .then(value => {
//         console.log(value)
//     });

// console.log(promise1);

// let myFirstPromise = new Promise((resolve, reject) => {
//     const ddd = fetch('https://pokeapi.co/api/v2/pokemon/ditto/', {method: 'GET'})
//         .then((response) => {
//             return response.json()
//         })
//         .then((myJson) => {
//             return JSON.stringify(myJson);

//         })
//     resolve(ddd);
// });

// myFirstPromise.then((getFetch) => {
//     console.log("getFetch!!!", getFetch);
// });


// let myFirstPromise = new Promise((resolve, reject) => {
//     const ddd = fetch('https://pokeapi.co/api/v2/pokemon/ditto/', {method: 'GET'})
//         .then((response) => {
//             return response.json()
//         })
//         .then((myJson) => {
//             return JSON.stringify(myJson);

//         })
//     resolve(ddd);
// });

// myFirstPromise.then((getFetch) => {
//     console.log("getFetch!!!", getFetch);
// });

const arr = [[1,2,3],[4,5,6],[7,3,2]];


const ddd = (arr) => {
    const arrLength = arr.length;
    let arr1 = 0;
    let arr2 = 0;
    for (i = 0; i < arrLength; i++) {
        arr1 += arr[i][i];
        arr2 += arr[i][arrLength - 1 - i];
    }
    return Math.abs(arr1 - arr2);
};

console.log(ddd(arr));