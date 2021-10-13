<template>
<div id="app">

    
  <vue-page-transition name="fade-in-down">
    
   
    <router-view :key="$route.path"> </router-view>
  </vue-page-transition>
</div>
</template>

<script>
import axios from 'axios'
import constants from './constants'
export default {
    methods: {
        goRoute(i){

            this.$router.push({path: i})
            this.drawer = false
        }
    },  
    beforeMount() {
        document.getElementsByClassName('el-notification')[0].style.opacity = 0

        window.scrollTo(0, 0);

        axios.get(constants.getData).then(response => {
            this.$store.commit('setMainData', response.data)

        })
    },
   /**  mounted() {
        let isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
        if (isMobile) {
            document.body.classList.add('mobile')
        }
        
    },*/
    name: 'app',
    data() {
        return {
            
            drawer: false,
            
        }
    },
}
</script>

<style lang="scss">

@font-face {
    font-family: "Intro";
    src: url("/fonts/Intro-Black-Caps.eot") format("eot"),
        url("/fonts/Intro-Black-Caps.woff") format("woff"),
        url("/fonts/Intro-Black-Caps.woff2") format("woff2");
}

* {
    font-family: 'Montserrat', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    box-sizing: border-box;
}



.el-dialog__wrapper {
    z-index: 9999;
}
.el-drawer__body{
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo{
        background: url('/img/logo.png') no-repeat center center / contain;
        height: 70px;
        width: 157px;
    }
    .side-menu{
        padding: 20px 50px;
        display: flex;
        align-items: stretch;
        flex-direction: column;
        .menu-item{
            padding: 10px 0;
            font-size: 22px;
            color: #333333;
            font-weight: 600;
            text-decoration: none;
            
        }
    }
}

section {
    width: 100%;
    
}

section::after {
    z-index: -1;
}

section::before {
    z-index: -1;
}

.top-line {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    padding: 100px;
    

    .logo {
        background: url('/img/logo.png') no-repeat center center / contain;
        height: 70px;
        width: 157px;
        margin-right: 40px;
    }

    .container {
        max-width: 1058px;
        align-items: center;

        .main-menu {
            display: flex;

            .menu-item {
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                line-height: 30px;
                margin: 0 40px;
                transition: all .2s;
                color: black;
                cursor: pointer;
                text-decoration: none;
            }

            .menu-item:last-child {
                margin-right: 0;
            }

            .menu-item:hover {
                color: #F66F18;
            }
        }
    }
}

@keyframes hey {
    100% {
        opacity: 1;
    }
}

.container {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
}

.burger-button {
    display: none;
    width: 25px;
    border-bottom: 5px solid #333333;
    position: relative;
}

.burger-button::before {
    width: 25px;
    border-bottom: 5px solid #333333;
    position: absolute;
    content: '';
    top: -10px
}

.burger-button::after {
    width: 25px;
    border-bottom: 5px solid #333333;
    position: absolute;
    content: '';
    top: -20px
}



.top-line .container .main-menu {
    flex: 1;
    justify-content: space-between;
}


</style>
