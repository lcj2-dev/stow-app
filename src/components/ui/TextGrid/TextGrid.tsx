import { Fragment, ReactNode } from 'react';
import styles from './TextGrid.module.css';

interface Props {
  content: ReactNode[][];
}

export const TextGrid = ({ content }: Props): JSX.Element => {
  return (
    <Fragment>
      {content.map((row, ridx) => (
        <div key={ridx} className={styles.textRow}>
          {row.map((cell, cidx) => (
            <span key={cidx}>{cell}</span>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
