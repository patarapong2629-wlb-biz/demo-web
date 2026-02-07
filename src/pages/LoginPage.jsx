import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Demo credentials
      if (username === 'demo@test.com' && password === 'password123') {
        localStorage.setItem('user', username)
        navigate('/products')
      } else {
        setError('Invalid username or password')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="login-container" data-testid="login-page">
      <div className="login-box" data-testid="login-box">
        <h2 data-testid="login-title">Login to E-Shop</h2>

        {error && (
          <div className="error-message" data-testid="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} data-testid="login-form">
          <div className="form-group">
            <label htmlFor="username" data-testid="username-label">
              Email / Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              data-testid="username-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" data-testid="password-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              data-testid="password-input"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
            data-testid="login-submit-button"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="demo-credentials" data-testid="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Email: demo@test.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
