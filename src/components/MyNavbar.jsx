import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => (
    
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="">Browse</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
    


export default MyNavbar