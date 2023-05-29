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
          <h3 className='text-center mb-3'>Administrar Películas</h3>
          <Formulario></Formulario>
      </Container>
     <Footer></Footer>
    
    </>
  )
}

export default App
