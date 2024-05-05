/*
아래 반복문은 무한대로 작동합니다 왜 그럴까요?

let i = 0;
while (i != 10) {
    i += 0.2;
}

수학적인 계산에서는 0.2 를 50번 더하면 10이 되므로 그 때 while 문을
탈출해야 한다.

하지만 부동소수점 방식에서 정밀도 손실이 발생하므로 정확히 10이 되지 못해서
무한대로 동작하는 것이다.
*/