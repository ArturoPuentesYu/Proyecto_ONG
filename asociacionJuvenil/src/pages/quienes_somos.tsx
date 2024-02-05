import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarra from './../components/navBar/nav.tsx';
import Footer from './../components/footer/footer.tsx';
import Quienes_somos from '../components/quienes_somos/quienes_somos.tsx';


function App() {
  return (
    <>
      <NavBarra></NavBarra>
      <Quienes_somos></Quienes_somos>
      <Footer></Footer>
    </>
  )
}

export default App