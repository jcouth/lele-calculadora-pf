import React from 'react';

import { Props } from './Button';
import * as S from './styles';

const Button = ({ children, ...rest }: Props) => (
  <S.Button {...rest}>{children}</S.Button>
);

export default Button;

export type { Props as ButtonProps };
