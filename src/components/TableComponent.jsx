import { useEffect, useState } from "react";
import { EmployeList } from "../service/userService";
import { Table } from "react-bootstrap";

const TableComponent = () => {

    const [employ, setEmploy] = useState([]);

    const fetchList = async () => {

        try {

            const response = await EmployeList();
            setEmploy(response.data.employ);
            // console.log(response.data.employ);

        } catch (error) {

            console.error("Error fetching data: ", error);

        }

    };

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

                    </tr>

                </thead>

                <tbody>

                    {employ.map((emp) => (

                        <tr key={emp.idEmploy}>
                            <td>{emp.idEmploy}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>

                        </tr>
                    ))}

                </tbody>

            </Table>

        </>

    );
    
};

export default TableComponent;
