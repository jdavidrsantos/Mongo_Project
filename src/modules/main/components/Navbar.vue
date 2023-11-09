<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <nav class="navbar bg-primary">
         <a class="navbar-brand text-white" >
            <img src="@/assets/logo.png" alt="VUE logo"
            class="d-inlike-block aligh-text-top mx-2" 
            height="35">
            <span class="slogan">MONGO CLASS</span>
        </a> 
            <div class="d-flex center">
                <span class="car"><span class="name">Grupo #2</span><i class="fa-solid fa-user pointer"></i></span>
                <span class="car"><i class="fa-solid fa-bell pointer"></i></span>
                <shopCar/>
                <button class="btn btn-outline-danger mx-2">
                <i class="fa fa-sign-out-alt"></i> 
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';


export default {
components :{
     shopCar: defineAsyncComponent(() => import("./ShopCar.vue")),
},

} //Export Default End

</script>
<style lang="scss" scoped>

.name{
    margin-right: 5px;
    color: white;
    font-size: 0.8rem;
}
.slogan{
    font-size: 0.8em;
}

.car{
    color: #49a7ff;
    zoom: 1.3;
    margin: 5px;
}
.center{
    align-items: center;
}
.carAdded{
    font-size: 10px;
    top: 10%;
    position: absolute;
    color: white;
}

</style>
