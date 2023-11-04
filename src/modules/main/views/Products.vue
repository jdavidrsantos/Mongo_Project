<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
<div class="container-fluid">
    <ZoominProducts v-if="this.ZoominProducts === true" :productClicked="this.productClicked"></ZoominProducts>
    <span v-if="minimized.rightSide===true" @click="showRB" class="arrow pointer"><i class="fa-solid fa-arrow-left"></i></span>
    <div v-if="products == 1 || products == ''" class="row">
                <table v-for=" (products, index) in articles" :key="index"  class="table table-style tableProducts">
                    <thead>
                        <tr class="text-center aligning align-middle">
                        <th scope="col">{{products.title}}</th>
                        </tr>
                    </thead>
                        <tbody class="text-center">
                            <tr>
                            <td class="discount-content">
                                <img class="productsImage" :src="`${products.image}`" alt="products" />
                                <span class="discount">{{ '-1'+ String(products.rating.rate)[0]}}</span>
                              <span class="icons">
                                    <i class="fa fa-search icon pointer" @click="ZoominProduct(index)" aria-hidden="true">
                                    </i>
                                    <i class="fa fa-shopping-cart icon pointer" @click="productCar(products)" aria-hidden="true"></i>
                              </span>
                            </td>
                            </tr>
                            <tr>
                             <td>{{products.description.length > 50 ? products.description.substring(0, 100) + '...': products.description}}</td>
                            <!-- <td v-if="products.description">{{isValidDescription(products.description)}}</td> -->
                            </tr>
                            <tr>
                            <td class="boldPrice"> {{ '$ '+ products.price}}</td>
                            </tr>
                        </tbody>  
               </table>
    </div>
    <div v-else class="row">
        <table v-for=" (product, index) in products" :key="index"  class="table table-style tableProducts">
                    <thead>
                        <tr class="text-center aligning align-middle">
                        <th scope="col">{{product.title}}</th>
                        </tr>
                    </thead>
                        <tbody class="text-center">
                            <tr>
                            <td class="discount-content">
                                <img class="productsImage" :src="`${product.image}`" alt="products" />
                                <span class="discount">{{ '-1'+ String(product.rating.rate)[0]}}</span>
                              <span class="icons">
                                    <i class="fa fa-search icon pointer" @click="ZoominProduct(index)" aria-hidden="true">
                                    </i>
                                    <i class="fa fa-shopping-cart icon pointer" aria-hidden="true"></i>
                              </span>
                            </td>
                            </tr>
                            <tr>
                             <td>{{product.description.length > 50 ? product.description.substring(0, 100) + '...': product.description}}</td>
                            </tr>
                            <tr>
                            <td class="boldPrice"> {{ '$ '+ product.price}}</td>
                            </tr>
                        </tbody>  
        </table>
    </div>
</div>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
            ZoominProducts: false,
            productClicked: ''
          }),

    props:{
    products:{
        required: false,
        default: null,
            },
    minimized:{
        require:true,
        default: false
              }
         },
        
mounted(){
     this.loadproducts()
    // addingproductsAPI()
    //  this.searchAllProducts()
   },

   components:{
    ZoominProducts: defineAsyncComponent(() => import("@/modules/main/views/ZoominProducts.vue")),
},

computed:{
     ...mapGetters('products',['articles', 'getProductById']),
},


watch:{
  minimized: {
       handler() {
          this.maximizeTable()
        },
       deep: true,
       immediate: true,
}
      },

methods: {
    productCar(item){
        this.$store.commit('products/setCarProduct', {id: item.id, price: item.price, quantity: 1, title: item.title, image: item.image})
    },

   maximizeTable(){
    if(this.minimized.rightSide ===true && this.minimized.leftSide ===true){
        $('.tableProducts').css({
        'width': '20%',
        'margin-right': '1rem',
        'margin-left': '2rem'
    });
       
    }else{
        $('.tableProducts').css({
        'width': '33%',
        'margin-right': '0rem',
        'margin-left': '0rem'
    });
    }
               },

    showRB(){
        this.$emit('showRB')
    },


     ZoominProduct(index){
     this.productClicked= index+1
        if(this.ZoominProducts === true){
            this.ZoominProducts = false
            $("#exampleModal").modal('hide');
        } if(this.ZoominProducts === false){
            this.ZoominProducts = true
            $("#exampleModal").modal('show');   
                             }
        },
     
    isValidDescription(description){
        return description.length > 50 ? description.substring(0, 100) + '...': description
        },

    // get(){ return this.$store.getters['products/articles'], console.log('lo llamo, getter')},

    // addingproductAPI(){
    //     this.$store.dispatch ('products/addingproductAPI')
    // },

    searchAllProducts(){
        this.$store.dispatch ('products/searchAllProduct')
    },

    loadproducts(){
            this.$store.dispatch ('products/loadproducts')
                            },
    }, //method end
} //export default end
</script>


<style lang="scss" scoped>
.fa-arrow-left:hover{
    color: red;
}
.fa-arrow-left{
    position: absolute;
    top: 50%;
    z-index: 1;
}
.arrow{
float: right;
  font-size: 2rem;
 margin-right: 20px;
}

thead, tbody, tfoot, tr, td, th{
    border-style: none;
}

.discount-content:hover .icons {
background-color: whitesmoke;
bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    margin: 35%;

};

.icons{
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
position: absolute;
margin: 35%;
display: none;
}

.icon{
    margin: 10px;
    zoom: 150%;
}

.icons:hover{
    background-color: orange;
}

.icon:hover{
    color: red;
}

.table{
  width: 33%;
}

.productsImage{
    width:  200px;
    height: 300px;
    overflow: hidden;
}

.productsImage img{
 height: auto;
 width:  200px;
}
.aligning{
    height: 6rem;
    justify-content: center;
}
.boldPrice{
    font-weight: bold;
}

.discount-content{
    position: relative;
}

.discount{
    position: absolute;
    top: 0px;
    background-color: black;
    border-radius: 3px;
    color: #fff;
    font-weight: 700;  
}

</style>
