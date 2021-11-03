<template>
<section class="lesson" :class="style">
     <div class="back-button" @click="$router.push({path: '/'})">
        <div class="back-arrow"></div>
    </div>
    
    <div class="container">
    
        <h2>Урок - {{lessonData.header}}</h2>
        <p class="description" v-html="lessonData.description">
        </p>
        <div class="q800">
            <div class="thumb" :style="'background: url(\'/img/lessons/free/'+lessonData.thumb+'\') no-repeat center top / cover'">
                <div @click="play = true" v-if="!play" class="play"></div>
              <iframe v-if="play" src="https://player.vimeo.com/video/571751886" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <div class="req">
                <h6>Для урока потребуется:</h6>
                <ul>
                    <li v-for="item in lessonData.req" :key="item">{{item}}</li>
                </ul>
            </div>
            <div class="go">ПРИШЛИТЕ ВАШ РИСУНОК НАМ В ДИРЕКТ В ИНСТАГРАМ <a target="blank" href="https://www.instagram.com/childo.art/">@childo.art</a>, И ПОЛУЧИТЕ СКИДКУ 10% НА ЛЮБОЙ ИЗ НАШИХ ONLINE КУРСОВ</div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    mounted() {
     document.title="Бесплатный урок \"Яркие краски\" | CHILDO"
      window.scrollTo(0,0);
    },
    data() {
        return {
            style: 'free',
            play: false,
            lessonData: {
                upheader: 'бесплатный урок',
                header: '“яркие краски!”',
                description: 'Перед вами — первый пробный урок онлайн-курса по рисованию «ChilDo»! Сегодня мы будем рисовать попугая Ара и узнаем несколько интересных фактов об этой тропической птице. <br> <br> Также на занятии мы познакомимся с основными правилами расположения предмета на формате и разберемся, чем акриловые краски, которые мы будем использовать, отличаются от других типов.',
                thumb: 'free.png',
                req: [
                    'Цвета: красный, зеленый, желтый, синий, черный, белый',
                    'Холст на картоне 30х40 см или лист бумаги для гуаши 30х40 см, плотность от 150 гр/м2',
                    'Палочки для краски',
                    'Стаканчик',
                    'Ластик',
                    'Карандаш',
                    'Кисть синтетика круглая №5',
                    'Кисть синтетика плоская №18',
                    'Кисть синтетика плоская №5',
                    'Палитра'
                ],
            }
        }
    },
}
</script>

<style lang="scss" scoped>
 iframe{
     height: 100%!important;
     width: 100%;
 }
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
.q800{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.go{
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    margin-top: 155px;
    margin-bottom: 100px;
     a{
            
            text-decoration: none;
            text-transform: uppercase;
        }
}
.lesson {
    background: white;
    position: relative;
    z-index: 900;
    padding: 0!important;

    .container {
        flex-direction: column;
        align-items: flex-start;
    }

    h4 {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 50px;

        text-align: center;

        color: #333333;
    }

    h2 {
        margin-top: 100px;
        margin-bottom: 50px;
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
        color: #333333;
    }

    .description {
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

    .thumb {
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 510px;
        width: 800px;
        margin-top: 50px;
        margin-bottom: 50px;
        position: relative;
        z-index: 1;
        cursor: pointer;
        overflow: hidden;
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

    .play {
        background: url('/img/lessons/play.svg') no-repeat center center / contain;
        height: 68px;
        width: 68px;
        margin-left: 10px;
    }
}

.free {
    padding: 112px 0 249px;

    .thumb {
        box-shadow: 0px 0px 20px rgba(182, 64, 184, 0.8);
    }

    .jiraf {
        position: absolute;
        background: url('/img/lessons/free/jiraff.png') no-repeat center center / contain;
        top: 456px;
        bottom: 39px;
        right: 86px;
        width: 476px;
        z-index: 901;

    }
}

.free::before {
    
    position: absolute;
    background: url('/img/lessons/free/left.svg') no-repeat left center / contain;
    height: 823px;
    width: 780px;
    bottom: 0;
    left: 0;
}

.free::after {
    
    position: absolute;
    background: url('/img/lessons/free/right.svg') no-repeat right top / contain;
    height: 650px;
    width: 440px;
    top: 0;
    right: 0;
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
@media (max-width:1200px){
    .container{
        padding: 0 40px;
    }
    .lesson h2{
        font-size: 50px;
        line-height: 50px;
    }
    .go{
        font-size: 20px;
        line-height: 24px;
       
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
