import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { employProfile } from '../service/userService';
import { useEffect, useState } from 'react';


const ProfilPage = () => {

    //recupreation des donner de l'employer  
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();


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

                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>

                     </Card.Body>

                </Card>

            </div>

        </>

    )

}

export default ProfilPage;








