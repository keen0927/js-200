const arr = [1,3,5,4];


const insertSort = (arr) => {
    for ( let i = 1 ; i < arr.length ; i++ ) {
        const current = arr[i];
        let j = i - 1;

        while(current >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}


console.log(insertSort(arr));