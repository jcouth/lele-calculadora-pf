import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: #caaf9f;
`;

export const Title = styled.p`
  font-size: 3.2rem;
`;

export const Form = styled.form.attrs({
  autoComplete: 'off',
})`
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  row-gap: 2rem;
  column-gap: 2rem;
`;

export const ControlsWrapper = styled(InputsWrapper)`
  grid-template-columns: repeat(2, auto);
  row-gap: unset;
`;

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);

  text-align: center;
`;

export const Result = styled.p`
  font-size: 2.2rem;
`;
