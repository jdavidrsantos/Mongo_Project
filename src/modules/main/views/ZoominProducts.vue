<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 center" id="exampleModalLabel">{{title}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img class="productsImage" :src="`${product}`" alt="products" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" > <i class="fa fa-shopping-cart pointer" aria-hidden="true"></i> Add to car</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>



<script>


import { mapState, mapActions, mapGetters } from 'vuex';
export default {


  data() {
        return {
        product:'',
        title:''
               }
          },

  props:{
    productClicked: {
        type: Number,
        requiered: true,
    },
  },


computed:{
     ...mapGetters('products', ['getProductById']),
},


  mounted(){
    this.load()
    this.loadEntry()
    this.goback()
   },

   methods: {

   load(){
           $("#exampleModal").modal('show');
        },

    loadEntry(){
              const entry = this.getProductById(this.productClicked)
              console.log('soy entry',entry)
              this.product=entry.image
              this.title=entry.title
              // if(!entry) return this.$router.push({name:'no-entry'})
              // this.entrada = entry
            },

  goback(){
  window.onhashchange = function() { 
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    }
          },
   }, //end methods

   watch: {
     productClicked(){
                 this.loadEntry()
             }
         }

}



</script>

<style lang="scss" scoped>


.modal-backdrop.show {
    opacity: 0;
}
.productsImage{
  width: 80%;
  height: 80%;
}

.center{
  text-align: center;
  width: 100%;
}

</style>
