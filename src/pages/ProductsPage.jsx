import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Headphones'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS',
    price: 299.99,
    image: 'https://via.placeholder.com/300x200/50C878/FFFFFF?text=Smart+Watch'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height',
    price: 49.99,
    image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Laptop+Stand'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with blue switches',
    price: 129.99,
    image: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Keyboard'
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    price: 39.99,
    image: 'https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Mouse'
  },
  {
    id: 6,
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
    price: 59.99,
    image: 'https://via.placeholder.com/300x200/1ABC9C/FFFFFF?text=USB-C+Hub'
  },
  {
    id: 7,
    name: 'Webcam 4K',
    description: '4K Ultra HD webcam with autofocus and stereo microphone',
    price: 149.99,
    image: 'https://via.placeholder.com/300x200/E74C3C/FFFFFF?text=Webcam'
  },
  {
    id: 8,
    name: 'Phone Stand',
    description: 'Adjustable phone stand for desk with cable management',
    price: 24.99,
    image: 'https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Phone+Stand'
  }
]

const ProductsPage = () => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div data-testid="products-page">
      <Header />
      <div className="container products-container">
        <div className="products-header">
          <h2 data-testid="products-title">Our Products</h2>
        </div>
        <div className="products-grid" data-testid="products-grid">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
              data-testid={`product-card-${product.id}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                data-testid={`product-image-${product.id}`}
              />
              <div className="product-info">
                <h3 className="product-name" data-testid={`product-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="product-description" data-testid={`product-description-${product.id}`}>
                  {product.description}
                </p>
                <p className="product-price" data-testid={`product-price-${product.id}`}>
                  ${product.price.toFixed(2)}
                </p>
                <button
                  className="add-to-cart-button"
                  onClick={(e) => handleAddToCart(e, product)}
                  data-testid={`add-to-cart-${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
