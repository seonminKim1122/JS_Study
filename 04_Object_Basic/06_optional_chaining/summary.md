## 옵셔널 체이닝 `?.`
`?.` 을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근 가능

## 옵셔널 체이닝이 등장하게 된 배경
- 사용자 여러 명이 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정
- 이럴 때 `user.address.street` 을 사용해 주소 정보에 접근하면 에러가 발생할 수 있음(`TypeError`)
- 이런 문제를 해결하기 위해 `&&` 연산자를 사용하곤 했음(`undefined`가 나옴)


<br></br>

## 옵셔널 체이닝의 등장
`?.` 은 `?.` 앞의 평가 대상이 `undefiend` 나 `null` 인 경우 평가를 멈추고 `undefined` 를 반환한다.

```javascript
let user = {}

alert(user?.address?.street); // undefined
```

옵셔널 체이닝은 존재하지 않는 대상에 대해 에러를 발생시키지 않고 `undefined` 를 반환하기 때문에 존재하지 않아도 괜찮은 대상에만 사용해야 한다.
<br>

예를 들어 `user` 객체는 반드시 존재해야 하지만 `address` 프로퍼티는 필수가 아니어도 괜찮기 때문에 주소 정보를 알고자 할 때 `user.address?.street` 과 같이 옵셔널 체이닝을 사용할 수 있다.

<br></br>

## 단락 평가
옵셔널 체이닝은 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다.

```javascript
let user = null;
let x = 0;

user?.sayHi(x++); // user 가 null 이라 평가를 멈추기 때문에 아무 일도 일어나지 않음

alert(x); // 0
```

<br></br>

## ?.() 와 ?.[]
`?.` 은 연산자가 아니다. `?.`은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체이다.

```javascript
let user1 = {
    admin() {
        alert("관리자 계정입니다.");
    }
}

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.(); // 아무일도 발생 X
```

`user1` 에는 `admin` 메서드가 존재하므로 제대로 호출되는 반면 `user2`에는 `admin` 메서드가 존재하지 않아 평가를 멈추고 에러 없이 아무 일도 발생하지 않는다.
<br>

이와 마찬가지로 객체의 프로퍼티를 `[]` 를 사용해서 읽을 경우 `?.` 을 이용해 객체 존재 여부가 확실하지 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.

```javascript
let user1 = {
    firstName: 'Violet';
}

let user2 = null;

let key = "firstName";

alert(user1?.[key]) // Violet
alert(user2?.[key]) // undefined
```