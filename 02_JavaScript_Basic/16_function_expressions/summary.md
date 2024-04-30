## 함수 표현식
자바스크립트는 함수를 특별한 종류의 값으로 취급하여 선언식 말고도 표현식을 통해서 함수를 만들 수 있다.
```javascript
function sayHi() {
    alert('Hello');
}
```
```javascript
const sayHi = function() {
    alert('Hello');
}
```

<br>

특별한 종류로 취급되긴 하지만 함수도 어쨌든 값이기 때문에 값이 할 수 있는 일은 함수도 할 수 있다.(ex : 복사해서 다른 변수에 할당)

```javascript
function sayHi() {
    alert('Hello');
}

let func = sayHi;

func(); // Hello
sayHi(); // Hello
```

<br></br>

## 콜백 함수
```javascript
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}
```
`콜백함수란?`<br>
함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 `나중에 호출(called back)` 하는 것
<br>

```javascript
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    function() {alert('동의하셨습니다.')},
    function() {alert('취소 버튼을 누르셨습니다.')}
)
```

<br></br>

## 함수 표현식 vs 함수 선언문
표현식과 선언문의 가장 큰 차이는 `자바스크립트 엔진이 언제 함수를 생성하는지`에 있다.
<br><br>
함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성하는 반면, 함수 선언문은 스크립트 실행 전 준비단계에서 전역에 선언된 함수 선언문을 찾고 함수를 생성한다.
<br><br>
따라서 함수 선언문의 경우 스크립트 어디서든 선언된 함수를 사용할 수 있고 표현식의 경우 표현식 이후의 코드에서만 사용할 수 있다.

<br></br>
또 다른 차이점으로는 스코프가 있다.<br>
`엄격 모드`에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근이 가능하지만 블록 밖에서는 함수에 접근할 수 없다.
<br><br>
만약 엄격 모드가 아니라면 블록 내부에 선언된 함수에 블록 외부에서도 접근할 수 있다.