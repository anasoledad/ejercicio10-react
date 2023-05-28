import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';

function App() {


  return (
    <>
      <Container className='pt-5 mainPage'>
          <h3 className='text-center mb-3'>Administrar Películas</h3>
          <Formulario></Formulario>
      </Container>
      <footer className='bg-dark text-light text-center py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    
    </>
  )
}

export default App
