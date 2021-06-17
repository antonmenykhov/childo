<template>
<section :class="speakerData.style">
    <div class="container">
        <div class="center">
            <h2>Спикер</h2>
            <div class="image" :style="'background: url(\''+speakerData.img+'\') no-repeat center center / cover'"></div>
            <h3 class="name">{{speakerData.name}}</h3>
        </div>
        <p class="description" v-html="speakerData.description"></p>
        <h3>Мое образование:</h3>
        <ul>
            <li v-for="item in speakerData.univer" :key="item">{{item}}</li>
        </ul>
        <div class="quote-1" v-if="speakerData.quotes[0]" v-html="speakerData.quotes[0]"></div>
        <h3>мои достижения:</h3>
        <ul>
            <li v-for="item in speakerData.achiv" :key="item">{{item}}</li>
        </ul>
        <div class="quote-2" v-if="speakerData.quotes[1]" v-html="speakerData.quotes[1]"></div>
        <h3 class="go">Присоединяйтесь!</h3>
        <button>Выбрать тариф</button>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            speakerData: {
                img: '/img/teachers/2.png',
                name: 'Мария',
                description: 'Я Мария, ваш наставник и проводник в страну живописи!<br><br> Хочу вам показать  огромный  мир  цветной и яркий, <br>О самом главном,  интересном рассказать, <br>Мы мир раскрасим красочной палитрой <br>Научимся  его любить и понимать!',
                univer: [
                    'Художественное отделение МБОУ ДОД города Кургана «Детская  школа  искусств им.  В. А. Громова», свидетельство об окончании с отличием',
                    'МБОУДО города Кургана «ДХШ им. В. Ф. Илюшина» свидетельство об окончании с отличием ',
                    'Студентка Тюменского государственного института культуры, факультет: «Дизайн». '

                ],
                quotes: [
                    'В каждой  краске найдётся цветов понемногу,<br> Каждая  нам    раскрасит  дорогу,<br>Небо и звёзды, и солнечный свет – <br>Наш  разноцветный скуке ответ!',

                    'Наберу на кисть поярче краски - <br>Желтой, розовой, зеленой, голубой… <br>И таким прекрасным, словно в сказке,<br>Разноцветный мир хочу я видеть свой!'
                ],
                achiv: [
                    'Премия «Юные таланты Кургана» за творческие достижения   от руководителя Администрации города Кургана.',
                    'Диплом Администрации города Кургана за 1 место в городском конкурсе в сфере экологической безопасности и охраны окружающей среды ',
                    'Диплом лауреата I областной научно - практической конференции« Я– исследователь» в рамках областного педагогического Арт - форума« Культура и образование в современном обществе», посвященном Году культуры в России.',
                    'Диплом лауреата III степени II областной научно - практической конференции« Я– исследователь».',
                    'Грамоты ФГБОУДО ВДЦ« Смена», ФГБОУ« МДЦ« Артек», ФГБОУ ВДЦ« Океан» за творческие успехи в период реализации тематических смен.',
                    'Участие в проекте Курганского областного интернет - портала« Очевидец Медиа» на присуждение региональной общественной премии« Персона года 2014», номинация« Искусство.Творчество.Живопись» 2014 г.', 'Дипломы победителя и лауреата международных и всероссийских конкурсов декоративно - прикладного искусства '

                ],
                style: 'cs-1'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    margin-top: 125px;
    margin-bottom: 200px;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        text-align: center;
    }
}

.image {
    margin-bottom: 29px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: relative;
}

.image::before {
    right: -85px;
    bottom: -40px;
    content: '';
    background: url('/img/courses/1/speaker/image.svg') no-repeat center center / contain;
    height: 240px;
    width: 240px;
    z-index: -1;
    position: absolute;
}

h3 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    /* identical to box height */

    color: #515151;
}

h2 {

    margin-bottom: 99px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;

    color: #515151;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -15px;
    top: 6px;
    content: '';
    background: url('/img/courses/1/speaker/с.svg') no-repeat center center / contain;
    height: 70.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

.description {
    font-size: 25px;
    line-height: 30px;

    color: #000000;
    margin-top: 75px;
    margin-bottom: 50px;
}

li {
    font-size: 25px;
    line-height: 30px;

    color: #515151;
    text-indent: 25px;
    list-style: none;
    position: relative;
}

li::before {
    content: '';
    background: #515151;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    transition: all .2s;
    position: absolute;
    left: 0;
    top: 8px
}

li:hover::before {
    transform: scale(1.2);

}

ul {
    padding-top: 30px;
    padding-bottom: 51px;
    padding-left: 0;
}

.quote-1,
.quote-2 {

    border-radius: 20px;
    padding: 19px 30px;
    margin-left: -29px;

    color: white;

    font-size: 25px;
    line-height: 30px;
}

.quote-1 {
    margin-bottom: 51px;
    background: linear-gradient(93.13deg, rgba(245, 116, 186, 0.75) 0%, rgba(206, 69, 143, 0.75) 100%);
    box-shadow: 0px 0px 40px #F574BA;
}

.quote-2 {
    background: linear-gradient(93.13deg, rgba(246, 106, 22, 0.75) 0%, rgba(246, 106, 22, 0.75) 100%);
    box-shadow: 0px 0px 40px #F7751C;
}

.go {
    margin-top: 91px;
    margin-bottom: 51px;
}

button {
    background: linear-gradient(93.43deg, #7DD7E7 0%, #45C6DD 100%);
    box-shadow: 0px 0px 60px #7DD7E7;
    border-radius: 20px;
    height: 80px;
    width: 382px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 160.2%;
    /* identical to box height, or 32px */

    color: #FFFFFF;
}
section{
    position: relative;
}
.cs-1::before{
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/speaker/left.svg') no-repeat left bottom;
}
.cs-1::after{
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/speaker/right.svg') no-repeat right top;
}
</style>
