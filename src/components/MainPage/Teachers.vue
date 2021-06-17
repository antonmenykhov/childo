<template>
<section class="teachers">
    <h3>С творческой командой  <span class="span-blue">«ChilDo»</span> у вас все получится, а каждый ваш рисунок станет настоящим <span class="span-orange">шедевром.</span></h3>
    <div class="row">
        <div class="teacher" v-for="teacher in teachers" :key="teacher.name">
            <div class="image" :style="'background: url(\''+teacher.img+'\') no-repeat center center / cover'">
                <div :class="teacher.color"></div>
            </div>
            <div class="name">
                {{teacher.name}}
            </div>
            <div class="description" v-html="teacher.description">

            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            teachers: [{
                    img: '/img/teachers/1.png',
                    name: 'Екатерина Кармацких',
                    color: 'pink',
                    description: 'основатель и вдохновитель «ChilDo»: <br> «С раннего детства я занимаюсь разными видами творчества, чаще они были связаны с живописью. После рождения малыша, находясь в декретном отпуске, я поняла, что действительно больше всего люблю рисовать и беру в руки кисть буквально каждую свободную минуту. Для меня это не просто творческий процесс, но и развитие, энергия. Я мечтала, чтобы рисование стало доступно всем: взрослым и детям, новичкам и более опытным. Так появился проект онлайн-курсов «ChilDo» — художественное пространство, где каждый может реализовать себя, окунуться в творчество и прикоснуться к волшебному миру красок».',

                },
                {
                    img: '/img/teachers/2.png',
                    name: 'мария',
                    color: 'green',
                    description: 'ваш наставник и проводник в страну живописи: <br> «Я хочу научить вас видеть магию в самых обычных вещах. Благодаря рисованию мы можем, как по волшебству, раскрасить всё в яркие цвета и научиться любить и понимать то, что нас окружает. Небо, солнце, звезды, цветы, природа и ее обитатели — посмотрите, сколько прекрасного вокруг нас. Давайте доверимся вдохновению, возьмем немного сочных красок и вместе отправимся в страну живописи!»',

                },
                {
                    img: '/img/teachers/3.jpg',
                    name: 'татьяна',
                    color: 'orange',
                    description: 'виртуоз цифрового искусства: <br> «Цифровая иллюстрация — вероятно, лучшее, что появилось у художников со времен изобретения тюбиков для краски. Благодаря новейшим технологиям мы можем создавать впечатляющие картины буквально одним касанием! На занятиях вместо холста будем использовать планшет, а в качестве кисти возьмем электронное перо. Буду рада поделиться с вами всеми тонкостями фантастического цифрового искусства и научить создавать современные классные иллюстрации!»',

                },
                {
                    img: '/img/teachers/4.png',
                    name: 'Маша',
                    color: 'blue',
                    description: 'исследователь мира красок: <br> «Я люблю рисовать! Мне нравится смешивать краски и смотреть, какие цвета получаются. Еще я заметила, что от разных кисточек образуются разные следы… А если поменять кисточку на воздушный шарик, получится красивый эффект. Это так весело и интересно!»',

                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.pink{
    position: absolute;
    z-index: -1;
    height: 226px;
    width: 234px;
    background: url('/img/teachers/pink.svg') no-repeat center center / contain;
    top: -17px;
    right: -83.25px;
}
.green{
    position: absolute;
    z-index: -1;
    height: 240px;
    width: 210px;
    background: url('/img/teachers/green.svg') no-repeat center center / contain;
    bottom: -45px;
    right: -60px;
}
.orange{
    position: absolute;
    z-index: -1;
    height: 286px;
    width: 283px;
    background: url('/img/teachers/orange.svg') no-repeat center center / contain;
    top: -20px;
    left: -90px;
}
.blue{
    position: absolute;
    z-index: -1;
    height: 202px;
    width: 275px;
    background: url('/img/teachers/blue.svg') no-repeat center center / contain;
    bottom: -6px;
    left: -79px;
}





.span-blue, .span-orange{
    position: relative;
}
.span-blue::before{
    border-top: 10px solid #5FC0D3;
    content: '';
    position: absolute;
    bottom: 4px;
    width: 182px;
    z-index: -1;
}
.span-orange::before{
    border-top: 10px solid #FA952D;
    content: '';
    position: absolute;
    bottom: 4px;
    width: 242px;
    z-index: -1;
}
.teachers {
    h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        text-align: center;
        max-width: 847px;

        color: #515151;
    }

    max-width: 1220px;
    margin: 132px auto 260px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        margin-top: 200px;
        position: relative;
    }

    .name {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        margin: 29px 0 15px;
        color: #515151;
    }

    .description {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;
        text-align: center;

        color: #000000;

    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.teacher {
    flex: 1 1 500px;
    max-width: 570px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
