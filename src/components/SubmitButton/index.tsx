import React from 'react';

import * as S from './styles';

interface Props {
  children: string;
  disabled: boolean;
}

const SubmitButton = ({ children, disabled }: Props) => {
  return <S.Button disabled={disabled}>{children}</S.Button>;
};

export default SubmitButton;
