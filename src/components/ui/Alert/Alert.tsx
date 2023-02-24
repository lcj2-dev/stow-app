import { ReactNode } from 'react';
import { AlertType } from '../../../typescript/enums';
import style from './Alert.module.css';

interface Props {
  children: ReactNode;
  type: AlertType;
}

export const Alert = ({ children, type }: Props): JSX.Element => {
  return (
    <div className={`${style.alert} ${style[AlertType[type]]}`}>{children}</div>
  );
};
