identity = prompt("Who's there?");

if (identity == 'Admin') {
  password = prompt("Password?");
  if (password == "TheMaster") {
    alert('환영합니다!');
  } else if (password == null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.')
  }
} else if (identity == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}