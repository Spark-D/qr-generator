// WIFI QR 코드 관련 유틸리티 함수들

export interface WifiQRData {
  ssid: string;
  password: string;
  security: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

/**
 * WIFI QR 코드 데이터 문자열을 생성합니다.
 * 표준 형식: WIFI:T:WPA;S:SSID;P:Password;H:false;;
 */
export function generateWifiQRString(data: WifiQRData): string {
  const { ssid, password, security = 'WPA', hidden = false } = data;
  
  return `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`;
}

/**
 * WIFI QR 코드 데이터 문자열을 파싱합니다.
 */
export function parseWifiQRString(qrString: string): WifiQRData | null {
  try {
    // WIFI:T:WPA;S:SSID;P:Password;H:false;; 형식 파싱
    const match = qrString.match(/^WIFI:T:(\w+);S:([^;]+);P:([^;]+);H:(\w+);;$/);
    
    if (!match) return null;
    
    return {
      ssid: match[2],
      password: match[3],
      security: match[1] as 'WPA' | 'WEP' | 'nopass',
      hidden: match[4] === 'true',
    };
  } catch {
    return null;
  }
}

/**
 * QR 코드 데이터가 유효한 WIFI 형식인지 확인합니다.
 */
export function isValidWifiQRString(qrString: string): boolean {
  return parseWifiQRString(qrString) !== null;
}

/**
 * WIFI 보안 타입별 설명을 반환합니다.
 */
export function getSecurityDescription(security: string): string {
  switch (security) {
    case 'WPA':
      return 'WPA/WPA2 보안';
    case 'WEP':
      return 'WEP 보안 (권장하지 않음)';
    case 'nopass':
      return '비밀번호 없음';
    default:
      return '알 수 없는 보안 타입';
  }
}

