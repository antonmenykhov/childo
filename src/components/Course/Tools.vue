<template>
<section :class="courseData.style">
    <h2>
        ИНСТРУМЕНТЫ И МАТЕРИАЛЫ ДЛЯ КУРСА
    </h2>
    <div class="tools">
        <ul>
            <li v-for="item in courseData.tools" :key="item">{{item}}</li>
        </ul>
        <div class="image" :style="'background: url(\'/img'+courseData.image+'\') no-repeat center center / cover'"></div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            courseData: {
                tools: [
                    'Набор акриловых красок', 'Белая краска (белила титановые) — стоит приобрести отдельно, так как она используется в каждом рисунке', 'Палитра', 'Карандаш простой', 'Точилка', 'Ластик', 'Набор бумаги для рисования (для акрила, гуаши) плотность от 150 гр/м2, размер 30х40 см или холст на картоне 30х40 см', 'Тонированная бумага (черная)', 'Кисть синтетика круглая №2, №5, №10', 'Кисть синтетика плоская №5, №18', 'Кисть щетина №10', 'Ватные палочки', 'Губка поролоновая бытовая', 'Черный фломастер или тонкий маркер', 'Воздушный шарик', 'Сухие и влажные салфетки', 'Лист плотного картона'

                ],
                image: '/courses/1/tools.jpg',
                style: 'cs-1'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 125px;
    margin-bottom: 74px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;
    align-self: center;
    color: #515151;
    max-width: 1020px;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: 190px;
    top: 7px;
    content: '';
    background: url('/img/courses/1/prog/и.svg') no-repeat center center / contain;
    height: 57.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

section {
    display: flex;
    flex-direction: column;

}

.tools {
    margin-left: 380px;
    margin-bottom: 219px;
    display: flex;
    align-items: stretch;

}

ul {
    max-width: 673px;
    margin-right: 119px;
    flex: 1;
}

li {
    font-size: 30px;
    line-height: 37px;
}

.image {
    flex: 1 1;
    height: auto;
    margin: 0;
    content: '';
    margin-right: -42px;
    border-radius: 20px 20px;
    position: relative;
}

.image::after {
    position: absolute;
    background: linear-gradient(89.98deg, rgba(255, 255, 255, 0.8) 0.02%, rgba(255, 255, 255, 0) 99.98%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 100%;
    width: 70%;
    right: 0;
    top: 0;
    content: '';
}

.image::before {
    position: absolute;
    background: url('/img/courses/1/image.svg') no-repeat center center / contain;

    height: 300px;
    width: 300px;
    left: -120px;
    bottom: -150px;
    content: '';
    z-index: -1;
}

.cs-1 {
    position: relative;
}

.cs-1::before {
    position: absolute;
    background: url('/img/courses/1/left.svg') no-repeat left top / contain;

    height: 600px;
    width: 600px;
    left: 0;
    top: 250px;
    content: '';

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
    transition: all .2s;
    position: absolute;
    left: -25px;
    top: 3px
}

li:hover::before{
        transform: scale(1.2);
    
}
ul {
    padding-left: 25px;
}

.cs-1 {

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

}
</style>
