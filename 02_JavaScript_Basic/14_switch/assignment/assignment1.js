/*
switch 문을 사용해 작성된 코드를 if..else 문을 사용한 코드로 변환하기

switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}
*/

if (browser === 'Edge') {
    alert('Edge 를 사용하고 계시네요!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!');
}