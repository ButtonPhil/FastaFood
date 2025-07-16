import React, { useState } from 'react';
import { login } from "../service/userService";
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';




const HomePage = () => {

    const [userData, setUserData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(userData)
            navigate('/EmployPage')
            localStorage.setItem("token", response.data.token);

            alert("utilisateur connecter")

        } catch (error) {

            console.error(error);

        }
    }

    return <>

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email</Form.Label>

                <Form.Control type="email" placeholder="Entrer email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                <Form.Check type="checkbox" label="Check me out" />

            </Form.Group>

            <Button variant="primary" type="submit">

                connexion

            </Button>

        </Form>

        <Link to="./RegisterPage">

            <Button variant="primary" >

                Inscription

            </Button>

        </Link>

    </>

}


export default HomePage;