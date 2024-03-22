# nullish 병합 연산자
- 연산자 : ??
- 여러 피연산자 중 "확정되어 있는" 변수를 찾을 수 있음
```javascript
x = (a !== null && a !== undefined) ? a : b;

// nullish 연산자는 위와 같은 연산을 한다고 보면 된다
x = a ?? b;
```

<br></br>

### '??' 와 '||'의 차이
- || : 첫 번째 'truthy' 값을 반환
- ?? : 첫 번째 정의된(defined) 값을 반환

```javascript
let height = 0;

alert(height || 100); // 100, 0은 truthy 가 아니기 때문
alert(height ?? 100); // 0, 0 은 defined 이므로
```

<br></br>

### 연산자 우선순위
- 우선순위가 낮기 때문에 복잡한 식에서는 괄호를 사용하는 것이 좋음