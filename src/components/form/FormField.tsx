import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { WifiCardFormData } from '@/types';

interface FormFieldProps {
  label: string;
  name: keyof WifiCardFormData;
  type?: 'text' | 'password';
  placeholder?: string;
  maxLength?: number;
  register: UseFormRegister<WifiCardFormData>;
  error?: FieldError;
  className?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  maxLength,
  register,
  error,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        <span className="text-red-500 ml-1">*</span>
      </label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cn(
          'transition-colors duration-200',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
        )}
        {...register(name)}
      />
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error.message}
        </p>
      )}
      {maxLength && (
        <p className="text-xs text-gray-500">
          최대 {maxLength}자까지 입력 가능
        </p>
      )}
    </div>
  );
}

