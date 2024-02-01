import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarra from './components/navBar/nav.tsx';
import Footer from './components/footer/footer.tsx';
import {Index} from './components/index/index.tsx';


function App() {
  return (
    <>
      <NavBarra></NavBarra>
      <Index></Index>
      <Footer></Footer>
    </>
  )
}

export default App
