// var greet = function(greeting, name) {
//     console.log(greeting + ", " + name);
// };
// greet("Hello", "Keen");

var greetCurried = function(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name)
    }
};

var greetHello = greetCurried("Hello");

// greetHello("Keen");

// greetCurried("hey!!")("Keen");


// var greetDeeplyCurried = function(greeting) {
//     return function(name) {
//         return function(age) {
//             console.log(greeting + ', ' + name + ', ' + age);
//         }
//     }
// }

// greetDeeplyCurried('hi')('keen')(27);

var greetDeeplyCurried = greeting => name => age => {
    console.log(greeting + ', ' + name + ', ' + age);
}
//     return (name) => {
//         return (age) => {
    
//         }
//     }
// }

greetDeeplyCurried('hi')('keen')(27);