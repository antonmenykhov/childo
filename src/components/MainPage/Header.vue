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
    bottom: -25vh;
    position: absolute;
}

header {
    overflow: hidden;
    height: 100vh;
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
            width: 1047px;
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

            button:hover {}
        }
    }
}

header::before {
    content: "";
    position: absolute;
    width: 10%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 211px;
    height: 100%;
    top: 0;

}

header::after {
    background: url('/img/VectorBlue.png') no-repeat center center / contain;
    content: '';
    top: -10%;
    position: absolute;
    right: 1%;
    width: 35%;
    height: 60%;
}
</style>
