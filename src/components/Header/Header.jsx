import Icon from '@mdi/react';
import { mdiCart, mdiShopping } from '@mdi/js';
import { Link } from 'react-router';
import styles from './Header.module.css';

function Header({ itemCount = 0 }) {
  return (
    <div className={styles.header}>
      <Link to="/" aria-label="logo" className={styles.logo}>
        <h1 className={styles.logoText}>Logo</h1>
      </Link>

      <h1 className={styles.title}>Title</h1>

      <nav className={styles.actions} aria-label="Main navigation">
        <Link to="/shop" aria-label="shop" className={styles.iconLink}>
          <Icon path={mdiShopping} size={1} className={styles.icon} />
        </Link>

        <Link to="/cart" aria-label="cart" className={styles.iconLink}>
          <Icon path={mdiCart} size={1} className={styles.icon} />
          <span className={styles.count}>({itemCount})</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;