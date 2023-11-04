<!-- eslint-disable vue/multi-word-component-names -->
<template>

<div class="container-fluid g-0">

<!--    <button id="addingProductAPI" @click="addingProductAPI">Import SQL</button>-->
<!--    <button id="deletingProductAPI" @click="deletingProductAPI">Delete all SQL</button>-->


    <div class="row">
             <Navbar></Navbar>
    </div>
    <div class="row">
            <div id="product" class="col-2 mini1">
                    <leftSideBar @minimizeEmit="sirve" @maximize="sirve2"/>
            </div>

            <div class="col mini">
                     <router-view @showRB="showRB" :products="productsFilter" :minimized="minimized"> </router-view>
            </div>

            <div class="col-2 borde" id="RSB">
                     <rightSideBar @minimizeRBEmit="minimizeRBEmit" @searchObject="filtering($event)"></rightSideBar>
            </div>
    </div>
    <!-- <h2>Direct getter:{{$store.getters['products/articles']}}</h2> -->
</div>   
</template>


<script>
import { defineAsyncComponent } from 'vue';
import { mapState, mapActions, dispatch } from 'vuex';
import importSQL from "@/modules/main/helper/db/addingproductsAPI.js"
import deletingproductsAPI from "@/modules/main/helper/db/deletingproductsAPI.js"

export default {
    data() {
        return {
                productsFilter:'1',
                minimized:{
                   rightSide: false,
                   leftSide: false
                }

               }
          },


    components :{
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    rightSideBar: defineAsyncComponent(() => import("../components/rightSideBar.vue")),
    leftSideBar: defineAsyncComponent(() => import("../components/leftSideBar.vue")),
},

 created (){
    this.cargar
  },

methods: {

    addingProductAPI(){
       importSQL()
    },

    deletingProductAPI(){
        deletingproductsAPI()
    },

    showRB(){
        $('#RSB').removeClass('RSB')
        $('#RSB').addClass('RSBshow')
        this.minimized.rightSide=false
    },

    filtering(object){
    this.productsFilter=object
    },
    // upload(){
    //     this.$store.commit('products/Uploadproducts')
    //            },
    //  upload(){
    //      this.$store.commit('products/Uploadproduct')
    //             },

        //  ...mapActions('products',{loadproducts: 'loadproducts' }),

    minimizeRBEmit(){
        $('#RSB').addClass('RSB')
        this.minimized.rightSide=true
        },

    sirve(){
         const div = document.querySelector('#product');
         let res = (div.classList.contains('col-1')); 
        if(res===true){
            this.minimized.leftSide=false;
            $('.mini1').addClass('col-2')
            $('.mini1').removeClass('col-1')
        }else{
            this.minimized.leftSide=true;
         setTimeout (() => {
         $('.mini1').removeClass('col-2')
         $('.mini1').addClass('col-1')
             },90)
        }
         },

    sirve2(){
            this.minimized.leftSide=false;
             $('.mini1').removeClass('col-1')
             $('.mini1').addClass('col-2')
            } 
  },


}
</script>



<style lang="scss" scoped>
.RSBshow{
    visibility: visible;
    display: block;
}
.RSB{
    visibility: hidden;
    display: none;
}

.borde{
    border: 1px solid #efefef;
}
</style>
