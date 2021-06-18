<template>
<section :class="courseData.style">
    <div class="container">
        <h2>Тарифы</h2>
        <p v-if="courseData.style=='cs-1'" class="subheader">{{courseData.description}}</p>
        <ul v-if="courseData.style=='cs-1'">
            <li v-for="item in courseData.secondDescription" :key="item">{{item}}</li>
        </ul>
        <div class="prices" v-if="courseData.style=='cs-1'">
            <div class="price-w" v-for="item in courseData.tarifs" :key="item.name">
                <h4>{{item.name}}</h4>
                <p class="price">{{item.price}}</p>
                <p class="pricePerM">{{item.pricePerM}}</p>
                <button>Оплатить</button>
            </div>
        </div>
        <div class="prices" v-if="courseData.style=='cs-2'">
            <div class="price-w" v-for="item in cs2Tarif" :key="item.name">
                <h4>{{item.name}}</h4>
                <h4>{{item.time}}</h4>
                <p class="price">{{item.price}}</p>
                <p class="description" v-html="item.description"></p>
                <button>Оплатить</button>
            </div>
        </div>
        <div class="certs">
            <p>Напоминаем,что вы можете
                оформить сертификат и подарить
                его своим близким и друзьям</p>
            <button>Оформить сертификат</button>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            cs2Tarif: [{
                    name: 'Самостоятельно',
                    time: '(100 дней)',
                    price: '2 900 рублей',
                    description: 'Самостоятельное обучение: <br>- полный объём видео, заданий и дополнительных референсов;<br>- отсутствие оценок за выполнение домашних заданий.'
                },
                {
                    name: 'С куратором',
                    time: '(130 дней)',
                    price: '4 900 рублей',
                    description: 'Обучение с куратором: <br>- увеличенное время доступа к видео, заданиям и дополнительным референсам;<br>- ежедневная проверка домашних заданий;<br>- ответы на вопросы;<br>- персональные рекомендации для улучшения результатов.'
                },
            ],

            courseData: {
                description: 'Проанализируйте свое свободное время и подумайте, как часто вы сможете заниматься рисованием? ',
                secondDescription: [
                    'Если у вас достаточно свободного времени и вы можете много заниматься, вам подойдет тариф на 3 месяца',
                    'Если у вас мало времени и у вас нет возможности часто заниматься, то мы предлагаем взять вам тариф на 6 или 12 месяцев'
                ],
                style: 'cs-2',
                tarifs: [{
                        name: 'Доступ на 3 месяца',
                        price: '3000 рублей',
                        pricePerM: '(1000 рублей/ месяц)',

                    },
                    {
                        name: 'Доступ на 6 месяцев',
                        price: '4200 рублей',
                        pricePerM: '(700 рублей/ месяц)',

                    },
                    {
                        name: 'Доступ на 1 год',
                        price: '6000 рублей',
                        pricePerM: '(500 рублей/ месяц)',

                    },
                ]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 125px;
    margin-bottom: 5px;
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
    top: 9px;
    content: '';
    background: url('/img/courses/1/prices/т.svg') no-repeat center center / contain;
    height: 56.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -15px;
    top: 0px;
    content: '';
    background: white;
    height: 56.72px;
    width: 50.5px;
    transform: rotate(20deg);

    position: absolute;
}

.container {
    flex-direction: column;
    align-items: center;
}

.subheader {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 483px;
    margin-bottom: 19px;
    flex: 1;
    padding: 0;
}

li {
    list-style: none;
    font-size: 20px;
    line-height: 24px;
    margin-top: 52px;
    max-width: 598px;
    position: relative;
}

li::before {
    height: 50px;
    width: 50px;
    background: linear-gradient(135deg, #F370B7 0%, #D02883 100%);
    position: absolute;
    content: '';
    border-radius: 50%;
    left: -65px;
}

li:nth-child(2) {
    max-width: 735px;
}

li:nth-child(2)::before {
    background: linear-gradient(135deg, #CBF253 0%, #809C26 100%);
}

ul {
    margin-bottom: 126px;
}

.prices {
    display: flex;
    width: 100%;
    justify-content: center;
}

.price-w {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 329px;
    max-width: 300px;
    flex: 1;
    margin: 0 35px 60px;
    border-radius: 20px;
    position: relative;

    button {
        position: absolute;
        top: 400px;
        width: 100%;
        font-size: 25px;
        line-height: 160.2%;
        /* identical to box height, or 40px */
        border-radius: 25px;
        text-align: center;
        border: none;
        outline: none;
        padding: 20px 80px;
        color: #FFFFFF;
    }
}

h4 {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;
    max-width: 180px;
    margin-top: 37px;
    margin-bottom: 25px;

}

p {
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    padding: 0 18px;
    color: #000000;

}

.price {
    margin-bottom: 37px;
}

.pricePerM {
    margin-bottom: 45px;
}

.price-w:nth-child(1) {
    box-shadow: 0px 0px 60px #E757A5;

    button {
        background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
        box-shadow: 0px 0px 60px #D6358C;
    }
}

.price-w:nth-child(2) {
    box-shadow: 0px 0px 60px #F98C25;

    button {
        background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
        box-shadow: 0px 0px 60px #F98923;
    }
}

.price-w:nth-child(3) {
    box-shadow: 0px 0px 60px #A7CA3E;

    button {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
}

.certs {
    margin-top: 268px;
    margin-bottom: 132px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1040px;

    p {
        position: relative;
        padding-left: 90px;
        padding-right: 200px;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;
        flex: 1;
        text-align: left;
    }

    p::before {
        content: '';
        position: absolute;
        background: linear-gradient(135deg, #9BDEEA 0%, #60C2D9 100%);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        left: 0;
        top: 20px
    }

    button {
        background: linear-gradient(93.43deg, #9EDFEB 0%, #5DC1D8 100%);
        box-shadow: 0px 0px 60px #7DD7E7;
        border-radius: 20px;

        width: 300px;
        border: none;
        outline: none;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.2%;
        height: 80px;
    }
}

section {
    position: relative;
}

.cs-1::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/prices/left.svg') no-repeat left bottom;
}

.cs-1::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/prices/right.svg') no-repeat right top;
}

.cs-2::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/prices/left.svg') no-repeat left bottom;
}

.cs-2::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/prices/right.svg') no-repeat right top;
}
.cs-2 {
    .certs{
        max-width: 1070px;
        p{
            max-width: 550px;
            font-size: 25px;
            line-height: 30px;
            padding-left: 75px;
        
        }
        button{
            margin-right: 100px;
        }
    }
    .price-w {
        height: 663px;
        max-width: 500px;
        flex: 1;
        padding: 0 32px;
        margin-top: 146px;
    }

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        max-width: unset;
        color: #000000;
    }

    h4:first-child {
        margin-bottom: 0;
    }

    h4:nth-child(2) {
        margin-top: 0;
    }

    p {
        font-size: 30px;
        line-height: 37px;
        text-align: left;
        padding: 0;
    }
    .price{
        text-align: left;
        width: 100%;
        
    }
    
    button{
        top: 753px;
        width: 300px;
    }
}
</style>
