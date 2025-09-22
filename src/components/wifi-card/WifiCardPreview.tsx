import React, { useEffect, useRef } from 'react';
import { useQRCode } from '@/hooks/useQRCode';
import { generateWifiQRData } from '@/lib/utils';
import { drawWifiCard } from '@/lib/canvas';
import { WifiCardProps } from '@/types';
import { cn } from '@/lib/utils';

interface WifiCardPreviewProps {
  props: WifiCardProps;
  className?: string;
}

export function WifiCardPreview({ props, className }: WifiCardPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wifiQRData = generateWifiQRData(props.ssid, props.password);
  
  const { qrCodeDataUrl, isLoading, error } = useQRCode({
    data: wifiQRData,
    options: {
      width: 120,
      height: 120,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    },
  });

  useEffect(() => {
    if (qrCodeDataUrl && canvasRef.current) {
      drawWifiCard({
        canvas: canvasRef.current,
        props,
        qrCodeDataUrl,
      });
    }
  }, [qrCodeDataUrl, props]);

  if (error) {
    return (
      <div className={cn('flex items-center justify-center h-64 bg-gray-100 rounded-lg', className)}>
        <div className="text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm">QR 코드 생성 중 오류가 발생했습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900">
          카드 미리보기
        </h2>
        <p className="text-sm text-gray-600">
          생성될 QR 코드 카드의 모습입니다.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={192}
            height={256}
            className="border border-gray-200 rounded-lg shadow-lg"
            style={{ imageRendering: 'pixelated' }}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">QR 코드 생성 중...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        카드 크기: 192 × 256px (3:4 비율)
      </div>
    </div>
  );
}
