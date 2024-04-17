const user = prompt("Who's there?");

if (user === 'Admin') {
    // 비밀번호 묻기
    const password = prompt('Password?');
    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if (password === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (user === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}