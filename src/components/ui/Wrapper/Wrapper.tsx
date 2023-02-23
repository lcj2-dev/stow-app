import { ReactNode } from 'react';
import { Header } from '../Header';
import styles from './Wrapper.module.css';

interface Props {
  children?: ReactNode;
  headerText?: string;
}

export const Wrapper = ({ children, headerText }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {headerText && <Header text={headerText} />}
      {children}
    </div>
  );
};
