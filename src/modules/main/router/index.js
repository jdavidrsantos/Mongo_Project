export default {
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '@/modules/main/layouts/Users.vue'),
    children: [
        {
            path: '',
            name: 'product',
            component: () => import(/* webpackChunkName: "allProducts" */ '@/modules/main/views/Products.vue'),
        },

        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "productById" */ '@/modules/main/views/ProductView.vue'),
            props: (rout) => {
                return {
                    ids: rout.params.id,
                }
            }
        }

    ],
}