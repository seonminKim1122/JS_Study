# 형 변환
- 데이터 타입을 변환하는 것
- alert 도 받는 데이터를 모두 문자열로 자동 변환하는 것(암시적 형변환)
- 필요에 따라 의도적으로 원하는 타입으로 데이터를 변화시킬 일도 있음(명시적 형변환)

<br></br>

### 문자형으로 변환
- String(Value) 함수를 통해 명시적 형변환
```javascript
let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string
```

<br></br>

### 숫자형으로 변환
- 수학과 관련된 함수와 표현식에서 자동으로 일어남
- Number(value) 함수를 통해 명시적 형변환
```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str);
alert(typeof num); // number
```
- 숫자 이외의 글자가 들어있는 문자열을 숫자로 형변환하면 'NaN' 이 된다
```javascript
let age = Number("임의의 문자열 123");
alert(age); // NaN
```

<br></br>

### 불린형으로 변환
- Boolean(value) 함수로 명시적 형변환
- 직관적으로 비어있다고 느껴지는 값들을 false, 그 외는 true
```javascript
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false
```