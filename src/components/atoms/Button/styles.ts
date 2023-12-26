import styled from 'styled-components';

import { Styles } from './Button';

export const Button = styled.button<Styles.Button>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 32px;
  width: 100%;

  border: none;
  border-radius: 100px;
  background-color: #0a0a0a;
  opacity: 1;
  cursor: pointer;
  font-size: 16px;
  color: white;

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
