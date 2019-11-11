const arrValue = [1,2,3,4,5,6,7];

function linear(arr, n) {
  for (var i = 0; i < arr.length ;i++){
    if (arr[i] === n) return true;
  }
  return false;
}

console.log(linear(arrValue, 3));

