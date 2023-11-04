<!-- eslint-disable vue/multi-word-component-names -->
<template >
    <div>
       <span @click="showtable()" class="car"><i class="fa fa-shopping-cart pointer" aria-hidden="true"></i><span class="carAdded">{{carShop.length}}</span></span>
<div class="modal fade" id="carshop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 center" id="exampleModalLabel">CART</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
    <div v-if="carShop.length !== 0">
        <table class="table table-hover" v-for="(products, index) in carShop" :key="index" >
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <img class="productsImage" :src="`${products.image}`" alt="">
      <td @mouseenter="ishover" @mouseleave="ishoverno" class="pointer"> <span @click="deleteProduct(products.id)" class="text-center hoverProduct ms-1"><i class='fa fa-remove removeIcon'></i> Remove</span></td>
      <td class="titlewidth">{{products.title}}</td>
      <td><input type="number" onchange="this.value = Math.abs(this.value)" required oninput="validity.valid||(value='')" min="1" max="9" step="1" v-model.number="products.quantity" ></td>
      <td class="priceProduct">$ {{Math.abs((products.price*products.quantity)).toFixed(2)}}</td>
    </tr>
  </tbody> 
        </table>

          <table>
        <tbody>
          <tr>
            <td class="fillSpace">
            </td>
                              <td class="pe-4 hidding inputHidden1"> 
                                <label class="pb-2">
                                  <span style="margin-right:1rem">Departamento:</span>
                                      <select style="width:12.6rem" v-model="selectionRepeated" class="form-select CitiesDepartments inputClass redBorder inputHidden" aria-label=".form-select-lg">
                                        <option selected>Selecciona</option>
                                        <option  v-for="(repeated, index) in repetedDepartment" :key="index"  :value="repeated.deparment">{{ repeated.deparment }}</option>
                                      </select>
                                  <input type="text" id="deparmentList" class="inputClass depart" disabled  >   
                                </label>                                  
                              </td>

                              <td scope="row" class="thinverse">
                                <form class="deleteAtt" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" role="button" action="">
                                  <label for="colombiaCities2"> <span style="margin-right: 1rem; width: 8.5rem;">Shipping to: </span>
                                    <div style="width: 100%" autocomplete="off">
                                    <VueSingleSelect @click="fillDeparmentInput()" @change="fillDeparmentInput()" v-on:keyup.enter="fillDeparmentInput()" 
                                              :options= this.cityColombia 
                                              :value=this.cityColombia 
                                              placeholder="Select your city"
                                              :maxResults= this.general.length
                                              maxHeight="160px"
                                              inputId="listCities"
                                              :getOptionValue='(a) => {return city = a}'            
                                      >
                                    </VueSingleSelect>
                                    </div>
                                  </label> 
                                </form>
                              </td >
                              <td class="ps-5"><span>$ pending</span>
                              </td>
          </tr>
        </tbody>
          </table>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <!-- start -->
    <div id="delivery">
         <h1 class="  pb-2">Delivery Order Form</h1> 
        <div class="totalPrice">
        <table class="table">
              <tbody class="noBorderTable">
                <tr>
                  <td>
                                            <label>
                                              <span>Barrio:</span>   
                                              <input type="text" class="inputClass" style=" width: 100%">
                                            </label>
                  </td>
                  <td colspan="1" class="general">  
                        <label>
                          <div style="width: 50%;margin-left: 1rem; margin-left:1rem">
                          <VueSingleSelect
                                      :options=this.tipeCalle
                                      :required="true"
                                      :value=this.tipeCalle
                                      placeholder="Tipo de calle"
                                      :maxResults= this.tipeCalle.length
                                      maxHeight="323px"
                                      inputId="none"
                              >
                              </VueSingleSelect>
                            </div>
                        <label> <span style="margin-right: -0.5rem; margin-left: 2rem;">Calle:</span>   
                          <input type="text" class="inputClass">
                        </label>
                      </label>  
                  </td>
                </tr>

                    <tr>                    
                    <td>    
                    <label>
                      <span>Numero:</span>   
                          <input style="width: 50%" type="text" class="inputClass">
                        <span style="margin-left: 1rem;">-</span>   
                          <input style="width: 50%" type="text" class="inputClass">
                    </label>
                    </td>

                    <td style="display: flex; justify-content: center;">
                      <div class="form-check form-check-inline" style="padding-right: 2rem">
                        <input class="form-check-input" style="margin-top: -1px;"  type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                          <i class="fa-sharp fa-solid fa-briefcase"> <span style="padding-left: 0.5rem;">Trabajo</span></i>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" style="margin-top: -1px;" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                          <i class="fa-solid fa-house"><span style="padding-left: 0.5rem;">Casa</span></i>
                        </label>
                      </div>
                    </td>

                    </tr>

                    <tr>
                      <td>
                        <span style="float:left">Nombre y apellido</span>   
                          <input style="width: 100%;margin-left: 0" type="text" class="inputClass">
                      </td>

                      <td>
                        <span style="float:left">Telefono de contacto</span>   
                          <input style="width: 100%;margin-left: 0;" type="text" class="inputClass">
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2">
                        <span style="float:left">Referencias adicionales para las entregas en esta dirección</span>   
                          <input style="width: 100%; margin-left: 0;height: 70px; margin-bottom: 30px" type="text" class="inputClass" placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc." maxlength="128" autocomplete="do-not-autofill">
                      </td>
                    </tr>

                 
               </tbody>
        </table>
        </div>
    </div>
    <!-- end -->
  </div>
