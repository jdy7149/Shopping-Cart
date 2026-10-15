import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

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
        <div className="footer">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
