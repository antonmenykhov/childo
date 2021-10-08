<template>
<div class="home">
    <div class="top-line">
        <div class="container">
            <div class="logo" @click="$router.push({path: '/'})">

            </div>
            <div @click="drawer=true" class="burger-button"></div>
            <div class="main-menu">
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#courses'" class="menu-item">
                    Курсы
                </a>
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#about'" class="menu-item">
                    О нас
                </a>
                <a @click="$router.push({path: '/lessonFree'})" class="menu-item">
                    Каталог уроков
                </a>
                <a href="#" @click="$router.push({path: '/'})" v-scroll-to="'#plus'" class="menu-item">
                    Контакты
                </a>
            </div>
        </div>
    </div>
    <el-drawer size="100%" :visible.sync="drawer">
        <div class="logo" @click="goRoute('/')">

        </div>
        <div class="side-menu">
            <a href="#" @click="goRoute('/')" v-scroll-to="'#courses'" class="menu-item">
                Курсы
            </a>
            <a href="#" @click="goRoute('/')" v-scroll-to="'#about'" class="menu-item">
                О нас
            </a>
            <a @click="goRoute('/lessonFree')" class="menu-item">
                Каталог уроков
            </a>
            <a href="#" @click="goRoute('/')" v-scroll-to="'#plus'" class="menu-item">
                Контакты
            </a>
        </div>
    </el-drawer>
    <Header />
    <Courses />
    <Cert />
    <Pluses />
    <About />
    <Teachers />
    <Raskras />
    <Footer />
</div>
</template>

<script>
import Cert from '../components/MainPage/Cert.vue'
import Courses from '../components/MainPage/Courses.vue'
import Header from '../components/MainPage/Header.vue'
import Pluses from '../components/MainPage/Pluses.vue'
import About from '../components/MainPage/About.vue'
import Teachers from '../components/MainPage/Teachers.vue'
import Raskras from '../components/MainPage/Raskras.vue'
import Footer from '../components/Footer.vue'
export default {
    mounted() {
        window.scrollTo(0, 0);
    },
    data() {
        return {
            sogle: false,
            dialog: false,
            drawer: false,

        }
    },
    methods: {
        goRoute(i) {

            this.$router.push({ path: i })
            this.drawer = false
        }
    },

    components: {
        Header,
        Courses,
        Cert,
        Pluses,
        About,
        Teachers,
        Raskras,
        Footer
    },
    name: 'Home',

}
</script>

<style lang="scss">
footer {
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
}

.link {
    margin: 20px;
    cursor: pointer
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
