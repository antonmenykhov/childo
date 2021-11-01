<template>
<div class="courses">
    <section id="courses" class="courses-wrapper">
        <div class="container">
            <h2 class="k">Курсы</h2>
            <div class="courses-holder">
                <div class="course-wrapper" :class="course.style" v-for="course,i in courses" :key="i">
                    <div class="image" :style="'background: url(\''+url+course.image.formats.small.url+'\') no-repeat center center / cover'"></div>
                    <h3>{{course.Name}}</h3>
                    <div class="space">
                        <p>{{course.description}}</p>
                        <router-link class="btn" :to="{path: '/course/'+(i*1+1)}" target="_blank"> Подробнее</router-link>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <h4>
                Мы знаем, что абсолютно каждый ребенок умеет рисовать! <br> Нужно лишь помочь ему сделать первые шаги навстречу искусству.
            </h4>
            <div class="imtextes">
                <div class="img-text">
                    <div class="img1">

                    </div>
                    <div class="text">
                        Наша авторская методика построена так, что даже те детки, кто не обладает художественными навыками, к концу курса действительно начинают увлеченно держать в руках кисть.
                    </div>
                </div>
                <div class="img-text">
                    <div class="img2"></div>
                    <div class="text">На каждом уроке вы сможете узнать удивительные факты об изображаемых животных, явлениях или предметах. Интересно будет и детям, и взрослым! </div>

                </div>
            </div>
            <div class="quote">Все занятия ведут талантливые художники — настоящие мастера своего дела. </div>

            <div class="connect">Присоединяйтесь к нашей дружной команде и попробуйте создать свою первую картину уже сейчас!
            </div>
            <button @click="openReg">Присоединиться</button>

            
        </div>
   
    </section>
</div>
</template>

<script>
import api from '../../constants/index.js'

import {eventBus} from '../../main.js'
export default {
  
    computed: {
        courses: function () {
            return this.$store.state.mainData.courses
        }
    },
    data() {
        return {
            url: api.url
        }
    },
    methods: {
        openReg(){
            eventBus.$emit('openRegLk')
            
        }
    },
    
}
</script>

<style>
@media(max-width: 500px) {

    .container,
    .header-container {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
}

@media(max-width: 400px) {
    .el-dialog {
        max-width: 400px !important;
        width: unset !important;
    }
}

.el-notification__content {
    text-align: left !important;
}

.el-dialog {
    border-radius: 20px !important;

}

.el-dialog h3 {
    width: 100%;
    text-align: center;
    font-size: 20px;
    word-break: keep-all;
}

.el-form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.el-form button {
    box-shadow: 0px 4px 20px #f66c17 !important;
    ;
}

.el-form p {
    line-height: 20px;
    width: 100%;
    text-align: center;

}

.el-form p:last-child {
    margin-top: 10px;
}

.el-form p:first-child {
    margin-top: 30px;
}

p span {
    color: #FAA435;
    cursor: pointer;
}

.el-input__inner {
    padding: 5px 15px !important;
    border-radius: 10px !important;
    height: unset !important;

}

.el-checkbox-button__inner,
.el-checkbox__input {
    vertical-align: top !important;
    margin-top: 10px;
}

input::placeholder {
    color: #333333 !important;
}
</style><style lang="scss" scoped>
.about {
    position: relative;
    padding-bottom: 200px;

    .container {
        flex-direction: column;
        align-items: center;
    }

    h4 {

        font-size: 30px;
        line-height: 37px;
        text-align: center;
        font-weight: normal;
        color: #333333;
        margin-bottom: 50px;
    }

    .imtextes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .img-text {
        max-width: 510px;
        display: flex;
        align-items: flex-start;

        flex-direction: column;

    }

    .img1 {
        background: url('/img/desc1.png') no-repeat center center / cover;
        height: 350px;
        width: 510px;

    }

    .img2 {
        background: url('/img/desc2.png') no-repeat center center / cover;
        height: 350px;
        width: 510px;
    }

    .text {
        margin-top: 30px;

        font-size: 18px;
        line-height: 22px;
    }

    .quote {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        width: 600px;
        position: relative;

        margin-top: 105px;
        margin-bottom: 72px;
    }

    .quote::before {
        content: '';
        position: absolute;
        border-top: 1px solid #F66A16;
        width: 580px;
        top: -22px;
        left: 10px;
    }

    .quote::after {
        content: '';
        position: absolute;
        border-top: 1px solid #F66A16;
        width: 580px;
        bottom: -22px;
        left: 10px;
    }

    .connect {
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        max-width: 1112px;

        height: 100px;
    }

    button {
        cursor: pointer;
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
        border-radius: 25px;
        padding: 24px 61px;
        font-size: 20px;
        line-height: 160.2%;
        border: none;
        outline: none;
        text-align: center;
        margin-top: 50px;
        color: #FFFFFF;
    }
}

#courses {
    padding-bottom: 200px;
}

