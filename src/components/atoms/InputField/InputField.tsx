import React, { HTMLInputTypeAttribute, useRef } from 'react';
import { Action, ActionContainer, ErrorType, Label, SecLabel, StyledImg, StyledInput } from './style';

type BaseInputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string | undefined | number;
  disabled?: boolean;
  required?: boolean;
  backgroundColor?: string;
  action?: React.ReactNode;
  label?: string;
  secLabel?: string;
  extraStyles?: Record<string, string | {}>;
  onKeyUp?: any;
  min?: number;
  maxLength?: number;
  icon?: any;
  pattern?: RegExp;
  labelStyle?: Record<string, string>;
};

export const InputField: React.FC<BaseInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  error,
  icon,
  disabled,
  min = 0,
  action,
  label,
  extraStyles,
  labelStyle,
  secLabel,
  onKeyUp,
  maxLength,
  required
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      {label && <Label style={labelStyle}>{label}</Label>}
      {secLabel && <SecLabel>{secLabel}</SecLabel>}
      <ActionContainer>
        {icon && <StyledImg src={icon} />}
        <StyledInput
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          min={min}
          maxLength={maxLength}
          icon={icon}
          onChange={onChange}
          autoComplete={autoComplete}
          disabled={disabled}
          style={extraStyles}
          onKeyUp={onKeyUp}
          onWheel={(e: any) => e.target.blur()}
          required={required}
        />
        {action && (
          <Action
            onClick={() => {
              if (name !== 'password') ref.current?.focus();
            }}>
            {action}
          </Action>
        )}
      </ActionContainer>
      {error && typeof error === 'string' && <ErrorType>{error}</ErrorType>}
    </div>
  );
};
