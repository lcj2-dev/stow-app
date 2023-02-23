import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props): JSX.Element => {
  return <button>{children}</button>;
};
