<template>
<section :class="courseData.style">
    <h2>
        ИНСТРУМЕНТЫ <br> И МАТЕРИАЛЫ ДЛЯ КУРСА
    </h2>
    <div class="tools">
        <ul v-if="courseData.style=='cs-1'">
            <li v-for="item in courseData.tools" :key="item">{{item}}</li>
        </ul>
        <div v-if="courseData.style=='cs-2'">
            <ul class="apple">
                <li v-for="item in courseData.apple" :key="item" v-html="item"></li>
            </ul>
            <h4>
                Программы для планшетов под Android
            </h4>
            <ul class="progs">
                <li v-for="item in courseData.progs" :key="item" v-html="item">

                </li>
            </ul>
            <h4>В качестве бонуса, так же вам предоставляем:
            </h4>
            <ul class="bonuses">
                <li v-for="item in courseData.bonuses" :key="item">
                    <p>{{item.name}}</p>
                    <button>Скачать</button>
                </li>
            </ul>
        </div>
        <div class="image" :style="'background: url(\'/img'+courseData.toolsimage+'\') no-repeat center center / cover'"></div>

    </div>
</section>
</template>

<script>
export default {
    props: {
        courseData: Object
    }
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
    left: 194px;
    top: 9px;
    content: '';
    background: url('/img/courses/1/prog/и.svg') no-repeat center center / contain;
    height: 57.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: 194px;
    top: 9px;
    content: '';
    background: white;
    height: 57.72px;
    width: 64.5px;

    position: absolute;
}

section {
    display: flex;
    flex-direction: column;
    overflow: hidden;

}

.tools {
    margin-left: 22vw;
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

.cs-2 .image {
    height: 814px;
    margin: unset;
    align-self: center;
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

section {
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

.cs-2::before {
    position: absolute;
    background: url('/img/courses/2/tools/left.svg') no-repeat left top / contain;

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
    color: #1f1f1f;
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

li:hover::before {
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

.cs-2 {
    .certs {
        justify-content: center;

        p {
            flex: 1 1 300px;
        }

        button {
            flex: 1 1 300px;
        }
    }

    .tools {
        margin-bottom: 152px;
    }

    button {
        background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
        box-shadow: 0px 0px 40px #D6358C;
        border-radius: 25px;
        font-size: 25px;
        line-height: 160.2%;
        /* identical to box height, or 40px */

        text-align: center;

        color: #FFFFFF;
        padding: 20px 99px;
        border: none;
        outline: none;
        margin: 40px 0;
        margin-left: -25px;
    }

    h4 {
        font-weight: 600;
        font-size: 50px;
        line-height: 61px;
        margin-top: 74px;
        margin-bottom: 21px;
        color: #515151;
        max-width: 673px;
    }

    li {
        font-size: 30px;
        line-height: 37px;
        max-width: 673px;
    }

    li::before {
        top: 8px;
    }

    .progs {

        li:nth-child(1)::before,
        li:nth-child(5)::before {
            background: #A7CA3E;
        }

        li:nth-child(2)::before,
        li:nth-child(6)::before {
            background: #45C6DD;
        }

        li:nth-child(3)::before,
        li:nth-child(7)::before {
            background: #E757A5;
        }

        li:nth-child(4)::before,
        li:nth-child(8)::before {
            background: #F66C17;
        }
    }

    .bonuses {
        padding: 0;

        li {
            text-indent: 25px;
        }

        li::before {
            left: 0;
            top: 8px;
        }

        li:nth-child(1)::before,
        li:nth-child(4)::before {
            background: #45C6DD;
        }

        li:nth-child(2)::before,
        li:nth-child(5)::before {
            background: #F66C17;
        }

        li:nth-child(3)::before,
        li:nth-child(6)::before {
            background: #A7CA3E;
        }
    }

    .apple {
        margin-right: 0;
        padding-left: 0;

        li {
            text-indent: 25px;
            margin-right: 0;
            max-width: 673px;
            margin-bottom: 37px;
        }

        li:last-child {
            margin-bottom: 0;
        }

        li::before {
            left: 0;
            top: 8px;
        }

        li:nth-child(1)::before,
        li:nth-child(4)::before {
            background: #E757A5;
        }

        li:nth-child(2)::before,
        li:nth-child(5)::before {
            background: #F66C17;
        }

        li:nth-child(3)::before,
        li:nth-child(6)::before {
            background: #A7CA3E;
        }

    }
}

@media (max-width: 1500px) {
    li {
        font-size: 18px;

    }

    li::before {
        height: 16px;
        width: 16px;
        top: 5px
    }
}

@media (max-width: 1250px) {
    h2 {
        font-size: 40px;
        line-height: 40px;
        margin-top: 40px;
        margin-bottom: 90px;
        max-width: 1020px;
    }

    h2::before {
        top: 5.5px;
        height: 35px;
        width: 37px;
        left: 112px;
    }

    h2::after {
        top: 5.5px;
        height: 35px;
        width: 37px;
        left: 112px;
    }

    ul {
        max-width: 392px;
        margin-right: 92px;
    }

    li {
        font-size: 16px;
        line-height: 20px;
        max-width: 392px;
    }

    li::before {
        height: 14px;
        width: 14px;
        top: 3px;
        left: -18px;
    }

    .image::before {
        height: 200px;
        bottom: -100px;
        left: -150px;
    }

    .tools {
        margin-left: 162px;
        margin-bottom: 179px;
    }

    .cs-1::before {
        height: 400px;
        top: 50px;
    }

    .cs-2::before {
        height: 400px;
        top: 50px;
    }

    .cs-2 {
        .tools {
            margin-bottom: 0;
        }

        button {
            font-size: 16px;
            line-height: 160.2%;
            padding: 17px 65px;
        }

        .image {
            height: 467px;
        }

        h4 {
            font-size: 25px;
            line-height: 30px;
            margin-top: 30px;
            margin-bottom: 12px;
            max-width: 343px;
        }

        .apple {
            li {
                font-size: 16px;
                line-height: 20px;
                max-width: 398px;
                text-indent: 20px;
            }

            li::before {
                top: 3px;
            }
        }

        li {
            font-size: 16px;
            line-height: 20px;
        }

        li::before {
            top: 3px;
        }
    }
}

@media (max-width: 800px) {
    h2 {
        width: fit-content;
        height: fit-content;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 38px;
    }

    h2::before {
        top: 3px;
        left: 57px;
        height: 17px;
        width: 17px;
    }

    h2::after {
        top: 3px;
        left: 57px;
        height: 17px;
        width: 17px;
    }
    .cs-1::before{
        height: 250px;
        left: -24px;
        bottom: 0;
        transform: rotate(10deg);
    }
    .tools {
        margin-left: 38px;
        margin-bottom: 51px;
        align-items: center;

        ul {
            margin-right: 10px;
            max-width: 250px;
        }

        li {
            font-size: 12px;
            line-height: 15px;
        }
        li::before{
            height: 10px;
            width: 10px;
            top: 2px;
        }

        .image {
            height: 225px;
            margin-right: -170px;
        }
        .image::before{
            height: 150px;
            bottom: -60px;
            left: -140px;
        }
    }
}
</style>
