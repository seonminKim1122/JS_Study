/*
for 반복문을 이용해서 2 부터 10 까지 숫자 중 짝수만을 출력하기
*/

for (let num = 2; num <= 10; num += 2) {
    alert(num);
}

for (let num = 2; num <= 10; num++) {
    if (num % 2 === 1) continue;
    alert(num);
}