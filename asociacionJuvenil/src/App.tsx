import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarra from './components/navBar/nav';
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index/index';
import Quienes_somos from './pages/quienes_somos/quienes_somos';
import Administracion from './pages/administracion/administracion';

function App() {
  return (
    <Router>
      <NavBarra />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/quienes_somos" Component={Quienes_somos} />
        <Route path="/Administracion" Component={Administracion} />

        <Route path="/Proyectos" Component={Index} />
        <Route path="/Formacion" Component={Index} />
        <Route path="/Actividades" Component={Index} />
        
        <Route path="/Proyectos/Lgtbiq" Component={Index} />
        <Route path="/Proyectos/Rincon_del_rabano" Component={Index} />
        <Route path="/Proyectos/Batucada_batucan" Component={Index} />

        <Route path="/Actividades/Calendario" Component={Index} />
        <Route path="/Actividades/Actividades_pasadas" Component={Index} />
        <Route path="/Actividades/Neuronizate" Component={Index} />
        <Route path="/Actividades/Diversificate" Component={Index} />
        <Route path="/Actividades/Grafitis" Component={Index} />

        <Route path="/Formacion/Curso_premonis" Component={Index} />
        <Route path="/Formacion/Curso_monitor" Component={Index} />
        <Route path="/Formacion/Curso_arte_y_cultura" Component={Index} />
        <Route path="/Formacion/Voluntariado" Component={Index} />
        <Route path="/Formacion/Sexualidad" Component={Index} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
