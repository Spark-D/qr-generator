// WIFI QR 코드 카드 관련 타입 정의

export interface WifiCardFormData {
  brandName: string;
  ssid: string;
  password: string;
  backgroundColor: string;
}

export interface WifiCardProps {
  brandName: string;
  ssid: string;
  password: string;
  backgroundColor: string;
}

export interface ColorOption {
  name: string;
  value: string;
  label: string;
}

// QR 코드 생성 옵션
export interface QRCodeOptions {
  width: number;
  height: number;
  margin: number;
  color: {
    dark: string;
    light: string;
  };
}

// WIFI QR 코드 데이터
export interface WifiQRData {
  ssid: string;
  password: string;
  security: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

// 폼 검증 에러 타입
export interface FormErrors {
  brandName?: string;
  ssid?: string;
  password?: string;
  backgroundColor?: string;
}

// 카드 크기 상수
export const CARD_DIMENSIONS = {
  WIDTH: 192, // 3:4 비율
  HEIGHT: 256,
} as const;
