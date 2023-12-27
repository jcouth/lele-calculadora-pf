import React, { forwardRef } from 'react';

import { Props } from './Label';
import * as S from './styles';

const Label = forwardRef<HTMLLabelElement, Props>(
  ({ id, children, ...rest }, ref) => (
    <S.Label ref={ref} htmlFor={id} {...rest}>
      {children}
    </S.Label>
  )
);

export default Label;

export type { Props as LabelProps };
