// function hello() {
//     debugger;
//     console.log(this.name);
// }

// var name ='keen';

// (function(){
//     'use strict';
//     // debugger;
//     hello();
// })();

// function hello() {
//     // debugger;
//     console.log(this.name);
// }

// var obj = {
//     name: 'keen',
//     hello: hello
// }

// obj.hello();

// function hello() {
//     console.log(this.name);
// }

// var obj = {
//     name: 'keen',
//     hello: hello
// }
// // debugger;
// helloFunction = obj.hello;

// name = 'global Keen';

// helloFunction();

// function hello() {
//     console.log(this.name);
// }

// var obj = {
//     name: 'chris',
//     hello: hello
// }

// setTimeout(obj.hello, 1000);

// name = 'global context!';


// var obj = {
//     name: 'keen',
//     run: function() {
//         console.log(this.name);
//     }
// }

// obj.run();

// function hello() {
//     console.log(this.name);
// }

// var obj = {
//     name: 'chris',
// };

// name = 'global context';
// hello.call(obj)
function hello() {
    console.log(this.name);
  }
  
  var obj = {
    name: 'chris',
    hello: hello
  };
  
  setTimeout(obj.hello.bind(obj), 1000); // 1초 후에 hello 함수가 동작하면 this는?
  
  name = 'global context!';