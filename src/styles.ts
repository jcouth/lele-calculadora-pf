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
  font-size: 32px;
`;

export const Form = styled.form.attrs({
  autoComplete: 'off',
})`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 2rem;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 6rem);
  column-gap: 2rem;
`;

export const FormWrapper = styled.div`
  margin-top: 1.6rem;
`;

export const Result = styled.p`
  font-size: 32px;
`;
