function ddd(X,Y,D) {
    const destination = Y - X; // 가야할 거리
    const getMathFloor = number => {
        return Math.floor(number);
    }
    const jump = 
        getMathFloor(destination % D) ? // 가야할 거리를 내가 갈수 있는걸로 나눴을때 0이 아니라면 1번 더가야하고 딱 딸어지면 
        getMathFloor(destination / D) + 1 :
        getMathFloor(destination / D)

        // console.log('1: ',Math.floor(destination % D));
        // console.log('2: ',Math.floor(destination / D) + 1);
        // console.log('3: ',Math.floor(destination / D));
    return jump;
}

console.log(ddd(10,100,30)); 