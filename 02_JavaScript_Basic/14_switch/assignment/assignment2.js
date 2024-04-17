/*
아래 코드를 switch 문을 사용한 코드로 변경

let a = +prompt('a?', ''); // 단항연산자 + 는 숫자로 형변환하는 역할!!

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}