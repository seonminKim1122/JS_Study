# Hello, World!

### 'script' 태그
- \<script> 태그를 이용해 자바스크립트 프로그램을 HTML 문서 대부분의 위치에 삽입 가능
```html
<!DOCTYPE HTML>
<html>
    <body>
        <p>스크립트 전</p>
        <script>
            alert('Hello, world!');
        </script>
        <p>스크립트 후</p>
    </body>
</html>
```
브라우저에 내장된 엔진이 웹페이지 로딩 시 자동으로 스크립트를 실행


<br></br>
### 모던 마크업

- \<script> 태그가 가지는 몇 가지 속성
    - type 속성 : HTML4 에서는 스크립트에 type 명시가 필수적이었음. HTML5 는 명시할 필요 X
    - language 속성 : 과거에는 사용하고 있는 스크립트 언어를 명시할 목적으로 사용. 현재는 자바스크립트가 기본이므로 사용할 필요 X


<br></br>
### 외부 스크립트
- 자바스크립트 코드 양이 많으면 외부 파일로 소분해서 저장
```html
<script src="path_info"></script>
```
- HTML 내부에 스크립트를 직접 작성하는 방식보다 외부 스크립트를 사용하면 성능상 이점이 있음 <br>-> 브라우저는 스크립트를 다운 받아 캐시에 저장하는데 여러 페이지에서 동일한 스크립트를 사용할 경우 새로 다운 받지 않고 캐시에서 가져와 사용하면 되기 때문

- 외부스크립트와 내부 코드를 같이 사용하면 내부 코드는 무시