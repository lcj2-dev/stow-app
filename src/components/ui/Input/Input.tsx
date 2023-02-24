import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props): JSX.Element => {
  return <input className={styles.input} {...props}></input>;
};
