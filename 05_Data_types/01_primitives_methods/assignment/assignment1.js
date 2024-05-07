/*
let str = "Hello";

str.test = 5;

alert(str.test);

이 코드를 실행하면 의도대로 문자열(str) 에 프로퍼티(test) 를 추가할 수 있는가?
만약 가능하다면 알럿창엔 무엇이 출력되는가?

답) str 은 원시타입이다. 따라서 프로퍼티를 추가할 수 없다.
프로퍼티를 추가하려고 하면 자바스크립트 엔진이 래퍼 객체를 만들어 프로퍼티를 추가하게 된다.
하지만 래퍼 객체는 필요할 때 잠깐 사용되고 사라지기 때문에 알럿창에서는 undefined 가 출력된다.

만약 엄격 모드로 하면 아예 래퍼 객체를 수정하려 할 때 에러가 발생한다.
Uncaught TypeError: Cannot create property 'test' on string 'Hello'
    at assignment1.js:21:10
*/
// "use strict";

let str = "Hello";

str.test = 5;

alert(str.test);