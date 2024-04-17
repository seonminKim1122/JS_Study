## 자바스크립트 8가지 기본 자료형
1. 숫자형
2. bigint
3. 문자형
4. 불린형
5. null
6. undefined
7. 객체형
8. 심볼형

<br></br>

## 숫자형
- 정수
- 부동소수점 숫자

```javascript
let n = 123;
n = 12.345;
```

특수 숫자값 : ```Infinity```, ```-Infinity```, ```NaN```

<br>

```Infinity```<br>
어떤 숫자보다 더 큰 특수 값, 무한대를 의미
```javascript
alert(1 / 0);
```

직접 Infinity 를 참조할 수도 있음
```
alert(Infinity);
```
<br>

```NaN```<br>
계산 중에 에러가 발생했다는 것을 나타내주는 값.<br>
부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중 에러가 발생하는데, 이때 ```NaN``` 이 반환
```javascript
alert("숫자가 아님"/2);
```

<br></br>

## BigInt
숫자형이 나타낼 수 있는 범위 : -(2^53-1) ~ (2^53-1)<br>
보다 더 큰 숫자를 나타내기 위해 사용하는 자료형으로 길이에 상관없이 정수를 나타낼 수 있음<br>
정수 리터럴 끝에 ```n``` 을 붙이면 BigInt 가 됨
```
const BIG_INT = 1234567890123456789012345678901234567890n;
```

<br></br>

## 문자형
- 큰 따옴표 : "Hello"
- 작은 따옴표 : 'Hello'
- 백틱 : \`Hello`

백틱을 사용하면 백틱으로 감싸진 문자열 중간에 ```${...}``` 을 통해 원하는 변수나 표현식을 쉽게 넣을 수 있다.
```javascript
let name = "John";

alert(`Hello, ${name}!`);
alert(`the result is ${1 + 2}`);
```

<br></br>

## 불린형
- true, false

<br></br>

## 'null' 값
오로지 ```null``` 값 만 포함하는 별도의 자료형<br>
다른 언어에서는 존재하지 않는 객체에 대한 참조나 null pointer 를 나타내지만 자바스크립트에서는 '존재하지 않는 값', '비어 있는 값', '알 수 없는 값' 을 나타내는 데 사용

<br></br>

## 'undefined' 값
값이 할당되지 않은 상태를 나타낼 때 사용<br>
변수를 선언만 하고 값을 할당하지 않으면 해당 변수에 ```undefined``` 가 자동 할당


<br></br>

## 객체
객체는 데이터 컬렉션이나 복잡한 개체를 표현할 수 있는 타입. 객체를 제외한 다른 자료형(ex : 문자열, 숫자 등)은 한 가지 타입만 표현할 수 있어 원시 타입이라고 부름.

<br></br>

## 심볼
심볼은 객체의 고유한 식별자를 만들 때 사용

<br><br/>

## typeof 
```typeof``` 연산자는 인수의 자료형을 반환!!