export type ButtonType = 'control' | 'submit';

export interface ButtonProps {
  isSubmit: ButtonType;
}

export interface Props extends ButtonProps {
  children: string;
  disabled?: boolean;
  onClick(): void;
}
