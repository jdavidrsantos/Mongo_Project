let datos = []

let searchAllProducts = async () => {

    await fetch('http://localhost:3110/api/search_products_mongo/',
        {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
        .then(async (result) => result.json())
        .then(response => {
            datos = response
        })
    return datos
};

export default searchAllProducts




