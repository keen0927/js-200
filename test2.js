let numbers = [3, 1, 4, 1, 5, 9];

function recursive(acc, array) {
    if (array.length === 0) {
        return acc
    } else {
        return recursive(acc + array[0], array.slice(1));
    }
}



console.log(recursive(0, numbers));