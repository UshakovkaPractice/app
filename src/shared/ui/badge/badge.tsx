import type { FC } from "react";
import type { BadgeProps } from "./badge.types";
import styles from "./styles.module.css";

export const Badge: FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
}) => {
  const classes =
    `${styles.badge} ${styles[variant]} ${styles[size]} ${className}`.trim();

  return <span className={classes}>{children}</span>;
};
