## 변수
```let``` 키워드를 사용해 변수 생성
```javascript
let message;
```

할당 연산자 ```=``` 를 사용해 변수 안에 데이터 저장 가능
```javascript
let message;
message = 'Hello';
```

한 줄에 여러 변수도 선언 가능
```javascript
let user = 'John', age = 25, message = 'Hello';
```

```var``` 를 사용할 수도 있지만 이건 '오래된 방식'

<br></br>

## 변수 명명 규칙
1. 변수명에는 오직 문자와 숫자, 그리고 기호 ```$``` 와 ```_``` 만 들어갈 수 있다.
2. 첫 글자는 숫자가 될 수 없다.

자바스크립트에서는 보통 카멜 케이스 ```camelCase``` 사용

<br></br>

## 상수
```const``` 를 사용하면 변화하지 않는 변수인 ```상수``` 선언 가능
```javascript
const myBirthday = '22.11.1996';
myBirthday = '22.11.1998'; // error
```

상수는 값이 초기화 된 이후 변하지 않음을 의미하는데 런타임 시 초기화 되는 상수는 기존처럼 ```camelCase``` 를 사용하지만 하드코딩으로 초기화 하는 상수는 ```BIG_NAME``` 과 같이 대문자 이름을 이용합니다.