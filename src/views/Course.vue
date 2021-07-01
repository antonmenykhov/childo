<template>
<div>

    <Header v-bind:courseData="courseData" v-bind:id="id" />
    <Features v-bind:courseData="courseData" />
    <Program v-bind:courseData="courseData" v-bind:id="id" />
    <Tools v-bind:courseData="courseData" />
    <Prices v-bind:courseData="courseData" />
    <Speaker v-bind:courseData="courseData" />
</div>
</template>

<script>
import axios from 'axios'
import constants from '../constants'
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
            courseData: null

        }
    },

    mounted() {
        window.scrollTo(0, 0);
    },
    beforeMount() {

        axios.get(constants.getData).then(response => {
            this.$store.commit('setMainData', response.data)
            if (response.data.courses[this.id - 1]) {
                this.courseData = response.data.courses[this.id - 1]
            } else {
                this.$router.push({ path: '/' })
            }
        })
    },
}
</script>

<style>

</style>
