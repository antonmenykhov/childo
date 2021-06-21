<template>
<section class="lesson" :class="style">
    <div class="jiraf"></div>
    <div class="container">
        <h4>{{lessonData.upheader}}</h4>
        <h2>{{lessonData.header}}</h2>
        <p class="description" v-html="lessonData.description">
        </p>
        <div>
            <div class="thumb" :style="'background: url(\'/img/lessons/free/'+lessonData.thumb+'\') no-repeat center top / cover'">
                <div class="play"></div>
            </div>
            <div class="req">
                <h6>Для урока потребуется:</h6>
                <ul>
                    <li v-for="item in lessonData.req" :key="item">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            style: 'free',
            lessonData: {
                upheader: 'бесплатный урок',
                header: '“яркие краски!”',
                description: 'Перед вами — первый пробный урок онлайн-курса по рисованию «ChilDo»! Сегодня мы будем рисовать попугая Ара и узнаем несколько интересных фактов об этой тропической птице. <br> <br> Также на занятии мы познакомимся с основными правилами расположения предмета на формате и разберемся, чем акриловые краски, которые мы будем использовать, отличаются от других типов.',
                thumb: 'free.jpg',
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
.lesson {
    background: white;
    position: relative;
    z-index: 900;

    .container {
        flex-direction: column;
        align-items: center;
    }

    h4 {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 50px;

        text-align: center;

        color: #515151;
    }

    h2 {
        margin-top: 14px;
        margin-bottom: 42px;
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #515151;
    }

    .description {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        max-width: 853px;
        color: #000000;
    }

    .thumb {
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 377px;
        width: 600px;
        margin-top: 84px;
        margin-bottom: 30px;
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

    h6 {
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 37px;
        /* identical to box height */
        margin-bottom: 20px;
        color: #000000;
    }

    li {
        font-size: 20px;
        line-height: 24px;
        max-width: 481px;
        color: #000000;
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
    content: '';
    position: absolute;
    background: url('/img/lessons/free/left.svg') no-repeat left center / contain;
    height: 823px;
    width: 780px;
    bottom: 0;
    left: 0;
}

.free::after {
    content: '';
    position: absolute;
    background: url('/img/lessons/free/right.svg') no-repeat right top / contain;
    height: 650px;
    width: 440px;
    top: 0;
    right: 0;
}

@media (max-width:1700px) {
    .free {
        .jiraf {
            width: 250px;
            top: unset;
            bottom: 100px;
            height: 500px;
            right: 0;
        }
    }
    .free::before{
        height: 500px;
    }
    .free::after{
        top: -80px;
        right: -70px;
        height: 600px;
        transform: rotate(12deg);
    }
}
</style>
