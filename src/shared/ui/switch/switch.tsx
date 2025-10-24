import styles from "./styles.module.css";
import type { SwitchProps } from "./switch.types";
import { Button } from "../button";

export const Switch = <T extends string | number>({
  value,
  onChange,
  options,
  disabled = false,
  size = "medium",
  variant = "primary",
  className = "",
}: SwitchProps<T>) => {
  const classes = `${styles.switch} ${className}`.trim();

  return (
    <div className={classes}>
      {options.map((option) => (
        <Button
          key={option.value}
          size={size}
          variant={value === option.value ? "primary" : variant}
          onClick={() => !disabled && onChange(option.value)}
          disabled={disabled}
          className={value === option.value ? styles.active : ""}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
