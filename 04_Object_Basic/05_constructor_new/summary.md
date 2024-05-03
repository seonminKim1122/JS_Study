##  생성자 함수
`new` 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있다.
<br>

생성자 함수는 일반 함수와 기술적인 차이는 없지만 2가지 관례를 따른다.

1. 함수 이름의 첫 글자는 대문자로 시작
2. 반드시 `new` 연산자를 붙여서 실행

```javascript
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('보라');

alert(user.name); // 보라
alert(user.isAdmin); // false
```

`new` 연산자를 써서 함수를 실행하면 다음과 같은 과정이 수행된다.

1. 빈 객체를 만들어 `this` 에 할당
2. 함수 본문을 실행하고 `this` 에 새로운 프로퍼티를 추가해 `this` 를 수정
3. `this`를 반환

```javascript
function User(name) {
    // this = {} 빈 객체가 암시적으로 생성

    this.name = name;
    this.isAdmin = false;

    // return this; this가 암시적으로 반환
}
```

이렇게 생성자 함수를 활용하면 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 쉽게 객체를 생성할 수 있다.
<br>

즉, `재사용할 수 있는` 객체 생성 코드를 구현하게 되는 것이다.
<br>

※ 모든 함수는 new 연산자를 붙여 실행하면 생성자 함수가 될 수 있다

<br></br>

## new.target 과 생성자 함수
`new.target` 프로퍼티를 사용하면 함수가 `new` 연산자와 함께 호출되었는지 그렇지 않은지 알 수 있다.

```javascript
function User() {
    alert(new.target);
}

User(); // undefined

new User(); // function User {...}
```
이를 이용해서 `new` 를 사용하지 않고 함수를 호출해도 생성자 함수를 호출한 것과 같이 동작하게 만들 수 있긴 하나 권장되지는 않는다.

<br></br>

## 생성자와 return 문
생성자 함수는 자동으로 `return this` 가 수행되기 때문에 명시적으로 반환문을 사용할 일이 없다.

만약 `return` 문이 있다면 아래와 같은 규칙이 적용된다.

- 객체를 `return` 하면 `this` 대신 객체가 반환
- 원시타입을 `return` 하면 `return` 문이 무시

<br></br>

## 생성자 내 메서드
생성자 함수를 사용하면 매개변수를 이용해서 객체 내부를 자유롭게 구성할 수 있다. 프로퍼티 뿐만 아니라 메서드를 추가하는 것도 가능하다.

```javascript
function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert("제 이름은 " + this.name + "입니다.");
    };
}

let bora = new User("이보라");

bora.sayHi(); // 제 이름은 보라입니다.

```