<template>
<section class="lesson" :class="lessonData.styleGrow">
     <div class="back-button" @click="$router.go(-1)">
        <div class="back-arrow"></div>
    </div>
    <div class="container">
        <h4>Урок {{id+1}}</h4>
        <h2>{{lessonData.Name}}</h2>
        <p class="description" v-html="lessonData.Description">
        </p>
        <div class="thumb" :style="'background: url(\''+url+lessonData.img.formats.medium.url+'\') no-repeat center center / cover'">
            <div class="play"></div>
        </div>
        <button class="dz-button">Загрузить дз</button>
    </div>
</section>
</template>

<script>
import api from '../constants'
export default {
    computed:{
        lessonData: function (){
            let data = this.$store.state.mainData.courses[this.cid].lessons[this.id]
            return data
        }
    },
    data() {
        return {
            id: this.$route.params.id-1,
            cid: this.$route.params.cid-1,
            url: api.url
        }
    },
    mounted() {
      window.scrollTo(0,0);
    },
}
</script>

<style lang="scss" scoped>
.back-button{
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
    .back-arrow{
        background: url('/img/back.svg') no-repeat center center / contain;
        height: 30px;
        width: 30px;
        margin-left: -5px;
    }
}
.back-button:hover{
    opacity: 1;
}
.superSelect {
    top: 50px !important;
    position: absolute !important;
    z-index: 1000;

}

.lesson {
    background: white;
    position: relative;
    z-index: 900;
    min-height: 100vh;

    .container {
        flex-direction: column;
        align-items: center;
        padding: 125px 0 118px;
        max-width: 1920px;
    }

    h4 {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 50px;
        /* identical to box height */
        color: #515151;
        text-align: center;

    }

    h2 {
        margin-top: 14px;
        margin-bottom: 29px;
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 70px;
        /* identical to box height */

        text-align: center;

        color: #515151;
    }

    .description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        max-width: 667px;
    }

    .thumb {
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 377px;
        width: 600px;
        margin-top: 70px;
        margin-bottom: 101px;
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

    }
}

.lesson::before {
    content: '';
    position: absolute;
    height: 700px;
    width: 600px;
    bottom: 0;
    left: 0;
}

.lesson::after {
    content: '';
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

@media (max-width: 1300px) {
    section::before {
        left: -50px !important;
        bottom: -100px !important;
    }

    section::after {

        height: 700px !important;
    }
}

@media (max-width: 900px) {
    section {
        overflow: hidden
    }

    section::before {
        height: 400px !important;
        bottom: 0px !important;
    }

    section::after {
        height: 300px !important;
        right: -30px !important;
    }

    .lesson {
        .play {
            height: 50px;
            width: 50px;
        }

        .play::before {
            top: -15px;
            left: -20px;
            height: 80px;
            width: 80px;
        }

        .container {
            padding-bottom: 101px;
            padding-top: 31px;
        }

        padding-top: 35px !important;
        padding-bottom: 77px !important;

        h4 {
            font-size: 25px;
            line-height: 25px;
        }

        h2 {
            max-width: 327px;
            font-size: 35px;
            line-height: 35px;
            margin-top: 15px;
            margin-bottom: 12px;
        }

        .description {
            font-size: 12px;
            line-height: 15px;
            max-width: 290px;
        }

        .thumb {
            margin-top: 60px;
            margin-bottom: 50px;
            max-width: 307px;
            max-height: 193px;
            margin-right: 0;
        }

        h6 {
            font-size: 20px;
            line-height: 24px;

        }

        li {
            font-size: 15px;
            line-height: 18px;
        }

        ul {
            padding-left: 20px;
        }

        li::before {
            left: -20px;
            height: 13px;
            width: 13px;
        }

        .dz-button {
            font-size: 12px;
            line-height: 160.2%;
            padding: unset;
            height: 50px;
            width: 202px;
            border-radius: 10px;
        }
    }
}
</style>
