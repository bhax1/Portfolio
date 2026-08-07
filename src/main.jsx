import React from 'react'
import ReactDOM from 'react-dom/client'

// Tokens and base styles first, component styles second — component rules must
// be able to override the primitives they build on.
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
