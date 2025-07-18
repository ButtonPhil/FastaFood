import { useEffect, useState } from "react";
import { getProfilProd, updateProducts } from "../service/productService";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const profilProduitPage = () => {


    // Récupération des données du produit
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [unit, setUnit] = useState('');
    const [quantityStock, setQuantityStock] = useState('');
    const [minimumThreshold, setMinimumThreshold] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    // États pour stocker les valeurs initiales
    const [initialCategory, setInitialCategory] = useState('');
    const [initialUnit, setInitialUnit] = useState('');
    const [initialQuantityStock, setInitialQuantityStock] = useState('');
    const [initialMinimumThreshold, setInitialMinimumThreshold] = useState('');
    const [initialUnitPrice, setInitialUnitPrice] = useState('');
    const { idProduct } = useParams();
    const navigate = useNavigate();

    const fetchProfilProduit = async () => {

        try {

            const produit = await getProfilProd(idProduct);

            // console.log(produit.data.produits[0]);
            setProductName(produit.data.produits[0].productName)
            setInitialCategory(produit.data.produits[0].category)
            setInitialUnit(produit.data.produits[0].unit)
            setInitialQuantityStock(produit.data.produits[0].quantityStock)
            setInitialMinimumThreshold(produit.data.produits[0].minimumThreshold)
            setInitialUnitPrice(produit.data.produits[0].unitPrice)

            setProductName(produit.data.produits[0].productName)
            setCategory(produit.data.produits[0].category)
            setUnit(produit.data.produits[0].unit)
            setQuantityStock(produit.data.produits[0].quantityStock)
            setMinimumThreshold(produit.data.produits[0].minimumThreshold)
            setUnitPrice(produit.data.produits[0].unitPrice)

            // console.log(profile.data);

        } catch (error) {

        }
    }

    useEffect(() => {

        fetchProfilProduit();

    }, [idProduct]);


    const handleSubmit = async (idProduct) => {


        // Comparer les valeurs actuelles avec les valeurs initiales
        const updatedCategory = category !== initialCategory ? category : initialCategory;
        const updatedUnit = unit !== initialUnit ? unit : initialUnit;
        const updatedQuantityStock = quantityStock !== initialQuantityStock ? quantityStock : initialQuantityStock;
        const updatedMinimumThreshold = minimumThreshold !== initialMinimumThreshold ? minimumThreshold : initialMinimumThreshold;
        const updatedUnitPrice = unitPrice !== initialUnitPrice ? unitPrice : initialUnitPrice;
        
        // console.log({
        //     category: updatedCategory,
        //     unit: updatedUnit,
        //     quantityStock: updatedQuantityStock,
        //     minimumThreshold: updatedMinimumThreshold,
        //     unitPrice: updatedUnitPrice
        // })

        try {

            await updateProducts({ updatedCategory, updatedUnit,  updatedQuantityStock, updatedMinimumThreshold, updatedUnitPrice})
            console.log({ updatedCategory, updatedUnit,  updatedQuantityStock, updatedMinimumThreshold, updatedUnitPrice});
            
            navigate('/ListProductsPage');

        } catch (error) {

            console.error();

        }

    }


    return (

        <>

            <div>

                <h1>Produit</h1>

                <Card style={{ width: '18rem' }}>

                    <Card.Img variant="top" src="./public/Chien_heureux.jpg" />

                    <Card.Body>

                        <Card.Title>{productName}</Card.Title>

                    </Card.Body>

                    <InputGroup hasValidation>

                        <InputGroup.Text>Category</InputGroup.Text>
                        <Form.Control type="text" placeholder={initialCategory} value={category} onChange={(e) => setCategory(e.target.value)} />
                    </InputGroup>
                    <InputGroup hasValidation>
                        <InputGroup.Text>Uniter</InputGroup.Text>
                        <Form.Control type="text" placeholder={initialUnit} value={unit} onChange={(e) => setUnit(e.target.value)} />
                    </InputGroup>
                    <InputGroup hasValidation>
                        <InputGroup.Text>Quantiter</InputGroup.Text>
                        <Form.Control type="text" placeholder={initialQuantityStock} value={quantityStock} onChange={(e) => setQuantityStock(e.target.value)} />
                    </InputGroup>
                    <InputGroup hasValidation>
                        <InputGroup.Text>Minimum Stock</InputGroup.Text>
                        <Form.Control type="text" placeholder={initialMinimumThreshold} value={minimumThreshold} onChange={(e) => setMinimumThreshold(e.target.value)} />
                    </InputGroup>
                    <InputGroup hasValidation>
                        <InputGroup.Text>Prix</InputGroup.Text>
                        <Form.Control type="text" placeholder={initialUnitPrice} value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                    </InputGroup>

                    <Card.Body>

                        <Button variant="primary" type="submit" onClick={() => handleSubmit(idProduct)}>

                            valider les modifications

                        </Button>

                    </Card.Body>

                </Card>

            </div>

        </>

    )


}





export default profilProduitPage;