import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarra from './components/navBar/nav.tsx';
import Footer from './components/footer/footer.tsx';
import Index from './components/index/index.tsx';
import QuieneSomos from './components/quienes_somos/quienesSomos.tsx';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    'path': "/",
    'element':<Index/>
  },
  {
    'path' : '/quienes_somos',
    'element': <QuieneSomos />
  }
])

function App() {
  return (
    <>
      <NavBarra></NavBarra>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  )
}

export default App
