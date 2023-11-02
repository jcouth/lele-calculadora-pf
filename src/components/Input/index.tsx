import React, { useRef } from 'react';

import * as S from './styles';

interface Props {
  id: string;
  label: string;
  onFocus?(): void;
  onBlur?(): void;
  onChange(text: string): void;
}

const Input = ({ id, label, onFocus, onBlur, onChange }: Props) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    labelRef.current?.classList.add('isFocused');
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    labelRef.current?.classList.remove('isFocused');

    if (inputRef.current?.value) {
      labelRef.current?.classList.add('isFilled');
    } else {
      labelRef.current?.classList.remove('isFilled');
    }

    if (onBlur) {
      onBlur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formatted = (Math.round(Number(e.target.value) * 100) / 100).toFixed(
      2
    );
    e.target.value = formatted;
    onChange(formatted);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[\D]/g.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <S.Container>
      <S.Label ref={labelRef} htmlFor={id}>
        {label}
      </S.Label>
      <S.Input
        id={id}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </S.Container>
  );
};

export default Input;
