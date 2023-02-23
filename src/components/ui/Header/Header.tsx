import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface Props {
  text: string;
}

export const Header = ({ text }: Props): JSX.Element => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.headerBtn}>
        &lt; Back
      </Link>
      <span>{text}</span>
    </div>
  );
};
