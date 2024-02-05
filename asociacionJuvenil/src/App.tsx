import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarra from './components/navBar/nav.tsx';
import Footer from './components/footer/footer.tsx';
//import {Index} from './components/index/index.tsx';
import Index from './components/index/index.tsx';
import Quienes_somos from './components/quienes_somos/quienes_somos.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/quienes_somos",
    "element": <><NavBarra /><Quienes_somos /><Footer /></>
  }
]);


function App() {
  return(<RouterProvider router={router}/>);
}

export default App
