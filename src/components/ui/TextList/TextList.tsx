import { ReactNode } from 'react';
import styles from './TextList.module.css';

interface Props {
  content: ReactNode[];
}

export const TextList = ({ content }: Props): JSX.Element => {
  return (
    <ul>
      {content.map((el, idx) => (
        <li key={idx} className={styles.listItem}>
          {el}
        </li>
      ))}
    </ul>
  );
};
