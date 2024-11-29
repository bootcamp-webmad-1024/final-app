import { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { loggedUser, logoutUser } = useContext(AuthContext)

    return (
        <Navbar bg={'dark'} data-bs-theme={'dark'} className='mb-5' expand="lg">

            <Container>

                <Navbar.Brand href="#home">CoastersApp_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/galeria'} className='nav-link'>Galería</Link>

                        {
                            loggedUser ?
                                <>
                                    <span className='nav-link' onClick={logoutUser}>Cerrar sesión</span>
                                    <Link to={'/crear'} className='nav-link'>Crear nueva</Link>
                                    <Link to={'/perfil'} className='nav-link'>Perfil</Link>
                                </> :
                                <>
                                    <Link to={'/registro'} className='nav-link'>Registro</Link>
                                    <Link to={'/inicio-sesion'} className='nav-link'>Inicio de sesión</Link>
                                </>
                        }
                    </Nav>

                    <div className="justify-content-end">
                        <Navbar.Text>
                            ¡Bienvend@, {
                                loggedUser ? loggedUser.username : 'invitado'
                            }!
                        </Navbar.Text>
                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Navigation