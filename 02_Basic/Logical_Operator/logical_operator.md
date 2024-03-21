# 논리 연산자
- OR : ||
- AND : &&
- NOT : !

<br>

### OR 연산자
- 둘 중 하나만 true 여도 true, 둘 다 false 면 false
```javascript
alert(true || true); // true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false
```


<br></br>

### 첫 번째 truthy를 찾는 연산자 OR
- OR 연산자는 true 를 반환하는 첫 번째 피연산자를 반환한다
- 만약 모두 false 일 경우 마지막 피연산자를 반환
```javascript
alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0
```

<br></br>

### AND 연산자
- 두 개 모두 다 true면 true, 그 외의 경우는 false
```javascript
alert(true && true); // true
alert(true && false); // false
alert(false && true); // false
alert(false && false); // false
```

<br></br>

### 첫 번째 falsy 를 찾는 연산자 AND
- 가장 왼쪽 피연산자부터 시작해 false 인 첫 번째 피연산자를 반환
- 전부 다 true 인 경우 마지막 피연산자를 반환

```javascript
alert(1 && 0); // 0
alert(1 && 5); // 5

alert(null && 5); // null
alert(0 && "뭐가 오든 0 입니다"); // 0
```

<br></br>

### !(NOT)
- 부정연산