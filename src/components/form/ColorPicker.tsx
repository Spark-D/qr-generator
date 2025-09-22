import React from 'react';
import { cn } from '@/lib/utils';
import { DEFAULT_COLORS } from '@/constants';
import { ColorOption } from '@/types';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <label className="text-sm font-medium text-gray-700">
        카드 배경색
      </label>
      <div className="grid grid-cols-4 gap-2">
        {DEFAULT_COLORS.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onChange(color.value)}
            className={cn(
              'w-12 h-12 rounded-lg border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              value === color.value
                ? 'border-gray-800 shadow-lg'
                : 'border-gray-200 hover:border-gray-300'
            )}
            style={{ backgroundColor: color.value }}
            title={color.label}
            aria-label={`${color.label} 색상 선택`}
          >
            {value === color.value && (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500">
        선택된 색상: {DEFAULT_COLORS.find(c => c.value === value)?.label || '사용자 정의'}
      </div>
    </div>
  );
}
