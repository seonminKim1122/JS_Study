/*
아래 코드 결과 예측

alert( null || 2 && 3 || 4);

연산자 우선순위 && > || 따라서 && 먼저 수행

2 && 3 -> truthy && truthy 이므로 3을 반환

alert(null || 3 || 4); 과 같은 꼴

null -> falsy
3 -> truthy

alert(3); 과 같은 꼴

3출력
*/

alert(null || 2 && 3 || 4);