# Strict mode
- 2009년 ES5 에서 새로운 기능이 추가되고, 기존 기능 중 일부가 변경
- 기존 기능이 변경됨에 따라 하위 버전과의 호환성에 문제가 발생함에 따라 변경사항들이 기본 모드에서는 활성화 되지 않도록 설정되어 있음
- 'use strict' 지시자를 통해 변경사항 활성화 가능

<br></br>
### use strict
- 스크립트 최상단에 작성하면 스크립트 전체가 모던한 방식으로 동작
- use strict 지시자 위에는 주석만 올 수 있음
- 단, 스크립트 최상단이 아닌 함수 본문 앞에 올 수도 있음

```javascript
// 잘못된 사용
alert('some code');
'use strict';
```
위와 같이 사용하면 strict mode 가 활성화되지 않을 수 있음

```javascript
// 올바른 사용
'use strict';
alert('some code');
```

<br></br>
### 'use strict' 가 필수인가?
- 모던 자바스크립트에서는 '클래스'나 '모듈'을 사용할 경우 'use strict' 가 자동으로 적용됨
- 따라서 '클래스'나 '모듈'을 이용해 구성한다면 'use strict' 를 생략해도 되고, 그렇지 않다면 'use strict' 를 사용