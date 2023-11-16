import axios from "axios";
import Swal from 'sweetalert2';

const addingproductsAPI = async () => {
    console.log('addingproductsAPI');
    const BASE_URL = 'https://fakestoreapi.com/products';

    const itemsAPI = async () => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data; // Return the data
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    try {
        const data = await itemsAPI();
        console.log('data', data);

        if (data.length !== 0) {
            console.log('tiene datos');
            try {
                const response = await axios.post('http://localhost:3110/api/add_products_mongo/', data, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                if (response.data.added === false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully added',
                        text: 'Products were added',
                    });
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('no tiene datos');
        }
    } catch (error) {
        console.error(error);
    }
};

export default addingproductsAPI;
