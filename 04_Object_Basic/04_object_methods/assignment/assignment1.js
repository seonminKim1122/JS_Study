/*
함수 makeUser 는 객체를 반환한다.
이 객체의 ref 에 접근하면 어떤 결과가 발생하고 그 이유는 무엇인가?
*/
"use strict";

function makeUser() {
    return {
        name: "John",
        ref: this,
    }
}

let user = makeUser();
alert(user.ref.name);

/*
메서드 내부에서 this 를 사용한 것이 아니므로 this는 객체가 아니라 makeUser() 의 this를 의미하고
이는 곧 undefined 를 의미하게 된다.
undefined 에는 name 이라는 프로퍼티 키가 존재할 수 없기 때문에 에러가 발생한다.

Error: Cannot read property 'name' of undefined
*/