<template>
  <div class="text-center">
      <img class="img-responsive center-block" :src="productDetails" alt="products"/>
  </div>
</template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  import { mapGetters } from 'vuex';

export default {
        data(){
            return{
                productDetails: ''
            }
        },
 

    props:{
        //Obtengo desde el router el id mediante props
        ids:{
            type:String,
            required: true
        }
    },//End props

    created(){
        //  console.log('soy this.id del prop',this.ids)
        // console.log('buenas?',this.$route.params.id)
        },//End created

  mounted(){
    this.loadproducts()
    console.log('call mounted')
    this.filterId()

  },
        components:{

        },



        computed:{
            ...mapGetters('products',['articles']),

        },//End computed


        methods:{
        filterId(){
        setTimeout(() => {
               const filterId = this.articles.find(entry => entry.id == this.ids)
               if(!filterId) return this.$router.push({name:'product'})
               this.productDetails = filterId.image
                                        },500)
            },

         loadproducts(){
         this.$store.dispatch ('products/loadproducts')
                        },
        },


        
        watch: {
             ids(){
              this.filterId()
             },  

        } //End watch

  } //End Export Default
  </script>
  


  <style lang="scss" scoped>
  img{
      width: 200px;
      bottom: 150px;
      right: 20px;
      box-shadow: 0pc 5px 10px rgb(black, $alpha:0.2);
  }

  </style>