/*
str의 길이를 확인하고 최대 길이 maxlength를 초과하는 경우
str의 끝을 생략부호로 대체해주는 함수 truncate(str, maxlenght)
를 만들어봅시다

새로 만든 문자열의 길이는 maxlength가 되어야 합니다
*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength-1) + '…'
    }
    return str
}

alert(truncate("What I'd like to tell on this topic is:", 20))
alert(truncate('Hi everyone!', 20))