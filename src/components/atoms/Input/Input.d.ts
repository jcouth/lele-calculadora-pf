import { HTMLProps } from 'react';

export namespace Styles {
  export type Input = HTMLProps<HTMLInputElement>;
}

export type Props = Omit<HTMLProps<HTMLInputElement>, 'onChange'> &
  Required<Pick<HTMLProps<HTMLInputElement>, 'onChange'>>;
