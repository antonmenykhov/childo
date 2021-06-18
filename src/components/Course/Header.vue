<template>
<header :class="courseData.style">
    <div :class="courseData.girl"></div>
    <div class="gradient"></div>
    <div class="header-container">
        <div class="title">{{courseData.header}}

        </div>
        <div class="description">{{courseData.description}}
        </div>
        <div class="button-holder">
            <button class="left">
                К тарифам
            </button>
            <button class="right">
                Подробнее
            </button>
        </div>
    </div>

</header>
</template>

<script>
export default {
    data() {
        return {
            courseData: {
                header: 'курс 2',
                description: 'Онлайн-курс по рисованию «ChilDo»для детей — это увлекательное путешествие в мир ярких красок, креатива и творчества.',
                girl: 'tanya',
                style: 'cs-2'
            },
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

.gradient {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    transform: rotate(90deg);
    height: 712px;
    width: 277px;
    z-index: 1;
    left: 0;
    bottom: -25vh;
    position: absolute;
}

header {
    overflow: hidden;
    height: 120vh;
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
        max-width: 1160px;
        margin: 0 auto;
        position: relative;
        z-index: 3;

        .title {
            width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 150px;
            line-height: 150px;
            /* identical to box height */

            color: #515151;
            position: relative;

        }

        .title::before {
            background: url('/img/courses/1/к.svg') no-repeat center center / contain;
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
            content: "";
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
            font-size: 30px;
            line-height: 37px;
            width: 621px;
            color: #000000;
            margin-top: 38px;
        }

        .button-holder:hover {
            cursor: pointer;

        }

        .button-holder {
            display: flex;
            align-items: center;
            margin-top: 76px;

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
                padding: 20px 80px;
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
    width: 13%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 211px;
    height: 100%;
    top: 0;

}

.cs-1::after {
    background: url('/img/courses/1/top.svg') no-repeat center top / contain;
    content: '';
    top: 0%;
    position: absolute;
    right: 9%;
    width: 40%;
    height: 35%;
    z-index: -1;
}

.cs-2::after {
    background: url('/img/courses/2/top.svg') no-repeat center top / contain;
    content: '';
    top: 0%;
    position: absolute;
    right: 8.5%;
    width: 40%;
    height: 25%;
    z-index: -1;
}

.cs-2 {
    .title::before {
        background: url('/img/courses/2/к.svg') no-repeat center center / contain !important;
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
    height: 1158px;
    position: absolute;
    width: 775px;
    right: 35px;
    top: 169px;

}

.masha::after {
    content: '';
    position: absolute;
    background: url('/img/courses/1/girl.svg') no-repeat center bottom / contain;
    height: 655px;
    width: 558px;
    bottom: 40px;
    left: -40px;
    z-index: -1;
}

.tanya {
    background: url('/img/courses/2/girl.png') no-repeat center center / contain;
    height: 1104px;
    position: absolute;
    width: 934px;
    right: -74px;
    top: 0px;
}
</style>
