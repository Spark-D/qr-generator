# WIFI QR 코드 카드 생성기

매장에서 고객들이 쉽게 WIFI에 접속할 수 있도록 QR 코드 카드를 생성하고 출력할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎨 **커스터마이징 가능한 디자인** - 브랜드명, 배경색 등 자유롭게 설정
- 📱 **실시간 미리보기** - 입력과 동시에 카드 디자인 확인
- 📥 **원클릭 다운로드** - 고해상도 이미지로 즉시 다운로드
- 🎯 **미니멀 디자인** - 3:4 비율의 깔끔한 카드 레이아웃
- 🔒 **보안** - 모든 처리가 클라이언트 사이드에서 수행

## 🚀 기술 스택

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.9.2
- **Styling**: Tailwind CSS 4.1.12
- **Form Management**: React Hook Form + Zod
- **QR Code**: qrcode 라이브러리
- **UI Components**: shadcn/ui + Radix UI
- **Build Tool**: Turbopack

## 📦 설치 및 실행

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 기타 명령어

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린팅 검사
npm run lint

# 린팅 자동 수정
npm run lint:fix

# 타입 체크
npm run type-check

# 빌드 캐시 정리
npm run clean
```

## 🛠️ 개발

### 프로젝트 구조
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── wifi/              # WIFI QR 생성 페이지
│       └── page.tsx
├── components/            # 재사용 컴포넌트
│   ├── form/             # 폼 관련 컴포넌트
│   │   ├── ColorPicker.tsx
│   │   ├── FormField.tsx
│   │   └── WifiForm.tsx
│   ├── ui/               # shadcn/ui 컴포넌트
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── wifi-card/        # WIFI 카드 관련 컴포넌트
│   │   ├── DownloadButton.tsx
│   │   └── WifiCardPreview.tsx
│   └── index.ts          # 컴포넌트 export
├── hooks/                # 커스텀 훅
│   ├── useQRCode.ts
│   ├── useWifiCardForm.ts
│   └── index.ts
├── lib/                  # 유틸리티 함수
│   ├── canvas.ts         # Canvas API 유틸리티
│   ├── utils.ts          # 공통 유틸리티
│   └── wifi-qr.ts        # WIFI QR 코드 생성
├── types/                # TypeScript 타입 정의
│   └── index.ts
├── constants/            # 상수 정의
│   └── index.ts
└── spec/                 # 프로젝트 문서
    └── prd.md           # 제품 요구사항 문서
```

### 주요 컴포넌트
- **WifiForm**: WIFI 정보 입력 폼 (React Hook Form + Zod 검증)
- **WifiCardPreview**: 실시간 카드 미리보기
- **ColorPicker**: 배경색 선택 컴포넌트
- **DownloadButton**: 이미지 다운로드 기능

## 📝 커밋 메시지 규칙

모든 커밋 메시지는 **한글로 작성**해야 합니다.

### 예시
- ✅ "Badge 컴포넌트 추가"
- ✅ "QR 생성기 기능 구현"
- ✅ "UI 스타일 개선"
- ❌ "Add Badge component"
- ❌ "Implement QR generator"
- ❌ "Improve UI styles"

### 커밋 메시지 형식
- 간결하고 명확하게 작성
- 동사형으로 시작 (추가, 수정, 삭제, 개선 등)
- 50자 이내로 작성 권장

## 🎯 사용법

1. **WIFI 정보 입력**
   - 브랜드명 (최대 20자)
   - 네트워크 이름 (SSID, 최대 32자)
   - 비밀번호 (최대 63자)
   - 배경색 선택

2. **실시간 미리보기**
   - 입력과 동시에 카드 디자인 확인
   - 3:4 비율의 미니멀한 디자인

3. **다운로드**
   - 고해상도 PNG 이미지로 다운로드
   - 파일명: `브랜드명_QR카드.png`

## 🚀 배포

### Vercel (권장)

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

### 기타 플랫폼

[Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)에서 더 자세한 정보를 확인하세요.

## 🔧 의존성

### 주요 라이브러리
- **qrcode**: QR 코드 생성
- **react-hook-form**: 폼 상태 관리
- **zod**: 스키마 검증
- **@radix-ui/react-slot**: UI 컴포넌트 기반
- **class-variance-authority**: 컴포넌트 variant 관리
- **lucide-react**: 아이콘 라이브러리

### 개발 도구
- **TypeScript**: 타입 안전성
- **ESLint**: 코드 품질 관리
- **Tailwind CSS**: 유틸리티 우선 CSS
- **Turbopack**: 빠른 빌드 도구

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능과 API
- [React Hook Form](https://react-hook-form.com/) - 폼 상태 관리
- [Zod](https://zod.dev/) - 스키마 검증
- [shadcn/ui](https://ui.shadcn.com/) - UI 컴포넌트 라이브러리

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.
