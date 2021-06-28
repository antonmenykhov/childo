<template>
<section class="about" id="about">
    <h2>О нас</h2>
    <h5>Давайте знакомиться!</h5>
    <div class="about-holder">
        <div class="about-w about-1">
            Наша команда — это творческая семья, которая поддерживает друг друга на пути к мечте.
        </div>
        <div class="about-w about-2">
            С помощью рисования можно воплотить в жизнь самые яркие фантазии, создать собственную сказку, найти свое предназначение.

        </div>
        <div class="about-w about-3">
            Мы хотим показать, что взять в руки кисти и краски может абсолютно каждый ребенок и взрослый. Поэтому разработали авторскую методику, благодаря которой уровень вашего мастерства будет расти с каждым занятием — даже если вы никогда не рисовали раньше.

        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 125px;
    padding-bottom: 194px;

}

.about-holder {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1160px;
    width: 100%;
    padding: 0 60px;

    .about-w {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;

        color: #000000;
    }
}

.about-1 {
    width: 455px;
    position: relative;
}

.about-1::before {
    background: linear-gradient(270deg, rgba(252, 176, 59, 0.7) 0%, rgba(238, 108, 24, 0.7) 100%);
    content: "";
    height: 250px;
    width: 250px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -80px
}

.about-2 {
    align-self: flex-end;
    width: 488px;
    position: relative;
    margin-top: 31px;
}

.about-2::before {
    background: linear-gradient(270deg, rgba(125, 215, 231, 0.7) 0%, rgba(48, 156, 183, 0.7) 100%);
    content: "";
    height: 250px;
    width: 250px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -65px
}

.about-3 {
    margin-top: 88px;
    width: 846px;
    position: relative;
}

.about-3::before {
    background: linear-gradient(270deg, rgba(245, 116, 186, 0.7) 0%, rgba(205, 35, 127, 0.7) 100%);
    content: "";
    height: 250px;
    width: 250px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -50px
}

h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    margin: 0 0 154px 0;
    text-align: center;

}

h2 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    color: #515151;
    text-align: center;
    position: relative;

}

h2::first-letter {
    opacity: 0;
}

h2::before {
    content: '';
    background: url('/img/о.png') no-repeat center center / contain;
    width: 50.26px;
    height: 57.08px;
    position: absolute;
    z-index: 3;
    top: 7px;
    left: 4px;
}

h2::after {
    content: '';
    background: white;
    width: 52.26px;
    height: 57.08px;
    position: absolute;

    top: 5px;
    left: 3px;
}

.about::before {
    content: "";
    background: url('/img/about-left.png') no-repeat left center / contain;
    height: 684px;
    width: 358px;
    left: 0;
    bottom: 90px;
    position: absolute;

}

.about::after {
    content: "";
    background: url('/img/about-right.png') no-repeat right center / contain;
    height: 654px;
    width: 358px;
    right: 0;
    position: absolute;
    top: 0;
}

@media (max-width: 1500px) {
    h5 {
        font-size: 24px;
    }

    .about-holder {
        max-width: 1000px;
        width: 100%;
    }
}

@media (max-width: 1250px) {
    h2 {
        font-size: 40px;
        line-height: 40px;

    }

    h2::before {
        height: 36px;
        width: 36px;
        left: -5px;
        top: 4px
    }

    h2::after {
        left: -7px;
        height: 40px;
        width: 40px;
    }

    .about::after {
        height: 500px;
        bottom: 0;
        top: unset;
    }

    .about::before {
        height: 500px;
        bottom: unset;
        top: 100px
    }

    h5 {
        font-size: 16px;
        line-height: 20px;
    }

    .about-holder {
        max-width: 640px;

        .about-w {
            font-size: 16px;
            line-height: 20px;
        }

        .about-1 {
            max-width: 300px;
            margin-bottom: 121px;
        }

        .about-2 {
            max-width: 331px;
            margin-bottom: 121px;
        }

        .about-3 {
            max-width: 552px;

        }

        .about-1::before,
        .about-2::before,
        .about-3::before {
            height: 150px;
            width: 150px;
        }

        .about-1::before {
            top: -50px
        }

        .about-2::before {
            top: -35px
        }

        .about-3::before {
            top: -25px
        }
    }
}

@media (max-width:800px) {
    h2 {
        font-size: 20px;
        line-height: 20px;
    }

    h2::before {
        height: 20px;
        width: 18px;
        top: 1px;
    }

    h2::after {
        height: 20px;
        width: 18px;
        top: 1px;
    }

    h5 {
        font-size: 8px;
        line-height: 10px;
        margin-bottom: 61px;
    }

    .about::after {
        width: 100px;
        top: 0;
        height: 200px;
    }

    .about::before {
        top: unset;
        bottom: 50px;
        width: 100px;
        height: 200px;
    }

    .about {
        padding: 0 0 86px 0;
    }

    .about-holder {
        max-width: 300px;
        padding: 0;

        .about-w {
            font-size: 10px;
            line-height: 12px;

        }

        .about-1 {
            max-width: 183px;
            margin-bottom: 0;
        }

        .about-2 {
            max-width: 201px;
            margin-left: 182px;
            margin-bottom: 51px;
            margin-top: 63px;
        }

        .about-3 {
            max-width: 314px;
            margin-top: 0;
        }

        .about-1::before {
            height: 80px;
            width: 80px;
            top: -25px;
            left: -30px;
        }

        .about-2::before {
            height: 80px;
            width: 80px;
            top: -20px;
            left: -30px;
        }

        .about-3::before {
            height: 80px;
            width: 80px;
            top: -10px;
            left: -30px;
        }
    }
}

.mobile {
    h2::before {
        left: -3px !important;
        top: 1px !important;

    }

    h2::after {
        left: -3px !important;
        top: 1px !important;

    }
}
</style>
