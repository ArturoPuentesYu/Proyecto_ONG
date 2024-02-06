import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './components/index/index.tsx';
import Quienessomos from './components/quienes_somos/quienes_somos.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    'path': "/",
    'element':<Index/>
  },
  {
    "path": "/quienes_somos",
    "element": <Quienes_somos />
  }, ///
  {
    "path": "/Actividades",
    "element": <Index />
  }, 
  {
    "path": "/Proyectos",
    "element": <Index />
  },
  {
    "path": "/Formacion",
    "element": <Index />
  }, ///
  {
    "path": "/Proyectos/Lgtbiq",
    "element": <Index />
  },
  {
    "path": "/Proyectos/Rincon_del_rabano",
    "element": <Index />
  },
  {
    "path": "/Proyectos/Batucada_batucan",
    "element": <Index />
  }, ///
  {
    "path": "/Actividades/Calendario",
    "element": <Index />
  },
  {
    "path": "/Actividades/Actividades_pasadas",
    "element": <Index />
  },
  {
    "path": "/Actividades/Neuronizate",
    "element": <Index />
  },
  {
    "path": "/Actividades/Diversificate",
    "element": <Index />
  },
  {
    "path": "/Actividades/Grafitis",
    "element": <Index />
  }, ///
  {
    "path": "/Formacion/Curso_premonis",
    "element": <Index />
  },
  {
    "path": "/Formacion/Curso_monitor",
    "element": <Index />
  },
  {
    "path": "/Formacion/Curso_arte_y_cultura",
    "element": <Index />
  },
  {
    "path": "/Formacion/Voluntariado",
    "element": <Index />
  },
  {
    "path": "/Formacion/Sexualidad",
    "element": <Index />

  }
])

function App() {
  return(<RouterProvider router={router}/>);
}

export default App
