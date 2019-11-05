var users = [
  { id:1, name: 'Keen', age: 36 },
  { id:2, name: 'Niki', age: 32 },
  { id:3, name: 'Wheely', age: 35 },
  { id:4, name: 'Iris', age: 29 },
  { id:5, name: 'Bernald', age: 35 },
  { id:6, name: 'Aiden', age: 35 },
  { id:7, name: 'Hazel', age: 28 },
  { id:8, name: 'Cash', age: 32 }
]

// var tempUsers = [];
// for (i = 0; i < users.length ; i++) {
//   if (users[i].age >= 30) {
//     tempUsers.push(users[i])
//   }
// }

function _filter(users, predicate) {
  var newList = [];
  for (i = 0; i < users.length ; i++) {
    if (predicate(users[i])) {
      newList.push(users[i])
    }
  }
  return newList;
} 

console.log(
  _filter(users, function(user) {return user.age >= 30})
)

console.log(
  _filter(users, function(user) {return user.age <= 30})
)