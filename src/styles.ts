import styled from 'styled-components';

import PeterJPG from './assets/peter.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 16rem;

  width: 100%;
  min-height: 100vh;

  background-color: #caaf9f;

  @media (min-width: 800px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-image: ${`url(${PeterJPG})`};
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      opacity: 0.5;
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 0) 0%,
        #caaf9f 70%,
        #caaf9f 100%
      );
    }
  }
`;

export const Title = styled.p`
  font-size: 3.2rem;
`;

export const Form = styled.form.attrs({
  autoComplete: 'off',
})`
  z-index: 1;

  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;

  @media (min-width: 800px) {
    zoom: 1.5;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  row-gap: 2rem;
  column-gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 6rem);
  }
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
