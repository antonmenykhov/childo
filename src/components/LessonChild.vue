<template>
<section class="lesson" :class="lessonData.styleChild">
    <div class="back-button" @click="$router.push({path: '/lessons/'+(cid+1)})">
        <div class="back-arrow"></div>
    </div>
    <div class="jiraf"></div>
    <div class="container">
        
        <h2>Урок {{id+1}} - {{lessonData.Name}}</h2>
        <p class="description" v-html="lessonData.Description">
        </p>
        <div class="flex">
            <div class="thumb" :style="'background: url(\''+url+lessonData.img.formats.medium.url+'\') no-repeat center center / cover'">
                <div class="play"></div>
            </div>
            <div class="req">
                <h6>Для урока потребуется:</h6>
                <ul>
                    <li v-for="item in lessonData.tools.split('\n')" :key="item">{{item}}</li>
                </ul>
                <h6 class="dz-header">Домашнее задание</h6>
                <ul class="dz">
                    <li class="dz-li">
                        {{lessonData.dz}}
                    </li>
                </ul>

                <el-button v-if="!check()"  :loading="loading" class="dz-button">{{textDz}}<label for="dz">{{textDz}}</label></el-button>
                <input type="file" :id="'dz'" v-on:change="FileUpload()">
                <el-button  @click="goNext" v-if="next || check()" class="dz-button">Следующий урок</el-button>
                <el-button @click="goLK" v-if="end" class="dz-button">В личный кабинет</el-button>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import api from '../constants'
import axios from 'axios'
export default {
  
    methods: {
        check() {
            if (this.$store.state.userData.BuyedCourses[this.cid].lessonsData) {
                if (this.$store.state.userData.BuyedCourses[this.cid].lessonsData[this.id]) {
                    return true
                }
            } else {
                return false
            }
        },
        goLK(){
            this.$router.push({path: '/lk'})
        },
        goNext() {
            this.$router.push({ path: '/lessonChild/' + (this.cid + 1) + '/' + (this.id + 2) })
        },
        FileUpload() {
            this.file = document.getElementById('dz').files[0];
            this.submitImage()
        },
        setDz(dz){
            
            let formData = new FormData;
            formData.append('dz', dz)
            formData.append('courseId', this.cid)
            formData.append('lessonId', this.id)
            axios.post(api.setDz, formData, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.jwt}`,
                }
            }).then(response => console.log(response.data))
        },
        

        submitImage() {
            this.loading = true
            this.textDz = ''
            let formData = new FormData();
            formData.append('files', this.file);
            axios.post(api.upload,
                formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${this.$store.state.jwt}` }, }
            ).then(response => {
                this.loading = false
                setTimeout(this.setDz, 500, response.data[0].formats.small.url)
                this.textDz = "ДЗ загружено"
                if (this.id+1 <= this.$store.state.userData.BuyedCourses[this.cid].data.lessons.length-1) {
                    this.next = true
                } else{
                    this.end=true
                }
            })

        },
    },
    data() {
        return {
            cid: this.$route.params.cid - 1,
            id: this.$route.params.id - 1,
            url: api.url,
            loading: false,
            textDz: 'Загрузить дз',
            next: false,
            end: false

        }
    },
    computed: {
        lessonData: function () {
            let data = this.$store.state.userData.BuyedCourses[this.cid].data.lessons[this.id]
            return data
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        if ( this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);
                    
                }).catch(error => {
                    console.log(error.response)
                    
                })
            } 
    },

}
</script>

<style lang="scss" scoped>
#dz {
    display: none;
}

