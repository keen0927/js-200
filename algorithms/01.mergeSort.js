const arr = [1,3,2,5,4];

// #1 1번째 인덱스에서부터 for문을 돈다
// #2 현재값을 저장하는 변수와 이전 인덱스 값의 변수를 선언한다.
// #3 i가 0보다 크고 앞에 값이 현재값보다 클경우 while문을 순회한다.
// #4 한계단씩 오른쪽으로 밀어낸다. arr[j + 1] = arr[j]
// #5 j값은 1씩 감소시킨다.
// #6 마지막으로 j + 1을 시켜 current옮길 값을 arr[j + 1]위치에 할당한다.

function insertSort(arr) {
    for ( let i = 1 ; i < arr.length ; i++) {
        const current = arr[i];
        let j = i - 1;

        while (i >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertSort(arr));