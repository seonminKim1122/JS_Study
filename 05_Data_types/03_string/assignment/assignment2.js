/*
str 에 viagra 나 XXX 라는 문자열이 있으면 true 를 반환해주는
함수 checkSpam(str)을 작성해보세요
*/

function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')
}

alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxx'))
alert(checkSpam('innocent rabbit'))