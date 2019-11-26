
// Object Assine
// ew로 생성자를 만들지말고 순수한

const healthObj = {
	showHealth: function () {
		console.log('오늘은 운동시간: ' + this.healthTime)
	}
};

const myHealth = Object.create(healthObj);

