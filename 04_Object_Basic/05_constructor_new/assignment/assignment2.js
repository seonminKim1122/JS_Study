/*
아래 세 개의 메서드를 가진 생성자 함수, Caculator 만들기

read() - prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장
sum() - 프로퍼티에 저장된 값 두 개를 더한 후 반환
mul() - 프로퍼티에 저장된 값 두 개를 곱한 후 반환

*/

const Caculator = function() {
    this.read = function() {
        this.a = +prompt('첫 번째 숫자')
        this.b = +prompt('두 번째 숫자')
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Caculator();
calculator.read();

alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());