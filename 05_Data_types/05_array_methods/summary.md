## 요소 추가 제거 메서드
- `arr.push(...items)` : 맨 끝에 요소들 추가
- `arr.pop()` : 맨 끝 요소 제거
- `arr.shift()` : 맨 앞 요소 제거
- `arr.unshift(...items)` : 맨 앞에 요소들 추가

<br>

### splice
`arr.splice(index[, deleteCount, elem1, ..., elemN])` : idx 에서부터 deleteCount 만큼을 배열에서 삭제하고 elem 들을 추가하는 연산, 삭제된 요소로 구성된 배열을 리턴

```javascript
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // 인덱스 1부터 요소 한 개 제거

alert(arr); // I, JavaScript
```

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance");

alert(arr); // Let's, dance, right, now
```

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

let removed = arr.splice(0, 2);
alert(removed); // I, study
```

`deleteCount` 값을 0으로 설정하면 요소를 제거하지 않고 특정 자리에 추가하기만 할 수도 있다.

<br></br>

### slice
`arr.slice([start], [end])` : `start` 인덱스부터 `end`인덱스까지(`end`는 제외)의 요소를 복사한 새로운 배열을 반환

```javascript
let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e, s
alert(arr.slice(-2)); // s, t
```

<br></br>

### concat
`arr.concat(arg1, arg2, ...)` : 기존 배열에 요소가 추가된 새로운 배열 반환

```javascript
let arr = [1, 2];
alert(arr.concat([3, 4])); // 1, 2, 3, 4
alert(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6
alert(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6
```

<br></br>

## forEach 로 반복작업 하기
```javascript
arr.forEach(function(item, index, array){
    // 각 요소에 무언가를 할 수 있다.
});
```

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
})
```

<br></br>

## 배열 탐색하기

### indexOf, lastIndexOf 와 includes

`arr.indexof(item, from)` : `from` 인덱스부터 시작해 `item(요소)` 를 찾는다. 발견하면 해당 요소의 인덱스를 그렇지 못하면 -1 을 반환<br>

`arr.lastIndexOf(item, from)` 위 메서드와 동일한 기능을 하는데 검색을 끝에서부터 시작<br>

`arr.includes(item, from)` : `from` 인덱스부터 시작해 `item`이 있는지를 검색하고 있으면 `true` 를 반환

```javascript
let arr = [1, 0, false];
alert(arr.indexOf(0));
alert(arr.lindexOf(false));
alert(arr.indexOf(null));
alert(arr.includes(1));
```
이 메서드들은 일치 연산자 `===` 를 사용해서 요소를 찾는다.

<br></br>

### find 와 findIndex
`arr.find(func(item, index, array){})` : 배열의 요소에 대해 반복하면서 func 의 결과가 `true` 가 반환되면 반복을 멈추고 해당 요소를 반환

```javascript
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John
```

`arr.findIndex(func(item, index, array))` 는 `find`와 똑같이 동작하나 요소가 아닌 인덱스를 반환한다는 점에서만 차이가 있다.

<br></br>

### filter
조건을 충족하는 요소 여러 개를 전부 찾고 싶다면 `find` 대신 `filter` 를 사용
```javascript
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
]

let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2 
```

<br></br>

## 배열을 변형하는 메서드

### map
배열 요소 전체를 대상으로 함수를 호출하고, 호출 결과를 배열로 반환

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

alert(lengths); // 5, 7, 6
```

<br></br>

### sort(func)

```