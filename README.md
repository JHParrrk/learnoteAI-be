# 🎓 LearnoteAI Backend

AI 시니어가 정제해주는 나만의 학습 아카이브

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

---

> **"생각나는 대로 쓴 노트가 당신의 커리어가 되도록"**  
> 단순한 메모를 넘어, AI가 당신의 지식을 검증하고 학습 방향을 제시합니다.

---

## 🔗 Quick Links

- 🌐 **Live Demo (Backend)**: [https://learnoteai-be.fly.dev](https://learnoteai-be.fly.dev)
- 📑 **API Documentation**: [Swagger UI (Local)](http://localhost:3000/api)
- 🖥️ **Frontend Repository**: [learnote-ai-fe](https://github.com/your-org/learnote-ai-fe)

---

## 🏗️ 프로젝트 개요 (Project Overview)

LearnoteAI는 지능형 학습 지원 플랫폼으로, 사용자가 작성한 학습 내용을 AI 전문 시니어의 관점에서 분석하고 정제합니다.

### 🎯 주요 목표

- **지식의 정교화**: AI 분석을 통해 학습 내용의 오류를 바로잡고 정확한 지식을 습득하도록 돕습니다.
- **학습의 가이드**: 작성된 내용을 바탕으로 연관된 심화 지식을 제안하여 학습 범위를 넓힙니다.
- **커리어 자산화**: 파편화된 메모를 Markdown 기반의 구조화된 문서로 변환하여 개인의 가치 있는 자산으로 만듭니다.

---

## ✨ 핵심 기능 (Key Features)

### 🧠 1. 지능형 AI 분석 워크플로우

- **실시간 폴링 (Real-time Polling)**: AI 분석 상태를 실시간으로 추적하여 완료 즉시 정보를 업데이트합니다.
- **팩트 체크 (Fact-Check)**: 학습 노트의 사실 관계를 검증하고, 오류 시 정정 제안 및 근거를 제시합니다.
- **전문가 가이드 (Expert Guide)**: 주제에 특화된 심화 학습 가이드를 통해 지식의 깊이를 더합니다.
- **노트 자동 정제 (Refinement)**: AI가 핵심 요약 및 키워드를 추출하고, Markdown 형식으로 문서를 다듬어줍니다.

### 📋 2. 스마트 할 일(Todo) 관리

- **AI 추천 Todo**: 분석 결과를 기반으로 복습이나 추가 학습이 필요한 항목을 자동으로 추천합니다.
- **선택적 저장 로직**: 추천된 항목 중 필요한 것만 선택하여 내 할 일 목록으로 저장할 수 있습니다.
- **중복 생성 방지**: 서버 상태 동기화를 통해 이미 추가된 추천 항목은 중복되지 않도록 처리합니다.

### 📊 3. 대시보드 및 API 연동

- **활동 히트맵 연계**: 학습 데이터를 시각화하기 위한 집계 API를 제공합니다.
- **칸반 보드 상태 관리**: 투두 리스트의 상태(PENDING, COMPLETED 등)를 체계적으로 관리합니다.
- **Swagger Documentation**: 모든 API는 Swagger를 통해 문서화되어 프론트엔드와 원활하게 소통합니다.

---

## 🛠 기술 스택 (Tech Stack)

### ⚙️ Backend & Infrastructure

- **Framework**: NestJS (Node.js)
- **Database**: Supabase / PostgreSQL
- **AI Integration**: OpenAI SDK
- **Authentication**: Passport.js (JWT Strategy)
- **Deployment**: Fly.io
- **Testing**: Jest

---

## 📂 프로젝트 구조 (Project Structure)

```text
src/
├── app.module.ts         # 애플리케이션 루트 모듈
├── main.ts               # 진입점 (Swagger 및 전역 파이프 설정)
├── auth/                 # JWT 기반 인증 (Login, Signup, Strategy)
├── common/               # 공통 엔티티 및 유틸리티
├── dashboard/            # 대시보드 요약 및 할 일 관리 API
├── notes/                # 노트 생성 및 AI 분석 결과 관리
├── openai/               # OpenAI API 연동 서비스
└── supabase/             # Supabase(DB) 커넥션 및 서비스
test/                     # E2E 테스트 및 Jest 설정
```

---

## ⚙️ 시작하기 (Getting Started)

### 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 아래 항목들을 설정합니다.

```env
# Supabase
SUPABASE_URL=
SUPABASE_KEY=

# OpenAI
OPENAI_API_KEY=

# JWT
JWT_SECRET=
```

### 2. 설치 및 실행

```bash
# 의존성 설치
$ npm install

# 개발 서버 실행 (Watch Mode)
$ npm run start:dev

# 프로덕션 빌드
$ npm run build

# 프로덕션 실행
$ npm run start:prod
```

### 3. 테스트 실행

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e
```

---

## � API 목록

### 1. 인증 (Authentication) - `/auth`

| Method | Endpoint       | 설명                    | Request Body / Params       | Response                               |
| :----- | :------------- | :---------------------- | :-------------------------- | :------------------------------------- |
| `POST` | `/auth/signup` | 회원가입                | `{ email, password, name }` | `{ id, email, name }`                  |
| `POST` | `/auth/login`  | 로그인                  | `{ email, password }`       | `{ access_token }`                     |
| `GET`  | `/auth/me`     | 내 정보 조회 (JWT 필수) | `Header: Bearer <token>`    | `{ message, user: { userId, email } }` |

### 2. 대시보드 (Dashboard) - `/dashboard`

| Method  | Endpoint               | 설명               | Request Body / Params                                  | Response              |
| :------ | :--------------------- | :----------------- | :----------------------------------------------------- | :-------------------- |
| `GET`   | `/dashboard`           | 대시보드 요약 조회 | Query: `?userId=1`                                     | `DashboardSummaryDto` |
| `GET`   | `/dashboard/todos`     | 투두 리스트 조회   | Query: `?userId=1`                                     | `LearningTodo[]`      |
| `POST`  | `/dashboard/todos`     | 투두 생성          | Body: `CreateTodoDto`, Query: `?userId=1`              | `LearningTodo`        |
| `PATCH` | `/dashboard/todos/:id` | 투두 수정          | Body: `UpdateTodoDto`, Param: `id`, Query: `?userId=1` | `LearningTodo`        |

**DTO 상세:**

- **CreateTodoDto**:
  - `content` (string, 필수): 투두 내용
  - `noteId` (number, 선택): 연결할 노트 ID - 노트와 연계되어서가 아닌 개인 목표 추가할때 사용
  - `dueDate` (string, 선택): 마감일 (ISO Date String)
  - `reason` (string, 선택): 생성 이유
  - `deadlineType` (enum, 선택): 'SHORT_TERM' | 'LONG_TERM'

### 3. 노트 (Notes) - `/notes` (JWT 필수)

모든 요청에 `Authorization: Bearer <token>` 헤더가 필요합니다.

| Method  | Endpoint              | 설명                     | Request Body / Params                 | Response                                  |
| :------ | :-------------------- | :----------------------- | :------------------------------------ | :---------------------------------------- |
| `POST`  | `/notes`              | 노트 생성 (AI 분석 시작) | `{ rawContent, title?, date? }`       | `{ noteId, status, message, rawContent }` |
| `GET`   | `/notes/:id/analysis` | 노트 분석 결과 조회      | Param: `id` (Note ID)                 | `NoteAnalysisResponse`                    |
| `POST`  | `/notes/:id/todos`    | 학습 투두 저장           | Param: `id`, Body: `{ todos: [...] }` | `SimpleMessageResponse`                   |
| `PATCH` | `/notes/:id`          | 노트 수정                | Param: `id`, Body: `UpdateNoteDto`    | `NoteEntity`                              |

**DTO 상세:**

- **CreateNoteDto**:
  - `rawContent` (string, 필수): 노트 원문 내용
  - `title` (string, 선택): 노트 제목
  - `date` (string, 선택): 노트 날짜

---

## 📄 라이선스 (License)

본 프로젝트는 **MIT License**를 따릅니다.
