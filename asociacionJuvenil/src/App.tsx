import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import './App.css'
import NavBarra from './components/navBar/nav.tsx';
import Footer from './components/footer/footer.tsx';
import Index from './components/index/index.tsx';
import QuieneSomos from './components/quienes_somos/quienesSomos.tsx';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import Index from './components/index/index.tsx';
import Quienes_somos from './components/quienes_somos/quienes_somos.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Index />
  },
  {
    "path": "/quienes_somos",
    "element": <Quienes_somos />
  }
]);
>>>>>>> origin/victor

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
<<<<<<< HEAD
  return (
    <>
      <NavBarra></NavBarra>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  )
=======
  return(<RouterProvider router={router}/>);
>>>>>>> origin/victor
}

export default App
