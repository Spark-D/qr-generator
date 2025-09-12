import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WIFI QR 코드 데이터 생성 함수
export function generateWifiQRData(ssid: string, password: string): string {
  // WIFI:T:WPA;S:SSID;P:Password;H:false;;
  return `WIFI:T:WPA;S:${ssid};P:${password};H:false;;`
}

// 파일 다운로드 함수
export function downloadFile(dataUrl: string, filename: string): void {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// WIFI 카드 이미지 다운로드 함수
export function downloadWifiCardImage(dataUrl: string, brandName: string): void {
  const sanitizedBrandName = brandName.replace(/[^a-zA-Z0-9가-힣]/g, '_')
  const filename = `${sanitizedBrandName}_QR카드.png`
  downloadFile(dataUrl, filename)
}

// Canvas를 이미지로 변환하는 함수
export function canvasToDataURL(canvas: HTMLCanvasElement, format: 'png' | 'jpeg' = 'png'): string {
  return canvas.toDataURL(`image/${format}`, 1.0)
}
