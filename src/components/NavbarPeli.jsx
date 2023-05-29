import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>


      <Navbar variant="dark" className='py-3 bgPeli'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="src/images/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           <strong className='fs-4 ps-2'>Registro de Películas</strong> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;