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
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  row-gap: 2rem;
  column-gap: 2rem;
`;