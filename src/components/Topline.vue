<template>
<div class="top-line">
    <div class="container">

        <router-link class="logo" to='/' target="_blank"></router-link>

        <div @click="drawer=true" class="burger-button"></div>
        <div class="main-menu">
            <router-link target="_blank" :to="{path: '/#courses'}" class="menu-item">Курсы</router-link>
            <router-link target="_blank" :to="{path: '/#about'}" class="menu-item">О нас</router-link>
            <router-link target="_blank" :to="{path: '/catalog'}" class="menu-item">Каталог уроков</router-link>
            <router-link target="_blank" :to="{path: '/#footer'}" class="menu-item">Контакты</router-link>
            <a target="_blank" @click="openReg" class="menu-item">Личный кабинет</a>

        </div>
    </div>
    <el-drawer size="100%" :visible.sync="drawer">
        <router-link class="logo" to='/' target="_blank"></router-link>

        
        <div class="side-menu">
            <router-link target="_blank" :to="{path: '/#courses'}" class="menu-item">Курсы</router-link>
            <router-link target="_blank" :to="{path: '/#about'}" class="menu-item">О нас</router-link>
            <router-link target="_blank" :to="{path: '/catalog'}" class="menu-item">Каталог уроков</router-link>
            <router-link target="_blank" :to="{path: '/#footer'}" class="menu-item">Контакты</router-link>
            <router-link target="_blank" :to="{path: '/lk'}" class="menu-item">Личный кабинет</router-link>
        </div>
    </el-drawer>
</div>
</template>

<script>
import {eventBus} from '../main'
export default {
    data() {
        return {
            drawer: false,
        }
    },
    methods: {
        openReg(){
            eventBus.$emit('openRegLk')
        }
    },
}
</script>

<style lang="scss">
.top-line{
    z-index: 2;
}
@media (max-width: 1200px) {
    .top-line .container {
        max-width: 1058px;
    }
}

@media (max-width: 900px) {
    .top-line .logo {
        height: 38px;
        width: 99px;
    }

    .top-line {
        padding-top: 32vw;

        .container {
            justify-content: space-between;

            .main-menu {
                display: none;
            }

            .burger-button {
                display: flex;
            }
        }
    }

}
</style>
