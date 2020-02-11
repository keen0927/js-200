function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function(){}

const test = new Person('keen',10,20);

test.sum();