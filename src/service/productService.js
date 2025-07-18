import API from "./api";


export const getProducts = () => API.get('/products', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});

export const DeleteProduct = (idProduct) => API.delete(`/products/delete/${idProduct}`, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

})

export const getProfilProd = (idProduct) => API.get(`/profilProduct/${idProduct}`, {
   
    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});

export const updateProducts = (idProduct, data) => API.put(`/products/${idProduct}`, data, {
   
    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});