import { useEffect, useState } from "react";
import { Delete, EmployeList } from "../service/userService";
import { Button, Table } from "react-bootstrap";
import { jwtDecode } from 'jwt-decode';

const TableComponent = () => {

    const [employ, setEmploy] = useState([]);
    const token = localStorage.getItem('token');
    let userRole = '';

    if (token) {

        userRole = jwtDecode(token).userRole;
        // console.log(userRole);

    }

    const fetchList = async () => {

        try {

            const response = await EmployeList();
            setEmploy(response.data.employ);
            // console.log(response.data);


        } catch (error) {

            console.error("Error fetching data: ", error);

        }

    };

    // supprimer un employer directement avec un bouton 

    const handleDelete = async (idEmploy) => {

        try {

            await Delete(idEmploy)
            location.reload()

        } catch (error) {

            console.error("erreur lors de la suppression", error);
            // console.log(error);

        }

    }

    useEffect(() => {

        fetchList();

    }, []);

    return (
        <>
            <Table striped bordered hover>

                <thead>

                    <tr>

                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>Fonction</th>

                    </tr>

                </thead>

                <tbody>

                    {employ.map((emp) => (

                        <tr key={emp.idEmploy}>
                            <td>{emp.idEmploy}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.role}</td>


                            {(userRole === "manager" || userRole === "admin") ? (
                                <td>

                                    <Button variant="danger" onClick={() => handleDelete(emp.idEmploy)}>

                                        Supprimer

                                    </Button>

                                </td>

                            ) : (

                                <td></td>

                            )}


                        </tr>

                    ))}

                </tbody>

            </Table>

        </>

    );

};

export default TableComponent;
