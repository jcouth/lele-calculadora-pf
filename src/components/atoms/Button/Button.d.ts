import { HTMLProps } from 'react';

export namespace Styles {
  export type Button = Omit<HTMLProps<HTMLButtonElement>, 'children'>;
}

export type Props = HTMLProps<HTMLButtonElement>;
