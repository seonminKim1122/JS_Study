/*
Math.random() 은 0 부터 1까지의 랜덤한 값을 생성한다.

random(min, max) 함수를 작성하여 min 부터 max 까지의 임의의
부동소수점 숫자를 생성하시오 max 는 포함되지 않음
*/
"use strict";

function random(min, max) {
    return min + Math.random() * (max - min);
}