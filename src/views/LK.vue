<template>
<section :class="style">
    <div class="container">
        <div class="main-info">
            <div class="info">
                <div class="avatar">

                </div>
                <div class="fullName">
                    <div class="firstName">
                        Фамилия
                    </div>
                    <div class="secondName">
                        Имя
                    </div>
                </div>
                <button>Выйти</button>
            </div>
            <div class="description">
                Мы рады видеть вас в творческом проекте онлайн-курсов по рисованию «ChilDo»! Благодарим вас за приобретение курса. Давайте проведем небольшую экскурсию по нашему волшебному миру.<br>
                В «Личном кабинете» вы можете отслеживать прогресс и видеть доступные курсы. Если вы откроете блок «О нас», то познакомитесь с дружной командой нашего проекта — его создателем и художниками.<br>
                На странице «Курсы» вас ждет описание всех курсов, список необходимых материалов для обучения и краткое описание каждого занятия. После просмотра каждого урока вам нужно будет выполнить домашнее задание — сфотографировать свою картину и загрузить ее в специальную форму на сайте. После этого вы сможете продолжить обучение.<br>
                Изучив все уроки и техники, вы сможете создать собственные неповторимые шедевры. В конце курса вас ждет приятный бонус — сертификат о прохождении онлайн-курса по рисованию «ChilDo».
                <br>Учитесь и творите вместе с «ChilDo»! Желаем удачи и вдохновения!

            </div>
        </div>
        <div class="works">
            <h3>Мои работы</h3>
            <div class="works-wrapper">
                <div class="work" v-for="item in worksNum" :key="item"></div>
                <div class="more-button">
                    <div class="icon">+</div>
                    <p>Смотреть еще</p>
                </div>
            </div>
            <div class="support-wrapper">
                <p>Воспользуйся чатом поддержки</p>
                <button>Открыть</button>
            </div>
        </div>
        <div class="sidebar">
            <h3>Выбранный курс</h3>
            <ul>
                <li>Дата покупки: </li>
                <li>Старт курса: </li>
                <li>Конец курса: </li>
            </ul>
            <button @click="$router.push({
              path:'/lessons'
            })">Перейти к урокам</button>
            <h3>Просмотренно уроков:</h3>
            <div class="progressbar">
                <div class="progress" style="width: 60%">60%</div>
            </div>
            <button>Дипломы</button>
            <h3>Мои сертификаты:</h3>
            <div class="cert"></div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {

            style: 'child',
        }
    },
    computed: {
        worksNum: function () {
            let width = window.innerWidth;
            let num = 0;
            if (width > 1250) {
                num = 3
            }
            if (width < 1250 && width > 800) {
                num = 2
            }
            return num
        }
    }
}
</script>

<style lang="scss" scoped>
.child::before {
    content: '';
    position: absolute;
    background: url('/img/lk/left.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 600px;
    left: 0;
    top: 132px
}

.child::after {
    content: '';
    position: absolute;
    background: url('/img/lk/right.svg') no-repeat right bottom / contain;
    height: 600px;
    width: 600px;
    right: 0;
    bottom: 0;
}

.grow::before {
    content: '';
    position: absolute;
    background: url('/img/lk/left2.svg') no-repeat left bottom / contain;
    height: 600px;
    width: 600px;
    left: 0;
    top: 132px
}

.grow::after {
    content: '';
    position: absolute;
    background: url('/img/lk/right2.svg') no-repeat right bottom / contain;
    height: 600px;
    width: 600px;
    right: 0;
    bottom: 0;
}

h3 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    /* identical to box height */

    color: #515151;
}

section {
    position: relative;
    z-index: 2000;
    background: white;

}

.container {
    display: grid;
    grid-template-areas:
        "main sidebar"
        "works sidebar";
    grid-template-columns: 73% 27%;
}

