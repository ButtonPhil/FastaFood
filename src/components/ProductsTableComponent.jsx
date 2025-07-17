import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { jwtDecode } from 'jwt-decode';
import { DeleteProduct, getProducts } from "../service/productService";
import { useNavigate } from 'react-router-dom';

const ProductsTableComponent = () => {

    const [produit, setProduits] = useState([]);
    const token = localStorage.getItem('token');
    let userRole = '';
    const navigate = useNavigate();

    if (token) {

        userRole = jwtDecode(token).userRole;
        // console.log(userRole);

    }

    const fetchList = async () => {

        try {

            const response = await getProducts();
            setProduits(response.data.produits);
            console.log(response.data.produits);


        } catch (error) {

            console.error("Error fetching data: ", error);

        }


    };

    // supprimer un produits directement avec un bouton 

    const handleDelete = async (idProduct) => {

        try {

            await DeleteProduct(idProduct)
            location.reload()

        } catch (error) {

            console.error("erreur lors de la suppression", error);
            // console.log(error);

        }

    }

    const handleModifier = async (idProduct) => {

        try {

            navigate('/profilProduitPage')

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
                        <th>Nom du Produit</th>
                        <th>Categorie</th>
                        <th>Uniter</th>
                        <th>Quantiter</th>
                        <th>Minimum Stock</th>
                        <th>Prix à l'uniter</th>

                    </tr>

                </thead>

                <tbody>


                    {produit.map((prod) => (

                        <tr key={prod.idProduct}>
                            <td>{prod.idProduct}</td>
                            <td>{prod.productName}</td>
                            <td>{prod.category}</td>
                            <td>{prod.unit}</td>
                            <td>{prod.quantityStock}</td>
                            <td>{prod.minimumThreshold}</td>


                            {(userRole === "manager" || userRole === "admin") ? (
                                <td>

                                    <Button variant="danger" onClick={() => handleDelete(prod.idProduct)}>

                                        Supprimer

                                    </Button>

                                    <Button variant="danger" onClick={() => handleModifier(prod.idProduct)}>

                                        Modifier

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

export default ProductsTableComponent;
