<template>
<section :class="courseData.style">
    <div class="left"></div>
    <div class="container">
        <h2>Программа курса</h2>
        <div class="program-holder">
            <div class="program" :class="item.color" v-for="item,i in courseData.lessons" :key="i">
                <div class="image" :style="'background: url(\'/img'+item.img+'\') no-repeat center center / cover'"></div>
                <h4>{{item.name}}</h4>
                <p>{{item.smallDescription}}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            courseData: {
                style: 'cs-2',
                lessons: [{
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'orange'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'green'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'pink'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'blue'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'pink'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'orange'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'orange'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'green'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'blue'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'blue'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'pink'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'orange'
                    },
                    {
                        img: '/courses/1/prog/prog1.png',
                        smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                        name: 'УРОК 1 “ПРИВЕТ ИЗ АНТАРКТИКИ”',
                        color: 'green'
                    },
                ]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    align-items: center;
}

h2 {
    margin-top: 358px;
    margin-bottom: 165px;
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
    left: -10px;
    top: 10px;
    content: '';
    background: url('/img/courses/1/prog/п.svg') no-repeat center center / contain;
    height: 56.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}
h2::after {
    left: -15px;
    top: 10px;
    content: '';
    background: white;
    height: 56.72px;
    width: 70.5px;
    
    position: absolute;
}
.cs-2{
    h2::before{
        background: url('/img/courses/2/prog/п.svg') no-repeat center center / contain;
    }
}
.program-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 211px;
}

.program {
    max-width: 300px;
    min-height: 329px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 6px 13px;
    margin: 50px 35px;
    border-radius: 20px;
    position: relative;
}

.image {
    position: absolute;
    height: 100px;
    width: 100px;
    top: -50px;
    border-radius: 50%;
}

h4 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 28px;
    text-align: center;

    color: #515151;
}

p {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    flex: 1;
    vertical-align: middle;
    color: #000000;
    display: flex;
    align-items: center;
}

.orange {
    box-shadow: 0px 0px 60px #F98C25;

    .image {
        box-shadow: 0px 0px 60px #F98C25;
    }
}

.green {
    box-shadow: 0px 0px 60px #A7CA3E;

    .image {
        box-shadow: 0px 0px 60px #A7CA3E;
    }
}

.pink {
    box-shadow: 0px 0px 60px #E757A5;

    .image {
        box-shadow: 0px 0px 60px #E757A5;
    }
}

.blue {
    box-shadow: 0px 0px 60px #45C6DD;

    .image {
        box-shadow: 0px 0px 60px #45C6DD;
    }
}

.cs-1 {
    position: relative;

    .left {
        position: absolute;
        background: url('/img/courses/1/prog/left.png') no-repeat left bottom / contain;
        height: 435px;
        width: 228px;
        top: 650px;
    }

    .left::after {
        position: absolute;
        content: '';
        background: url('/img/courses/1/prog/leftbottom.svg') no-repeat left top / contain;
        height: 535px;
        width: 288px;
        bottom: -300px;
    }
}

.cs-1::after {
    position: absolute;
    content: '';
    background: url('/img/courses/1/prog/right.svg') no-repeat right bottom / contain;
    height: 735px;
    width: 488px;
    bottom: 92px;
    right: 0;
}
.cs-2 {
    position: relative;

    .left {
        position: absolute;
        background: url('/img/courses/2/prog/left.png') no-repeat left bottom / contain;
        height: 435px;
        width: 228px;
        top: 650px;
    }

    .left::after {
        position: absolute;
        content: '';
        background: url('/img/courses/2/prog/leftbottom.svg') no-repeat left top / contain;
        height: 455px;
        width: 288px;
        bottom: -300px;
    }
}

.cs-2::after {
    position: absolute;
    content: '';
    background: url('/img/courses/2/prog/right.svg') no-repeat right bottom / contain;
    height: 505px;
    width: 488px;
    bottom: 92px;
    right: 0;
}
</style>
