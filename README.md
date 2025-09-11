# QR Generator

QR 코드 생성기 웹 애플리케이션입니다. Next.js 15와 React 19를 기반으로 구축되었습니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.9.2
- **Styling**: Tailwind CSS 4.1.12
- **Linting**: ESLint 9.34.0
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

페이지를 수정하려면 `src/app/page.tsx` 파일을 편집하세요. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 최신 Next.js App Router를 사용하며, TypeScript와 Tailwind CSS로 구축되었습니다.

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

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 홈페이지
```

## 🚀 배포

### Vercel (권장)

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

### 기타 플랫폼

[Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)에서 더 자세한 정보를 확인하세요.

## 📚 학습 자료

Next.js에 대해 더 알아보려면 다음 자료를 참고하세요:

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능과 API에 대해 알아보세요
- [Next.js 학습](https://nextjs.org/learn) - 인터랙티브한 Next.js 튜토리얼

[Next.js GitHub 저장소](https://github.com/vercel/next.js)를 확인해보세요 - 피드백과 기여를 환영합니다!
