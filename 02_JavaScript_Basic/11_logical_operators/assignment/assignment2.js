"use strict";

/*
아래 코드의 결과를 예측해보세요.

alert( alert(1) || 2 || alert(3) );

alert(1) 평가 하면서 수행
alert(1) 을 아무 것도 반환하지 않으므로 undefined 이어서 false
2 를 평가하고 truthy 이므로 더 이상 평가 X
alert(2) 수행
*/
alert(alert(1) || 2 || alert(3));