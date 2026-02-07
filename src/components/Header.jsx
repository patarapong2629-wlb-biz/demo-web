import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const navigate = useNavigate()
  const { getCartCount } = useCart()
  const user = localStorage.getItem('user')
  const cartCount = getCartCount()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleLogoClick = () => {
    navigate('/products')
  }

  return (
    <header className="header" data-testid="header">
      <div className="header-content">
        <h1 onClick={handleLogoClick} data-testid="logo">
          🛒 E-Shop
        </h1>
        <div className="header-actions">
          <div className="user-info" data-testid="user-info">
            <span data-testid="username">Welcome, {user}</span>
          </div>
          <button
            className="cart-button"
            onClick={handleCartClick}
            data-testid="cart-button"
            aria-label="Shopping cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-count" data-testid="cart-count">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="logout-button"
            onClick={handleLogout}
            data-testid="logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
