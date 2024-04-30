function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

const x = prompt('x? ')
const n = prompt('n? ')

if (n < 1) {
    alert('자연수를 입력하세요')
} else {
    alert(pow(x, n))
}