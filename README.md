# react_xexymix_clone

에슬레저 브랜드 젝시믹스의 쇼핑몰입니다. (클론 페이지)

## 📌 프로젝트 목표

- React 활용  
  React의 컴포넌트 구조를 이해합니다.  
  컴포넌트를 재사용해 같은 구조의 DOM을 뿌려줍니다.  
  useState, useEffect와 같은 React hooks를 활용합니다.  
  상태 변화에 따른 컴포넌트의 렌더링 동작을 이해하고 적용합니다.  
  react-router를 활용해 페이지를 이동하고 정보를 전달합니다.  

- Javascript 활용  
  데이터의 구조를 작성하고 이를 컴포넌트에 활용합니다.  
  데이터를 원하는 기준으로 필터링합니다.
  Swiper와 같은 외부 라이브러리를 사용해봅니다.


## ⚙ 기술 스택

<div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
	<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>

<br/>

## 📄 페이지 구성

### 상단 (GNB)

---

햄버거 메뉴, 로고, 카테고리 대분류, 검색, 로그인 기능으로 구성됨

- 햄버거 메뉴 : 카테고리 대분류, 소분류가 드롭다운 형식으로 열림

- 로고 : 메인 페이지로 이동

- 카테고리 대분류 : 각 카테고리 페이지로 이동

- 검색 : 검색 기능이 드롭다운 형식으로 열림, 인기검색어 버튼으로 노출된 키워드를 빠르게 검색 가능

- 로그인 : 로그인 페이지로 이동

<br/>

### 메인 페이지

---

#### 메인 배너

- 항목이 포커스되면 가운데에 위치하며 설명이 노출됨
- 자동, 클릭, 드래그를 통해 슬라이드 됨
- 재생 / 정지 토글 버튼을 통해 자동 슬라이드 기능 on / off

#### 서브 배너

동그리마 배너, 실시간 급상승, 서브 배너로 구성됨

- 카테고리를 보여줌
- 상품정보가 자동으로 슬라이드 됨

#### 메인 상품

현재 보고 있는 카테고리와 상품으로 구성됨

- 현재 보고 있는 카테고리가 좌측에 노출되며 클릭시 카테고리 페이지로 이동
- 카테고리별 상품으로 구성되어 있으며 클릭시 상세 페이지로 이동

<br/>

### 검색 페이지

---

검색내용과 검색창이 포함된 상단, 검색 상품이 포함된 하단으로 구성됨

- 검색창을 통해 원하는 키워드를 검색
- 검색 키워드가 포함된 상품이 하단에 노출됨
- 상품 정렬 기능을 통해 낮은가격순, 높은가격순으로 상품 정렬 가능

<br/>

### 신상 할인 / 베스트 페이지

---

메인 배너, 소분류 선택 버튼, 상품들로 구성됨

- 소분류를 선택하면 그에 따른 상품들이 필터링 되어 노출됨
- 상품 클릭시 상세 페이지로 이동

<br/>

### 우먼즈 / 맨즈 페이지

---

메인 슬라이드 배너, 소분류 선택 버튼, 상품들로 구성됨

- 소분류를 선택하면 그에 따른 상품들이 필터링 되어 노출됨
- 상품 클릭시 상세 페이지로 이동

<br/>

### 상품 상세 페이지

---

상품 이미지, 정보, 가격으로 구성됨  
(구매하기, 찜 기능 미구현)

- 사이즈, 색상 선택을 통해 제품 선택
- 선택된 사이즈 제품의 수량 조절 가능

<br/>

### 커뮤니티 페이지

---

자주 찾는 질문, 질문 검색으로 구성됨  
(상단 링크, 공지사항, 이벤트 탭은 링크 미구현)

- 질문 검색시 해당 키워드가 포함된 질문이 필터링 되어 노출됨
- 질문탭에서 카테고리 선택시 각 카테고리별 질문만 노출됨
- 질문 클릭시 답변이 노출됨

<br/>

### 로그인 페이지

---

카카오 로그인, 일반 로그인으로 구성됨  
(일반 로그인, 회원가입 기능은 미구현)

- 카카오 로그인 버튼을 통해 로그인 페이지로 이동  
  (kakao api를 통해 인가코드, 엑세스 토큰 등 발급)

- 로그인시 카카오 유저정보를 로컬스토리지에 저장 후 메인 페이지로 이동

<br/>

### 마이 페이지

---

로그인한 유저의 정보가 노출됨 (카카오 유저정보 확인 가능)

- 로그아웃 버튼을 통해 로그아웃  
  (kakao api를 통해 엑세스 토큰 만료)

- 로그아웃시 로컬스토리지에 저장된 정보를 삭제하고 메인 페이지로 이동
