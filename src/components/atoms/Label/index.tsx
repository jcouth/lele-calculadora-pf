import React from 'react';

import { Props } from './Label';
import * as S from './styles';

const Label = ({ id, children, ...rest }: Props) => (
  <S.Label htmlFor={id} {...rest}>
    {children}
  </S.Label>
);

export default Label;

export type { Props as LabelProps };
