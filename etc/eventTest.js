var a = "foo";
var b = ['f','o','o'];

console.log(a.length);
console.log(b.length);

console.log(a.indexOf('o'));
console.log(a.indexOf('o'));

var c = a.concat("bar");
var d = b.concat("bar");

console.log(c);
console.log(d);

a[1] = "O";
b[1] = "O";

console.log(a);
console.log(b);

c = a.toUpperCase();

console.log(c);