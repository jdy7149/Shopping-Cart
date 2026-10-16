import { Link } from 'react-router';

function Header({ itemCount }) {
  return (
    <>
      <Link to='/'>
        <h1>Logo</h1>
      </Link>
      <h1>Title</h1>
      <div>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>
          Cart
          <span>({itemCount})</span>
        </Link>
      </div>
    </>
  )
}

export default Header;