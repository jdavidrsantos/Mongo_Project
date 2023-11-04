import getTodoItems from "@/modules/main/helper/callingproducts.js"
import searchAllProduc from "@/modules/main/helper/db/searchAllProducts.js"


export const searchAllProduct = async ({ commit }) => {
    const products = await searchAllProduc()
    commit('searchAllProduct', products)
}

export const loadproducts = async ({ commit }) => {
    const products = await getTodoItems()
    commit('Uploadproduct', products)
}



export const incrementRandomInt = async ({ commit }) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt)
    commit('setLoading', false)
}




//Sirven para hacer peticiones, hacer mutations