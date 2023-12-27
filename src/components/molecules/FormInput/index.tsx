import React, { useRef } from 'react';

import { OnChangeProps, OnFocusProps, Props } from './FormInput';
import * as S from './styles';

const FormInput = ({ label, onChange, onFocus, onBlur }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleChange = (e: OnChangeProps) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const handleFocus = (e: OnFocusProps) => {
    labelRef.current?.classList.add('isFocused');

    if (onFocus) {
      onFocus(e.target.value);
    }
  };

  const handleBlur = (e: OnFocusProps) => {
    labelRef.current?.classList.remove('isFocused');

    if (inputRef.current?.value) {
      labelRef.current?.classList.add('isFilled');
    } else {
      labelRef.current?.classList.remove('isFilled');
    }

    if (onBlur) {
      onBlur(e.target.value);
    }
  };

  return (
    <S.Wrapper>
      <S.Label ref={labelRef} htmlFor={label}>
        {label}
      </S.Label>
      <S.Input
        id={label}
        ref={inputRef}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </S.Wrapper>
  );
};

export default FormInput;

export type { Props as FormInputProps };
