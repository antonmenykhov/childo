<template>
<div class="courses">
    <section class="courses-wrapper">
        <div class="container">
            <h2 class="k">Курсы</h2>
            <div class="courses-holder">
                <div class="course-wrapper" :class="course.class" v-for="course,i in courses" :key="i">
                    <div class="image" :style="'background: url(\'/img/'+course.img+'\') no-repeat center center / cover'"></div>
                    <h3>{{course.name}}</h3>
                    <div class="space">
                        <p>{{course.desc}}</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <h4>
                Мы знаем, что абсолютно каждый ребенок умеет рисовать! Нужно лишь помочь ему сделать первые шаги навстречу искусству.
            </h4>
            <div class="img-text">
                <div class="img1">

                </div>
                <div class="text">
                    Наша авторская методика построена так, что даже те детки, кто не обладает художественными навыками, к концу курса действительно начинают увлеченно держать в руках кисть.
                </div>
            </div>
            <div class="quote">Все занятия ведут талантливые художники — настоящие мастера своего дела. </div>
            <div class="img-text img-text2">
                <div class="text">На каждом уроке вы сможете узнать удивительные факты об изображаемых животных, явлениях или предметах. Интересно будет и детям, и взрослым! </div>
                <div class="img2"></div>
            </div>
            <div class="connect">Присоединяйтесь к нашей дружной команде и попробуйте создать свою первую картину уже сейчас!
            </div>
            <button>Присоединиться</button>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            courses: [{
                    name: 'Онлайн-курс по рисованию «ChilDo» для детей от 4 до 10 лет ',
                    desc: ' состоит из 13 творческих уроков с профессиональным художником. На занятиях ребенок с нуля научится рисовать акриловыми красками в разных техниках при помощи кистей и некоторых нетрадиционных инструментов. В результате у юного художника получится 13 вдохновляющих картин, которые он сможет подарить близким или повесить на стену.',
                    img: 'course1.jpg',
                    link: '',
                    class: 'child'
                },
                {
                    name: 'Онлайн-курс «Знакомство с графической иллюстрацией» рассчитан на детей от 9 лет и взрослых',
                    desc: 'За 10 занятий профессиональный художник-иллюстратор доступно расскажет о тонкостях графического дизайна и научит вас пользоваться цифровыми инструментами в специальной программе. К концу курса ваших навыков будет достаточно, чтобы создавать собственные креативные digital-иллюстрации».',
                    img: 'course2.jpg',
                    link: '',
                    class: 'parent'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.about {
    position: relative;
    padding-bottom: 195px;
    .container {
        flex-direction: column;
        align-items: center;
    }

    h4 {
        margin-top: 13px;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        max-width: 940px;
        color: #000000;
        margin-bottom: 124px;
    }

    .img-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-text2 {
        .text {
            width: 567px;
        }
    }

    .img1 {
        background: url('/img/desc1.jpg') no-repeat center center / cover;
        height: 224px;
        width: 397px;
        border-radius: 15px;
        margin-right: 65px;
    }

    .img2 {
        background: url('/img/desc2.jpg') no-repeat center center / cover;
        height: 224px;
        width: 397px;
        border-radius: 15px;
        margin-left: 7px;
    }

    .text {
        width: 505px;
        font-size: 25px;
        line-height: 30px;
    }

    .quote {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        width: 567px;
        padding: 11px 0;
        border-top: 1px solid #F66A16;
        border-bottom: 1px solid #F66A16;
        margin-top: 94px;
        margin-bottom: 94px;
    }

    .connect {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        max-width: 764px;
        margin-top: 77px;
        margin-bottom: 11px;
        height: 100px;
    }

    button {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
        border-radius: 25px;
        padding: 20px 39px;
        font-size: 25px;
        line-height: 160.2%;
        border:none;
        outline: none;
        text-align: center;

        color: #FFFFFF;
    }
}

.courses-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 180px;

    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .courses-holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .course-wrapper {
            flex: 0 1 554px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                position: relative;
                border-radius: 20px;
                width: 400px;
                height: 250px;
                margin-bottom: 28px;
            }

            h3 {
                font-weight: 600;
                font-size: 30px;
                line-height: 37px;
                text-align: center;
            }

            .space {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                flex: 1
            }

            p {
                margin-top: 18px;
                font-size: 25px;
                line-height: 30px;
                text-align: center;
            }

            button {

                border-radius: 25px;
                border: none;
                outline: none;
                font-size: 25px;
                line-height: 160.2%;
                padding: 20px 74px;
                color: #FFFFFF;
                margin-top: 78px;
                font-weight: normal;
                cursor: pointer;
                transition: all .3s ease-in-out !important;
                will-change: auto;
            }

            button:hover {
                transform: translateY(-5px);
            }
        }
        .child{
            .image::after{
                content:'';
                background: url('/img/jirafCourses.png') no-repeat right center / contain;
                height: 216px;
                width: 144px;
                position: absolute;
                right: -98px;
                top: 15px;
            }
        }
        .course-wrapper:first-child {
            margin-right: 23px;

            button {
                background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
                box-shadow: 0px 0px 60px #D6358C;
            }

            .image {
                filter: drop-shadow(0px 0px 40px rgba(214, 53, 140, 0.8));
            }

        }

        .course-wrapper:last-child {
            margin-left: 23px;

            button {
                background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
                box-shadow: 0px 0px 60px #F98923;
            }

            .image {
                filter: drop-shadow(0px 4px 50px #F98923);
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
        color: #515151;
        text-align: center;
        position: relative;
        margin-top: 125px;
        margin-bottom: 115px;

    }

    h2::first-letter {
        opacity: 0;
    }
}

.courses-wrapper::before {
    content: "";
    background: url('/img/coursesBlue.svg') no-repeat left center / contain;
    height: 525px;
    width: 530px;
    left: 0;
    top: 170px;
    position: absolute;

}

.courses-wrapper::after {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat right center / contain;
    height: 525px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 160px;
}
.about::before {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat right center / contain;
    height: 525px;
    width: 530px;
    left: 0;
    top: 170px;
    position: absolute;
    transform: rotate(180deg);

}

.about::after {
    content: "";
    background: url('/img/coursesPink.svg') no-repeat right center / contain;
    height: 690px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 160px;
    
}

.k::before {
    content: '';
    background: url('/img/к.svg') no-repeat center center / contain;
    width: 42.28px;
    height: 54.04px;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 4px;
}
.k::after {
    content: '';
    background: white;
    width: 50.28px;
    height: 55.04px;
    position: absolute;
 
    top: 5px;
    left: 0px;
}
</style>
