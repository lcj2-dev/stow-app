import { ReactNode } from 'react';
import style from './Content.module.css';

interface Props {
  children?: ReactNode;
}

export const Content = ({ children }: Props): JSX.Element => {
  return <div className={style.content}>{children}</div>;
};
