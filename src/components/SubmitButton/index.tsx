import React from 'react';

import * as S from './styles';

interface Props {
  children: string;
}

const SubmitButton = ({ children }: Props) => {
  return <S.Button>{children}</S.Button>;
};

export default SubmitButton;
