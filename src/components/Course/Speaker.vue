<template>
<section :class="courseData.teacher.style">
    <div class="container">
        <div class="center">
            <h2>Спикер</h2>
            <div class="image" :style="'background: url(\''+url+courseData.teacher.Avatar.formats.medium.url+'\') no-repeat center center / cover'">
                <div :class="courseData.teacher.color"></div>
            </div>
            <h3 class="name">{{courseData.teacher.Name}}</h3>
        </div>
        <p class="description" v-html="courseDescription"></p>
        <h4 v-if="courseData.teacher.style=='cs-1'">Мое образование:</h4>
        <h4 v-if="courseData.teacher.style=='cs-2'">Пройдены курсы:</h4>
        <ul>
            <li v-for="item in univer" :key="item">{{item}}</li>
        </ul>
        <div class="quotes">
            <div class="quote-1" v-if="quote1" v-html="quote1"></div>
            <div class="quote-2" v-if="courseData.teacher.quote2" v-html="quote2"></div>
        </div>
        <h4 v-if="courseData.teacher.style=='cs-1'">мои достижения:</h4>
        <ul v-if="courseData.teacher.style=='cs-1'">
            <li v-for="item in achives" :key="item">{{item}}</li>
        </ul>

        <h3 class="go">Присоединяйтесь!</h3>
        <button v-scroll-to="'#prices'">Выбрать тариф</button>

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
            url: api.url,

        }
    },
    computed: {
        courseDescription: function () {
            return this.courseData.teacher.courseDescription.split('\n').join('<br>')
        },
        achives: function () {
            return this.courseData.teacher.achives.split('\n')
        },
        univer: function () {
            return this.courseData.teacher.school.split('\n')
        },
        quote1: function () {
            return this.courseData.teacher.quote1.split('\n').join('<br>')
        },
        quote2: function () {
            return this.courseData.teacher.quote2.split('\n').join('<br>')
        },
    }
}
</script>

<style lang="scss" scoped>
.pink {
    position: absolute;
    z-index: -1;
    height: 226px;
    width: 234px;
    background: url('/img/teachers/pink.svg') no-repeat center center / contain;
    top: -17px;
    right: -83.25px;
}

.green {
    position: absolute;
    z-index: -1;
    height: 240px;
    width: 210px;
    background: url('/img/teachers/green.svg') no-repeat center center / contain;
    bottom: -45px;
    right: -60px;
}

.orange {
    position: absolute;
    z-index: -1;
    height: 286px;
    width: 283px;
    background: url('/img/teachers/orange.svg') no-repeat center center / contain;
    top: -20px;
    left: -90px;
}

.blue {
    position: absolute;
    z-index: -1;
    height: 202px;
    width: 275px;
    background: url('/img/teachers/blue.svg') no-repeat center center / contain;
    bottom: -6px;
    left: -79px;
}

.container {
    flex-direction: column;
    margin-top: 200px;

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

h3 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    /* identical to box height */

    color: #333333;
}

h4 {
    font-family: Intro;
    font-size: 20px;
    font-weight: 700;
}

h2 {

    margin-bottom: 50px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;

    color: #333333;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -11px;
    top: 7px;
    content: '';
    background: url('/img/courses/1/speaker/c.svg') no-repeat center center / contain;
    height: 70.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -11px;
    top: 7px;
    content: '';
    background: white;
    height: 70.72px;
    width: 65.5px;

    position: absolute;
}

.description {
    font-size: 18px;
    line-height: 22px;

    color: #333333;
    margin-top: 50px;
    margin-bottom: 50px;
}

li {
    font-size: 18px;
    line-height: 22px;

    color: #333333;
    text-indent: 25px;
    list-style: none;
    position: relative;
}

li::before {
    content: '';
    background: #333333;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    transition: all .2s;
    position: absolute;
    left: 0;
    top: 3px
}

li:hover::before {
    transform: scale(1.2);

}

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
ul {
    padding-top: 30px;
    padding-bottom: 51px;
    padding-left: 0;
    
}
.quotes{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.quote-1,
.quote-2 {

    border-radius: 20px;
    padding: 34px 3px 36px 40px;
    margin-right: 30px;
    max-width: 482px;
    color: white;
    flex: 1;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 51px;
}

.quote-1 {
    
    background: linear-gradient(93.13deg, rgba(245, 116, 186, 0.75) 0%, rgba(206, 69, 143, 0.75) 100%);
    box-shadow: 0px 0px 40px #F574BA;
}

.quote-2 {
    background: linear-gradient(93.13deg, rgba(246, 106, 22, 0.75) 0%, rgba(246, 106, 22, 0.75) 100%);
    box-shadow: 0px 0px 40px #F7751C;
}

.go {
    margin-top: 50px;
    margin-bottom: 100px;
    font-size: 70px;
    text-align: center;
    width: 100%;
}

button {
    align-self: center;
    background: linear-gradient(93.43deg, #7DD7E7 0%, #45C6DD 100%);
    box-shadow: 0px 0px 60px #7DD7E7;
    border-radius: 20px;
    padding: 26px 119px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 32px */

    color: #FFFFFF;
}

section {
    position: relative;
}

.name {
    max-width: 350px;
}

.cs-2 {
    button {
        background: linear-gradient(93.43deg, #F574BA 0%, #C9287F 100%);
        box-shadow: 0px 0px 60px #F574BA;
    }

    .description {
        max-width: 676px;
    }
}

.mobile {
    h2::before {
        left: -3px !important;
        top: 0px !important;

    }

    h2::after {
        left: -4px !important;
        top: 1px !important;

    }
}
</style>
