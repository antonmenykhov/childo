<template>
<div>
<div class="top-line">
        <div class="container">
            <div class="logo" @click="$router.push({path: '/'})">

            </div>
            <div  @click="drawer=true" class="burger-button"></div>
            <div class="main-menu">
                <a href="/#courses"   class="menu-item">
                    Курсы
                </a>
                <a href="/#about"   class="menu-item">
                    О нас
                </a>
                <a @click="$router.push({path: '/lessonFree'})" class="menu-item">
                    Попробуй бесплатно
                </a>
                <a href="/#plus"   class="menu-item">
                    Приемущества
                </a>
            </div>
        </div>
    </div>
    <el-drawer size="100%" :visible.sync="drawer">
        <div class="logo" @click="goRoute('/')">

            </div>
        <div class="side-menu">
            <a href="/#courses" class="menu-item">
                Курсы
            </a>
            <a href="/#about" class="menu-item">
                О нас
            </a>
            <a @click="goRoute('/lessonFree')" class="menu-item">
                Попробуй бесплатно
            </a>
            <a href="/#plus"  class="menu-item">
                Приемущества
            </a>
        </div>
    </el-drawer>
    <Header v-bind:courseData="courseData" v-bind:id="id" v-bind:show="show" />
    <Features v-bind:courseData="courseData" />
    <Program v-bind:courseData="courseData" v-bind:id="id" />
    <Tools v-bind:courseData="courseData" />
    <Prices v-bind:courseData="courseData" v-bind:show="show"/>
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
            courseData: null,
            drawer: false,
            show: true

        }
    },

    
    beforeMount() {
        window.scrollTo(0, 0);
        axios.get(constants.getData).then(response => {
            this.$store.commit('setMainData', response.data)
            if (response.data.courses[this.id - 1]) {
                this.courseData = response.data.courses[this.id - 1]
            } else {
                this.$router.push({ path: '/' })
            }
        })
        if (this.$cookie.get('jwt')) {
            this.$store.commit('setJwt', this.$cookie.get('jwt'));
            axios.get(api.me, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.jwt}`,
                }
            }).then(response => {
                this.$store.commit('setUserData', response.data);
                response.data.BuyedCourses.forEach(elem =>{
                  console.log(elem.course.id)
                    if (elem.course.id==this.courseData.id){
                        this.show = false
                        this.store.commit('setShow', false)
                    } })
                
                
                
            }).catch(error => {
                console.log(error.response)
               
            })
        }
    
    },
    methods: {
        goRoute(i){

            this.$router.push({path: i})
            this.drawer = false
        }
    },
    

        
}
</script>

<style>

</style>
