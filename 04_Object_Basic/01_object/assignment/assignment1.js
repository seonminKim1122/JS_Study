/*
각 동작을 한 줄씩 코드로 작성

1. 빈 객체 user 를 만든다
2. user 에 키가 name, 값이 John 인 프로퍼티를 추가
3. user 에 키가 surname, 값이 Smith 인 프로퍼티 추가
4. name 의 값을 Pete 로 수정
5. user 에서 프로퍼티 name을 삭제
*/
"use strict";

// 1
let user = {};

// 2
user.name = "John";

// 3
user.surname = "Smith";

// 4
user.name = "Pete"

// 5
delete user.name