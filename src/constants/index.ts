// 기본 색상 팔레트
export const DEFAULT_COLORS = [
  { name: 'white', value: '#ffffff', label: '흰색' },
  { name: 'gray', value: '#f3f4f6', label: '회색' },
  { name: 'blue', value: '#3b82f6', label: '파란색' },
  { name: 'green', value: '#10b981', label: '초록색' },
  { name: 'purple', value: '#8b5cf6', label: '보라색' },
  { name: 'pink', value: '#ec4899', label: '분홍색' },
  { name: 'orange', value: '#f97316', label: '주황색' },
  { name: 'red', value: '#ef4444', label: '빨간색' },
] as const;

// 폼 검증 메시지
export const VALIDATION_MESSAGES = {
  REQUIRED: '필수 입력 항목입니다',
  BRAND_NAME_MAX: '브랜드명은 20자 이하로 입력해주세요',
  SSID_MAX: '네트워크 이름은 32자 이하로 입력해주세요',
  PASSWORD_MAX: '비밀번호는 63자 이하로 입력해주세요',
} as const;

// QR 코드 기본 설정
export const QR_CODE_CONFIG = {
  width: 120,
  height: 120,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
} as const;

// 카드 텍스트 설정
export const CARD_TEXT = {
  WIFI_ACCESS: 'WIFI 접속',
  BY_SPARK: 'by SPARK',
} as const;

