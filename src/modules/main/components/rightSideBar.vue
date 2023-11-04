<template>
    <div>
           <!--== Left side Start ==-->
               <div class="col">
              <div class="shop-sidebar-area">
                <div class="widget">
                  <h3 class="widget-title">Search</h3>
                  <div class="widget-search-box">
                    <form action="">
                      <div class="form-input-item">
                        <input
                        v-bind:class="{resultTrue:result}"
                        v-model="termi" type="text" class="resultFalse" placeholder="Search by title">
                      </div>
                    </form>
                  </div>
                </div>
                <div class="widget">
                  <h3 class="widget-title">Categories</h3>
                  <div class="widget-categories-menu">
                    <ul>
                      <li class="mb-1"><button v-bind:class="{active:activedCategories.all, noCliked:noClikedCategories.all}" type="button"  @click="activedCategorie('all')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">All<span>({{totalcategories}})</span></a></li>
                      <li class="mb-1"><button v-bind:class="{active:activedCategories.refrigeration, noCliked:noClikedCategories.refrigeration}" type="button"  @click="activedCategorie('refrigeration')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">Refrigeration<span>({{categoriesquantity.refrigeration}})</span></a></li>
                      <li class="mb-1"><button v-bind:class="{active:activedCategories.electricity, noCliked:noClikedCategories.electricity}" type="button"  @click="activedCategorie('electricity')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">Electricity<span>({{categoriesquantity.electricity}})</span></a></li>
                      <li class="mb-1"><button v-bind:class="{active:activedCategories.electronics, noCliked:noClikedCategories.electronics}" type="button"  @click="activedCategorie('electronics')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">Electronics<span>({{categoriesquantity.electronics}})</span></a></li>
                      <li class="mb-1"><button v-bind:class="{active:activedCategories.others, noCliked:noClikedCategories.others}" type="button"  @click="activedCategorie('others')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">Others<span>({{categoriesquantity.others}})</span></a></li>
                    </ul>
                    <span @click="hideRightBar()" class="hideRightBar pointer"><i class=" fa fa-solid fa-arrow-right"></i></span>
                  </div>
       
                </div>

                <div class="widget">
                  <h3 class="widget-title">Tags</h3>
                  <div class="widget-tags-list">
                    <ul>
                      <li class="mb-1"><button v-bind:class="{active:active.all, noCliked:noCliked.all}" type="button"  @click="actived('all')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a class="itemsDesign" href="#">All</a></li>
                      <li class="mb-1"><button v-bind:class="{active:active.york, noCliked:noCliked.york}" type="button" @click="actived('york')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a  class="itemsDesign" href="#/">York</a></li>
                      <li class="mb-1"><button v-bind:class="{active:active.panasonic, noCliked:noCliked.panasonic}" type="button" @click="actived('panasonic')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a  class="itemsDesign" href="#/">Panasonic</a></li>
                      <li class="mb-1"><button v-bind:class="{active:active.carrier, noCliked:noCliked.carrier}" type="button" @click="actived('carrier')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a  class="itemsDesign" href="#/">Carrier</a></li>
                      <li class="mb-1"><button v-bind:class="{active:active.hitachi, noCliked:noCliked.hitachi}" type="button" @click="actived('hitachi')" class="btn btn-info btn-circle"><i class="fa fa-check"></i></button><a  class="itemsDesign" href="#/">Hitachi</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        <!--== Left side End ==--> 
    </div>

</template>


<script>

import {  mapGetters } from 'vuex';


