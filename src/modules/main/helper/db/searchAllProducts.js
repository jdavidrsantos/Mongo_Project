let datos = []

let searchAllProducts = async () => {

    await fetch('http://localhost:3000/api/searchAllProducts',
        {
            method: 'POST',
            body: JSON.stringify(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
        .then(async (result) => result.json())
        .then(response => {
            datos = response.searchAllProducts
        })
    return datos
};


export default searchAllProducts




