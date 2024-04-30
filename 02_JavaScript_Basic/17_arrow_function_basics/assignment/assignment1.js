/*
함수 표현식으로 만든 아래 함수를 화살표 함수로 변경하기

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);

함수 표현식으로 만들어진 것은 함수 이름이 없는 2개의 익명 함수
*/

ask(
    '동의하십니까?',
    () => alert('동의하셨습니다.'),
    () => alert('취소 버튼을 누르셨습니다.')
)