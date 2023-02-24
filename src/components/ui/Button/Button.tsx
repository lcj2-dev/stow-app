import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: Props): JSX.Element => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
