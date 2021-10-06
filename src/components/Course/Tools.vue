<template>
<section :class="courseData.teacher.style">
    <div class="container">
        <h2>
            ИНСТРУМЕНТЫ <br> И МАТЕРИАЛЫ ДЛЯ КУРСА
        </h2>
        <div class="tools">
            <ul v-if="courseData.teacher.style=='cs-1'">
                <li v-for="item,i in tools" :key="i">{{item}}</li>
            </ul>
            <div v-if="courseData.teacher.style=='cs-2'">
                <ul class="apple">
                    <li v-for="item,i in apple" :key="i" v-html="item"></li>
                </ul>
                <h4>
                    Программы для планшетов под Android
                </h4>
                <ul class="progs">
                    <li v-for="item,i in android" :key="i" v-html="item">

                    </li>
                </ul>
                <h4>В качестве бонуса, так же вам предоставляем:
                </h4>
                <ul class="bonuses">
                    <li v-for="item,i in courseData.bonus" :key="i">
                        <p>{{item.name}}</p>
                        <button>Скачать</button>
                    </li>
                </ul>
            </div>
            <div class="image" :style="'background: url(\''+url+courseData.toolsImage.formats.large.url+'\') no-repeat center center / cover'"></div>

        </div>
    </div>
</section>
</template>

<script>
import api from '../../constants'
export default {
    props: {
        courseData: Object
    },
    data() {
        return {

            url: api.url
        }
    },
    computed: {
        android: function () {
            return this.courseData.android.split('\n')
        },
        tools: function () {
            return this.courseData.tools.split('\n')
        },
        apple: function () {
            return this.courseData.apple.split('\n-')
        },
    }
}
</script>

<style lang="scss" scoped>
.container{
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    position: relative;
}
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
    color: #333333;
    max-width: 1020px;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: 194px;
    top: 9px;
    content: '';
    background: url('/img/courses/1/prog/i.svg') no-repeat center center / contain;
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
    
   
    display: flex;
    align-items: stretch;

}

ul {
    max-width: 673px;
    margin-right: 30px;
    flex: 50 1 500px;
}

li {
    font-size: 30px;
    line-height: 37px;
}

.image {
    flex: 1 1 100px;
    height: auto;
    margin: 0;
    content: '';
    margin-right: -15vw;
    
    position: relative;
}

.cs-2 .image {
    height: 418px;
    margin: unset;
    align-self: flex-start;
    margin-right: -15vw;
}

section {
    position: relative;
}

li {
    font-size: 18px;
    line-height: 22px;
    
    color: #333333;
    list-style: none;
    position: relative;
}

li::before {
    content: '';
    background: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    transition: all .2s;
    position: absolute;
    left: -20px;
    top: 2px
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
        font-weight: 700;
        font-size: 20px;
        line-height: 21px;
        margin-top: 50px;
        margin-bottom: 30px;
        color: #333333;
        
    }

    li {
        font-size: 18px;
        line-height: 22px;
        
    }

    li::before {
        top: 4px;
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
            top: 4px;
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
        margin-right: 70px;
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
            top: 4px;
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

.mobile {
    h2::before {
        left: 57px !important;
        top: 1px !important;

    }

    h2::after {
        left: 57px !important;
        top: 1px !important;

    }
}
</style>
