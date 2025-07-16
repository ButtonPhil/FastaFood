import { useState } from "react";
import { register } from "../service/userService";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const RegisterPage = () => {

    const [userData, setUserData] = useState({ lastName: "", firstName: "", role: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await register(userData)
            navigate('/HomePage')

            alert("Creation de compte employer")

        } catch (error) {

            console.error(error);

        }
    }

    return (

        <>

            <h1> register </h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Nom</Form.Label>

                    <Form.Control type="Name" placeholder="Entre name" value={userData.lastNamename} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Prenom</Form.Label>

                    <Form.Control type="Name" placeholder="Entrer prenom" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Role</Form.Label>

                    <Form.Control type="Name" placeholder="Entrer Role" value={userData.role} onChange={(e) => setUserData({ ...userData, role: e.target.value })} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Email</Form.Label>

                    <Form.Control type="email" placeholder="Entrer votre email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Label>Password</Form.Label>

                    <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check type="checkbox" label="Check me out" />

                </Form.Group>

                <Button variant="primary" type="submit">

                    Submit

                </Button>

            </Form>

        </>
    )

}






export default RegisterPage;