<template>

<div class="home">
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
                Попробуй бесплатно
            </a>
            <a href="#" @click="goRoute('/')" v-scroll-to="'#plus'" class="menu-item">
                Приемущества
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
export default {
  mounted() {
      window.scrollTo(0,0);
    },
    data() {
      return {
        drawer: false
      }
    },
    methods: {
      goRoute(i){

            this.$router.push({path: i})
            this.drawer = false
        }
    },
   
  components:{
    Header,
    Courses,
    Cert,
    Pluses,
    About,
    Teachers,
    Raskras
  },
    name: 'Home',

}
</script>

<style lang="scss">

</style>
