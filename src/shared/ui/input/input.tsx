import { type FC } from "react";
import styles from "./styles.module.css";
import type { InputProps } from "./input.types";

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = "",
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
  type = "text",
  name,
}) => {
  const classes =
    `${styles.input} ${styles[variant]} ${styles[size]} ${className}`.trim();

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      className={classes}
      disabled={disabled}
    />
  );
};
