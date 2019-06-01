function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}


var a = '전역';

foo.call(obj);