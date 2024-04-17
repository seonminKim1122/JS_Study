## || (OR)
- 두 개의 피연산자 중 하나라도 ```true``` 면 ```true```, 둘 다 ```false``` 면 ```false```

```javascript
alert(true || true); // true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false
```

<br></br>

## 첫 번째 truthy 를 찾는 OR 연산자 ||
```||``` 의 연산 순서
1. 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가
2. 각 피연산자를 불린형으로 변환. 변환 후 그 값이 ```true``` 이면 연산을 멈추고 피연산자의 __변환 전__ 원래 값을 반환
3. 피연산자를 모두 평가한 경우엔 마지막 피연산자를 반환

<br>

```javascript
alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0
```

```||``` 연산자는 ```truthy``` 를 만나면 더 이상 평가를 진행하지 않는다!!

<br></br>

## &&(AND)
```&&``` 연산자는 두 피연산자가 모두 ```true``` 일 때 ```true``` 를 반환. 그 외는 ```false``` 반환

```javascript
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

<br></br>

## 첫 번째 falsy 를 찾는 AND 연산자 '&&'
```&&``` 의 연산 순서
1. 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자 평가
2. 각 피연산자는 불린형으로 변환. 변환 후 값이 ```false``` 면 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환
3. 피연산자가 모두 평가되는 경우엔 마지막 피연산자가 반환

<br>

```javascript
alert(1 && 0); // 0
alert(1 && 5); // 5

alert(null && 5); // null
alert(0 && "아무거나 와도 상관 없습니다."); // 0
```

<br>

#### 주의 사항
1. ```&&``` 의 우선순위가 ```||``` 보다 높다.
2. ```if``` 를 ```||``` 나 ```&&``` 로 대체하지 마라.

<br></br>

## !(NOT)
1. 피연산자를 불린형으로 변환
2. 1번에서 변환한 값의 역을 반환

```javascript
alert(!true); // false
alert(!0); // true
```

```!!``` 를 사용하면 원래 값을 불린형으로 변환한 값을 얻을 수 있다.

```javascript
alert(!!"non-empty string"); // true
alert(!!null); // false
```