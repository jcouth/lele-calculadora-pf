import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  margin-top: 1.25rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 0.675rem;
  left: 0.75rem;

  font-size: 2rem;
  color: #090909;

  transition: all 0.25s;
  cursor: text;

  &.isFocused {
    top: -1.25rem;
    left: 0.5rem;

    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;

  width: 100%;
  height: 100%;

  font-size: 2rem;

  border: none;
  border-bottom: 0.3rem solid #4a0e40;
  background: transparent;

  transition: all 0.25s;

  outline: none;
`;