</div>
<!-- end -->


        <table class="table totalPrice">
          <tr class="totalPriceCart">
                      <td></td>
                      <td scope="row"><span>Total</span></td>
                      <td class="totalPriceCartText"><span>$  {{Math.abs(totalPriceCart)}}</span></td>
           </tr>
        </table>

    </div>
        <div v-else>
         <h1>Empty cart</h1>
         <i class="fas fa-shopping-cart emptyCar"></i>
        </div>
      </div>
      <div v-if="carShop.length !== 0" class="modal-footer">
        <button @click="zeroValidator" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Purchase</button>
      </div>
      <div v-else class="text-center">
        <button type="button" class="btn btn-secondary m-3" data-bs-dismiss="modal">See products</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>


import { defineAsyncComponent } from 'vue'
import json from '../helper/co.json'
import {mapState, mapActions, mapGetters } from 'vuex';
import VueSingleSelect from "vue-single-select";
import Swal from 'sweetalert2'

export default {


    data: () => ({
      colombia: json,
      indexselector:0,
      city:null,
      cityColombia:[],
      repetedDepartment:[],
      general:[],
      selectionRepeated:'Selecciona',
      tipeCalle:['Avenida', 'Avenida Calle', 'Avenida Carrera', 'Calle', 'Carrera', 'Circular', 'Circunvalar', 'Diagonal', 'Manzana', 'Transversal', 'Via'],
          }),
            props: {
      value: {
        required: false
      },

    },

    components:{
       VueSingleSelect,
    },


    computed:{
        ...mapState('products',['carShop']),
        ...mapGetters('products',['totalPriceCart']),
    },

mounted(){

   },

created(){
  this.cities()
},


watch:{
  selectionRepeated(){
   if(this.selectionRepeated === 'Selecciona'){
   $(".form-select").addClass('redBorder')
}else{
  $(".form-select").removeClass('redBorder')
}
}

},


methods: {

  test(){
    console.log('llamo')
    $(".cool").click(function(){    
    $(this).addClass('abc',1000);
      });
        },

        fillDeparmentInput(){ 
          // console.log('hola')
        var city = document.getElementById('listCities').value

        if(city===''){
          $('#delivery').removeClass('delivery');
        } else{
          $('#delivery').addClass('delivery');
        }
        const match = this.general.filter(entry => entry.city === city)
        const match2 = this.general.find(entry => entry.city === city)

        //existe y Hay mas de 1 departamento repetido
        if(match.length >1 ){
        this.selectionRepeated = 'Selecciona'
        this.repetedDepartment = match
        $('.hidding').removeClass('inputHidden1');
        $('.inputHidden').removeClass('inputHidden');  //muestro el select
        $('.depart').addClass('inputHidden'); //elimino el input que esta
         $(".CitiesDepartments").addClass('form-select')
        const collapseElementList = document.querySelector('.collapse')
        new bootstrap.Collapse(collapseElementList)
        }


        //No hay repetido y existe en la lista
        else if (match2 != undefined){
        $('.hidding').removeClass('inputHidden1');       
        const collapseElementList = document.querySelector('.collapse')
        new bootstrap.Collapse(collapseElementList)
        var deparment = match2.deparment
        document.querySelector("#deparmentList").value=deparment
         $("#deparmentList").attr('disabled','disabled');
         $('.depart').removeClass('inputHidden');
         $(".CitiesDepartments").addClass('inputHidden')
         $(".CitiesDepartments").removeClass('form-select')
          }

          //no existe
        else{ 
                document.querySelector("#deparmentList").value=''
                if ($(".collapse").hasClass("show")) {
                 const collapseElementList = document.querySelector('.collapse')
                 new bootstrap.Collapse(collapseElementList)
                }
                $('.hidding').addClass('inputHidden1');
            }
          },//End fill department

          cities(){
          var generall=[]
          var citiess=[]
          this.colombia.map(function(cities, i){
          generall.push(
            {  id: i++,
              city: cities.city,
              deparment: cities.admin_name
            }
          )
        })
        var order  = generall.sort(function(a,b){return a.city.localeCompare(b.city)})
        order.map((places) => {
        citiess.push(places.city)
        })
        this.general = order
        this.cityColombia = citiess.filter((item, index) => citiess.indexOf(item) === index); 
        },

        duplicates(array){ 
          var duplicates =
          [...array.reduce((map, item) => // group items by id
          map.set(item.city, [...(map.get(item.city) || []), item])
          , new Map)
          .values()] // get grouped arrays
          .filter(list => list.length > 1) // keep duplicates
          .flat(); // return one array
          return duplicates
        },

        zeroValidator(){
        if(this.totalPriceCart < 2){
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please verify prices',
        })
        } else{
          console.log('es mayor que 1')
        }

          },


        deleteProduct(id){
          this.$store.commit('products/removeProduct', id)
          },

        showtable(){
                  $("#carshop").modal('show');
          },

        ishover(){ 
            $('.table').addClass('is-hover');
        },
        ishoverno(){ 
            $('.table').removeClass('is-hover');
        },

        ShippingtoDatalist(index){
              this.indexselector=index
              for (let option of browsers) {
              option.onclick = function () {
                //llamar para mas opciones
                console.log('maximize')
                  input.value = browsers[index].outerText
                  $('.inputCity').removeClass('inputCity2');
                  input.style.borderRadius = "5px";
                }
              };
        },  

         } //End methods
}//export default End

