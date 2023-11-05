type ButtonTypes =
  | {
      type?: 'button' | 'reset';
      onClick(): void;
    }
  | {
      type: 'submit';
      onClick?(): void;
    };

export type Props = ButtonTypes & {
  children: string;
  disabled?: boolean;
};
