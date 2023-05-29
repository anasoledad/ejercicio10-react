import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import NavbarPeli from './components/NavbarPeli'
import Footer from './components/Footer';

function App() {


  return (
    <>
    <NavbarPeli></NavbarPeli>
      <Container className='pt-5 mainPage'>
          <h2 className='text-center mb-3 py-3 border border-2 border-dark rounded-3 bg-white'>Administrar Películas</h2>
          <Formulario></Formulario>
      </Container>
     <Footer></Footer>
    
    </>
  )
}

export default App
