## 형 변환
함수와 연산자에 전달되는 값으 대부분 적절한 자료형으로 자동 형변환되는데<br>
직접 명시적으로 원하는 타입으로 변환하는 것도 가능하다.

<br></br>

## 문자형으로의 형변환
```alert``` 메서드는 매개변수로 문자형을 받기 때문에 다른 형의 값을 전달받으면 문자형으로 자동 변환
```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // 문자열로 명시적 형변환
alert(typeof value); // string
```

<br></br>

## 숫자형으로 변환
```javascript
let str = "123";
alert(typeof str); //string

let num = Number(str);
alert(typeof num); // number
```

문자 기반 폼(form)을 통해 값을 입력받고 이를 숫자형으로 사용하고 싶은 경우 명시적 형변환이 필수입니다.<br>
만약 숫자형으로 변환이 안 되는 문자열을 숫자형으로 변환하려고 하면 NaN 이 됩니다.
```javascript
let age = Number("임의의 문자열 123");
alert(age);
```

[형변환 규칙]<br>
undefined -> NaN<br>
null -> 0<br>
true and false -> 1 and 0<br>
string -> 공백 제거 후 남아있는 문자열이 없으면 0 그렇지 않으면 숫자를 읽음. 실패하면 NaN

<br></br>

## 불린형으로의 형변환
- 숫자 ```0```, 빈 문자열, ```null```, ```undefined```, ```NaN``` 과 같이 비어있다고 느껴지는 값은 ```false```
- 그 외는 ```true```