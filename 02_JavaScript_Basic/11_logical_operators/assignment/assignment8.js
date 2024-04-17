/*
아래 표현식에서 어떤 alert 가 실행될까요?

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('thrid');


-1 || 0 : -1 을 반환, -1 이 불린형으로 변환되어 if (true)
-1 && 0 : 0 을 반환, 0 이 불린형으로 변환되어 if (false)
null || -1 && 1 -> null || 1 -> 1을 반환, 1이 불린형으로 변환되어 if (true)

따라서
alert('first');
alert('thrid'); 

가 실행
*/

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('thrid');