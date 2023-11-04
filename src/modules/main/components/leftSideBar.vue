<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="wrapper ">
        <!-- Sidebar  -->
        <nav id="sidebar">
            
            <ul class="components list-unstyled">

                <li class="selected">
                    <a @click="minimize(1)" class="pointer">
                        <i class="fas fa-home"></i>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="#homeSubmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle" aria-controls="homeSubmenu" role="button">
                        <i class="fa-solid fa-users"></i>
                        Profile
                    </a>

                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a @click="minimize(2)" class="pointer">Edit Profile</a>
                        </li>
                    </ul>
                </li>


                <li>
                    <a @click="minimize(3)" class="pointer">
                        <i class="fas fa-copy"></i>
                        Order
                    </a> 
                </li>

            </ul>
                <div class="toggle">
                    <button type="button" id="sidebarCollapse" @click="maximize()" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span></span>
                    </button> 
                </div>
        </nav>
    </div>
    
</template>


<script>




export default {
components:{

},

watch:{

    

},

methods:{
    minimize(){
        $('ul li').click(function(){
        $('ul').children().removeClass('selected');
        $(this).addClass('selected');
        });

         $('#sidebar').toggleClass('active')
         $('.toggle').toggleClass('visible')
         this.$emit('minimizeEmit')
    },

    maximize(){
        $('#sidebar').toggleClass('active')
        $('.toggle').toggleClass('visible')
        this.$emit('maximize')
    }


}

}


</script>




<style lang="scss" scoped>


/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}
.visible{
    display: contents !important;
}
.toggle{
    text-align: center;
    display: none;
}



.list-unstyled li a:hover {
    color:rgb(255, 0, 0) !important;
}

.ul ul a:hover{
    color: blue;
}


.btn{
    color: red;
    background-color: transparent;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

i,
span {
    display: inline-block;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    align-items: stretch;
    height: 100%;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #2b2b2b;
    color: #fff;
    transition: all 0.3s;

}

#sidebar.active {
    min-width: 90px;
    max-width: 80px;
    text-align: center;
}

#sidebar.active .sidebar-header h3,
#sidebar.active .CTAs {
    display: none;
}

#sidebar.active .sidebar-header strong {
    display: block;
}

#sidebar ul li a {
    text-align: left;
}

#sidebar.active ul li a {
    padding: 20px 10px;
    text-align: center;
    font-size: 0.85em;
}

#sidebar.active ul li a i {
    margin-right: 0;
    display: block;
    font-size: 1em;
    margin-bottom: 5px;
}

#sidebar.active ul ul a {
    padding: 10px !important;
}

#sidebar.active .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar .sidebar-header strong {
    display: none;
    font-size: 1.8em;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1em;
    display: block;
}

#sidebar ul li a:hover {
    color:white;
    background: #353535
}

#sidebar ul li a i {
    margin-right: 10px;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    //  background: #6d7fcc;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #2b2b2b;
}

ul ul a:hover {
color: red;
background: red
}

.selected{
    color: red;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        min-width: 80px;
        max-width: 80px;
        text-align: center;
        margin-left: -80px !important;
       
    }
    .dropdown-toggle::after {
        top: auto;
        bottom: 10px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }
    #sidebar.active {
        margin-left: 0 !important;
    }
    #sidebar .sidebar-header h3,
    #sidebar .CTAs {
        display: none;
    }
    #sidebar .sidebar-header strong {
        display: block;
    }
    #sidebar ul li a {
        padding: 20px 10px;
    }
    #sidebar ul li a span {
        font-size: 0.85em;
    }
    #sidebar ul li a i {
        margin-right: 0;
        display: block;
    }
    #sidebar ul ul a {
        padding: 10px !important;
    }
    #sidebar ul li a i {
        font-size: 1.3em;
    }
    #sidebar {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}

</style>