</script>


<style lang="scss" scoped>
.abc {
    height:200px !important;
    background-color:blue !important;
}
.delivery{
  background-image: linear-gradient(#ffffff, rgb(164 164 164))
}
.inputHidden1{
 visibility: hidden;
}
.inputHidden{
  visibility: hidden;
  display: none !important;
}

#deparmentList{
    margin-left: 1rem;
    width: 100%;
    padding: 0.375em 0.75em;
    font-size: 1em;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25em;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
}

.labelClass{
    margin-left: 0.8rem;
}

.fillSpace{
width: 7.4rem
}
label{
display: flex;
align-items: baseline;
}
.dropdown {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    background-color: #fff;
    color: #606f7b;
    border-radius: 0.25em;
    line-height: 1.25;
    text-align: center;
}

.redBorder{
  border: 1px solid #ff0000!important;
}
.form-select{
width: 100%;
display: initial;
}

.noBorderTable td, th {
  border-style: none;
}

.modal-footer {
  border-top:none
}


.thinverse{
  font-weight: normal;
  width: 29rem;
}

.totalPriceCartText{
  max-width: 2rem;
  min-width: 2rem;
  padding-right: 1rem;
}

.totalPriceCart{
font-weight: bold;
font-size: 2rem;
}

.removeIcon{
color: red;
zoom: 1.5;
display: flex;
position: absolute;
}

.is-hover {
  --bs-table-hover-color: #ff0000 !important;
}

.emptyCar{
  zoom: 5;
  margin: 0.5rem;
}

.totalPrice{
    text-align: end;
}

input[type=number] {
        /*for absolutely positioning spinners*/
        position: relative; 
        padding: 5px;
        padding-right: 25px;
      }

      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        opacity: 1;
      }

      input[type=number]::-webkit-outer-spin-button, 
      input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: inner-spin-button !important;
        width: 25px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
      }

.titlewidth{
    width: 40rem;
}
.priceProduct{
    font-size: 1.3rem;
    width: 8rem;
    font-weight: 500;
}
.table{
    vertical-align: initial;
}
.productsImage{
    width:  70px;
    height: 90px;
    overflow: hidden;
    --bs-table-hover-bg: none
}
.direct{
    color: white;
}
.car{
    color: #49a7ff;
    zoom: 1.3;
    margin: 5px;
}
.carAdded{
    font-size: 10px;
    top: 10%;
    position: absolute;
    color: white;
}

.my-option:hover{
  background-color:'red';
}

.inputClass{
    margin-left: 1rem;
    // width: 100%;
    padding: 0.375em 0.75em;
    font-size: 1em;
    line-height: 1.5;
    color: #574b49;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, 
    box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    min-height: 48px;
    border-radius: 0.375em;
    -webkit-box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
    box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
}

</style>