.courses-wrapper {

    position: relative;

    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .courses-holder {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;

        .course-wrapper {
            flex: 0 1 510px;
            max-width: 510px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                position: relative;

                width: 510px;
                height: 350px;
                margin-bottom: 30px;
            }

            h3 {
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;

            }

            .space {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                flex: 1
            }

            p {
                margin-top: 30px;
                font-size: 18px;
                line-height: 22px;

            }

            .btn {

                border-radius: 25px;
                border: none;
                outline: none;
                font-size: 20px;
                line-height: 160.2%;
                padding: 24px 86px;
                color: #FFFFFF;
                margin-top: 50px;
                font-weight: normal;
                cursor: pointer;
                transition: all .3s ease-in-out !important;
                will-change: auto;
            }

            .btn:hover {
                transform: translateY(-5px);
            }
        }

        .course-wrapper:first-child {
            margin-right: 23px;

            .btn {
                background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
                box-shadow: 0px 0px 60px #D6358C;
            }

            .image {
                filter: drop-shadow(0px 0px 40px rgba(214, 53, 140, 0.8));
            }

        }

        .course-wrapper:last-child {
            margin-left: 23px;

            .btn {
                background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
                box-shadow: 0px 0px 60px #F98923;
            }

            .image {
                filter: drop-shadow(0px 4px 50px #F98923);
            }

            .image::after {
                content: '';
                background: url('/img/jirafCourses.png') no-repeat right center / contain;
                height: 274px;
                width: 171px;
                position: absolute;
                right: -115px;
                top: 30px;
            }
        }
    }

    h2 {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 70px;
        /* identical to box height */
        color: #333333;
        text-align: center;
        position: relative;
        margin-top: 200px;
        margin-bottom: 50px;

    }

    h2::first-letter {
        opacity: 0;
    }
}

.courses-wrapper::after {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat left center / contain;

    height: 525px;
    width: 530px;
    left: 0;
    position: absolute;
    bottom: -200px;
}

.about::after {
    content: "";
    background: url('/img/coursesPink.svg') no-repeat right center / contain;
    height: 690px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 210px;

}

.k::before {
    content: '';
    background: url('/img/k.svg') no-repeat center center / contain;
    width: 44.28px;
    height: 55.04px;
    position: absolute;
    z-index: 2;
    top: 9px;
    left: 4px;
}

.mobile {
    .k::before {
        left: -3px !important;
        top: 0.5px !important;

    }

}

@media (max-width:1350px) {
    .courses-wrapper .courses-holder .course-wrapper:last-child .image::after {
        content: unset !important;
    }
}

@media (max-width: 1200px) {

    .courses-wrapper .courses-holder .course-wrapper .image,
    .about .img1,
    .about .img2 {
        width: 430px;
        height: 270px;
    }

    .container {
        padding: 0 40px;
    }

    .courses-wrapper .courses-holder .course-wrapper {
        max-width: 430px;
    }

    .about .img-text {
        max-width: 430px;
    }

    .courses-wrapper::after {
        left: -100px;
        bottom: -150px;
    }

    .about::after {
        right: -100px;
    }

    section {
        overflow: hidden;

    }
}

@media (max-width: 986px) {
    .courses-wrapper .courses-holder {
        flex-direction: column;
    }

    .courses-wrapper .courses-holder .course-wrapper {
        margin-bottom: 100px;
        margin-left: 0 !important;
    }
}

@media (max-width: 900px) {
    .k::before {
        display: none;
    }

    .k::after {
        display: none;
    }

    h2::first-letter {
        opacity: 1 !important;
    }

    .courses-wrapper::after {
        display: none;
    }

    .courses-wrapper {
        padding-bottom: 0 !important;

        h2 {
            font-size: 40px;
            line-height: 40px;
            text-align: left;
            align-self: flex-start;
            margin-top: 100px;
        }

        .courses-holder {
            .course-wrapper {
                h3 {
                    font-size: 20px;
                    line-height: 24px;
                    margin-top: 30px;
                }

                p {
                    margin-top: 30px;
                    font-size: 14px;
                    line-height: 17px;
                }

                .btn {
                    padding: 0;
                    height: 55px;
                    width: 160px;
                    font-size: 14px;
                    line-height: 17px;
                    border-radius: 60px;
                    margin-top: 50px;
                }

            }
        }
    }

    .about h4 {
        margin-top: 0;
        font-size: 18px;
        line-height: 22px;
        text-align: left;
        align-self: flex-start;
    }

    .about .text {
        font-size: 14px;
        line-height: 17px;
    }

    .about .img-text {
        margin-bottom: 50px;
    }

    .about::after {
        display: none;
    }

    .about .quote {
        width: unset;
        align-self: flex-start;
        text-align: left;
        font-size: 18px;
        line-height: 22px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .about .quote::after,
    .about .quote::before {
        display: none;
    }

    .about .connect {
        margin-top: 50px;
        text-align: left;
        font-size: 18px;
        line-height: 22px;
        height: unset;
    }

    .about button {
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        height: 55px;
        width: 222px;
        margin-top: 30px;
        align-self: flex-start;
    }

    .about {
        padding-bottom: 100px;
    }

    @media (max-width: 500px) {
        .courses-wrapper .courses-holder .course-wrapper {
            max-width: unset;
            margin-right: 0 !important;
        }

        .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }

        .courses-wrapper .courses-holder .course-wrapper .image,
        .about .img1,
        .about .img2 {
            width: 100%;
            height: calc(63vw - 20px);
        }
    }
}
</style>
