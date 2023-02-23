import { ReactNode } from 'react';
import style from './Alert.module.css';

interface Props {
  children: ReactNode;
}

export const Alert = ({ children }: Props): JSX.Element => {
  return <div className={style.alert}>{children}</div>;
};
