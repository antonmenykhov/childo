<template>
<div id="app">
    <div class="top-line">
        <div class="container">
            <div class="logo">

            </div>
            <div class="main-menu">
                <div class="menu-item" v-for="item,i in menu" :key="i">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
    <router-view />
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            menu: [{
                    name: 'Курсы',
                    route: ''
                },
                {
                    name: 'О нас',
                    route: ''
                },
                {
                    name: 'Попробуй бесплатно',
                    route: ''
                },
                {
                    name: 'Преимущества',
                    route: ''
                },
            ]
        }
    },
}
</script>

<style lang="scss">
@font-face {
    font-family: "Intro";
    src: url("/fonts/IntroDemo-BlackCAPS.eot") format("eot"),
        url("/fonts/IntroDemo-BlackCAPS.woff") format("woff"),
        url("/fonts/IntroDemo-BlackCAPS.woff2") format("woff2");
}

* {
    font-family: 'Montserrat', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    box-sizing: border-box;
}
section{
  width: 100%;
  overflow-x: hidden;
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
    }

    .container {
        justify-content: space-between;
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
            }
            .menu-item:last-child{
              margin-right: 0;
            }
            .menu-item:hover{
              color: #F66F18;
            }
        }
    }
}

.container {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
}
</style>
