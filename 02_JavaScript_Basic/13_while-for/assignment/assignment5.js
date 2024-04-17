/*
for 반복문을 while 반복문으로 바꾸되 동작 방식에 변화가 없도록 하기

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
*/

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
    alert(`number ${i++}!`);
}