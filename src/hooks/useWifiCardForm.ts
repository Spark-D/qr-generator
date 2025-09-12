import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WifiCardFormData } from '@/types';
import { DEFAULT_COLORS, VALIDATION_MESSAGES } from '@/constants';

// Zod 스키마 정의
const wifiCardFormSchema = z.object({
  brandName: z
    .string()
    .min(1, VALIDATION_MESSAGES.REQUIRED)
    .max(20, VALIDATION_MESSAGES.BRAND_NAME_MAX),
  ssid: z
    .string()
    .min(1, VALIDATION_MESSAGES.REQUIRED)
    .max(32, VALIDATION_MESSAGES.SSID_MAX),
  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.REQUIRED)
    .max(63, VALIDATION_MESSAGES.PASSWORD_MAX),
  backgroundColor: z
    .string()
    .min(1, VALIDATION_MESSAGES.REQUIRED),
});

export function useWifiCardForm() {
  const form = useForm<WifiCardFormData>({
    resolver: zodResolver(wifiCardFormSchema),
    defaultValues: {
      brandName: '',
      ssid: '',
      password: '',
      backgroundColor: DEFAULT_COLORS[0].value, // 기본값: 흰색
    },
    mode: 'onChange', // 실시간 검증
  });

  const { watch, formState: { errors, isValid } } = form;

  // 실시간으로 폼 데이터 감시
  const watchedData = watch();

  return {
    form,
    watchedData,
    errors,
    isValid,
    // 편의 메서드들
    resetForm: () => form.reset(),
    setDefaultValues: (values: Partial<WifiCardFormData>) => {
      form.reset(values);
    },
  };
}

