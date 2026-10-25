import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const count = useSelector(
    (state) => state.cart.items.length
  );

  return (
    <div>
      <h2>E-Commerce</h2>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/products')}>
        Products
      </button>
      <button onClick={() => navigate('/about')}>
        About
      </button>
      <button onClick={() => navigate('/cart')}>
        Cart ({count})
      </button>
      <button onClick={()=>navigate('/')}>Return back</button>
      <p>Current Page: {location.pathname}</p>
    </div>
  );
}

export default Navbar;