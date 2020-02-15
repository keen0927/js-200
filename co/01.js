function solution(A, K){

    const charMaxLength = String(Math.max(...A)).length;

    // TODO : 마지막 K 값 삼항연산자 체크로 빼기
    const topLine = "+" + "-".repeat(charMaxLength) + "+";
    const midLine = "|" + " ".repeat(charMaxLength - 1) + A[0] + "|";

    let stack = [];

    for (let i = 0; i < A.length ; i++) {
        let lineStr = "+" + "-".repeat(charMaxLength) + "+";
        let valueStr = "|" + " ".repeat(charMaxLength - 1) + A[i] + "|";
        stack.push(lineStr + valueStr);
    }
    console.log(stack);
    // const ddd = 'ddd\nddd'
    // process.stdout.write(ddd);
}


solution([4,35,80,123,12345,44,8,5,24,3],4);