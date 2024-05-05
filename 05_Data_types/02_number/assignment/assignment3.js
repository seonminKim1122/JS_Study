/*
사용자가 유효한 숫자형 값을 입력할 때가지 계속 입력받는 함수
readNumber 를 만들어보세요
*/
"use strict"

function readNumber() {
    let number;

    do {
        number = prompt("숫자를 입력하세요", 0);
    } while (!isFinite(number));

    if (number === null || number === "") {
        return null;
    }

    return +number;
}