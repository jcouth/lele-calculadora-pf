import React, { forwardRef } from 'react';

import { Props } from './Input';
import * as S from './styles';

const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, onChange, ...rest }, ref) => (
    <S.Input ref={ref} id={id} onChange={onChange} {...rest} />
  )
);

export default Input;

export type { Props as InputProps };
