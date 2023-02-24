import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Input.module.css';

interface Props extends ComponentPropsWithRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, Props>(
  (props, ref): JSX.Element => {
    const { ...rest } = props;

    return <input className={styles.input} {...rest} ref={ref}></input>;
  }
);
