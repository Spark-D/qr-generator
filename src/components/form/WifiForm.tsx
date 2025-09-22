import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField } from './FormField';
import { ColorPicker } from './ColorPicker';
import { WifiCardFormData } from '@/types';

interface WifiFormProps {
  form: UseFormReturn<WifiCardFormData>;
  className?: string;
}

export function WifiForm({ form, className }: WifiFormProps) {
  const { register, formState: { errors }, watch, setValue } = form;
  const backgroundColor = watch('backgroundColor');

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900">
          WIFI 정보 입력
        </h2>
        <p className="text-sm text-gray-600">
          매장의 WIFI 정보를 입력하여 QR 코드 카드를 생성하세요.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          label="브랜드명"
          name="brandName"
          placeholder="예: 스타벅스 강남점"
          maxLength={20}
          register={register}
          error={errors.brandName}
        />

        <FormField
          label="네트워크 이름 (SSID)"
          name="ssid"
          placeholder="예: Starbucks_WiFi"
          maxLength={32}
          register={register}
          error={errors.ssid}
        />

        <FormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="WIFI 비밀번호를 입력하세요"
          maxLength={63}
          register={register}
          error={errors.password}
        />

        <ColorPicker
          value={backgroundColor}
          onChange={(color) => setValue('backgroundColor', color)}
        />
      </div>
    </div>
  );
}
