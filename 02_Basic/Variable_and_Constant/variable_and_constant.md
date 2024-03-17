# 변수와 상수

### 변수
- 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'
- 'let' 키워들르 통해 변수 생성

```javascript
let message;

message = 'Hello';
alert(message);
```

선언과 할당을 동시에도 할 수 있음
```javascript
let message = 'Hello';
alert(message);
```

한 줄에 여러 변수를 선언할 수 있음
```javascript
let user = 'John', age = 25, message = 'Hello';
// 코드가 더 짧아보이긴 하나 가독성 면에서는 오히려 한 줄에 하나만 선언하는 것이 좋음
```

같은 이름의 변수를 여러 번 선언할 수는 없음
```javascript
let message = 'This';
let message = 'That';
// SyntaxError : 'message' has already been declared
```

변수에 담긴 내용을 바꾸고 싶다면 let 없이 값을 재할당
```javascript
let message = 'This';
message = 'That';
alert(message);
```

<br></br>
### 변수 네이밍 룰
1. 변수명에 오직 '문자', '숫자', '기호', '$', '_' 만 들어갈 수 있다
2. 첫 글자는 숫자가 될 수 없다

※ 주로 camelCase 로 표기
```javascript
let userName;
let myVeryLongName;
```

### with use-strict, without use-strict
- use strict 를 사용하면 변수를 선언해야 값을 할당하고 사용할 수 있음
```javascript
'use strict';

let num = 5;
```

- 과거에는 let 없이도 단순하게 할당하는 것이 가능했으므로 use strict 를 사용하지 않을 경우 해당 문법 사용 가능
```javascript
num = 5;
```

<br></br>
### 상수
- 변하지 않는 변수
- const 키워드를 통해 선언가능
- 재할당이 불가능하므로 상수를 변경하려 하면 에러 발생
```javascript
const INF = 987654321;
```

- 보통 하드코딩한 상수는 '대문자 상수'로 작성, 그렇지 않으면 일반 네이밍 룰과 동일하게 camelCase 로 작성