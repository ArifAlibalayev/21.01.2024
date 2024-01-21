import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BaskerProvider from './context/BaskerProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import WishlistProvider from './context/WishlsitProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>
      <BaskerProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BaskerProvider>
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
