import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MyNavbar = () => {

    const location = useLocation()

    return (
        <Container>
            < Navbar bg="dark" variant="dark" expand="lg" />
            <Link to='/'>
                <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/registration'>
                        <div
                            className={`nav-link${location.pathname === '/registration' ? ' active' : ''
                                }`}
                        >
                            Register!
                        </div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>

    )
}



export default MyNavbar