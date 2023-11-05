import React from 'react';

import { Props } from './Button';
import * as S from './styles';

const Button = ({ children, type, disabled, onClick }: Props) => {
  return (
    <S.Button disabled={disabled} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
