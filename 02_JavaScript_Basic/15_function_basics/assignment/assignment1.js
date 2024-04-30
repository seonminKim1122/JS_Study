/*
아래 2 코드가 동일하게 작동하나요?
*/
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?');
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm('보호자의 동의를 받으셨나요?')
}

/*
답변) 네.

함수의 실행 흐름은 return 을 만나면 종료됩니다. 따라서 else 문을 제거하더라도 age > 18 인 경우
return 문을 만나 더 이상 아래로 실행 흐름이 넘어가지 않기 때문에 else 문이 있을 때와 동일하게 작동합니다.
*/