'use client';

import React from 'react';
import { useWifiCardForm } from '@/hooks/useWifiCardForm';
import { WifiForm, WifiCardPreview, DownloadButton } from '@/components';

export default function WifiPage() {
  const { form, watchedData, isValid } = useWifiCardForm();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            WIFI QR 코드 카드 생성기
          </h1>
          <p className="text-gray-600">
            매장에서 사용할 WIFI 접속 QR 코드 카드를 만들어보세요
          </p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 입력 폼 */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <WifiForm form={form} />
          </div>

          {/* 미리보기 및 다운로드 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <WifiCardPreview props={watchedData} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <DownloadButton 
                props={watchedData} 
                disabled={!isValid}
              />
            </div>
          </div>
        </div>

        {/* 사용법 안내 */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            사용법 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div>
                <p className="font-medium">정보 입력</p>
                <p>브랜드명, WIFI 이름, 비밀번호를 입력하세요</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div>
                <p className="font-medium">미리보기 확인</p>
                <p>생성될 QR 코드 카드를 미리 확인하세요</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div>
                <p className="font-medium">다운로드</p>
                <p>카드를 이미지로 다운로드하여 인쇄하세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
