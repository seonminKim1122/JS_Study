/*
객체에 프로퍼티가 하나도 없는 경우 true,
그렇지 않은 경우 false 를 반환해주는 함수 isEmpty(obj) 를 만드세요

*/
"use strict";

const isEmpty = function(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule))

schedule["8:30"] = "get up";

alert(isEmpty(schedule))