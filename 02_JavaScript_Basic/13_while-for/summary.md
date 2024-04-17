## `while` 반복문

```javascript
while (condition) {
    // 코드
}
```
`condition` 이 `truthy` 면 반복문 내부 코드가 실행

<br></br>

## `do...while` 반복문
`condition` 확인을 반복문 본문 보다 아래로 내려 일단 한 번 실행하고 확인하는 것

<br></br>

## `for` 반복문
```javascript
for (begin; condition; step) {
    // 코드
}
```
`for` 반복문의 구성 요소 begin, condition, step 은 생략이 가능합니다.<br>

만약 모두 생략하면 무한 루프를 돌게 됩니다.
```javascript
for (;;) {
    // 무한루프~~
}
```

<br></br>

## `break` 와 `continue`
`break` : 반복문을 빠져 나올 때 사용
`continue` : 다음 반복으로 넘어갈 때 사용

<br></br>

## `break/continue` 와 `label`
반복문에 `label` 을 붙여서 `break / continue` 가 위치하는 바로 직전 반복문 뿐만 아니라 원하는 반복문에 대해 `break / continue` 를 사용할 수 있습니다.

```javascript
outer : for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`(${i}, ${j})의 값`, '');

        if (!input) break outer;
    }
}
```