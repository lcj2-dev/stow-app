import styles from './NavBar.module.css';

export const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <span>StowUtils</span>
      <span>pawemala</span>
    </nav>
  );
};
