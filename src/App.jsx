import { Outlet } from 'react-router';
import { useState } from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';

function App({ initialCartItems = [] }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.app}>
      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <Header itemCount={itemCount} />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet context={[cartItems, setCartItems]} />
        </div>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}

export default App;
