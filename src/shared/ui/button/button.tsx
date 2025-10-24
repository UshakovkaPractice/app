import type { FC } from "react";
import styles from "./styles.module.css";
import type { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const classes =
    `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
