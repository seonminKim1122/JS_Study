/*
str 의 첫 글자를 대문자로 바꿔 반환하는 함수,
ucFirst(str) 을 만들어보세요
*/

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}

alert(ucFirst("john") == "John");