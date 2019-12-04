// document.querySelector('.input-test').addEventListener('input',({target}) => {
//     console.log(target.value);
// })

// 디바운싱
// var timer;

// document.querySelector('.input-test').addEventListener('input',e => {
//     console.log(timer);

//     if (timer) {
//         clearTimeout(timer);
//     };
//     timer = setTimeout(() => {
//         console.log(`요청 ${e.target.value}`);
//     }, 200);
// });

// 쓰로틀링
var timer;

document.querySelector('.input-test').addEventListener('input',e => {
    console.log(timer);
    if (!timer) {
        timer = setTimeout(() => {
            console.log(timer);
            timer = null;
            console.log(timer);
            console.log(`요청 ${e.target.value}`);
        },500)
    }
});