import { ChangeEvent, FocusEvent } from 'react';

export type OnChangeProps = ChangeEvent<HTMLInputElement>;

export type OnFocusProps = FocusEvent<HTMLInputElement>;

export type Props = {
  label: string;
  onChange(value: string): void;
  onFocus(value: string): void;
  onBlur(value: string): void;
};
