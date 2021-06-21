<template>
<section :class="style">
    <div class="container">
        <h2>Доступные уроки</h2>
        <div class="lessons">
            <div class="lesson" v-for="i in lessonNums" :key="i">
                <div class="image" :style="'background: url(\''+lessons[i-1].img+'\') no-repeat center center / cover'">
                    <div class="play" v-if="lessons[i-1].status==1">

                    </div>
                    <div class="locked" v-if="lessons[i-1].status==0">
                        <div class="icon"></div>
                    </div>
                    <div class="time">{{lessons[i-1].time}}</div>
                    <div class="dz" v-if="lessons[i-1].dz">Есть домашнее задание</div>
                </div>
                <h4>{{lessons[i-1].name}}</h4>
                <p>{{lessons[i-1].smallDescription}}</p>
            </div>
            <div class="more-button">
                <div class="icon">+</div>
                <p>Смотреть еще</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            lessonNums: 5,
            style: 'grow',
            lessons: [{
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 1,
                    dz: 1,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 0,
                    dz: 1,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 0,
                    dz: 0,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 1,
                    dz: 1,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 1,
                    dz: 1,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 1,
                    dz: 1,
                    time: '18:32'
                },
                {
                    name: '“Привет из антарктики”',
                    smallDescription: 'Узнаем, что такое художественное пространство картины и нарисуем забавного пингвина.',
                    img: '/img/lklessons/1.png',
                    status: 1,
                    dz: 1,
                    time: '18:32'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    max-width: 800px;
}

section {
    position: relative;
    z-index: 999;
    background: white;
}

h2 {
    margin-top: 125px;
    margin-bottom: 96px;
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
    max-width: 1080px;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -7px;
    top: 10px;
    content: '';
    background: url('/img/lklessons/д.svg') no-repeat center center / contain;
    height: 57.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -10px;
    top: 9px;
    content: '';
    background: white;
    height: 57.72px;
    width: 64.5px;

    position: absolute;
}

.lessons {
    display: flex;
    flex-wrap: wrap;

}

.lesson {
    flex: 1 1 200px;
    margin: 22px 17px;
    max-width: 230px;

}

.image {
    height: 152px;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.time {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    position: absolute;
    color: #FFFFFF;
    right: 12px;
    bottom: 10px;
}

.play {
    height: 38px;
    width: 38px;
    background: url('/img/lklessons/play.svg') no-repeat center center / contain;
}

.dz {
    font-size: 10px;
    line-height: 12px;
    text-decoration-line: underline;

    color: #515151;
    position: absolute;
    bottom: -20px;
    left: 0;
}

h4 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    color: #515151;

}

p {
    font-size: 15px;
    line-height: 18px;
    margin-top: 5px;
    color: #000000;
}

.locked {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(196, 196, 196, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    .icon {
        background: url('/img/lklessons/lock.svg') no-repeat center center / contain;
        height: 52px;
        width: 42px;
        z-index: 5;
    }
}

.more-button {
    width: 56px;

    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 65px;
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
.child::before{
    position: absolute;
    content: '';
    left: 0;
    bottom: 0px;
    background: url('/img/lklessons/left.svg') no-repeat left bottom / contain;
    height: 800px;
    width: 500px;
}
.child::after{
    position: absolute;
    content: '';
    right:  0;
    top: 0px;
    background: url('/img/lklessons/right.svg') no-repeat right top / contain;
    height: 800px;
    width: 500px;
}
.grow::before{
    position: absolute;
    content: '';
    left: 0;
    bottom: 0px;
    background: url('/img/lklessons/left2.svg') no-repeat left bottom / contain;
    height: 800px;
    width: 500px;
}
.grow::after{
    position: absolute;
    content: '';
    right:  0;
    top: 0px;
    background: url('/img/lklessons/right2.svg') no-repeat right top / contain;
    height: 800px;
    width: 500px;
}
</style>
