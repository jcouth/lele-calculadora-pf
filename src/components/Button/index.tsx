import React from 'react';

import { Props } from './Button';
import * as S from './styles';

const Button = ({ children, isSubmit, disabled, onClick }: Props) => {
  return (
    <S.Button disabled={disabled} isSubmit={isSubmit} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
