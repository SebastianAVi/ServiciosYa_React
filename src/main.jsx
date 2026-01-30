// src/main.jsx (versión con react-router)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ← Importante: agregar esto
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>           {/* ← Envuelve toda la app aquí */}
      <App />
    </BrowserRouter>

)