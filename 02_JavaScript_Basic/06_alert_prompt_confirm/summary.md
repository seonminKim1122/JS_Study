## alert
사용자가 확인 버튼을 누를 때까지 메시지를 보여주는 모달 창을 띄워줌
```javascript
alert('Hello');
```

<br></br>

## prompt
텍스트 메시지와 입력 필드, 확인 및 취소 버튼이 있는 모달 창을 띄워줌
```javascript
result = propmt(title, [default]);
// title 부분은 필수 인자, default 부분은 선택 인자
// title : 텍스트 메시지
// default : 입력 필드에 들어갈 기본값
// 사용자가 취소를 누르면 null 이 반환
```

<br></br>

## confirm
매개변수로 받은 질문과 확인 및 취소 버튼이 있는 모달창을 보여줌<br>
확인을 누르면 ```true```, 그 외의 경우는 ```false``` 를 반환

```javascript
let isBoss = confirm('당신이 주인인가요?');
alert(isBoss);
```