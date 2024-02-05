import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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


function App() {
  return(<RouterProvider router={router}/>);
}

export default App
