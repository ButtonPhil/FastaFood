import ProductsTableComponent from "../components/ProductsTableComponent";
import NavBar from "../components/NavBarComponent";




const ListProductsPage = () => {


    return (

        <>
            <div>

                <NavBar />

                <h1>liste des produits</h1>

                <ProductsTableComponent />

            </div>

        </>
    )


}




export default ListProductsPage;