/*
달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열이 있다고 가정해봅시다
위와 같은 문자열에서 숫자만 뽑아재는 함수를 작성해봅시다
*/

function extraCurrencyValue(str) {
    return +str.slice(1)
}

alert(extraCurrencyValue('$120') === 120);