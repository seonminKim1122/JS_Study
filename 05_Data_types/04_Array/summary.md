## 배열
- 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조

<br></br>

## 배열 선언
```javascript
let arr = new Array();
let arr = [];
```
두 번째 방법으로 배열을 초기화할 때 초기 요소를 넣어줄 수 있다.

```javascript
let fruits = ["사과", "오렌지", "자두"]
```

배열의 각 요소는 0부터 시작하는 인덱스가 매겨져 있고 인덱스를 통해 특정 요소에 접근할 수 있다.

```javascript
let fruits = ["사과", "오렌지", "자두"];

alert(fruits[0]); // 사과
alert(fruits[1]); // 오렌지
alert(fruits[2]); // 자두
```

인덱스를 통해 요소를 수정하거나 요소를 추가할 수도 있다.

```javascript
fruits[2] = '배'; // ["사과", "오렌지", "배"]
fruits[3] = "레몬"; // ["사과", "오렌지", "배", "레몬"]
```

`length` 를 사용하면 배열에 담긴 요소가 몇 개인지 알 수 있고 `alert`를 사용해 전체를 출력할 수도 있습니다.

```javascript
let fruits = ["사과", "오렌지", "자두"];
alert(fruits.length); // 3

alert(fruits); // 사과, 오렌지, 자두
```

<br></br>

## pop, push 와 shift, unshift

`pop` : 배열의 마지막 요소를 추출<br>
`push` : 배열 마지막에 요소를 추가<br>
`shift` : 배열 맨 앞에서 요소를 추출<br>
`unshift` : 배열 맨 앞에 요소를 추가<br>

`push` 와 `unshift` 는 동시에 여러 개의 요소를 추가하는 것도 가능

```javascript
let fruits = ["사과"];
fruits.push("오렌지", "배"); // ["사과", "오렌지", "배"]
fruits.unshift("파인애플", "레몬"); // ["파인애플", "레몬", "사과", "오렌지", "배"]
```

<br></br>

## 배열의 내부 동작 원리
배열의 본질은 `객체`

참조를 통해 복사된다
```javascript
let fruits = ["바나나"]
let arr = fruits;

alert(arr === fruits); // true

arr.push("배")

alert(fruits); // 바나나, 배
```

배열을 배열답게 만드는 것은 특수 내부 표현방식이다. 자바스크립트 엔진은 배열의 요소를 인접한 메모리 공간에 차례로 저장해 연산 속도를 높이고 여타 최적화 기법을 사용한다.<br>

하지만 개발자가 배열은 `순서가 있는 자료의 컬렉션`이 아닌 일반 객체처럼 다루어버리면 그런 최적화 기법들이 제대로 동작하지 않는다.

<br></br>

## 반복문
배열을 순회할 때는 `for` 나 `for .. of` 를 사용한다.

```javascript
let arr = ["사과", "오렌지", "배"];

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}


for (const fruit of fruits) {
    alert(fruit);
}
```

<br></br>

## 다차원 배열
배열 또한 배열의 요소가 될 수 있고 이러한 배열을 다차원 배열이라 부른다.
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

alert(matrix[1][1]); // 5
```