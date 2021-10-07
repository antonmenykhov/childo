<template>
<section class="lesson" :class="lessonData.styleGrow">

    <div class="back-button" @click="$router.push({path: '/lessons/'+(cid+1)})">
        <div class="back-arrow"></div>
    </div>
    <div class="container">
        
        <h2>Урок {{id+1}} - {{lessonData.Name}}</h2>
        <p class="description" v-html="lessonData.Description">
        </p>
        <div class="thumb" :style="'background: url(\''+url+lessonData.img.formats.medium.url+'\') no-repeat center center / cover'">
            <div class="play"></div>
        </div>
        <el-button v-if="!check()" :loading="loading" class="dz-button">{{textDz}}<label for="dz">{{textDz}}</label></el-button>
        <input type="file" :id="'dz'" v-on:change="FileUpload()">
        <el-button @click="goNext" v-if="next || check()" class="dz-button">Следующий урок</el-button>
        <el-button @click="goLK" v-if="end" class="dz-button">В личный кабинет</el-button>
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
        goLK() {
            this.$router.push({ path: '/lk' })
        },
        goNext() {
            this.$router.push({ path: '/lessonGrow/' + (this.cid + 1) + '/' + (this.id + 2) })
        },
        FileUpload() {
            this.file = document.getElementById('dz').files[0];
            this.submitImage()
        },
        setDz(dz) {

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
                if (this.id + 1 <= this.$store.state.userData.BuyedCourses[this.cid].data.lessons.length - 1) {
                    this.next = true
                } else {
                    this.end = true
                }
            })

        },
    },
    data() {
        return {
            id: this.$route.params.id - 1,
            cid: this.$route.params.cid - 1,
            url: api.url,
            loading: false,
            textDz: 'Загрузить дз',
            next: false,
            end: false,

        }
    },
    mounted() {
        window.scrollTo(0, 0);
        if (this.$cookie.get('jwt')) {
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
    computed: {
        lessonData: function () {
            let data = this.$store.state.userData.BuyedCourses[this.cid].data.lessons[this.id]
            return data
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



.lesson {
    background: white;
    position: relative;
    z-index: 900;
    min-height: 100vh;

    .container {
        flex-direction: column;
        align-items: flex-start;
    }

    

    h2 {
        margin-top: 100px;
        margin-bottom: 50px;
        font-weight: 700;
        font-family: Intro;
        font-style: normal;
        font-weight: normal;

        font-size: 60px;
        line-height: 60px;
        /* identical to box height */

        

        color: #333333;
    }

    .description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        
        max-width: 667px;
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
        position: relative;
        z-index: 1;
        cursor: pointer;
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

    .dz-button {
        border-radius: 20px;
        padding: 24px 94px;
        font-size: 20px;
        line-height: 160.2%;
        border: none;
        outline: none;
        color: white;
        margin-bottom: 100px;
        font-weight: 400;

    }
}

.lesson::before {
    
    position: absolute;
    height: 700px;
    width: 600px;
    bottom: 0;
    left: 0;
}

.lesson::after {
    
    position: absolute;
    height: 930px;
    width: 1000px;
    top: 0;
    right: 0;
    z-index: -1;
}

.gr-1 {
    .thumb {
        box-shadow: 0px 0px 20px #F66C17;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #F7751C 0%, #C9287F 100%);
        box-shadow: 0px 0px 60px #F7751C;
    }
}

.gr-1::before {
    background: url('/img/lessons/gr/1/left.svg') no-repeat left bottom / contain;
}

.gr-1::after {
    background: url('/img/lessons/gr/1/right.svg') no-repeat right top / contain;
}

.gr-2 {
    .thumb {
        box-shadow: 0px 0px 20px #F574BA;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #F574BA 0%, #C9287F 100%);
        box-shadow: 0px 0px 60px #F574BA;
    }
}

.gr-2::before {
    background: url('/img/lessons/gr/2/left.svg') no-repeat left bottom / contain;
}

.gr-2::after {
    background: url('/img/lessons/gr/2/right.svg') no-repeat right top / contain;
}

.gr-3 {
    .thumb {
        box-shadow: 0px 0px 20px #F3B013;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #FCB03B 0%, #F66C17 100%);
        box-shadow: 0px 0px 60px #FCB03B;
    }
}

.gr-3::before {
    background: url('/img/lessons/gr/3/left.svg') no-repeat left bottom / contain;
}

.gr-3::after {
    background: url('/img/lessons/gr/3/right.svg') no-repeat right top / contain;
}

.gr-4 {
    .thumb {
        box-shadow: 0px 0px 20px #F3B013;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #FCB03B 0%, #F66C17 100%);
        box-shadow: 0px 0px 60px #FCB03B;
    }
}

.gr-4::before {
    background: url('/img/lessons/gr/4/left.svg') no-repeat left bottom / contain;
}

.gr-4::after {
    background: url('/img/lessons/gr/4/right.svg') no-repeat right top / contain;
}

.gr-5 {
    .thumb {
        box-shadow: 0px 0px 20px #7DD7E7;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #7DD7E7 0%, #187B93 100%);
        box-shadow: 0px 0px 60px #7DD7E7;
    }
}

.gr-5::before {
    background: url('/img/lessons/gr/5/left.svg') no-repeat left bottom / contain;
}

.gr-5::after {
    background: url('/img/lessons/gr/5/right.svg') no-repeat right top / contain;
}

.gr-6 {
    .thumb {
        box-shadow: 0px 0px 20px #F3B013;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #FCB03B 0%, #F66C17 100%);
        box-shadow: 0px 0px 60px #FCB03B;
    }
}

.gr-6::before {
    background: url('/img/lessons/gr/6/left.svg') no-repeat left bottom / contain;
}

.gr-6::after {
    background: url('/img/lessons/gr/6/right.svg') no-repeat right top / contain;
}

.gr-7 {
    .thumb {
        box-shadow: 0px 0px 20px #F574BA;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #E2B0FC 0%, #E54D56 100%);
        box-shadow: 0px 0px 60px #F574BA;
    }
}

.gr-7::before {
    background: url('/img/lessons/gr/7/left.svg') no-repeat left bottom / contain;
}

.gr-7::after {
    background: url('/img/lessons/gr/7/right.svg') no-repeat right top / contain;
}

.gr-8 {
    .thumb {
        box-shadow: 0px 0px 20px #C9D0EA;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #CAD1EB 0%, #7C76A2 100%);
        box-shadow: 0px 0px 60px #C6CFE8;
    }
}

.gr-8::before {
    background: url('/img/lessons/gr/8/left.svg') no-repeat left bottom / contain;
}

.gr-8::after {
    background: url('/img/lessons/gr/8/right.svg') no-repeat right top / contain;
}

.gr-9 {
    .thumb {
        box-shadow: 0px 0px 20px #EC9489;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #FFCAC4 0%, #DA6354 100%);
        box-shadow: 0px 0px 60px #F69B91;
    }
}

.gr-9::before {
    background: url('/img/lessons/gr/9/left.svg') no-repeat left bottom / contain;
}

.gr-9::after {
    background: url('/img/lessons/gr/9/right.svg') no-repeat right top / contain;
}

.gr-10 {
    .thumb {
        box-shadow: 0px 0px 20px #EC9489;
    }

    .dz-button {
        background: linear-gradient(93.58deg, #FBC2BD 0%, #D27FE7 100%);
        box-shadow: 0px 0px 60px #F69B91;
    }
}

.gr-10::before {
    background: url('/img/lessons/gr/9/left.svg') no-repeat left bottom / contain;
}

.gr-10::after {
    background: url('/img/lessons/gr/9/right.svg') no-repeat right top / contain;
}
.lesson .thumb{
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
        padding: unset;
    }
   
}
</style>
