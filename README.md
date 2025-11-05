# React Template - 코딩리스트 관리 시스템

React + TypeScript + Vite 기반의 코딩리스트 관리 프로젝트입니다.

## 🚀 기술 스택

- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.1.12** - 빌드 도구
- **Redux Toolkit 2.10.1** - 상태 관리
- **React Router DOM 7.9.5** - 라우팅
- **Tailwind CSS 4.1.16** - 스타일링

## ✨ 주요 기능

- 📋 코딩리스트 테이블 뷰
- 🎨 카테고리별 작업 관리
- 👤 담당자 할당
- 📊 진행상태 추적 (예정/진행중/검토중/완료)
- 🔄 실시간 상태 업데이트

## 📦 설치 방법

```bash
# 저장소 클론
git clone https://github.com/jmiju4798/react-templete.git

# 프로젝트 디렉토리로 이동
cd react-templete

# 의존성 설치
npm install
```

## 🏃 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 📁 프로젝트 구조

```
src/
├── features/
│   └── codingList/
│       ├── components/       # 코딩리스트 컴포넌트
│       ├── store/           # Redux 슬라이스
│       └── types/           # TypeScript 타입 정의
├── store/                   # Redux 스토어 설정
├── App.tsx                  # 메인 앱 컴포넌트
└── main.tsx                 # 엔트리 포인트
```

## 🎯 사용 방법

1. 테이블에서 각 작업 항목의 진행상태를 확인할 수 있습니다
2. 드롭다운을 통해 작업 상태를 변경할 수 있습니다
3. Redux를 통해 상태가 전역으로 관리됩니다

## 📝 라이선스

MIT License

## 👨‍💻 개발자

jmiju4798
