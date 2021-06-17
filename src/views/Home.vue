<template>
<div class="home">
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
