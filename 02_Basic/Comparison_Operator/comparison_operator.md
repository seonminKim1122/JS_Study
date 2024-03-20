# 비교 연산자
- \>, <, >=, <=, ==, !=

<br>

### 불린형 반환
- 비교 연산자는 불린형 값을 반환
```javascript
alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true
```

<br></br>

### 문자열 비교
- 문자열 데이터를 '사전' 순으로 비교
- 문자열을 구성하는 문자 하나하나를 비교해가며 문자열 비교
```javascript
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true
```
- 정확하게는 유니코드 순이라 소문자가 대문자보다 더 크다고 판단

<br></br>

### 다른 형을 가진 값 간의 비교
- 비교하려는 값의 자료형이 다르면 이 값들을 숫자형으로 바꿈

<br></br>

### 일치 연산자
- ===
- 동등 연산자(==) 는 서로 다른 형을 가지는 경우 숫자형으로 변환하지만 일치 연산자는 형 변환 없이 값 비교
```javascript
alert(0 == false); // true
alert(0 === false); // false
```

<br></br>

### null 이나 undefined 와 비교하기
- null 과 undefined 비교
```javascript
alert(null === undefined); // false
alert(null == undefined); // true
```

<br></br>

### null vs 0
```javascript
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true
```
- null 은 비교 연산자와 쓰일 때는 0으로 변환되지만, 동등 연산자에서는 변환되지 않는다.
- 따라서 1, 3번 케이스에서는 0으로 변환되어 연산된 결과가, 2번 케이스에서는 null 그 자체로 비교한 결과가 출력

<br></br>

### 비교가 불가능한 undefined
```javascript
alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false
```
- undefined 는 비교 연산자와 붙으면 NaN 으로 바뀌는데 NaN 이 피연산자면 비교 연산자는 항상 false 를 리턴