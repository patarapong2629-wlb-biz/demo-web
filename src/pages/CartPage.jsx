import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

const CartPage = () => {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  const handleContinueShopping = () => {
    navigate('/products')
  }

  const handleIncreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1)
  }

  const handleDecreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity - 1)
  }

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  if (cartItems.length === 0) {
    return (
      <div data-testid="cart-page">
        <Header />
        <div className="container cart-container">
          <div className="cart-header">
            <h2 data-testid="cart-title">Shopping Cart</h2>
          </div>
          <div className="empty-cart" data-testid="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
            <button
              className="continue-shopping-button"
              onClick={handleContinueShopping}
              data-testid="continue-shopping-button"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div data-testid="cart-page">
      <Header />
      <div className="container cart-container">
        <div className="cart-header">
          <h2 data-testid="cart-title">Shopping Cart</h2>
        </div>
        <div className="cart-items" data-testid="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
              data-testid={`cart-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
                data-testid={`cart-item-image-${item.id}`}
              />
              <div className="cart-item-info">
                <h3 className="cart-item-name" data-testid={`cart-item-name-${item.id}`}>
                  {item.name}
                </h3>
                <p className="cart-item-price" data-testid={`cart-item-price-${item.id}`}>
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                    data-testid={`decrease-quantity-${item.id}`}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="quantity" data-testid={`quantity-${item.id}`}>
                    {item.quantity}
                  </span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                    data-testid={`increase-quantity-${item.id}`}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                  data-testid={`remove-item-${item.id}`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary" data-testid="cart-summary">
          <div className="cart-total">
            <span>Total:</span>
            <span data-testid="cart-total-amount">${getCartTotal().toFixed(2)}</span>
          </div>
          <button
            className="checkout-button"
            onClick={handleCheckout}
            data-testid="checkout-button"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
