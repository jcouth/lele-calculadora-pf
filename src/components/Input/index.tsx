import React, { useRef } from 'react';

import { Props } from './Input';
import * as S from './styles';

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
    onChange(e.target.value);
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
      />
    </S.Container>
  );
};

export default Input;
