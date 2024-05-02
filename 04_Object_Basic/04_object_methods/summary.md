## 메서드 만들기
객체도 특정한 행동을 할 수 있고 이를 `메서드`라고 한다.

```javascript
let user = {
    name: "John",
    age: 30,
}

user.sayHi = function() {
    alert("안녕하세요!");
}

user.sayHi();
```
`sayHi` 를 user 의 메서드라고 한다.

<br></br>

### 메서드 단축 구문
```javascript
user = {
    sayHi: function() {
        alert("Hello");
    }
}
```
를 단축 구문을 사용하면 보다 깔끔하게 만들 수 있다.

```javascript
user = {
    sayHi() {
        alert("Hello")
    }
}
```

<br></br>

## 메서드와 this
메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있는데 메서드 내부에서 `this` 키워드를 사용하면 객체에 접근할 수 있다.

```javascript
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
}
```

<br></br>

## 자유로운 this
자바스크립트의 `this` 는 다른 프로그래밍 언어와는 달리 모든 함수에서 `this`를 사용할 수 있고 런타임에 그 값이 결정된다.

```javascript
let user = {
    name: "John"
}

let admin = {
    name: "Admin"
}

function sayHi() {
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin
```

추가로 객체 없이 호출한 `this` 는 엄격 모드에서는 `undefined` 가 할당되는데 엄격 모드가 아닐 때는 브라우저 환경에서 `window` 라는 전역 변수를 참조한다.

<br></br>

## this가 없는 화살표 함수
화살표 함수는 일반 함수와 달리 `고유한 this`를 가지지 않으므로 화살표 함수에서 참조시 평범한 외부 함수에서 `this` 값을 가져온다.

```javascript
let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
}

user.sayHi(); // 보라
```

화살표함수 `arrow` 는 자기만의 this 를 갖지 않으므로 그 외부에 있는 sayHi 의 this 값을 가져온다.