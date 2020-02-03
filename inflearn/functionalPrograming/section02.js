var users = [
  { id:1, name: 'Keen', age: 36 },
  { id:2, name: 'Niki', age: 32 },
  { id:3, name: 'Wheely', age: 35 },
  { id:4, name: 'Iris', age: 29 },
  { id:5, name: 'Bernald', age: 35 },
  { id:6, name: 'Aiden', age: 35 },
  { id:7, name: 'Hazel', age: 28 },
  { id:8, name: 'Cash', age: 32 }
];

// let temp_users = [];
// for (var i = 0; i < users.length ; i++) {
//   if (users[i].age >= 30) {
//     temp_users.push(users[i])
//   }
// }
// console.log(temp_users);



// let names = [];
// for (var i = 0; i < temp_users.length ; i++) {
//   names.push(temp_users[i].name);
// }
// console.log(names);

let user_under_30 = [];

for (var i = 0; i < users.length ; i++) {
  if(users[i].age < 30) {
    user_under_30.push(users[i])
  }
}

let ages = [];

for (var i = 0; i < user_under_30.length ; i++) {
  ages.push(user_under_30[i].name);
}

console.log(`user_under_30 : ${JSON.stringify(user_under_30)}`);
console.log(user_under_30);

console.log(ages)