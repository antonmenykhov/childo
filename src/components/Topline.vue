<template>
  <div class="top-line">
        <div class="container">
            <div class="logo" @click="$router.push({path: '/'})">

            </div>
            <div @click="drawer=true" class="burger-button"></div>
            <div class="main-menu">
                <a href="#courses" @click="$router.push({name: 'Home', params: {tag: '#courses'}})" v-scroll-to="'#courses'" class="menu-item">
                    Курсы
                </a>
                <a href="#about" @click="$router.push({path: '/', params: {tag: '#about'}})" v-scroll-to="'#about'" class="menu-item">
                    О нас
                </a>
                <a @click="$router.push({path: '/catalog'})" class="menu-item">
                    Каталог уроков
                </a>
                <a href="#footer" @click="$router.push({path: '/', params: {tag: '#footer'}})" v-scroll-to="'#footer'" class="menu-item">
                    Контакты
                </a>
            </div>
        </div>
        <el-drawer size="100%" :visible.sync="drawer">
        <div class="logo" @click="goRoute('/')">

        </div>
        <div class="side-menu">
            <a href="#" @click="goRoute('/courses')" v-scroll-to="'#courses'" class="menu-item">
                Курсы
            </a>
            <a href="#" @click="goRoute('/about')" v-scroll-to="'#about'" class="menu-item">
                О нас
            </a>
            <a @click="goRoute('/catalog')" class="menu-item">
                Каталог уроков
            </a>
            <a href="#" @click="goRoute('/footer')" v-scroll-to="'#footer'" class="menu-item">
                Контакты
            </a>
        </div>
    </el-drawer>
    </div>
    
</template>

<script>
export default {
data() {
    return {
        drawer: false,
    }
},
}
</script>

<style lang="scss">
@media (max-width: 1200px){
    .top-line .container{
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
            .burger-button{
                display: flex;
            }
        }
    }

}
</style>