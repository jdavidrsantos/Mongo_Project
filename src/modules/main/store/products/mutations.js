// export const myMutations =(state) => {
export const removeProduct = (state, id) => {
    const removed = state.carShop.filter(function (e) { return e.id !== id; });
    console.log('no deberia salir producto', removed)
    state.carShop = removed
}



export const setCarProduct = (state, item) => {
    // state.totalCarShop.totalAllProducts = item.quantity * item.price
    const product = state.carShop.find(products => products.id === item.id)
    if (product === undefined) {
        state.carShop.push(item)
    } else {
        product.quantity++
    }
}

export const Uploadproduct = (state, val) => {
    state.productsDescription = val
}

export const searchAllProduct = (state, val) => {
    state.productsDescription = val
}




//sonj sincronas y hacen modificaciones del state