import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './components/index/index';
import Quienes_somos from './components/quienes_somos/quienes_somos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBarra from './components/navBar/nav';
import Footer from './components/footer/footer';

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <><NavBarra /><Index/><Footer /></>
  },
  {
    "path": "/quienes_somos",
    "element": <><NavBarra /><Quienes_somos /><Footer /></>
  }, ///
  {
    "path": "/Actividades",
    "element": <><NavBarra /><Index /><Footer /></>
  }, 
  {
    "path": "/Proyectos",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Formacion",
    "element": <><NavBarra /><Index /><Footer /></>
  }, ///
  {
    "path": "/Proyectos/Lgtbiq",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Proyectos/Rincon_del_rabano",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Proyectos/Batucada_batucan",
    "element": <><NavBarra /><Index /><Footer /></>
  }, ///
  {
    "path": "/Actividades/Calendario",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Actividades/Actividades_pasadas",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Actividades/Neuronizate",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Actividades/Diversificate",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Actividades/Grafitis",
    "element": <><NavBarra /><Index /><Footer /></>
  }, ///
  {
    "path": "/Formacion/Curso_premonis",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Formacion/Curso_monitor",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Formacion/Curso_arte_y_cultura",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Formacion/Voluntariado",
    "element": <><NavBarra /><Index /><Footer /></>
  },
  {
    "path": "/Formacion/Sexualidad",
    "element": <><NavBarra /><Index /><Footer /></>

  }
], )

function App() {
  return(<RouterProvider router={router}/>);
}

export default App
