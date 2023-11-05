import React, { useState } from 'react';

import ControlButton from './components/ControlButton';
import SubmitButton from './components/SubmitButton';
import Input from './components/Input';

import * as S from './styles';

interface ExsProps {
  id: string;
  label: string;
  value?: string;
}

const App = () => {
  const [exs, setExs] = useState<Array<ExsProps>>([]);

  const round = (value: number): string => {
    return (Math.round(value * 100) / 100).toFixed(2);
  };

  const handleAdd = () => {
    const { length } = exs;
    setExs((oldState) =>
      oldState.concat({
        id: `ex${length + 1}`,
        label: `E${length + 1}`,
      })
    );
  };

  const handleRemove = () => {
    const newExs = [...exs];
    newExs.pop();
    setExs(newExs);
  };

  const handleChange = (value: string, id: string) => {
    setExs((oldState) =>
      oldState.map((current) => {
        if (current.id === id) {
          return {
            ...current,
            value,
          };
        }
        return current;
      })
    );
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (exs.find((current) => current.value === undefined)) {
      alert('Não é número');
      return;
    }

    const ME = Number(
      round(
        exs.reduce(
          (accumulator, current) => accumulator + Number(current.value),
          0
        ) / exs.length
      )
    );
    const PF = Number(round(15 - 2 * ME));

    alert(`ME: ${ME} || PF: ${PF}`);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Wrapper>
          {exs.map(({ id, label }) => (
            <Input
              key={id}
              id={id}
              label={label}
              onChange={(value) => handleChange(value, id)}
            />
          ))}
        </S.Wrapper>
        <S.Wrapper>
          <ControlButton onClick={handleRemove}>-</ControlButton>
          <ControlButton onClick={handleAdd}>+</ControlButton>
          <SubmitButton>Calcular</SubmitButton>
        </S.Wrapper>
      </S.Form>
    </S.Container>
  );
};

export default App;
