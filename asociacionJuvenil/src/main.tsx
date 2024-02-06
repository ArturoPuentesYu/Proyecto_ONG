import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/footer/footer.tsx'
import NavBarra from './components/navBar/nav.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBarra />
    <App />
    <Footer />
  </React.StrictMode>,
)
