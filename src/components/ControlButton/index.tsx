import React from 'react';

import * as S from './styles';

interface Props {
  children: string;
  disabled?: boolean;
  onClick(): void;
}

const ControlButton = ({ children, disabled, onClick }: Props) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default ControlButton;
