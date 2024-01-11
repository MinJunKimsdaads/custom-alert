<h1>Custom Alert</h1>

<h3>기존 alert은 스타일을 바꿀 수도, 콜백함수를 추가할 수도 없어 여러 프로젝트를 만들때 간단하게 추가할 수 있는 custom alert 컴포넌트를 제작</h3>

<!-- 사용된 기술 스택 -->
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
</div>

<!-- 뱃지예시 -->
<!-- <img src="https://img.shields.io/badge/뱃지이름-뱃지컬러?style=flat-square&logo=뱃지로고&logoColor=white"/> -->
<!-- https://simpleicons.org/ -->

<h3>개발기간</h3>
<p>1days<p>

<img src="http://aaeexx.dothome.co.kr/project/image/custom-alert/1.gif">
<img src="http://aaeexx.dothome.co.kr/project/image/custom-alert/2.gif">

<h3>특징</h3>
<p>context api를 사용하여 전역적으로 어디서나 불러올 수 있음</p>
<p>여러 라이브러리를 다운받을 필요 없음</p>
<p>alert창의 스타일을 간단하게 변경가능</p>
<p>기존 alert은 확인 버튼에 콜백함수를 추가하지 못했지만 콜백함수 추가로 다음 동작이 가능해짐</p>
<p>버튼을 최대 2개까지 추가 가능</p>

<h3>사용방법</h3>
<p>1. component 폴더에 Dialog.tsx을 다운 받은 뒤 프로젝트 폴더에 붙여넣기</p>
<p>2. App.tsx에 Dialog, DialogProvider import</p>
<p>3. DialogProvider로 전체를, App 태그 안에 Dialog 태그 삽입</p>
<img src="http://aaeexx.dothome.co.kr/project/image/custom-alert/3.png">
<p>2. alert창이 필요한 곳에 DialogContext import, alert object 삽입 (style, btn은 필수가 아님 x)</p>
<img src="http://aaeexx.dothome.co.kr/project/image/custom-alert/6.png">
<p>5. 버튼에 함수 추가</p>
<img src="http://aaeexx.dothome.co.kr/project/image/custom-alert/5.png">
