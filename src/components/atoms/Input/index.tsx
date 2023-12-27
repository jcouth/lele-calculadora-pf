import React from 'react';

import { Props } from './Input';
import * as S from './styles';

const Input = ({ id, onChange, ...rest }: Props) => {
  return <S.Input id={id} onChange={onChange} {...rest} />;
};

export default Input;
