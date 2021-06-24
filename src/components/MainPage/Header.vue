<template>
<header>
    <div class="jiraff"></div>
    <div class="gradient"></div>
    <div class="header-container">
        <div class="title">Школа <br> рисования <br> childo
            <div class="play-button-holder">
                <div class="play-button">
                    <img src="/img/play.svg" alt="play">
                </div>
                <div class="play-button-text">
                    Посмотрите видео о нас
                </div>
            </div>
        </div>
        <div class="description">Привет! Приглашаем вас отправиться в увлекательное путешествие в мир творчества с онлайн-курсами рисования от «ChilDo»
        </div>
        <div class="button-holder">
            <button>
                Пробный урок
            </button>
            <div class="button-description">
                Попробуйте бесплатный урок прямо сейчас!
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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

    padding-top: 323px;
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
        top: 11%;
        height: auto;
        bottom: 8%;
        width: 35%;
        filter: drop-shadow(0px 4px 90px rgba(249, 150, 46, 0.5));
    }

    .header-container {
        width: 100%;
        height: fit-content;
        max-width: 1160px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
        padding-top: auto;
        padding-bottom: 5%;

        .title {
            max-width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 120px;
            line-height: 120px;
            color: #515151;
            position: relative;

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
                left: 530px;

                .play-button {
                    height: 80px;
                    width: 80px;
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
                    font-size: 14px;
                    line-height: 160.2%;
                    max-width: 95px;
                    margin-left: 26px;
                    text-decoration: underline solid white;
                    transition: all .2s ease-in-out;
                }
            }
        }

        .title::before {
            background: url('/img/ш.svg') no-repeat center center / contain;
            content: "";
            position: absolute;
            height: 112px;
            width: 108px;
            top: 18px;
            left: 8px;
            z-index: 2;
        }

        .title::after {
            background: white;
            content: "";
            position: absolute;
            height: 112px;
            width: 108px;
            top: 17px;
            left: 8px
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
            width: 600px;
            color: #000000;
            margin-top: 9px;
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
            align-items: center;
            margin-top: 52px;

            .button-description {
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 140.2%;
                width: 318px;
                margin-left: 36px;
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
                font-size: 25px;
                text-align: center;
                line-height: 160.2%;
                color: white;
                padding: 20px 54px;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }

        }
    }
}

header::before {
    content: "";
    position: absolute;
    width: 15%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 220px;
    height: 100%;
    top: 0;

}

header::after {
    background: url('/img/VectorBlue.png') no-repeat top center / contain;
    content: '';
    top: 0;
    position: absolute;
    right: 1%;
    width: 35%;
    height: 60%;
}

@media (max-width: 1500px) {
    header .jiraff {
        top: 120px;
    }

    header {
        padding-top: 225px;

        .header-container {
            max-width: 1000px;

            .button-holder {
                button {
                    font-size: 20px;
                }

                .button-description {
                    font-size: 16px;
                    max-width: 300px;
                }
            }

            .title {
                font-size: 90px;
                line-height: 90px;

                .play-button-holder {
                    left: 395px;
                    top: 16px;

                    .play-button {
                        height: 60px;
                        width: 60px;

                        img {
                            height: 25px;
                            width: 25px;
                        }
                    }
                }
            }

            .title::before {
                height: 90px;
                width: 80px;
                top: 10px;
                left: 6px;
            }

            .title::after {
                height: 90px;
                width: 80px;
                top: 10px;
                left: 6px;
            }

            .description {
                font-size: 24px;
                line-height: 28px;
                margin-top: 25px;
            }
        }
    }

    header::before {
        left: 180px;
    }
}

@media (max-width:1250px) {
    header::before {
        left: 100px;
    }

    header {
        .header-container {
            max-width: 586px;

            .button-holder {
                margin-top: 30px;

                button {
                    font-size: 16px;
                    padding: 17px 48px;
                }

                .button-description {
                    font-size: 16px;
                    max-width: 300px;
                }

                .button-description {
                    font-size: 10px;
                    line-height: 140.2%;
                    max-width: 140px;
                }
            }

            .title {
                font-size: 65px;
                line-height: 65px;
                margin-bottom: 25px;

                .play-button-holder {
                    left: 282px;
                    top: 10px;

                    .play-button {
                        height: 50px;
                        width: 50px;

                        img {
                            height: 25px;
                            width: 25px;
                        }
                    }

                    .play-button-text {
                        font-size: 10px;
                        line-height: 160.2%;
                    }
                }
            }

            .title::before {
                height: 60px;
                width: 60px;
                top: 10px;
                left: 6px;
            }

            .title::after {
                height: 60px;
                width: 60px;
                top: 10px;
                left: 6px;
            }

            .description {
                font-size: 18px;
                line-height: 22px;
                max-width: 440px;

            }
        }
    }
}

@media (max-width: 1000px) {
    header::before {
        left: 120px;
    }
}

@media (max-width: 800px) {
    header::after {
        transform: rotateY(180deg) rotateZ(-12deg);
        height: 350px;
        width: 350px;
        top: -20px;
        right: -100px;

    }

    header {

        padding-top: 127px;

        padding-bottom: 50px;
        overflow: hidden;

        .jiraff {
            opacity: 0;
        }

        .header-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 500px;

            .title {
                font-size: 35px;
                line-height: 35px;
                margin-bottom: 14px;
                text-align: center;

                .play-button-holder {
                    top: 300px;
                    left: 60px;
                    .play-button{
                        height: 41px;
                        width: 41px;
                        img{
                            height: 13px;
                            width: 13px;
                        }
                    }
                    .play-button-text {
                        font-size: 8px;
                        line-height: 160.2%;
                        max-width: 55px;
                        margin-left: 8px;
                    }
                }

            }

            .title::before {
                height: 32px;
                width: 32px;
                top: 5px;
                left: 48px;
            }

            .title::after {
                height: 32px;
                width: 32px;
                top: 5px;
                left: 48px;
            }

            .description {
                font-size: 12px;
                line-height: 15px;
                max-width: 245px;
                text-align: center;
                margin-top: 0;
            }

            .button-holder {
                margin-top: 32px;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                button {
                    padding: 12px 37px;
                    border-radius: 10px;
                    margin-bottom: 14px;
                    font-size: 10px;
                    line-height: 160.2%;
                }

                .button-description {
                    margin-left: 0;
                    text-decoration-color: transparent;
                    text-align: center;
                    font-size: 8px;
                    line-height: 140.2%;
                }
            }
        }

    }

}
.mobile{
     .title::before {
        left: 48px!important;
        top: 1px!important;
       
    }

    .title::after {
        left: 48px!important;
        top: 1px!important;
       
    }
}
</style>
