// let a = 1, b = 1;

// let c = ++a;
// let d = b++;

// alert(c); // 2
// alert(d); // 1

// let a = 2;
// let x = 1 + (a *= 2);

// alert(a); // 4
// alert(x); // 5

// alert("" + 1 + 0) // "10", 정답 : 10
// alert("" - 1 + 0) // -1, 정답 : -1
// alert(true + false) // 1, 정답 : 1
// alert(6 / "3") // 2, 정답 : 2
// alert("2" * "3") // 6, 정답 : 6
// alert(4 + 5 + "px") // "45px", 정답 : "9px"
// alert("$" + 4 + 5) // "$45", 정답 : "$45"
// alert("4" - 2) // 2, 정답 : 2
// alert("4px" - 2) // NaN, 정답 : NaN
// alert(7 / 0); // Infinity, 정답 : Infinity
// alert("  -9  " + 5) // "  -9  5", 정답 : "  -9  5"
// alert("  -9  " - 5) // -14, 정답 : -14
// alert(null + 1) // 1, 정답 : 1
// alert(undefined + 1); // undefined, 정답 : NaN
// alert(" \t \n" - 2); // NaN, 정답 : -2

let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요", 1);
let b = prompt("덧셈할 첫 번째 숫자를 입력해주세요", 2);
alert(a + b); // 결과 12, 3이 나오도록 코드를 고치세요

a = Number(a)
b = Number(b)
alert(a + b);