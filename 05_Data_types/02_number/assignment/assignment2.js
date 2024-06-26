/*

6.35.toFixed(1) == 6.3 인 이유는 무엇일까?

6.35 라는 부동소수점에서 무한소수라서 정밀도 손실이 발생하기 때문!

6.35를 제대로 반올림하기 위해서는 매우 작은 숫자를 더해주면 된다

(6.35 + 1e-10).toFixed(1)

아니면 아래와 같이 무한소수가 아니게 만들어서 작업
Math.round(6.35 * 10) / 10
*/
alert(6.35.toFixed(1)); // 6.3
alert((6.35 + 1e-10).toFixed(1)); // 6.4
alert(Math.round(6.35 * 10) / 10); // 6.4