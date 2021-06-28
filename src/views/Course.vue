<template>
<div>
   
    <Header v-bind:courseData="courseData" />
    <Features v-bind:courseData="courseData" />
    <Program v-bind:courseData="courseData" />
    <Tools v-bind:courseData="courseData" />
    <Prices v-bind:courseData="courseData" />
    <Speaker v-bind:courseData="courseData" />
</div>
</template>

<script>
import Features from '../components/Course/Features.vue'
import Header from '../components/Course/Header.vue'
import Prices from '../components/Course/Prices.vue'
import Program from '../components/Course/Program.vue'
import Speaker from '../components/Course/Speaker.vue'
import Tools from '../components/Course/Tools.vue'
import api from '../constants'
export default {
    components: { Header, Features, Program, Tools, Prices, Speaker },
    data() {
        return {
            id: this.$route.params.id,
            url: api.url,
            
        }
    },
    computed:{
        courseData: function (){
            let data = this.$store.state.mainData.courses[this.id]
            return data
        }
    }
}
</script>

<style>

</style>
