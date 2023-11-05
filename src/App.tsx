import React, { useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';

import * as S from './styles';

interface ExProps {
  id: string;
  label: string;
  value?: string;
}

interface ResultProps {
  me: number;
  pf: number;
}

const App = () => {
  const [ex, setEx] = useState<Array<ExProps>>([]);
  const [result, setResult] = useState<ResultProps | null>(null);

  const round = (value: number): string => {
    return (Math.round(value * 100) / 100).toFixed(2);
  };

  const handleAdd = () => {
    const { length } = ex;
    setEx((oldState) =>
      oldState.concat({
        id: `ex${length + 1}`,
        label: `E${length + 1}`,
      })
    );
  };

  const handleRemove = () => {
    const newEx = [...ex];
    newEx.pop();
    if (!newEx.length) {
      setResult(null);
    }
    setEx(newEx);
  };

  const handleChange = (id: string, value: string) => {
    setEx((oldState) =>
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

    const finded = ex.find(({ value }) => value === undefined);
    if (finded) {
      alert(`${finded.label} não foi preenchido!`);
      return;
    }

    const finalME = Number(
      round(
        ex.reduce(
          (accumulator, current) => accumulator + Number(current.value),
          0
        ) / ex.length
      )
    );
    const finalPF = Number(round(15 - 2 * finalME));

    setResult({
      me: finalME,
      pf: finalPF,
    });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.InputsWrapper>
          {ex.map(({ id, label }) => (
            <Input
              key={id}
              id={id}
              label={label}
              onChange={(value) => handleChange(id, value)}
            />
          ))}
        </S.InputsWrapper>
        <S.ControlsWrapper>
          <Button disabled={!ex.length} onClick={handleRemove}>
            -
          </Button>
          <Button onClick={handleAdd}>+</Button>
        </S.ControlsWrapper>
        <Button type='submit' disabled={!ex.length}>
          Calcular
        </Button>
        {result && (
          <S.ResultWrapper>
            <S.Result>ME: {result.me}</S.Result>
            <S.Result>PF: {result.pf}</S.Result>
          </S.ResultWrapper>
        )}
      </S.Form>
    </S.Container>
  );
};

export default App;
