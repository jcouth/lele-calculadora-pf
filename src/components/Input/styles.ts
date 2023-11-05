import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  margin-top: 1.25rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2rem;
  color: #261815;

  transition: all 0.25s;
  cursor: text;

  &.isFocused {
    top: -35%;
    left: 50%;
    transform: translate(-50%, -35%);

    font-size: 1.5rem;
    color: #dadada;
  }

  &.isFilled {
    top: -35%;
    left: 50%;
    transform: translate(-50%, -35%);

    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  position: relative;

  padding: 0.5rem;

  width: 100%;
  height: 100%;

  font-size: 2rem;

  border: none;
  border-bottom: 0.3rem solid #261815;
  background: transparent;
  color: #261815;

  transition: all 0.25s;
  text-align: center;
  outline: none;

  &:focus {
    border-bottom-color: #dadada;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
