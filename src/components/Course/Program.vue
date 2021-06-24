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
    props: {
        courseData: Object
    }
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

.cs-2 {
    h2::before {
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

@media (max-width: 1500px) {
    .program {
        flex: 1 1 225px;
        background: white;
    }

    h4 {
        font-size: 22px;
    }

}

@media (max-width: 1250px) {
    h2 {
        font-size: 40px;
        line-height: 40px;
        margin-top: 207px;
        margin-bottom: 100px;
    }

    h2::before {
        height: 35px;
        width: 43px;
        top: 6px;
        left: -6px;
    }

    h2::after {
        height: 35px;
        width: 35px;
        top: 6px;
        left: -6px;

    }

    .program {
        flex: 1 1 150px;
        width: unset;
        min-height: 192px;
        margin: 29px 20px;
        max-width: 175px;
    }

    .program-holder {
        margin-bottom: 192px;
    }

    h4 {
        font-size: 15px;
        line-height: 15px;
    }

    p {
        font-size: 10px;
        line-height: 12px;
    }

    .image {
        height: 58px;
        width: 58px;
        top: -29px
    }

    .cs-1 {
        .left {
            height: 300px;
            top: 0;
        }

        .left::after {
            height: 350px;
            top: 120px;
        }
    }

    .cs-2 {
        .left {
            height: 300px;
            top: 0;
        }

        .left::after {
            height: 250px;
            top: 160px;
        }
    }

    .cs-1::after {

        height: 400px;
        right: -60px;
        transform: rotate(6deg);
    }

    .cs-2::after {

        height: 350px;
        right: -60px;
        transform: rotate(6deg);
    }

}

@media (max-width: 800px) {
    .cs-1 {
        .left {
            display: none;
        }
    }

    .cs-2 {
        .left {
            display: none;
        }
    }
    .cs-2::after{
        height: 200px;
        transform: unset;
        bottom: 100px;
        right: 0;
        background: url('/img/mobileProgram.svg') no-repeat right  center / contain;
    }
    .cs-1::after{
        height: 200px;
        transform: unset;
        bottom: 100px;
        right: 0;
        background: url('/img/mobileProgram.svg') no-repeat right  center / contain;
    }

    h2 {
        font-size: 20px;
        line-height: 20px;
        margin-top: 40px;
        margin-bottom: 72px;
        width: fit-content;
        height: fit-content;
    }

    h2::before {
        left: -2px;
        top: 3px;
        height: 17px;
        width: 19px;
    }

    h2::after {
        left: -2px;
        top: 3px;
        height: 17px;
        width: 19px;
    }
    .program-holder{
        margin-bottom: 67px;
    }
    .program {
        min-height: 143px;
        max-width: 131px;
        margin: 0 17px 66px;
        padding: 38px 5px 0;
        .image{
            height: 43px;
            width: 43px;
            top: -21px
        }

        h4 {
            font-size: 12px;
            line-height: 12px;
            max-width: 115px;
        }

        p {
            font-size: 8px;
            line-height: 10px;
        }
    }
}
.mobile{
     h2::before {
        left: -3px!important;
        top: 1px!important;
       
    }

    h2::after {
        left: -3px!important;
        top: 1px!important;
       
    }
}
</style>
