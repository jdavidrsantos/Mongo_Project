// export const myGetter = (state) => {
// return state,
// }
//traer informacion de state

export const totalPriceCart = (state) => {
    const totalPriceCart = (state.carShop)
    let totalprice = new Array()
    totalPriceCart.map((num) => {
        totalprice.push(
            {
                id: num.id,
                price: (Math.abs(num.price) * Math.abs(num.quantity))
            }
        )
    })
    let entero = totalprice.reduce((price, obj) => obj.price + price, 0)
    return Math.round(((entero) * 100) / 100).toFixed(2)
}


let a = 0
let b = 20

export const articles = (state) => {
    const result = (state.productsDescription)
    const slicedArray = result.slice(a, b);
    return slicedArray
}


export const getProductById = (state) => (id = '') => {
    const entry = state.productsDescription.find(entry => entry.id === id)
    if (!entry) return
    return { ...entry }
}


export const getProductByTerm = (state) => (term = '') => {
    if (term.length === 0) { return state.productsDescription.slice(a, b) }
    else return state.productsDescription.slice(a, b).filter(entry => entry.title.toLowerCase().includes(term.toLowerCase()))
}


