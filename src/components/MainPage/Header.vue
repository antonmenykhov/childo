<template>
<div>
    <header>
        <div class="jiraff"></div>
        <div class="gradient"></div>
        <div class="header-container">
            <div class="title">Школа <br> рисования <br> <span>c</span><span>h</span><span>i</span><span>l</span><span>d</span><span>o</span>
                <div @click="aboutVideo=true" class="play-button-holder">
                    <div class="play-button">
                        <img src="/img/play.svg" alt="play">
                    </div>
                    <div class="play-button-text">
                        Видео о нас
                    </div>
                </div>
            </div>
            <div class="description">Привет! Приглашаем вас отправиться в увлекательное путешествие в мир творчества с онлайн-курсами рисования от «ChilDo»
            </div>
            <div class="button-holder" @click="$router.push({path: 'lessonFree'})">
                <button>
                    Пробный урок
                </button>
                <div class="button-description">
                    Попробуйте бесплатный урок прямо сейчас!
                </div>
            </div>
        </div>
    </header>

</div>
</template>

<script>
export default {
    data() {
        return {
            aboutVideo: false
        }
    },
}
</script>

<style>
iframe {
    width: 100% !important;
    height: 100% !important;
}

@media (max-width: 1200px) {
    .top-line {
        padding: 100px 0;
    }

    .top-line .container {
        padding: 0 40px;
        max-width: unset;
    }

    .header-container {
        padding: 0 40px;
    }

    .top-line .logo {
        height: 56px;
        width: 131px;
    }

    .top-line .container .main-menu .menu-item {
        margin: 0;
    }
}
</style><style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {

    transition: all .3s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
    {
    transition: all .3s;
    opacity: 0;
    transform: translateY(-150vh);
}

.video-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.623);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .close-button {
        right: 4vw;
        top: 2vw;
        color: white;
        position: absolute;
        font-size: 50px;
        transform: rotate(45deg);
        transition: all .2s;
        cursor: pointer
    }

    .video {
        overflow: hidden;
        position: relative;
        height: 45vw;
        width: 80vw;
        background: grey;
        border-radius: 20px;

        .close-button:hover {
            color: orangered;
        }
    }
}

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

    padding-top: 280px;
    width: 100%;
    position: relative;
    background: url('/img/HeaderPens.png') no-repeat left center /contain;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .jiraff {
        background: url('/img/HeaderJiraf.png') no-repeat center center / contain;
        z-index: 2;
        position: absolute;
        right: 1%;
        content: "";
        top: 150px;
        height: auto;
        bottom: 0;
        width: 45%;
        filter: drop-shadow(0px 4px 90px rgba(249, 150, 46, 0.5));
    }

    .header-container {
        width: 100%;
        height: fit-content;
        max-width: 1058px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
        padding-top: auto;

        .title {
            max-width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 120px;
            line-height: 120px;
            color: #333333;
            position: relative;

            span {
                font-family: Intro;
                font-style: normal;
                font-weight: normal;
                font-size: 120px;
                line-height: 120px;
                color: #333333;
            }

            .play-button-holder:hover {
                cursor: pointer;

                .play-button {
                    box-shadow: 0px 4px 20px #D62C88;
                }

                .play-button-text {
                    text-decoration: underline solid black;
                }
            }

            .play-button-holder {
                display: flex;
                align-items: center;
                position: absolute;
                top: 15px;
                left: 500px;

                .play-button {
                    height: 85px;
                    width: 85px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #FF8CCB 0%, #D62C88 100%);
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                }

                .play-button-text {
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 160.2%;

                    margin-left: 12px;
                    text-decoration: underline solid white;
                    transition: all .2s ease-in-out;
                }
            }
        }

        .title::before {
            background: url('/img/sh.svg') no-repeat center center / contain;
            content: "";
            position: absolute;
            height: 112px;
            width: 108px;
            top: 18px;
            left: 8px;
            z-index: 2;
        }

        .title::first-letter {
            opacity: 0;
        }

        .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 25px;
            line-height: 30px;
            width: 700px;
            color: #333333;
            margin-top: 50px;
        }

        .button-holder:hover {
            cursor: pointer;

            button {
                box-shadow: 0px 8px 80px #F66C17;
            }

            .button-description {
                text-decoration: underline solid black;
            }
        }

        .button-holder {
            display: flex;
            align-items: flex-start;
            margin-top: 30px;
            flex-direction: column;

            .button-description {
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 140.2%;

                margin-top: 30px;
                text-decoration: underline solid white;
                transition: all .2s ease-in-out;
            }

            button {
                background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
                box-shadow: 0px 4px 60px #F66C17;
                border-radius: 25px;
                outline: none;
                border: none;

                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                text-align: center;
                line-height: 160.2%;
                color: white;
                padding: 24px 73px;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }

        }
    }
}

header::before {
    content: "";
    position: absolute;
    width: 300px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 100px;
    height: 100%;
    top: 0;

}

header::after {
    background: url('/img/VectorBlue.png') no-repeat top center / contain;

    top: 0;
    position: absolute;
    right: 1%;
    width: 35%;
    height: 60%;
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

    header::after {
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
    header {
        padding-top: 225px;
    }

    header .header-container .description {
        margin-top: 40px;
    }

    header .jiraff {
        top: unset;
        bottom: -50px;
        height: 500px;
    }

}

@media (max-width: 900px) {

    header::after {
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

    header {
        .jiraff {
            display: none;
        }

        .header-container {
            .title {
                font-size: 40px;
                line-height: 40px;
                margin-top: 17vw;

                .play-button-holder {
                    display: none;
                }
                span{
                   font-size: 40px;
                line-height: 40px; 
                }
                span:nth-of-type(1){
                    color: #E757A5;
                }
                span:nth-of-type(2){
                    color: #CD237F;
                }
                span:nth-of-type(3){
                    color: #F98923;
                }
                span:nth-of-type(4){
                    color: #FC3939;
                }
                span:nth-of-type(5){
                    color: #A5C73C;
                }
                span:nth-of-type(6){
                    color: #59BFD7;
                }
            }

            .title::first-letter {
                opacity: 1;
            }

            .title::before {
                display: none;
            }

            .description {
                margin-top: 30px;
                font-size: 14px;
                line-height: 17px;
                width: unset;
            }

            .button-holder {
                margin-top: 30px;

                .button-description {
                    display: none;
                }

                button {
                    font-size: 14px;
                    line-height: 22px;
                    padding: 0;
                    height: 55px;
                    width: 160px;
                    border-radius: 60px;
                }
            }

        }
    }
}
@media (max-width: 550px) {
    header .header-container .title{
        margin-top: 30px;
    }
}
@media (max-width: 450px) {
    header .header-container .title{
        margin-top: 0px;
    }
}
@media (max-width: 350px) {
    header {
        padding-top: 175px;
    }
}
.mobile {
    .title::before {
        left: 48px !important;
        top: 1px !important;

    }

    .title::after {
        left: 48px !important;
        top: 1px !important;

    }

}
</style>