.main-info {
    grid-area: main;
    margin-top: 60px;

    .info {
        display: flex;
        justify-content: space-between;
        padding-right: 60px;
        align-items: center;
        margin-bottom: 71px;

        .avatar {
            height: 120px;
            width: 120px;
            background-color: #D1D1D1;
            border-radius: 50%;
        }

        .fullName {
            flex: 1;
            padding-left: 30px;
            font-size: 20px;
            line-height: 24px;

        }

        button {
            background: linear-gradient(95.14deg, #FAA032 0%, #F96F11 100%);
            box-shadow: 0px 0px 40px #F98923;
            border-radius: 20px;
            font-size: 20px;
            line-height: 160.2%;
            /* identical to box height, or 32px */
            padding: 14px 66px;
            color: #FFFFFF;
            border: none;
            outline: none;
        }
    }

    .description {
        border: 3px solid #45C6DD;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(69, 198, 221, 0.5);
        border-radius: 20px;
        padding: 33px 46px 37px;
        font-size: 20px;
        line-height: 24px;
        margin-left: 30px;
        margin-right: 60px;
        position: relative;
        background: white;

    }

    .description::before {
        content: '';
        background: url('/img/lk/descr.svg') no-repeat left center / contain;
        position: absolute;
        left: -50px;
        height: 100px;
        width: 100px;
        z-index: -1;
        bottom: 30px;
    }
}

.works {
    grid-area: works;

    h3 {
        margin-top: 52px;
        margin-bottom: 28px;
    }

    .works-wrapper {
        display: flex;
        align-items: center;
        margin-right: 23px;

        .work {
            flex: 1 1 200px;
            height: 152px;
            background-color: #C4C4C4;
            border-radius: 20px;
            margin-right: 35px;
        }

        .more-button {
            width: 56px;

            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #000000;

            p {
                font-size: 10px;
                line-height: 12px;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: linear-gradient(135deg, #FA9C2F 0%, #F97314 100%);
                height: 50px;
                width: 50px;
                color: white;
                font-size: 40px;
                font-weight: 200;
                margin-bottom: 5px;

            }
        }

    }

    .support-wrapper {
        background: #FFC873;
        border-radius: 10px;
        margin-right: 60px;
        display: flex;
        align-items: center;
        margin-top: 65px;
        margin-bottom: 88px;
        justify-content: space-between;

        p {
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            padding: 20px;

        }

        button {
            background: #F26814;
            border-radius: 10px;
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            padding: 16px 19px;
            margin-right: 20px;
            color: #FFFFFF;
            height: 44px;
            border: none;
            outline: none;
            width: 150px;
        }
    }
}

.sidebar {
    grid-area: sidebar;
    border-left: 3px solid #7E7E7E;
    padding-left: 42px;

    h3 {
        margin-top: 90px;
        margin-bottom: 30px;
    }

    li {
        font-size: 20px;
        line-height: 160.2%;
        /* identical to box height, or 32px */
        list-style: none;
        color: #000000;
        position: relative;

    }

    li::before {
        content: '';
        position: absolute;
        left: -20px;
        background: #7E7E7E;
        border-radius: 50%;
        height: 12px;
        width: 12px;
        top: 10px;
    }

    ul {
        padding-left: 25px;
    }

    button {
        background: linear-gradient(93.43deg, #A1E0EC 0%, #59BFD7 100%);
        box-shadow: 0px 0px 60px #7DD7E7;
        border-radius: 20px;
        margin-top: 31px;
        width: 245px;
        height: 60px;
        color: white;
        border: none;
        outline: none;
        font-size: 20px;
    }

    .progressbar {
        background: #E96EA3;
        box-shadow: 0px 0px 30px rgba(252, 70, 169, 0.5);
        border-radius: 10px;
        height: 30px;
        width: 230px;
    }

    .progress {
        background: #AA0E7A;
        border-radius: 10px;
        height: 100%;
        color: white;
        font-size: 16px;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }

    .cert {
        height: 184px;
        width: 261px;
        background: #c4c4c4;
        border-radius: 15px;
    }
}

@media (max-width: 1250px) {
    .child {
        .container {}
    }

    h3 {
        font-size: 25px;
        line-height: 25px;
        margin-top: 32px;
        margin-bottom: 20px;
    }

    .works {
        margin-top: -50px;

        .works-wrapper {
            .work {
                height: 115px;
            }
        }

        h3 {
            margin-top: 0;
        }

        .support-wrapper {
            margin-top: 30px;

            p {
                font-weight: 300;
                font-size: 14px;
                line-height: 17px;
            }

            button {
                font-size: 10px;
                line-height: 12px;
                padding: 12px 6px;
                width: 124px;
                height: 36px;
            }
        }
    }

    .main-info {
        .info {
            .avatar {
                height: 100px;
                width: 100px;
            }

            .fullName {
                font-size: 16px;
                line-height: 20px;
                padding-left: 20px;
            }

            button {
                font-size: 14px;
                line-height: 160.2%;
                padding: 12px 54px;
            }
        }

        .description {
            font-size: 12px;
            line-height: 15px;
            padding: 18px 10px;
        }

        .description::before {
            height: 70px;
            left: -35px;
        }
    }

    .sidebar {
        h3 {
            margin-top: 30px;
            margin-bottom: 15px;
        }

        li {
            font-size: 14px;
            line-height: 160.2%;
            margin-bottom: 10px;
        }

        li:last-child {
            margin-bottom: 0;
        }

        button {
            font-size: 14px;
            line-height: 160.2%;
            width: 181px;

        }

        .cert {
            height: 150px;
            width: 213px;
        }
    }

    .child::after {
        height: 300px;
        right: -100px;
    }

    .child::before {
        height: 300PX;
    }

    .grow::after {
        height: 300px;
        right: -100px;
    }

    .grow::before {
        height: 300PX;
    }
}
</style>
