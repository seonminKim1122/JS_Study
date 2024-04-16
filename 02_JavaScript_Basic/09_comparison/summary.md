## 비교 연산자
``` <,  >,  <=,  >=,  ==, != ```

<br></br>

## 문자열 비교
- ```유니코드 순```으로 문자열 비교
```javascript
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true
```
1. 두 문자열의 첫 글자 비교
2. 결과가 나면 그 결과를 반환 그렇지 않으면 다음 글자 비교
3. 결과가 나지 않고 더 이상 글자가 없어 비교가 종료된 시점에 문자열의 길이가 다르면 더 긴 문자열을 더 크다고 결론

<br></br>

## 다른 형을 가진 값 간의 비교
비교하려는 값의 자료형이 다르면 값들을 ```숫자형``` 으로 바꿈

```javascript
alert('2' > 1); // true
alert('01' == 1); // true
alert(true == 1); // true
alert(false == 0); // true
```

<br></br>

## 일치 연산자
```==(동등연산자)``` 는 ```0``` 과 ```false``` 를 구별하지 못함
```javascript
alert(0 == false); // true
alert('' == false); // true
```
구별하지 못하는 이유는 동등연산자는 값을 숫자형으로 변환하기 때문
<br>

```===(일치연산자)``` 는 형변환 없이 값 비교 가능. 자료형의 동등 여부까지 검사
```javascript
alert(0 === false);
```

<br></br>

## null 이나 undefined 와 비교하기
1. 일치 연산자 사용해서 null 과 undefined 비교
    ```javascript
    alert(null === undefined); // false
    ```
    null 과 undefined 는 서로 다른 타입이므로 ```false```
<br>

2. 동등 연산자 사용해서 null 과 undefined 비교
    ```javascript
    alert(null == undefined); // true
    ```
    동등 연산자는 ```null``` 과 ```undefined```를 각별한 커플처럼 취급해서 두 값끼리는 잘 어울리지만 다른 값과는 그렇지 못함
<br>

3. 산술 연산자나 기타 비교연산자 이용해 null 과 undefined 비교<br>
    ```null``` 은 ```0```, ```undefined```는 ```NaN```으로 변함


<br></br>

## null vs 0
```javascript
alert(null > 0); // false 
alert(null == 0); // false(동등 연산자에서는 null 이 형변환이 안 됨)
alert(null >= 0); // true
```

<br></br>

## 비교가 불가능한 undefined
```javascript
alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false
```
```undefined``` 는 비교 연산자에 의해서 형변환 될 때 ```NaN``` 값으로 변환되는데 NaN 이 피연산자인 경우 비교 연산자는 항상 ```false``` 를 반환