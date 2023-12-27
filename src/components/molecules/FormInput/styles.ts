import styled from 'styled-components';

import InputAtom from '../../atoms/Input';
import LabelAtom from '../../atoms/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Label = styled(LabelAtom)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.25s;
  cursor: text;

  &.isFocused {
    top: -35%;
    left: 50%;
    transform: translate(-50%, -35%);

    font-size: 8px;
  }
`;

export const Input = styled(InputAtom)``;
