import { Navbar, Container, NavLink, Button, } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function NavBar() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let userRole = '';

    if (token) {

        userRole = jwtDecode(token).userRole;
        // console.log(userRole);

    }

    const logout = () => {

        localStorage.removeItem('token');
        navigate('/')

    }

    const login = () => {

        navigate('/login')

    }

    return (

        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>

                <Navbar.Brand href="/HomePage">Fasta Food</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link href="/RegisterPage">inscription</Nav.Link>

                        {token ? (
                            <>

                                <NavLink href="/profilPage">Profile</NavLink>
                                <NavLink href="/EmployPage">Liste Employer</NavLink>
                                <Button variant='danger' onClick={logout}>Déconnexion</Button>
                                {/* <p>Bienvenue, {userRole} </p> */}

                            </>

                        ) : (

                            <Button variant='primary' onClick={login}>Déconnexion</Button>

                        )}

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )

}

export default NavBar