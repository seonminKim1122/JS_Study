/*
생성자 함수 Accumulator(startingValue) 를 만들어 보세요.

- 프로터피 value 에 현재 값을 저장. 최초 호출 시엔 생성자 함수의 인수,
startingValue 에서 시작값을 받아옵니다.
- 메서드 read() 에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고,
받은 숫자를 value 에 더해줍니다.

프로퍼티 value 엔 startingValue 와 사용자가 입력한 모든 값의 총합이
더해져 저장
*/
"use strict";


const Accumulator = function(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += (+prompt("더할 값을 입력해주세요", 0))
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);