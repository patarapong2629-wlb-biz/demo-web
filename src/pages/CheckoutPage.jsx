import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { getCartTotal, clearCart, cartItems } = useCart()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true)
      clearCart()
      setTimeout(() => {
        navigate('/products')
      }, 3000)
    }, 1000)
  }

  const handleBackToCart = () => {
    navigate('/cart')
  }

  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart')
    return null
  }

  return (
    <div data-testid="checkout-page">
      <Header />
      <div className="container checkout-container">
        <div className="cart-header">
          <h2 data-testid="checkout-title">Checkout</h2>
        </div>

        {orderPlaced ? (
          <div className="checkout-form">
            <div className="success-message" data-testid="success-message">
              Order placed successfully! Redirecting to products page...
            </div>
          </div>
        ) : (
          <form className="checkout-form" onSubmit={handleSubmit} data-testid="checkout-form">
            <h3>Shipping Information</h3>
            <div className="form-group">
              <label htmlFor="fullName" data-testid="fullname-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                data-testid="fullname-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" data-testid="email-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                data-testid="email-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address" data-testid="address-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                data-testid="address-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city" data-testid="city-label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                data-testid="city-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode" data-testid="zipcode-label">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                data-testid="zipcode-input"
                required
              />
            </div>

            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="cardNumber" data-testid="cardnumber-label">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                data-testid="cardnumber-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate" data-testid="expirydate-label">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                data-testid="expirydate-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv" data-testid="cvv-label">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                data-testid="cvv-input"
                required
              />
            </div>

            <div className="cart-summary" data-testid="checkout-summary">
              <div className="cart-total">
                <span>Total Amount:</span>
                <span data-testid="checkout-total-amount">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="back-button"
              onClick={handleBackToCart}
              data-testid="back-to-cart-button"
            >
              ← Back to Cart
            </button>

            <button
              type="submit"
              className="place-order-button"
              data-testid="place-order-button"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage
