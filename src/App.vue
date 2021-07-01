<template>
<div id="app">

    <div class="top-line">
        <div class="container">
            <div class="logo" @click="$router.push({path: '/'})">

            </div>
            <div  @click="drawer=true" class="burger-button"></div>
            <div class="main-menu">
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#courses'" class="menu-item">
                    Курсы
                </a>
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#about'" class="menu-item">
                    О нас
                </a>
                <a @click="$router.push({path: '/lessonFree'})" class="menu-item">
                    Попробуй бесплатно
                </a>
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#plus'" class="menu-item">
                    Приемущества
                </a>
            </div>
        </div>
    </div>
    <el-drawer size="100%" :visible.sync="drawer">
        <div class="logo" @click="$router.push({path: '/'})">

            </div>
        <div class="side-menu">
            <a href="#" @click="goRoute('/')" v-scroll-to="'#courses'" class="menu-item">
                Курсы
            </a>
            <a href="#" @click="goRoute('/')" v-scroll-to="'#about'" class="menu-item">
                О нас
            </a>
            <a @click="goRoute('/lessonFree')" class="menu-item">
                Попробуй бесплатно
            </a>
            <a href="#" @click="goRoute('/')" v-scroll-to="'#plus'" class="menu-item">
                Приемущества
            </a>
        </div>
    </el-drawer>
    <router-view :key="$route.path"> </router-view>
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

        axios.get(constants.getData).then(response => {
            this.$store.commit('setMainData', response.data)

        })
    },
    mounted() {
        let isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
        if (isMobile) {
            document.body.classList.add('mobile')
        }
        document.getElementsByClassName('el-notification')[0].style.opacity = 0

        window.scrollTo(0, 0);

    },
    name: 'app',
    data() {
        return {
            select: '/',
            drawer: false,
            menu: [{
                    name: 'Курсы',
                    route: '#courses',

                },
                {
                    name: 'О нас',
                    route: '#about'
                },
                {
                    name: 'Попробуй бесплатно',
                    route: '#free'
                },
                {
                    name: 'Преимущества',
                    route: '#plus'
                },
            ]
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
        height: 47px;
        width: 100px;
    }
    .side-menu{
        padding: 20px 50px;
        display: flex;
        align-items: stretch;
        flex-direction: column;
        .menu-item{
            padding: 10px 0;
            font-size: 22px;
            color: #515151;
            font-weight: 600;
            text-decoration: none;
            
        }
    }
}

section {
    width: 100%;
    overflow-x: hidden;
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
    padding: 7vh;

    .logo {
        background: url('/img/logo.png') no-repeat center center / contain;
        height: 46px;
        width: 100px;
        margin-right: 40px;
    }

    .container {

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
    border-bottom: 5px solid #515151;
    position: relative;
}

.burger-button::before {
    width: 25px;
    border-bottom: 5px solid #515151;
    position: absolute;
    content: '';
    top: -10px
}

.burger-button::after {
    width: 25px;
    border-bottom: 5px solid #515151;
    position: absolute;
    content: '';
    top: -20px
}

@media (max-width: 1500px) {
    .container {
        max-width: 1000px;
    }

    .top-line .container .main-menu .menu-item {
        font-size: 24px;
        margin: 0
    }

    .top-line .container .main-menu {
        flex: 1;
        justify-content: space-between;
    }
}

@media (max-width: 1250px) {
    header .header-container {
        padding-bottom: 64px;
    }

    .container {
        max-width: 700px;
    }

    .top-line {
        .container {
            max-width: 586px;

            .main-menu {
                .menu-item {
                    font-size: 16px;
                    line-height: 20px;
                }
            }

            .logo {
                height: 34px;
                width: 74px;
            }
        }
    }

    .top-line .container {
        max-width: 586px;
    }
}

.top-line .container .main-menu {
    flex: 1;
    justify-content: space-between;
}

@media (max-width: 800px) {
    .top-line {
        padding: 40px;

        .container {
            justify-content: space-between;

            .burger-button {
                display: flex;
            }

            .logo {
                margin-left: 70px;
                opacity: 0;
            }

            .main-menu {
                display: none;
            }

            ;
        }
    }

}
</style>
