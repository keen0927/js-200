// const lotto = [];

const lotto = [];

// 로또 번호 생성
const makeLottoNumberInit = (function(){
	for (let i = 1 ; i <= 45 ; i++) {
		lotto.push(i);
	}
})();

// 랜덤 번호 생성
const generateRandomNumber = (function(){
	let resultNumber = [];
	for (let i = 1 ; i <= 6 ; i++) {
		let randomNumberIndex = Math.floor(Math.random() * (lotto.length - 1) + 1);
		resultNumber.push(lotto[randomNumberIndex]);
		lotto.splice(randomNumberIndex,1);
		console.log(lotto);
	}
	console.log(resultNumber);
})();







