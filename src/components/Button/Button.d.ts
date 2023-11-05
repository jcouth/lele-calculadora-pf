export namespace Styles {
  export interface Button {
    isSubmit: boolean | undefined;
  }
}

type ButtonTypes =
  | {
      isSubmit?: boolean;
      onClick(): void;
    }
  | {
      isSubmit: boolean;
      onClick?(): void;
    };

export type Props = ButtonTypes & {
  children: string;
  disabled?: boolean;
};
