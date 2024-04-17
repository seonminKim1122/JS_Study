## switch 문
<br>

## 문법
`switch` 문은 하나 이상의 `case` 문으로 구성.<br>
조건에 맞는 `case` 문부터 시작해서 `break` 를 만나거나 `switch` 문이 끝나면 코드의 실행을 멈춤

```javascript
let a = 2 + 2;

switch (a) {
    case 3:
        alert('비교하려는 값보다 작습니다.');
    case 4:
        alert('비교하려는 값과 일치합니다.');
    case 5:
        alert('비교하려는 값보다 큽니다.');
        break;
    default:
        alert('어떤 값인지 파악이 되지 않습니다.');
}
/*
이 switch 문은

alert('비교하려는 값과 일치합니다.');
alert('비교하려는 값보다 큽니다.');

가 수행된다.
*/
```

<br></br>

## 자료형의 중요성
비교하려는 값과 `case` 문의 값을 '===' 일치 비교로 확인하므로 타입도 일치해야 합니다.