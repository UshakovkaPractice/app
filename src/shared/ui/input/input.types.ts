import type { ChangeEventHandler, FocusEventHandler } from "react";

export type InputVariant = "default" | "success" | "error";
export type InputSize = "small" | "medium" | "large";

export interface InputProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  variant?: InputVariant;
  size?: InputSize;
  disabled?: boolean;
  className?: string;
  type?: string;
  name?: string;
}
