# if 와 '?' 를 사용한 조건 처리

### 'if' 문
- if(...) 괄호 안에 들어가는 조건을 평가해서 결과가 true 면 코드 블록 실행
```javascript
let year = 2015;
if (year == 2015) alert("정답");
```

- 중괄호{} 가 코드블럭을 의미
```javascript
if (year == 2015) {
  alert('정답');
  alert('아주 똑똑');
}
```

<br></br>

### 'else' 절
- if 문의 조건이 false 일 때 실행
```javascript
if (year == 2015) {
  alert('정답');
} else {
  alert('오답');
}
```

<br></br>

### 'else if' 로 복수 조건 처리하기
```javascript
if (year < 2015) {
  alert('숫자를 좀 더 올려봐');
} else if (year > 2015) {
  alert('숫자를 좀 더 내려봐');
} else {
  alert('정답!');
}
```

<br></br>

### 조건부 연산자 '?'
```javascript
let result = condition ? value1 : value2;
// condition 이 true 면 value1, false 면 value2
```