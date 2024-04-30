/*
'?' 나 '||' 를 사용하여 함수 다시 작성하기

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?');
    }
}

|| 연산자는 앞의 평가 결과가 true 면 뒤는 평가하지 않는다.
따라서 age > 18 인 경우 그 결과값인 true 가 return 되고,
그렇지 않은 경우 confirm(~~) 를 평가하게 된다.
*/
function checkAge(age) {
    return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge2(age) {
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}