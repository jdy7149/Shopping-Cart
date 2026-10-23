import Icon from '@mdi/react';
import { mdiCart, mdiShopping } from '@mdi/js';
import { Link } from 'react-router';

function Header({ itemCount }) {
  return (
    <>
      <Link to='/' aria-label='logo'>
        <h1>Logo</h1>
      </Link>
      <h1>Title</h1>
      <div>
        <Link to='/shop' aria-label='shop'>
          <Icon path={mdiShopping} size={1} />
        </Link>
        <Link to='/cart' aria-label='cart'>
          <Icon path={mdiCart} size={1} />
          <span>({itemCount})</span>
        </Link>
      </div>
    </>
  )
}

export default Header;