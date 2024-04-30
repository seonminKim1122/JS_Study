## 화살표 함수 기본
함수 표현식보다 간결한 방법 `화살표 함수`로 함수를 만들 수 있다.
```javascript
let sum = (a, b) => a + b;
alert(1, 2); // 3
```

<br>
만약 인수가 하나밖에 없다면 괄호를 생략할 수 있다.<br>
인수가 하나도 없을 때는 괄호를 비워놓으면 된다.

```javascript
let func1 = n => n * 2;
let func2 = () => alert('호우');
```

<br></br>

## 본문이 여러 줄인 화살표 함수
본문이 여러 줄인 화살표 함수는 `중괄호{}` 안에 평가해야 할 코드를 넣어주면 됩니다.

```javascript
let sum = (a, b) => {
    let result = a + b;
    return result;
}
```