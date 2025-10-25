export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}
