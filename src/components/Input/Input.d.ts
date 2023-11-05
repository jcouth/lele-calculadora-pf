export interface Props {
  id: string;
  label: string;
  onFocus?(): void;
  onBlur?(): void;
  onChange(text: string): void;
}
