import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { QRCodeOptions } from '@/types';

interface UseQRCodeProps {
  data: string;
  options?: Partial<QRCodeOptions>;
}

interface UseQRCodeReturn {
  qrCodeDataUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useQRCode({ data, options }: UseQRCodeProps): UseQRCodeReturn {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!data) {
      setQrCodeDataUrl(null);
      return;
    }

    const generateQRCode = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const defaultOptions: QRCodeOptions = {
          width: 120,
          height: 120,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        };

        const mergedOptions = { ...defaultOptions, ...options };
        
        const dataUrl = await QRCode.toDataURL(data, {
          width: mergedOptions.width,
          margin: mergedOptions.margin,
          color: {
            dark: mergedOptions.color.dark,
            light: mergedOptions.color.light,
          },
        });

        setQrCodeDataUrl(dataUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'QR 코드 생성 중 오류가 발생했습니다.');
        setQrCodeDataUrl(null);
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [data, options]);

  return {
    qrCodeDataUrl,
    isLoading,
    error,
  };
}

