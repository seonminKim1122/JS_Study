/*

2 부터 n 까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.

*/

const n = Number(prompt('n 값을 입력해주세요.', 0));

for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let div = 2; div < num; div++) {
        if (num % div === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(num);
    }
}