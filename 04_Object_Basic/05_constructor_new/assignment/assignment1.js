"use strict";

/*
new A() == new B() 가 성립 가능한 함수 A 와 B 를 만드는 게 가능한가?

function A() {...}
function B() {...}

let a = new A;
let b = new B;

alert(a == b); // true
*/


/*
가능하다.

생성자 함수에 return 객체를 사용하면 해당 객체를 반환하므로
전역에서 접근 가능한 객체를 생성하고 이를 반환하도록 하면 된다.
*/


let obj = {}

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A();
let b = new B();

alert(a == b);