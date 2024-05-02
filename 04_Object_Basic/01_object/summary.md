## 객체
객체형은 원시형과 달리 다양한 데이터를 담을 수 있다. 키로 구분된 데이터 집합이나 복잡한 개체를 저장 가능
<br><br>
`중괄호 {...}` 를 이용해 만들 수 있고 중괄호 안에는 `키 : 값` 쌍으로 구성된 `property` 를 여러 개 넣을 수 있는데 `키에는 문자형`, `값에는 모든 자료형`이 허용된다.
<br><br>
빈 객체를 만드는 방법에는 2가지 존재
```javascript
let user = new Object();
let user = {};
```

<br></br>

## 리터럴과 프로퍼티
중괄호 안에는 `키:값` 쌍으로 구성된 `프로퍼티`가 들어간다.
```javascript
let user = { // 객체
    name: 'John', // key : "name", value : "John"
    age: 30, // key : "age", value : 30
}
```
<br>

프로퍼티의 값을 읽고 싶을 때는 점 표기법을 사용하면 된다.
```javascript
alert(user.name); // John
alert(user.age); // 30
```
<br>

객체에 프로퍼티를 추가하고 싶을 때도 점 표기법 사용
```javascript
user.isAdmin = true;

alert(user.isAdmin); // true
```

<br>

객체의 프로퍼티를 삭제하고 싶을 때는 `delete` 연산자 사용
```javascript
delete user.isAdmin;
```

<br>

키는 어차피 문자열만 허용하므로 굳이 따옴표를 붙이지 않고도 사용할 수 있지만, 만약 공백이 포함되거나 하는 복수 개의 단어로 구성된 키는 따옴표로 묶어야 사용이 가능하다.

```javascript
let user = {
    name: "John",
    age: 30,
    "like birds": true
}
```

<br>

#### ※ 상수 객체의 수정<br>
`const` 로 선언된 상수는 원래 변경이 불가능하지만 정확히는 상수에 할당된 메모리 주소를 변경할 수 없음을 의미하는 것이므로 객체의 프로퍼티를 수정하는 것은 가능하다.
```javascript
const user = {
    name: "John",
};

user.name = "Pete";

alert(user.name); // Pete
```

<br></br>

## 대괄호 표기법
여러 단어를 조합해서 프로퍼티 키를 만든 경우(ex: "like birds") 점 표기법을 사용해서 프로퍼티 값을 읽는 것이 불가능하다.
<br><br>
점 표기법은 키가 `유효한 변수 식별자($ 와 _ 를 제외한 특수문자가 없고 공백이 없고 숫자로 시작하지 않는)` 인 경우에만 사용이 가능하고 그 외에는 `대괄호 표기법` 을 사용해야 한다.

```javascript
let user = {};

user["like birds"] = true;
alert(user["like birds"]);
delete user["like birds"];
```
<br>

대괄호 표기법을 사용하면 이처럼 유효한 변수 식별자가 아닌 키도 사용할 수 있을 뿐만 아니라 변수를 키로 사용하는 등, 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있게 된다.

```javascript
let user = {};

let key = "likes birds";
user[key] = true;
```
<br><br>

### 계산된 프로퍼티
객체를 만들 때 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸인 경우를 `계산된 프로퍼티` 라고 부른다.

```javascript
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
    [fruit]: 5,
};
```

위 방식이 `계산된 프로퍼티!!`

<br></br>

## 단축 프로퍼티
실무에서는 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있다.
```javascript
const makeUser = function(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeUser("John", 30);
alert(user.name); // John
```
<br>
이처럼 프로퍼티 값에 해당하는 변수명을 프로퍼티 키로 사용하는 경우 `단축 프로퍼티`를 활용할 수 있다.

```javascript
const name = "John";
const age = 30;

const user = {
    name,
    age,
}

alert(user.name); // John
```

<br></br>

## `in` 연산자로 프로퍼티 존재 여부 확인하기
자바스크립트 객체의 중요한 특징 중 하나는 존재하지 않는 프로퍼티에 접근하려고 해도 에러가 발생하지 않고 `undefined` 를 반환한다는 점이다.
<br><br>
이런 특징을 활용하면 프로퍼티의 존재 여부를 쉽게 확인할 수 있다.

```javascript
let user = {};
alert(user.noSuchProperty === undefined);
```
<br>

`in` 연산자를 사용해서도 프로퍼티 존재 여부를 확인할 수 있다.

```javascript
"key" in object
```

<br></br>

## `for...in` 반복문
`for..in` 반복문을 사용하면 객체의 모든 프로퍼티 키를 순회할 수 있다.

```javascript
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
}

for (const key in user) {
    alert(key); // name, age, isAdmin
    alert(user[key]); // John, 30, true
}
// 변수를 사용해서 프로퍼티에 접근하므로 대괄호 표기법 사용
```

### 객체 정렬 방식
객체의 프로퍼티에는 순서가 존재합니다.<br>
`정수 프로퍼티(변형 없이 정수에서 왔다 갔다 가능한 문자열)` 의 경우 숫자의 크기 순으로 오름차순 정렬이 되고, 그 외는 객체에 작성된 순서대로 프로퍼티가 나열된다.