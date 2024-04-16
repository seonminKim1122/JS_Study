## 'if'문
```if(...)``` 괄호 안에 들어가는 조건을 평가하고 그 결과가 ```true``` 면 코드 블록을 실행
```javascript
let year = prompt('ECMASCript-2015 명세는 몇 년도에 출판되었을까요?');

if (year == 2015) {
    alert('정답입니다!');
}
```

<br></br>

## 불린형으로의 변환
- ```falsy``` : ```0```, 빈 문자열 ```""```, ```null```, ```undefined```, ```NaN``` 은 불린형으로 변환 시 모두 ```false``` 가 되고 이런 값들을 falsy 값이라고 부름.
- ```truthy``` : 이외의 값은 불린형으로 변환 시 ```true``` 가 되므로 truthy 라고 부름

<br></br>

## 'else' 절

```else``` 뒤에 이어지는 코드 블록은 조건이 거짓일 때 실행
```javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판?');

if (year == 2015) {
    alert('정답입니다!');
} else {
    alert('오답입니다!');
}
```

<br></br>

## 'else if' 로 복수 조건 처리
```else if``` 를 통해 복수 개의 조건을 처리할 수 있습니다.

```javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까?');

if (year < 2015) {
    alert('숫자를 좀 더 올려보세요.');
} else if (year > 2015) {
    alert('숫자를 좀 더 내려보세요.');
} else {
    alert('정답입니다!');
}
```

<br></br>

## 조건부 연산자 '?'
```?``` 는 삼항 연사자라고도 한다.
```javascript
let result = condition ? value1 : value2;
```
condition 이 true 면 value1 을 반환<br>
condition 이 false 면 value2 를 반환