/*
while 반복문이 순차적으로 실행될 때마다 어떤 값이 alert 창에 출력될지 예상

1. 전위형 증가 연산자 사용
let i = 0;
while (++i < 5) alert(i);

1
2
3
4

2. 후위형 증가 연산자 사용
let i = 0;
while (i++ < 5) alert(i);

1
2
3
4
5

*/

let i = 0;
while(++i < 5) alert(i);

i = 0;
while(i++ < 5) alert(i);