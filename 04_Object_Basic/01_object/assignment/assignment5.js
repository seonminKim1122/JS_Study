/*
객체 obj 의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수
multiplyNumeric 을 만들어보세요
*/

const typeOfNumeric = typeof(1);

const multiplyNumeric = function(obj) {
    for (const key in obj) {
        if (typeof(obj[key]) === typeOfNumeric) {
            obj[key] = obj[key] * 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

multiplyNumeric(menu);

for (const key in menu) {
    alert(menu[key])
}