.el-button {
    position: relative;
}
.flex{
    display: flex;
    flex-direction: column;
    width: 100%;
}
label {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-button {
    position: fixed;
    left: 15px;
    top: 15px;
    height: 50px;
    width: 50px;
    background: rgb(212, 212, 212);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.4;
    transition: all .2s;

    .back-arrow {
        background: url('/img/back.svg') no-repeat center center / contain;
        height: 30px;
        width: 30px;
        margin-left: -5px;
    }
}

.back-button:hover {
    opacity: 1;
}

section {
    overflow: hidden;
    padding: 0!important;
}



.lesson {
    background: white;
    position: relative;
    z-index: 900;

    .container {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    

    h2 {
        margin-top: 100px;
        margin-bottom: 50px;
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 55px;
        line-height: 55px;
        font-weight: 700;
        color: #333333;
    }

    .description {
        font-size: 18px;
        line-height: 22px;
        
        max-width: 677px;
        color: #333333;
    }

    .thumb {
        
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        height: 510px;
        width: 800px;
        margin-top: 50px;
        margin-bottom: 50px;
        cursor: pointer;
        position: relative;
        z-index: 1;
    }

    h6 {
        font-style: normal;
        font-weight: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */
        margin-bottom: 20px;
        color: #333333;
    }

    li {
        font-size: 18px;
        line-height: 22px;
        
        color: #333333;
        list-style: none;
        position: relative;
    }

    li::before {
        content: '';
        background: black;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        position: absolute;
        left: -25px;
        top: 3px
    }

    ul {
        padding-left: 25px;
    }
    li:nth-child(4)::before,
    li:nth-child(8)::before,
    li:nth-child(12)::before,
    li:nth-child(16)::before,
    li:nth-child(20)::before,
    li:nth-child(24)::before {
        background: #F7751C;
    }

    li:nth-child(3)::before,
    li:nth-child(7)::before,
    li:nth-child(11)::before,
    li:nth-child(15)::before,
    li:nth-child(19)::before,
    li:nth-child(23)::before {
        background: #A7CA3E;
    }

    li:nth-child(2)::before,
    li:nth-child(6)::before,
    li:nth-child(10)::before,
    li:nth-child(14)::before,
    li:nth-child(18)::before,
    li:nth-child(22)::before {
        background: #E757A5;
    }

    li:first-child::before,
    li:nth-child(5)::before,
    li:nth-child(9)::before,
    li:nth-child(13)::before,
    li:nth-child(17)::before,
    li:nth-child(21)::before {
        background: #45C6DD;
    }

    .play {
        background: url('/img/lessons/play.svg') no-repeat center center / contain;
        height: 68px;
        width: 68px;
        margin-left: 10px;
        transition: all .2s;
        position: relative;

    }

    .play::before {
        border-radius: 50%;
        content: '';
        position: absolute;
        height: 100px;
        width: 100px;
        background: rgba(0, 0, 0, 0.329);
        z-index: -1;
        top: -16px;
        left: -24px;
        transition: all .3s;
        opacity: 0;

    }

    .thumb:hover {
        .play::before {
            opacity: 1;
        }
    }

    .dz-header {
        margin-top: 100px;
        margin-bottom: 20px;
    }

    .dz {
        padding: 0;
    }

    .dz-li {
       
    }

    .dz-li::before {
        display: none;

    }

    .dz-button {
        border-radius: 20px;
        
        width: 320px;
        height: 80px;
        font-size: 20px;
        line-height: 160.2%;
        border: none;
        outline: none;
        margin-top: 50px;
        color: #333333;
        margin-right: 20px;
        margin-bottom: 100px;
        font-weight: 400;

    }
}

.ch-1 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px rgba(43, 154, 178, 0.8);
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/1/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #99DDEA 0%, #60C3D9 100%);
        box-shadow: 0px 0px 60px #309CB7;
    }
}

.ch-1::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/1/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-1::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/1/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-2 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px rgba(167, 202, 62, 0.8);
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/2/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #C0E751 0%, #6D8612 100%);
        box-shadow: 0px 0px 60px #A5C73C;
    }
}

.ch-2::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/2/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-2::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/2/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-3 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #427BC5;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/3/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, rgba(145, 154, 184, 0.6) 0%, #1D61C5 100%);
        box-shadow: 0px 0px 60px #9EA3B9;
    }
}

