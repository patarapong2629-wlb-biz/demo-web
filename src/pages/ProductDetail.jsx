import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Features include Bluetooth 5.0, premium audio quality, comfortable ear cushions, and a foldable design for easy storage.',
    price: 199.99,
    image: 'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Headphones'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS. Track your workouts, monitor your sleep, receive notifications, and enjoy water resistance up to 50 meters.',
    price: 299.99,
    image: 'https://via.placeholder.com/600x400/50C878/FFFFFF?text=Smart+Watch'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture, increases airflow for better cooling, and provides a stable platform for your laptop.',
    price: 49.99,
    image: 'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Laptop+Stand'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with blue switches. Enjoy tactile feedback, customizable lighting effects, anti-ghosting technology, and durable construction.',
    price: 129.99,
    image: 'https://via.placeholder.com/600x400/9B59B6/FFFFFF?text=Keyboard'
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking. Features include adjustable DPI, long battery life, comfortable grip, and smooth scrolling.',
    price: 39.99,
    image: 'https://via.placeholder.com/600x400/F39C12/FFFFFF?text=Mouse'
  },
  {
    id: 6,
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your connectivity options with fast data transfer speeds and 4K video output.',
    price: 59.99,
    image: 'https://via.placeholder.com/600x400/1ABC9C/FFFFFF?text=USB-C+Hub'
  },
  {
    id: 7,
    name: 'Webcam 4K',
    description: '4K Ultra HD webcam with autofocus and stereo microphone. Perfect for video conferencing, streaming, and content creation with crystal-clear video quality.',
    price: 149.99,
    image: 'https://via.placeholder.com/600x400/E74C3C/FFFFFF?text=Webcam'
  },
  {
    id: 8,
    name: 'Phone Stand',
    description: 'Adjustable phone stand for desk with cable management. Keep your phone at the perfect viewing angle while keeping cables organized and accessible.',
    price: 24.99,
    image: 'https://via.placeholder.com/600x400/3498DB/FFFFFF?text=Phone+Stand'
  }
]

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = PRODUCTS.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div data-testid="product-detail-page">
        <Header />
        <div className="container product-detail-container">
          <p data-testid="product-not-found">Product not found</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleBackClick = () => {
    navigate('/products')
  }

  return (
    <div data-testid="product-detail-page">
      <Header />
      <div className="container product-detail-container">
        <button
          className="back-button"
          onClick={handleBackClick}
          data-testid="back-button"
        >
          ← Back to Products
        </button>
        <div className="product-detail" data-testid="product-detail">
          <div className="product-detail-content">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
              data-testid="product-detail-image"
            />
            <div className="product-detail-info">
              <h2 data-testid="product-detail-name">{product.name}</h2>
              <p className="product-price" data-testid="product-detail-price">
                ${product.price.toFixed(2)}
              </p>
              <p className="product-description" data-testid="product-detail-description">
                {product.description}
              </p>
              <button
                className="add-to-cart-button"
                onClick={handleAddToCart}
                data-testid="product-detail-add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
