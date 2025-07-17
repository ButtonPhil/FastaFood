import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { employProfile, updateProfile, updatePassword } from '../service/userService';
import { useEffect, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ProfilPage = () => {

    //recupreation des donner de l'employer  
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const fetchProfile = async () => {

        try {

            const profile = await employProfile();
            setLastName(profile.data.lastName)
            setFirstName(profile.data.firstName)
            setRole(profile.data.role)
            setEmail(profile.data.email)

            // console.log(profile.data);

        } catch (error) {

        }
    }

    // modifier les information de l'employer(email, password)
    const [modalEmail, setModalEmail] = useState(false)
    const [modalPassword, setModalPassword] = useState(false);
    const [formPassword, setFormPassword] = useState({ oldPassword: "", newPassword: "", })

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            await updateProfile({email});
            location.reload();
            setModalEmail(false);

        } catch (error) {

            console.error("Error updating email", error);

        }

    }

    const handleUpdatePassword = async (e) => {

        e.preventDefault();

        try {

            if (formPassword.oldPassword !== formPassword.newPassword) {

                await updatePassword(formPassword);
                localStorage.removeItem('token');
                navigate('/HomePage')

            } else {

                alert("Le mot de passe identique à l'ancien mot de passe", error);

            }

        } catch (error) {

            console.error("Error updating password", error);

        }

    }

    useEffect(() => {

        fetchProfile();

    }, []);

    return (

        <>
            <div>

                <h1>Profile</h1>

                <Card style={{ width: '18rem' }}>

                    <Card.Img variant="top" src="./public/Chien_heureux.jpg" />

                    <Card.Body>

                        <Card.Title>{lastName}</Card.Title>

                    </Card.Body>

                    <ListGroup className="list-group-flush">

                        <ListGroup.Item>{firstName}</ListGroup.Item>
                        <ListGroup.Item>{role}</ListGroup.Item>
                        <ListGroup.Item>{email}</ListGroup.Item>

                    </ListGroup>

                    <Card.Body>

                        <Button variant="primary" onClick={() => setModalEmail(true)}>Modifier le mail</Button>
                        <Button variant="secondary" onClick={() => setModalPassword(true)}>Modifier le pasword</Button>

                    </Card.Body>

                </Card>

            </div>

            <Container>

                <Modal show={modalEmail} onHide={() => setModalEmail(false)}>

                    <Form onSubmit={handleUpdate}>

                        <Modal.Header closeButton>

                            <Modal.Title>Modifier mes informations</Modal.Title>

                        </Modal.Header>

                        <Modal.Body>

                            <Form.Group className="mt-3">

                                <Form.Label>Email</Form.Label>

                                <Form.Control

                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                    required

                                />

                            </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => setModalEmail(false)}>Annuler</Button>
                            <Button type="submit" variant="primary">Enregistrer</Button>

                        </Modal.Footer>

                    </Form>

                </Modal>

                <Modal show={modalPassword} onHide={() => setModalPassword(false)}>

                    <Form onSubmit={handleUpdatePassword}>

                        <Modal.Header closeButton>

                            <Modal.Title>Modifier mot de passe</Modal.Title>

                        </Modal.Header>

                        <Modal.Body>

                            <Form.Group>

                                <Form.Label>ancien mot de passe</Form.Label>

                                <Form.Control

                                    type="password"
                                    value={formPassword.oldPassword}
                                    onChange={(e) => setFormPassword({ ...formPassword, oldPassword: e.target.value })}
                                    required

                                />

                            </Form.Group>

                            <Form.Group className="mt-3">

                                <Form.Label>nouveau mot de passe</Form.Label>

                                <Form.Control

                                    type="password"
                                    value={formPassword.newPassword}
                                    onChange={(e) => setFormPassword({ ...formPassword, newPassword: e.target.value })}
                                    required

                                />

                            </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => setModalPassword(false)}>Annuler</Button>
                            <Button type="submit" variant="primary">Enregistrer</Button>

                        </Modal.Footer>

                    </Form>

                </Modal>


            </Container>

        </>

    )

}





export default ProfilPage;








