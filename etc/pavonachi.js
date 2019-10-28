// function getNthFibo(n) {
//   if (n <= 1) return n;
//   var sum = 0, last = 1, lastlast = 0;

//   for (var i = 1; i < n ; i++) {
//     sum = lastlast + last;
//     lastlast = last;
//     last = sum;
//   }
//   return sum;
// }


// console.log(getNthFibo(10));

var exampleSet = new Set();

exampleSet.add(1);
exampleSet.add(1);
exampleSet.add(2);
exampleSet.add(3);
exampleSet.add(3);
;

console.log(exampleSet);

function intersectSets(setA, setB) {
  var intersection = new Set;
  
  for (var value of setB) {
    if (setA.has(value)) {
      intersection.add(value);
    }
  }

  return intersection;
}

var setA = new Set([1,2,3,4]);
var setB = new Set([3,4]);

var ddd = intersectSets(setA, setB);
console.log(ddd);

