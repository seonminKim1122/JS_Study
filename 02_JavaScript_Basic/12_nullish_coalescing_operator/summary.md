## nullish 병합 연산자 `??`

`??` 를 사용하면 짧은 문법으로 여러 피연산자 중 값이 **확정되어 있는** 변수를 찾을 수 있다.
<br>
`a ?? b` 의 평가 결과는<br>
- `a` 가 `null` 도 아니고 `undefined` 도 아니면 `a`
- 그 외의 경우는 `b`

<br></br>

## `??` 와 `||` 의 차이
- `||` : 첫 번째 `truthy` 값을 반환
- `??` : 첫 번째 정의된 값을 반환

```javascript
const height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```