// animal / dog 클래스 생성
// animal 은 2개의 매개변수를 받는다 name / type
// 공개속성으로 설정
// 추가로 sayName과 sayAnimalType이라는 두 개의 함수가 있어야한다
// sayName은 name을 출력
// sayAnimalType은 animalType을 출력한다
// 두 속성 모두 생성장에서 초깃값이 설정된다

// Dog클래스는 animal을 상속한다



function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}

Animal.prototype.sayType = function() {
  console.log(this.type);
}


var pikachu = new Animal('pika','mouse');

pikachu.sayName();
pikachu.sayType();

function Dog(name) {
  Animal.call(this, name, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);

var miru = new Dog('miru');

miru.sayName();
miru.sayType();