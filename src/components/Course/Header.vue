<template>
<header :class="courseData.teacher.style">

    <div class="gradient"></div>
    <div class="header-container">
        <div class="heaader-left">
            <div class="title">Курс {{id*1}}

            </div>
            <div class="description">{{courseData.smallDescription}}
            </div>
            <div class="button-holder">
                <button v-if="show" class="left" v-scroll-to="'#prices'">
                    К тарифам
                </button>
                <button v-if="!show" class="left" @click="$router.push({path: '/lk'})">
                    В личный кабинет
                </button>
                <button class="right" v-scroll-to="'#more'">
                    Подробнее
                </button>
            </div>
        </div>
        <div :class="courseData.girl"></div>
    </div>

</header>
</template>

<script>
export default {

    props: {
        courseData: Object,
        id: null,
        show: Boolean

    },
    data() {
        return {
            data: null
        }
    },
}
</script>

<style lang="scss" scoped>
.gradient {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    transform: rotate(90deg);
    height: 712px;

    width: 277px;
    z-index: 1;
    left: 0;
    bottom: -250px;
    position: absolute;
}

header {
    overflow: hidden;
    padding-top: 275px;
    padding-bottom: 200px;
    width: 100%;
    position: relative;
    background: url('/img/HeaderPens.png') no-repeat left center /contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    .header-container {
        width: 100%;
        height: fit-content;
        max-width: 1058px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
        padding-top: auto;

        .title {
            width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 150px;
            line-height: 150px;
            /* identical to box height */

            color: #333333;
            position: relative;

        }

        .title::before {
            background: url('/img/courses/1/k.svg') no-repeat center center / contain;
            content: "";
            position: absolute;
            height: 122px;
            width: 91px;
            top: 23px;
            left: 8px;
            z-index: 2;
        }

        .title::after {
            background: white;

            position: absolute;
            height: 122px;
            width: 100px;
            top: 20px;
            left: 6px
        }

        .title::first-letter {
            opacity: 0;
        }

        .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 25px;
            line-height: 31px;
            max-width: 540px;
            color: #333333;
            margin-top: 50px;
        }

        .button-holder:hover {
            cursor: pointer;

        }

        .button-holder {
            display: flex;
            align-items: center;
            margin-top: 50px;

            button {

                border-radius: 25px;
                outline: none;
                border: none;
                margin-right: 50px;
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                text-align: center;
                line-height: 160.2%;
                color: white;
                padding: 20px 83px;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }

            button:hover {
                transform: scale(1.1);
            }
        }
    }
}

header::before {
    content: "";
    position: absolute;
    width: 300px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 120px;
    height: 100%;
    top: 0;
    z-index: -1;

}

.cs-1::after {
    background: url('/img/courses/1/top.svg') no-repeat center top / contain;

    top: 0%;
    position: absolute;
    right: 9%;
    width: 40%;
    height: 35%;
    z-index: -1;
}

.cs-2::after {
    background: url('/img/courses/2/top.svg') no-repeat center top / contain;

    top: 0%;
    position: absolute;
    right: 8.5%;
    width: 40%;
    height: 25%;
    z-index: -1;
}

.cs-2 {
    .title::before {
        background: url('/img/courses/2/k.svg') no-repeat center center / contain !important;
    }
}

.cs-1 {

    .left {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
    }

    .right {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
}

.cs-2 {
    .left {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
    }

    .right {
        background: linear-gradient(94.82deg, #84DEEF 0%, #65A5B5 100%);
        box-shadow: 0px 4px 60px #45C6DD;
    }
}

.masha {
    background: url('/img/courses/1/girl.png') no-repeat right center / contain;
    height: 800px;
    position: absolute;
    width: 775px;
    right: -155px;
    top: -100px;

}

.masha::after {

    position: absolute;
    background: url('/img/courses/1/girl.svg') no-repeat center bottom / contain;
    height: 655px;
    width: 558px;
    bottom: 40px;
    left: -40px;
    z-index: -1;
}

.tanya {
    background: url('/img/courses/2/girl.png') no-repeat right center / contain;
    height: 800px;
    position: absolute;
    width: 560px;
    right: -155px;
    top: -170px;
    z-index: 2;
}

@media (max-width:1350px) {
    header {
        background: none;
    }

    header::before {
        content: "";
        position: absolute;
        width: 100px;

        left: 000px;
        z-index: 3;
        top: 0;
    }

    .cs-1::after,
    .cs-2::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 666px;
        left: 000px;
        background: url('/img/PensTablet.png') no-repeat left center /contain;
        top: 0;

    }

    .gradient {
        bottom: unset;
        top: 200px;
        z-index: 3;
    }

}

@media (max-width: 1200px) {
    .header-container {
        padding: 0 40px;
    }
    .masha{
        height: 600px;
        width: 400px;
        right: 0;
        top: -50px
    }
    .tanya{
        height: 600px;
        width: 400px;
        right: 0;
        top: -50px
    }
}

@media (max-width: 900px) {

    .cs-1::after, .cs-2::after {
        content: "";
        position: absolute;
        right: 0;
        height: 31vw;
        width: 100%;
        left: 000px;
        background: url('/img/PensMob.png') no-repeat center center /cover;
        top: 0;

    }

    header::before {
        display: none;
    }

    .gradient {
        transform: none;
        height: 200px;
        width: 100%;
        top: calc(31vw - 160px);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.001) 0%, #FFFFFF 100%);
    }
    header{
        padding-bottom: 85px;
        .header-container{
            .title{
                font-size: 40px;
                line-height: 40px;
                margin-top: 13vh;
            }
            .title::after, .title::before{
                display: none!important;
            }
            .title::first-letter{
                opacity: 1;
            }
            .description{
                margin-top: 30px;
                font-size: 20px;
                line-height: 24px;
            }
            .tanya, .masha{
                display: none;
            }
            .button-holder{
                button{
                    font-size: 18px;
                    line-height: 29px;
                    padding: 0;
                    height: 55px;
                    width: 160px;
                }
            }
        }
    }
}

.mobile {
    .title::after {

        top: 1px !important;

    }

    .title::before {

        top: 1px !important;

    }
}
</style>
