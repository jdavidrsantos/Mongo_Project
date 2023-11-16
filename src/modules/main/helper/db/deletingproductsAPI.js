import axios from "axios";
import Swal from 'sweetalert2'
let data = [
    {
        delete: 'all'
    }
]

const deletingproductsAPI = () => {
    fetch('http://localhost:3110/api/delete_products_mongo/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(result => result.json())
        .then(response => {
            if (response.deleted !== true) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Sucessfully deleted',
                    text: 'Products were deleted',
                })
            }
        })
};

export default deletingproductsAPI






