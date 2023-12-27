import { HTMLProps } from 'react';

export namespace Styles {
  export type Label = Omit<HTMLProps<HTMLLabelElement>, 'children'>;
}

export type Props = HTMLProps<HTMLLabelElement>;