.ch-3::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/3/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-3::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/3/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-4 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #E199BE;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/4/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, rgba(223, 154, 186, 0.6) 0%, #D95A78 100%);
        box-shadow: 0px 0px 60px #DC7996;
    }
}

.ch-4::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/4/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-4::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/4/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-5 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #F66C17;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/5/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #FCB03B 0%, #F66C17 100%);
        box-shadow: 0px 0px 60px #F66C17;
    }
}

.ch-5::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/5/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-5::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/5/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-6 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #E199BE;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/6/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #E585B3 0%, #7E518B 100%);
        box-shadow: 0px 0px 60px #DC7996;
    }
}

.ch-6::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/6/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-6::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/6/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-7 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #3B63BC;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/7/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #406AC5 0%, #0D1E61 100%);
        box-shadow: 0px 0px 60px #406AC5;
        color: white;
    }
}

.ch-7::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/7/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-7::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/7/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-8 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #3B63BC;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/8/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #BFB8B2 0%, #6F96BC 100%);
        box-shadow: 0px 0px 60px #5981AB;
        color: white
    }
}

.ch-8::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/8/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-8::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/8/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-9 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #F4A318;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/9/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #F3B013 0%, #FC3939 100%);
        box-shadow: 0px 0px 60px #F6921D;
        color: white;
    }
}

.ch-9::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/9/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-9::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/9/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-10 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #F4A318;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/10/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #F3B013 0%, #FA7518 100%);
        box-shadow: 0px 0px 60px #F6921D;
        color: white
    }
}

.ch-10::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/10/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-10::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/10/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-11 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #B25419;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/11/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #B04E1A 0%, #12473C 100%);
        box-shadow: 0px 0px 60px #C08413;
        color: white;
    }
}

.ch-11::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/11/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-11::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/11/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.ch-12 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #F574BA;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/12/jiraff.png') no-repeat center center / contain;
        top: 434px;
        bottom: 69px;
        left: 53px;
        width: 572px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #8E9CCA 0%, #984260 100%);
        box-shadow: 0px 0px 60px #AB819B;
        color: white
    }
}

.ch-12::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/12/left.svg') no-repeat left top / contain;
    height: 800px;
    width: 650px;
    top: 0;
    left: 0;
}

.ch-12::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/12/right.svg') no-repeat right bottom / contain;
    height: 930px;
    width: 600px;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.ch-13 {
    padding: 125px 0 92px;

    .thumb {
        box-shadow: 0px 0px 20px #97A8B9;
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/13/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }

    .dz-button {
        background: linear-gradient(93.58deg, #A7CA3E 0%, #FCB03B 100%);
        box-shadow: 0px 0px 60px #5981AB;
        color: white;
    }
}

.ch-13::before {
    content: '';
    position: absolute;
    background: url('/img/lessons/13/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 500px;
    bottom: 0;
    left: 0;
}

.ch-13::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/13/right.svg') no-repeat right top / contain;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.jiraf, .lesson::after, .lesson::before{
    display: none;
}
.thumb{
    box-shadow: none!important;
}
@media (max-width:1200px){
    .container{
        padding: 0 40px;
    }
    .lesson h2{
        font-size: 50px;
        line-height: 50px;
    }
}
@media (max-width: 880px){
    
    .lesson .thumb{
        width: calc(100vw - 80px);
        height: calc(66vw - 80px);
    }
}
@media (max-width: 500px){
    .lesson .thumb{
        width: calc(100vw - 40px);
        height: calc(66vw - 40px);
    }
    .container{
        padding: 0 20px;
    }
    .lesson h2{
        font-size: 20px;
        line-height: 20px;
        
    }
    .lesson .description{
        font-size: 14px;
        line-height: 17px;
    }
    .lesson li{
        font-size: 14px;
        line-height: 17px;
        padding-left: 0;
    }
    .lesson li::before{
        height: 12px;
        width: 12px;
        left: -15px;
        top: 2px;
    }
    .lesson ul{
        padding-left: 15px;
    }
    .lesson .dz-button{
        height: 75px;
        width: 240px;
    }
   
}
</style>
