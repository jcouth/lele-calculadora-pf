import React, { useState } from 'react';

import * as S from './styles';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';

interface ExsProps {
  id: string;
  label: string;
}

const inputs: Array<ExsProps> = [
  {
    id: 'ex1',
    label: 'E1',
  },
  {
    id: 'ex2',
    label: 'E2',
  },
  {
    id: 'ex3',
    label: 'E3',
  },
  {
    id: 'ex4',
    label: 'E4',
  },
  {
    id: 'ex5',
    label: 'E5',
  },
];

const App = () => {
  const [exs, setExs] = useState<Record<ExsProps['id'], ExsProps['label']>>({});
  const [disabled, setDisabled] = useState<boolean>(true);

  const round = (value: number): string => {
    return (Math.round(value * 100) / 100).toFixed(2);
  };

  const handleChange = (value: string, id: string) => {
    // const newExs = [...exs, ];
    setExs((oldState) => ({
      ...oldState,
      [id]: value,
    }));
    // setDisabled(exs);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ME = Object.values(exs).reduce(
      (accumulator, current) => accumulator + Number(current),
      0
    );
    // if (Number.isNaN(numberME)) {
    //   throw new Error('Não é número');
    // }
    // setPF(round(15 - 2 * numberME));
    // setMF(round((2 * numberME + Number(round(15 - 2 * numberME))) / 3));
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.InputsWrapper>
          {inputs.map(({ id, label }) => (
            <Input
              id={id}
              label={label}
              onChange={(value) => handleChange(value, id)}
            />
          ))}
        </S.InputsWrapper>
        <SubmitButton disabled={disabled}>Calcular</SubmitButton>
      </S.Form>
      {/* {pf !== null && (
        <>
          <S.Result>Você precisa tirar ao menos {pf} na prova final</S.Result>
          <S.Result>Para ter uma média final de {mf}</S.Result>
        </>
      )} */}
    </S.Container>
  );
};

export default App;
