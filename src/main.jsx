import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './App.jsx' // Arquivo que estava dando erro
import './index.css' // Arquivo que estava dando erro

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolve a aplicação com o Router */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)