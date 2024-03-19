# alert, prompt, confirm 을 이용한 상호작용
브라우저 환경에서 사용되는 최소한의 사용자 인터페이스 기능


### alert
- 사용자가 확인 버튼을 누를 때까지 메시지를 보여주는 창이 떠있게 됨
```javascript
alert("Hello");
```
- 메시지가 있는 창을 '모달 창' 이라고 부르고 '모달'은 페이지 나머지 부분과 상호작용이<br>
불가능하다는 의미가 내포되어 있다

<br></br>

### prompt
- 브라우저에서 제공하는 prompt 함수는 2개의 인수를 받음
- 텍스트 메시지와 입력 필드, 확인 및 취소 버튼이 있는 모달창을 띄워줌
```javascript
result = prompt(title, [default]);
// [default] 부분은 입력 필드의 초기값으로 반드시 지정하지 않아도 된다
// 인수를 감싸는 대괄호 : 필수가 아닌 선택이라는 의미
```

##### alert 와 prompt 의 융합
```javascript
let age = prompt('나이를 입력해주세요', 100);
alert(`당신의 나이는 ${age}살 입니다.`);
```

<br></br>

### 컨펌 대화상자
- 매개변수로 받은 question 과 확인 및 취소 버튼이 있는 모달 창을 보여줌
- 사용자가 확인을 누르면 true 그 외의 경우는 false 를 return
```javascript
result = confirm('SSAFY 교육을 받고 있습니까?');
alert(result);
```