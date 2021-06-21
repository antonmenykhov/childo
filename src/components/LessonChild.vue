<template>
<section class="lesson" :class="style">
    <div class="jiraf"></div>
    <div class="container">
        <h4>{{lessonData.upheader}}</h4>
        <h2>{{lessonData.header}}</h2>
        <p class="description" v-html="lessonData.description">
        </p>
        <div>
            <div class="thumb" :style="'background: url(\'/img/lessons'+lessonData.thumb+'\') no-repeat center center / cover'">
                <div class="play"></div>
            </div>
            <div class="req">
                <h6>Для урока потребуется:</h6>
                <ul>
                    <li v-for="item in lessonData.req" :key="item">{{item}}</li>
                </ul>
                <h6 class="dz-header">Домашнее задание</h6>
                <ul class="dz">
                    <li class="dz-li" v-for="item,i in lessonData.dz" :key="i">
                        {{item}}
                    </li>
                </ul>
                <button class="dz-button">Загрузить дз</button>
            </div>
        </div>
    </div>
    <el-select class="superSelect" v-model="style">
        <el-option v-for="item in listStyle" :value="item" :key="item"></el-option>
    </el-select>
</section>
</template>

<script>
export default {
    data() {
        return {
            listStyle: [
                'ch-1',
                'ch-2',
                'ch-3',
                'ch-4',
                'ch-5',
                'ch-6',
                'ch-7',
                'ch-8',
                'ch-9',
                'ch-10',
                'ch-11',
                'ch-12',
                'ch-13',
            ],
            style: 'ch-1',
            lessonData: {
                upheader: 'урок 1',
                header: '“привет из антарктики”',
                description: 'Сегодня мы нарисуем забавного пингвина! В процессе узнаем интересные факты об особенностях внешнего вида этого животного и месте его обитания — холодной Антарктиде. Также мы разберем понятие «художественное пространство картины».',
                thumb: '/1/thumb.jpg',
                req: [
                    'Акриловые краски, цвета: синий, белый, черный, оранжевый',
                    'Лист бумаги (для акрила и гуаши) плотность от 150гр/м2, размер 30х40 см',
                    'Палочки для краски',
                    'Стаканчик',
                    'Палитра',
                    'Карандаш',
                    'Ластик',
                    'Кисть синтетика круглая №2, №5, №10',
                ],
                dz: [
                    '-выполнить рисунок, который был показан в уроке'
                ]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.superSelect {
    top: 50px;
    position: absolute !important;
    z-index: 1000;

}

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
        margin-bottom: 29px;
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
        max-width: 667px;
        color: #000000;
    }

    .thumb {
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 377px;
        width: 600px;
        margin-top: 74px;
        margin-bottom: 30px;
        cursor: pointer;
        position: relative;
        z-index: 1;
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
        margin-top: 26px;
        margin-bottom: 20px;
    }

    .dz {
        padding: 0;
    }

    .dz-li {
        max-width: 263px;
    }

    .dz-li::before {
        display: none;

    }

    .dz-button {
        border-radius: 20px;
        padding: 24px 94px;
        font-size: 20px;
        line-height: 160.2%;
        border: none;
        outline: none;
        margin-top: 60px;

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

@media (max-width: 1700px) {

    .ch-1 .jiraf,
    .ch-3 .jiraf,
    .ch-5 .jiraf,
    .ch-7 .jiraf,
    .ch-9 .jiraf,
    .ch-11 .jiraf,
    .ch-13 .jiraf {
        width: 350px;
        top: unset;
        bottom: 100px;
        height: 600px;
        right: 0;
    }

    .ch-2 .jiraf,
    .ch-4 .jiraf,
    .ch-6 .jiraf,
    .ch-8 .jiraf,
    .ch-10 .jiraf,
    .ch-12 .jiraf,
    .ch-14 .jiraf {
        width: 350px;
        top: unset;
        bottom: 100px;
        height: 600px;
        right: 0;
        left: unset;
        transform: rotateY(180deg);
    }
}

@media (max-width: 1300px) {
    .lesson {
        h4 {
            font-size: 50px;
            line-height: 50px;
        }

        h2 {
            font-size: 70px;
            line-height: 70px;
        }

        .description {
            font-size: 20px;
            line-height: 24px;
        }

    }

    .ch-1::before,
    .ch-3::before,
    .ch-5::before,
    .ch-7::before,
    .ch-9::before,
    .ch-11::before,
    .ch-13::before{
        left: -20px;
    }
    .ch-1::after,
    .ch-3::after,
    .ch-5::after,
    .ch-7::after,
    .ch-9::after,
    .ch-11::after,
    .ch-13::after{
        right: -200px;
    }
    .ch-2::before,
    .ch-4::before,
    .ch-6::before,
    .ch-8::before,
    .ch-10::before,
    .ch-12::before,
    .ch-14::before{
        left: -100px;
    }
    .ch-2::after,
    .ch-4::after,
    .ch-6::after,
    .ch-8::after,
    .ch-10::after,
    .ch-12::after,
    .ch-14::after{
        right: -00px;
    }
}
@media (max-width: 950px){
    .lesson{
        li{
             max-width: 300px;
        }
    }
}
</style>
