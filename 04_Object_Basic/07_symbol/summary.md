## 심볼
심볼은 유일한 식별자를 만들고 싶을 때 사용<br>
`Symbol()` 을 사용하면 심볼값을 만들 수 있음

```javascript
let id = Symbol();
```

심볼을 만들 때 심볼 이름이라 불리는 설명을 붙일 수도 있다.
```javascript
let id = Symbol("id");
```

심볼은 유일성을 보장하는 자료형이므로 같은 설명의 심볼을 여러 개 만들더라도 각각의 심볼값은 다르다.
심볼에 붙이는 설명은 어떤 것에도 영향을 주지 않는 단순한 `이름표` 역할만을 한다.

```javascript
let id1 = Symbol("id");
let id2 = Symobl("id");

alert(id1 == id2); // false
```

심볼은 문자형으로 형변환이 불가능하므로 반드시 심볼을 출력해야 하는 상황이면 `.toString()` 메서드를 명시적으로 사용해야 한다.
<br>

만약 설명만 보고 싶다면 `description` 프로퍼티를 이용하면 된다.

<br></br>

## '숨김' 프로퍼티
심볼을 사용하면 외부에서 접근이 불가능하고 값도 덮어쓸 수 없는 `숨김 프로퍼티`를 만들 수 있다.

```javascript
let user = { // 서드파티 코드에서 가져온 객체라고 가정
    name: "John",
}

let id = Symbol("id")

user[id] = 1;
alert(user[id])
```
이처럼 함부로 프로퍼티를 추가하면 안 되는 서드파티 코드 등의 상황에서 심볼을 사용하면 어차피 서드파티에서 심볼에 접근이 불가능하므로 서드파티가 모르게 `user` 에 식별자를 부여할 수 있다.
<br>

심볼을 사용한 프로퍼티는 숨김 프로퍼티 이므로 반복문에서 배제되고 `Object.keys(obj)` 에서도 배제된다.
<br>

단, `Object.assign` 을 이용한 객체 복사 시에는 의도적으로 키가 심볼인 프로퍼티까지 복사.

<br></br>

## 전역 심볼
심볼은 같은 설명이더라도 모두 별개로 취급되는데, 가끔 같은 심볼이 같은 개체를 가리키길 원하는 경우도 있다. 이 경우 전역 심볼을 사용하면 된다.

전역 심볼 레즈스트리 안에 심볼을 만들고 해당 심볼에 접근하면 늘 같은 심볼을 반환한다.

```javascript
// 전역 레지스트리에서 심볼을 읽는다
let id = Symbol.for("id"); // 존재하지 않으므로 심볼을 생성

// 동일한 이름을 이용해 심볼을 다시 읽는다
let isAgain = Symbol.fr("id");

alert(id === isAgain);
```

`Symbol.key` 를 이용하면 이름을 통해 전역 심볼을 찾을 수 있는데 반대로 전역 심볼을 통해 이름을 알아낼 수도 있다.

```javascript
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
```

<br></br>

## 시스템 심볼
시스템 심볼은 자바스크립트 내부에서 사용되는 심볼이다. 이를 사용하면 객체를 미세하게 조정하는 것도 가능하다.

대표적인 well-known system symbol
- Symbol.asyncIterator
- Symbol.hasInstance
- Symbol.isConcatSpreadable
- ...