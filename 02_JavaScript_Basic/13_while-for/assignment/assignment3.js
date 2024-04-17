/*

for 반복문의 출력값 예상하기

1. 후위형 증가 연산자 사용
for (let i = 0; i < 5; i++) alert(i);

2. 전위형 증가 연산자 사용
for (let i = 0; i < 5; ++i) alert(i);

어차피 본문 블럭 수행 후에 step 쪽을 수행하므로 차이가 없다

0
1
2
3
4
*/

for (let i = 0; i < 5; i++) {
    alert(i);
}

for (let i = 0; i < 5; ++i) {
    alert(i);
}