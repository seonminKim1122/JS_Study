/*
calculator 라는 객체를 만들고 3 가지 메서드를 구현

read() : 프롬프트 창을 띄우고 더할 값 두 개를 입력 받음. 입력 받은 값으 프로퍼티에 저장
sum() : 저장된 두 값의 합을 반환
mul() : 저장된 두 값의 곱을 반환
*/

let calculator = {
    read() {
        this.a = +prompt('첫 번째 값', 0)
        this.b = +prompt('두 번째 값', 0)
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());