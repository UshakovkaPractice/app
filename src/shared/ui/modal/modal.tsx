import type { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./styles.module.css";
import type { ModalProps } from "./modal.types";

export const Modal: FC<ModalProps> & {
  Header: FC<{ title?: string; onClose?: () => void; className?: string }>;
  Content: FC<{ children: ReactNode; className?: string }>;
  Footer: FC<{
    children: ReactNode;
    centered?: boolean;
    className?: string;
    fullWidth?: boolean;
  }>;
} = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

Modal.Header = ({ title, onClose, className }) => (
  <div className={`${styles.header} ${className || ""}`}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {onClose && (
      <button className={styles.close} onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
    )}
  </div>
);

Modal.Content = ({ children, className }) => (
  <div className={`${styles.content} ${className || ""}`}>{children}</div>
);

Modal.Footer = ({ children, centered, fullWidth, className }) => (
  <div
    className={`${styles.footer} ${fullWidth ? styles.fullWidth : ""} ${centered ? styles.centered : ""} ${className || ""}`}
  >
    {children}
  </div>
);
