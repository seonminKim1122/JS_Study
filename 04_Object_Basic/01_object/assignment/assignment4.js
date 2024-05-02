/*
모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있을 때

모든 팀원의 월급을 합한 값을 구하고 그 값을 변수 sum 에 저장하는 코드를 작성하세요
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (const name in salaries) {
    sum += salaries[name]
}
alert(sum);