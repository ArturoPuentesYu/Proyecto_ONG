import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Index from './pages/index/index';
import Quienes_somos from './pages/quienes_somos/quienes_somos';
import NavBarra from './components/navBar/nav';
import Footer from './components/footer/footer';
import PanelAdmin from './pages/administracion/panelAdministracion';
import PanelAdminsitracion from './pages/administracion/panelAdministracion';
import Calendario from './pages/actividades/calendario';
import Actividades_Pasadas from './pages/actividades/actividades_pasadas';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBarra />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/Administracion" Component={PanelAdminsitracion} />
        <Route path="/Administracion/panel" Component={PanelAdmin} />

        <Route path="/quienes_somos" Component={Quienes_somos} />
        
        <Route path="/Proyectos" Component={Index} />
        <Route path="/Formacion" Component={Index} />
        <Route path="/Actividades" Component={Index} />
        
        <Route path="/Proyectos/Lgtbiq" Component={Index} />
        <Route path="/Proyectos/Rincon_del_rabano" Component={Index} />
        <Route path="/Proyectos/Batucada_batucan" Component={Index} />

        <Route path="/Actividades/Calendario" Component={Calendario} />
        <Route path="/Actividades/Actividades_pasadas" Component={Actividades_Pasadas} />
        <Route path="/Actividades/Neuronizate" Component={Index} />
        <Route path="/Actividades/Diversificate" Component={Index} />
        <Route path="/Actividades/Grafitis" Component={Index} />

        <Route path="/Formacion/Curso_premonis" Component={Index} />
        <Route path="/Formacion/Curso_monitor" Component={Index} />
        <Route path="/Formacion/Curso_arte_y_cultura" Component={Index} />
        <Route path="/Formacion/Voluntariado" Component={Index} />
        <Route path="/Formacion/Sexualidad" Component={Index} />
        <Route path='*' Component={Index} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
