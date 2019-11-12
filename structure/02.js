// const arr = [1,2,3,4,5,6,7,8,9,10];

// function search(arr, n) {
//   var lowIndex = 0, highIndex = arr.length - 1;

//   while(lowIndex <= highIndex) {
//     var midIndex = Math.floor((highIndex+lowIndex) / 2);
//     if (arr[midIndex] === n) {
//       return midIndex;
//     } else if (n > arr[midIndex]) {
//       lowIndex = midIndex;
//     } else {
//       highIndex = midIndex;
//     }
//   }
//   return - 1;
// }

// console.log(search(arr,5));

function searchBinary(arr, num) {
  var lowIndex = 0,
      highIndex = arr.length - 1;

  while(lowIndex <= highIndex) {
    var midIndex = Math.floor( (highIndex + lowIndex) / 2);
    if (arr[midIndex] == num) {
      return midIndex
    } else if ( num > arr[midIndex]) {
      lowIndex = midIndex
    } else {
      highIndex = midIndex
    }
  }

  return -1;
}

