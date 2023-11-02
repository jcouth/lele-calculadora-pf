import styled from 'styled-components';

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 1.25rem;

  width: 100%;

  font-size: 1.25rem;

  background-color: #261815;
  border: none;
  border-radius: 0.75rem;
  color: white;

  cursor: pointer;
`;
