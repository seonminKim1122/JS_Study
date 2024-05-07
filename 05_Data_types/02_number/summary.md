## 숫자형
모던 자바스크립트는 숫자를 나타내는 2가지 자료형을 지원한다.

1. 일반적인 숫자는 'double precision floating point number'로 알려진 형식
2. 임의의 길이를 가진 정수는 `BigInt` 숫자로 나타낼 수 있다. 일반적인 숫자는 범위에 제약이 있으므로 이를 보완하기 위해 `BigInt` 라는 새로운 자료형이 만들어짐

<br></br>

## 숫자를 입력하는 다양한 방법
### `e`
0의 갯수를 붙일 때 사용

```javascript
alert(1e3 === 1 * 1000);
alert(1.23e6 === 1.23 * 1000000);
```

작은 숫자를 표현할 때도 `e`를 사용할 수 있다.
```javascript
alert(1e-3 === 1 / 1000)
alert(1.23e-6 === 1.23 / 1000000)
```
<br>

### `16진수, 2진수, 8진수`
16진수: `0x`<br>
8진수: `0o`<br>
2진수: `0b`<br>

```javascript
alert(0xff); // 255
alert(0o377); // 255
alert(0b11111111); // 255
```

<br></br>

## toString(base)
`num.toString(base)` 메서드는 `base` 진법으로 `num` 을 표현한 후 이를 문자형으로 변환해 반환

```javascript
let num = 255;
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
```

만약 숫자 리터럴에서 직접 메서드를 호출하고 싶다면 `..` 과 같이 점을 2개 사용
```javascript
alert(123456..toString(36));
// 그렇지 않으면 소수점과 구별할 수 없기 때문
```

<br></br>

## 어림수 구하기
`Math.floor` : 소수점 첫째 자리에서 내림<br>
`Math.ceil` : 소수점 첫째 자리에서 올림<br>
`Math.round` : 소수점 첫째 자리에서 반올림<br>
`Math.trunc`: 소수부를 무시
<br>

만약 첫째 자리가 아니라 `n`번째 자리를 기준으로 어림수를 구해야하는 상황에는 2가지 해결책이 있다.

1. 곱하기와 나누기
```javascript
let num = 1.23456;

alert( Math.floort(num * 100) / 100); // 1.23 
```

2. `toFixed(n)` 메서드 사용(반올림)
```javascript
let num = 1.23456;

alert(num.toFixed(2)); // 1.23
```

`toFixed(n)` 는 소수부 이하를 `n` 자리로 만드는 메서드이기 때문에 만약 부족하면 0을 채워서 길이를 맞춘 문자열을 반환

<br></br>

## 부정확한 계산
숫자는 내부적으로 64비트 형식으로 표현되므로 숫자를 정확히 저장하려면 64비트가 필요하다. 이 중 `52비트는 숫자`를 저장하는 데 사용되고, `11비트는 소수점 위치`를, `1비트는 부호`를 저장하는데 사용된다.

<br>

하지만 부동소수점으로 표현하는 숫자는 `정밀도 손실`이 발생한다

```javascript
alert(0.1 + 0.2 === 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
```

이런 일이 발생하는 이유는 10진법에서는 쉽게 표현되는 수여도 2진법에서는 무한 소수가 되거나 해서 정확한 계산이 불가능하기 때문이다.
<br>

10진수에서 1/3을 제대로 표현할 수 없듯이, 2진법 체계에서 2의 거듭제곱으로 나눈 값은 잘 동작하지만 2의 거듭제곱이 아닌 값으로 나누면 무한소수가 되어버린다.
<br>

이를 해결하는 가장 신뢰할만한 방법은 `toFixed(n)` 메서드를 사용해 어림수를 만드는 것이다.

```javascript
let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3
```

<br></br>

## isNaN 과 isFinite
특수 숫자 값<br>
`Infinity`, `-Infinity`<br>
`NaN`

두 숫자는 숫자형에 속하긴 하지만 정상적인 숫자는 아니기 때문에 구분하기 위한 특별한 함수가 존재한다.
<br>

`isNaN(value)` - 인수를 숫자로 변환한 후 `NaN`인지 테스트
```javascript
alert( isNaN(NaN)); // true
alert( isNaN("str")); // true
```

`isFinite(value)` - 인수를 숫자로 변환하고 변환한 숫자가 `NaN/Inifity/-Infinity` 가 아닌 일반 숫자인 경우 `true`

```javascript
alert( isFinite("15")); // true
alert( isFinite("str")); // false
alert( isFinite(Infinity)); // false
```
그래서 입력받은 문자열이 일반 숫자인지 확인할 때 주로 사용되곤 함

<br></br>

## partInt 와 parseFloat
단항 덧셈 연산자나 `Number()` 를 사용해서 숫자형으로 변환 시 적용되는 규칙은 꽤나 엄격해 피연산자가 숫자가 아니면 형 변환에 실패한다.
<br>

하지만 단위랑 같이 쓰이는 숫자 등을 변환할 일도 필요한데 이럴 때 `parseInt` 나 `parseFloat` 은 숫자를 읽는 도중 오류가 발생하면 이미 수집된 숫자를 반환하여 원하는 값을 얻을 수 있다.
<br>

```javascript
alert( parseInt('100px')); // 100
alert( parseFloat('12.5em')); // 12.5
```
읽을 수 있는 숫자가 없는 경우 `NaN`을 반환

```javascript
alert( parseInt('a123')); // NaN
```