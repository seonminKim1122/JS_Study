# 자료형

### 8가지 기본 자료형
1) 숫자형
2) BigInt
3) 문자형
4) 불린형
5) 'null'
6) 'undefined'
7) 객체형
8) 심볼형


<br></br>
### 숫자형
- 정수 및 부동소수점 숫자
- 곱셈(*), 나눗셈(/), 덧셈(+), 뺄셈(-) 연산 가능
- Infinity, -Infinity, NaN 과 같은 특수 숫자값도 존재
- -(2^53 - 1) <= 숫자 <= (2^53 - 1) 표현 가능
```javascript
alert(1 / 0); // Infinity
alert("Not A Number" / 2); // NaN
```
- 자바스크립트는 0으로 나누거나 문자열을 숫자로 나누는 등 이례적인 연산이 가능하여 연산에 대해 안전


<br></br>
### BigInt
- 숫자형이 나타낼 수 없는 범위의 값을 나타내는 자료형
- 길이에 상관없이 정수를 나타낼 수 있음
- 정수 리터럴 끝에 n 을 붙여서 만들 수 있음

```javascript
const bigInt = 1231235612356128934681293461829341243234n;
const bigInt2 = 1283718294738572839578394789374128937128n;
alert(bigInt1 + bigInt2);

// 2514953907094701774259688251203470180362n
```
<br></br>
### 문자형
- 따옴표로 묶어서 문자열 표현
- 따옴표 종류
1. 큰따옴표 : "Hello"
2. 작은따옴표 : 'Hello'
3. 역 따옴표: \`Hello\`

- 역 따옴표의 ${} 를 사용하면 문자열 중간에 변수나 표현식을 쉽게 넣을 수 있음

```javascript
let name = 'John';
alert(`Hello, ${name}!`); // Hello, John!
alert(`the result is ${1 + 2}`) // the result is 3
```

<br>

### 불린형
- true, false 값을 가지는 논리 타입
- 비교 결과를 저장할 때도 사용
```javascript
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
```

<br>

### null
- 오로지 null 값만 포함하는 별도의 자료형
- 존재하지 않는 값, 비어 있는 값, 알 수 없는 값을 나타내는 데 사용
```javascript
// 나이를 알 수 없거나 값이 비어 있음을 의미
let age = null;
```

<br>

### undefined
- '값이 할당되지 않은 상태'를 나타낼 때 사용
- 변수를 선언만 하고 값을 할당하지 않으면 'undefined' 가 자동으로 할당
```javascript
let age;
alert(age); // undefined
```
- undefined 는 자동 할당될 때만 사용하고, 값이 비어있거나 알 수 없음을 나타내고 싶을 때는 'null' 을 사용할 것은 권장

<br>

### 객체형
- 원시 타입 자료형과 달리 데이터 컬렉션이나 보다 복잡한 객체 표현

<br>

### 심볼형
- 객체의 고유한 식별자를 만들 때 사용
