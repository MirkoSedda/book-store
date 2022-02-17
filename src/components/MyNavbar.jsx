import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {

    const location = useLocation()

    return (

        < Navbar bg="dark" variant="dark" expand="lg" className='d-flex align-items-center'>
            <Container>
                <Link to='/'>
                    <Navbar.Brand href="/">Strive Books</Navbar.Brand>
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
                </Navbar.Collapse >
            </Container>
        </Navbar >
    )
}



export default MyNavbar