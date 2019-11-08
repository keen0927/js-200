// 중복없이 유일한 값을 저장하려고 할떄. 이미 존재하는지 체크할 떄 유용
let mySet = new Set();
// console.log(typeof mySet);
mySet.add('keen');
mySet.add('wheely');
console.log(mySet);

mySet.forEach(function(v){
  console.log(v);
});

if(mySet.has('keen')) console.log('1');

mySet.delete('keen');

console.log(mySet);