import axios from "axios";
import Swal from 'sweetalert2'

const addingproductsAPI = async () => {

    const BASE_URL = 'https://fakestoreapi.com/products/';
    let data = []

    const itemsAPI = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            data = response.data;
        } catch (errors) {
            console.error(errors);
        }
    }


    itemsAPI()
    if (data = []) {
        setTimeout(() => {
            fetch('http://localhost:3000/api/datosAPI', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(result => result.json())
                .then(response => {
                    if (response.added == false) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Sucessfully added',
                            text: 'Products were added',
                        })
                    }
                })
        }, 3000)

    } else {
        console.log('tiene datos')
    }

};


export default addingproductsAPI






