import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import { useState } from 'react';

function App({ initialCartItems = [] }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  return (
    <>
      <header>
        <div className="header">
          <Header cartItemsQty={cartItems.length} />
        </div>
      </header>
      <main>
        <div className="content">
          <Outlet context={[cartItems, setCartItems]} />
        </div>
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
}

export default App;
