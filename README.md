# 💧 K-water Web Publishing (Team Project)

공공기관 웹사이트를 클론코딩한 팀 프로젝트입니다.  
메인 페이지 퍼블리싱을 담당했으며,  
UI 구현과 레이아웃 구조 개선에 집중했습니다.

---

## 🔗 Live Site

👉 [한국수자원공사 클론코딩 바로가기](https://cook2ie.github.io/korea-water/)

---

## 🧩 Overview

- 공공기관 웹사이트 메인 페이지 클론코딩
- UI 구조 분석을 바탕으로 한 퍼블리싱 진행
- 고해상도 환경에서도 안정적으로 보일 수 있도록 레이아웃 개선

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- jQuery

---

## 👨‍💻 Key Points

- 메인 페이지 UI 퍼블리싱 담당
- 헤더 및 드롭다운 메뉴 구조 구현
- 검색창 인터랙션 구현 및 UI 개선

---

## 🔧 Refactoring

- `position + left` 좌표 기반 정렬을 `left: 50% + transform` 구조로 개선
- 고정 width 중심 레이아웃을 `width: 100%` 기반 구조로 수정
- 검색창 레이어의 1920px 고정값을 제거하고 full-width로 처리
- 드롭다운 메뉴 구조와 콘텐츠 배치를 원본 기준으로 재정리

---

## 📸 Preview

<img width="3827" height="1896" alt="image" src="https://github.com/user-attachments/assets/06a4a41a-27ec-4760-93a2-ee4d13c45d2a" />

---

## 💡 What I Learned

- `position`과 고정 좌표(px, %) 기반 레이아웃은 해상도가 달라질수록 쉽게 깨질 수 있다는 점을 경험했습니다.
- 단순한 `left` 기준 정렬보다, `transform`을 활용한 중앙 정렬 방식이 더 안정적이라는 점을 이해했습니다.
- 고정 width(1920px)에 의존하기보다, 유동적인 레이아웃 구조를 설계하는 것이 더 중요하다는 점을 체감했습니다.
- UI 요소를 개별 위치가 아닌 전체 레이아웃 흐름 안에서 설계해야 완성도와 안정성이 높아진다는 점을 배웠습니다.
