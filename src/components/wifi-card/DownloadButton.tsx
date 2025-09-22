import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { downloadWifiCardImage, generateWifiQRData } from '@/lib/utils';
import { createWifiCardImage } from '@/lib/canvas';
import { WifiCardProps } from '@/types';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  props: WifiCardProps;
  disabled?: boolean;
  className?: string;
}

export function DownloadButton({ props, disabled, className }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!props.brandName || !props.ssid || !props.password) {
      return;
    }

    setIsDownloading(true);
    
    try {
      const wifiQRData = generateWifiQRData(props.ssid, props.password);
      const dataUrl = await createWifiCardImage(props, wifiQRData);
      downloadWifiCardImage(dataUrl, props.brandName);
    } catch (error) {
      console.error('다운로드 중 오류 발생:', error);
      // TODO: 에러 토스트 메시지 표시
    } finally {
      setIsDownloading(false);
    }
  };

  const isFormValid = props.brandName && props.ssid && props.password;

  return (
    <Button
      onClick={handleDownload}
      disabled={disabled || !isFormValid || isDownloading}
      className={cn(
        'w-full transition-all duration-200',
        isDownloading && 'animate-pulse',
        className
      )}
    >
      {isDownloading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>다운로드 중...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>카드 다운로드</span>
        </div>
      )}
    </Button>
  );
}

