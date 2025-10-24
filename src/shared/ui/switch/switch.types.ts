import type { ButtonVariant } from "../button/button.types";

export interface SwitchProps<T = string> {
  value: T;
  onChange: (value: T) => void;
  options: { label: string; value: T }[];
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: ButtonVariant;
  className?: string;
}
