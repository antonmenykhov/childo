<template>
<div class="home">

    <Topline />
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
import Topline from '../components/Topline.vue'
import Cert from '../components/MainPage/Cert.vue'
import Courses from '../components/MainPage/Courses.vue'
import Header from '../components/MainPage/Header.vue'
import Pluses from '../components/MainPage/Pluses.vue'
import About from '../components/MainPage/About.vue'
import Teachers from '../components/MainPage/Teachers.vue'
import Raskras from '../components/MainPage/Raskras.vue'
import Footer from '../components/Footer.vue'
import {scroller} from 'vue-scrollto/src/scrollTo'
export default {
    mounted() {
        document.title='Онлайн школа рисования CHILDO'
        let path = (window.location.href.split('#'))
        if (path[1]) {
            const scroll = scroller();
            scroll('#'+path[1])
            
        } else {
            window.scrollTo(0,0)
        }
    },
    data() {
        return {
            tag: this.$route.params.tag,
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
        Footer,
        Topline
    },
    name: 'Home',

}
</script>

<style lang="scss">

</style>