export default {
    data() {
        return {
            termi:'',
            answers:'',
            result: true,

            categoriesquantity:{
                  refrigeration:5,
                  electricity:6,
                  electronics:7,
                  others: 8,
            },
            totalcategories:0,

          active:{
            york:true,
            panasonic:true,
            carrier:true,
            hitachi: true,
            all:true
             },
          noCliked:{
            york:false,
            panasonic:false,
            carrier:false,
            hitachi: false,
            all:false
             },
           activedCategories:{
            refrigeration:true,
            electricity:true,
            electronics:true,
            others: true,
            all:true
             },
           noClikedCategories:{
            refrigeration:false,
            electricity:false,
            electronics:false,
            others: false,
            all:false
             },
            counter:5,
            counterCategorie:5
               }
          },

mounted(){

   },

   created(){
    this.sumCategories()
   },


watch:{
  termi(){
    this.productByTerm()
     this.$emit('searchObject',  this.answers)
  }
},

computed:{
     ...mapGetters('products', ['getProductByTerm']),
},





methods:{

       hideRightBar(){
        this.$emit('minimizeRBEmit')
       },



        sumCategories(){
          const values = Object.values(this.categoriesquantity);
          const sum = values.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0);
          this.totalcategories = sum
        },


        activedCategorie(categorie){
          if(this.counterCategorie === 5 && this.activedCategories[categorie]===true && categorie!== 'all'){
                      this.activedCategories[categorie]=false
                      this.counterCategorie=3
                      this.activedCategories.all = false
                      this.noClikedCategories[categorie]=true
                      setTimeout(() => {
                      this.noClikedCategories[categorie]=false},3000)
                      }
              else if(this.activedCategories[categorie]===true){
                    this.activedCategories[categorie]=false
                    this.counterCategorie--
                    this.activedCategories.all = false
                    this.noClikedCategories[categorie]=true
                    setTimeout(() => {
                    this.noClikedCategories[categorie]=false},3000)
                  }
              else if(this.activedCategories[categorie]===false){
                    this.activedCategories[categorie]=true
                    this.counterCategorie++
              }
              
              if(this.counterCategorie === 4 || this.counterCategorie === 0 ){
                    this.activedCategories.all = true
                    this.counterCategorie=5
                                          }   
              if(this.activedCategories.all === true){
                    this.activedCategories.refrigeration=true,
                    this.activedCategories.electricity=true,
                    this.activedCategories.electronics=true,
                    this.activedCategories.others=true
                    this.counterCategorie=5
                                        }
        },

        actived(tag2){
        if(this.counter === 5 && this.active[tag2]===true && tag2!== 'all'){
                this.active[tag2]=false
                this.counter=3
                this.active.all = false
                this.noCliked[tag2]=true
                setTimeout(() => {
                this.noCliked[tag2]=false},3000)
                }
        else if(this.active[tag2]===true){
              this.active[tag2]=false
              this.counter--
              this.active.all = false
              this.noCliked[tag2]=true
              setTimeout(() => {
              this.noCliked[tag2]=false},3000)
            }
        else if(this.active[tag2]===false){
              this.active[tag2]=true
              this.counter++
        }
        
        if(this.counter === 4 || this.counter === 0 ){
              this.active.all = true
              this.counter=5
                                    }   
        if(this.active.all === true){
              this.active.york=true,
              this.active.panasonic=true,
              this.active.carrier=true,
              this.active.hitachi=true
              this.counter=5
                                  }
        },


      productByTerm(){
      const answer = this.getProductByTerm(this.termi)
      this.answers = answer
      if(answer.length === 0){
      this.result = false
      }else{this.result= true}
      return answer
        },


    }
} //export default end


</script>

<style lang="scss" scoped>

.shop-sidebar-area:hover .hideRightBar{
  display: flex;
}
.fa-arrow-right:hover{
  display: flex;
  color: red;
}
.hideRightBar{
  position: absolute;
  font-size: 2rem;
  margin-left: -2.5rem;
  display: none
}
.hideRightBar .fa{
margin: -7px;}
.noCliked{
  --bs-btn-hover-color:none;
 --bs-btn-hover-bg:none;
}

.active {
 --bs-btn-color: #fff;
 --bs-btn-bg: #2263d3;
 --bs-btn-hover-color:none;
 --bs-btn-hover-bg:none;
}

.btn-info {
    --bs-btn-color: none; 
    --bs-btn-bg:none;
    }
.itemsDesign{
  margin-left: 1rem;
  text-decoration: none;
  color: black;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}

.widget-categories-menu ul, .widget-tags-list ul{
  list-style-type: none;
  margin-left: -40px;

}
.form-input-item input{
  border-radius: 15px;
  height: 2.2rem;
}

.resultFalse{
    box-shadow: none;
    border-color: none;
    outline: rgb(246, 0, 0) auto 5px ;
}

.resultTrue{
    box-shadow: none;
    border-color: none;
    outline: rgb(45, 46, 45) auto 5px ;
}

.widget{
  margin: 2rem;
}



</style> 