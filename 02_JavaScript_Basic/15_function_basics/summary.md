## 함수 선언
```javascript
function showMessage(param1, param2, param3, ...) {

}
```

선언한 함수를 호출해서 함수 본문을 실행할 수 있습니다.

```javascript
showMesage(arg1, arg2, ...)
```

<br></br>

## 지역 변수
지역 변수란 `함수 내에서 선언한 변수` 를 의미하며 이는 함수 안에서만 접근할 수 있습니다.

```javascript
function showMessage() {
    let message = "안녕하세요!"; // 지역 변수
    alert(message);
}

showMessage();
// alert(message); ReferenceError : message is not defined
```

<br></br>

## 외부 변수
함수 내부에서 함수 외부의 변수에 접근할 수 있습니다.
```javascript
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage(); // Hello, John
```

단순히 접근 뿐 아니라 수정도 가능

```javascript
let userName = 'John';

function showMessage() {
    userName = 'Bob';

    let message = 'Hello, ' + userName;
    alert(message);
}

alert(userName); // John

showMessage(); // Hello, Bob

alert(userName); // Bob
```
단, 만약 외부 변수와 동일한 이름의 지역 변수가 있을 경우 지역 변수가 외부 변수를 가려 외부 변수를 사용할 수 없음

<br></br>

## 매개변수
매개변수를 사용하면 임의의 데이터를 함수 안에 전달할 수 있고 매개변수는 인자라고 부르기도 한다.
```javascript
function showMessage(from, text) {
    alert(from + ' : ' + text);
}

showMessage('Ann', 'Hello!'); // Ann : Hello!
showMessage('Ann', "What's up?"); // Ann : What's up?
```
<br>
함수에 전달된 인자는 지역변수에 복사되고, 함수 내부에서는 지역변수에 복사된 값 사용!!

<br></br>

## 기본값
함수를 호출할 때 매개변수에 인자값을 전달하지 않으면 그 값은 undefined 가 되는데, 이를 원치 않는 경우 함수 선언 시 기본값을 설정해주면 된다.
```javascript
function showMessage(from, text) {
    alert(from + ': ' + text);
}

showMessage('Ann'); // Ann: undefined
```

```javascript
function showMessage(from, text='no text given') {
    alert(from + ': ' + text);
}
showMessage('Ann'); // Ann: no text given
```

기본값을 설정하게 되면 undefined 와 엄격하게 일치하는 값을 전달하는 경우에도 기본값이 할당됩니다.

```javascript
showMessage('Ann', undefined); // Ann: no text given
```

<br></br>

## 반환 값
함수를 호출했을 때 호출한 곳에 특정 값을 반환하게 할 수 있는데 이 때 그 특정 값을 `반환 값(return value)` 라고 부른다.
```javascript
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
alert(result); // 3
```

함수 내부에서 return 은 어디서든 사용할 수 있는데 실행 흐름이 return 을 만나면 함수 실행은 즉시 중단되고 호출한 곳에 값을 반환

<br><br>
`return 문` 이 존재하지 않거나 반환 값 없이 `return` 지시자만 있는 경우 해당 함수는 `undefined`를 반환한다.