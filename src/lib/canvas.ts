import { CARD_DIMENSIONS, CARD_TEXT } from '@/constants';
import { WifiCardProps } from '@/types';

interface DrawCardOptions {
  canvas: HTMLCanvasElement;
  props: WifiCardProps;
  qrCodeDataUrl: string;
}

export function drawWifiCard({ canvas, props, qrCodeDataUrl }: DrawCardOptions): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { WIDTH, HEIGHT } = CARD_DIMENSIONS;
  
  // 캔버스 크기 설정
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  // 배경색 설정
  ctx.fillStyle = props.backgroundColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 폰트 설정
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // 상단 텍스트 "WIFI 접속"
  ctx.fillStyle = '#333333';
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(CARD_TEXT.WIFI_ACCESS, WIDTH / 2, 30);

  // QR 코드 이미지 그리기
  if (qrCodeDataUrl) {
    const qrImage = new Image();
    qrImage.onload = () => {
      const qrSize = 120;
      const qrX = (WIDTH - qrSize) / 2;
      const qrY = (HEIGHT - qrSize) / 2 - 10;
      
      ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);
      
      // 브랜드명 텍스트
      ctx.fillStyle = '#333333';
      ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(props.brandName, WIDTH / 2, HEIGHT - 50);

      // "by SPARK" 텍스트 (우측 하단)
      ctx.textAlign = 'right';
      ctx.fillStyle = '#666666';
      ctx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(CARD_TEXT.BY_SPARK, WIDTH - 10, HEIGHT - 15);
    };
    qrImage.src = qrCodeDataUrl;
  }
}

export function createWifiCardImage(props: WifiCardProps, qrCodeDataUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    
    try {
      drawWifiCard({ canvas, props, qrCodeDataUrl });
      
      // 이미지가 로드될 때까지 잠시 대기
      setTimeout(() => {
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        resolve(dataUrl);
      }, 100);
    } catch (error) {
      reject(error);
    }
  });
}

