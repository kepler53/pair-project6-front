## 해피하우스 웹사이트

## 😆developer

- 이종현
- 장준혁

## ✔ 요구사항

- 게시판 수정
- 게시판 등록
- 게시판 삭제
- 게시판 읽기

## 오늘 구현 사항

- 게시글 CRUD
- 댓글의 CRUD

## 추후 구현해야할 부분

- 페이징처리
- 모든 method exceptionhandler로 처리해서 responseentity로 묶어서 code와 함께 보내기
- 로그인 jwt 처리

## 🏅 기술 스택

- Vue
- Vuex
- Spring

## 구조

    src
    ├── assets
    ├── components
    │   ├──  BoardDetail.vue
    │   ├──  BoardList.vue
    │   ├──  BoardUpdate.vue
    │   ├──  BoardWrite.vue
    │   └──  ...
    ├── fontawesome / about icon
    ├── router
    │   └──  index.js
    ├── service
    │   └──  api.js / about api
    ├── store
    │   └──  index.js / vuex
    ├── views
    │   ├──  QnaPage.vue
    │   ├──  HomePage.vue
    │   └──  LoginPage.vue
    ├── App.vue
    └── main.js

## ERD
https://lab.ssafy.com/95jjangjun/happyhouse-vue-spring/raw/master/0518%20%EA%B2%8C%EC%8B%9C%ED%8C%90%20%EA%B5%AC%EC%A1%B0.png
