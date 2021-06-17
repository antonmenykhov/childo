<template>
  <div>
      <Header />
      <Features />
      <Program />
      <Tools />
      <Prices />
      <Speaker />
  </div>
</template>

<script>
import Features from '../components/Course/Features.vue'
import Header from '../components/Course/Header.vue'
import Prices from '../components/Course/Prices.vue'
import Program from '../components/Course/Program.vue'
import Speaker from '../components/Course/Speaker.vue'
import Tools from '../components/Course/Tools.vue'
export default {
  components: { Header, Features, Program, Tools, Prices, Speaker },

}
</script>

<style>

</style>