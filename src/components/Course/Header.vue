<template>
<header :class="courseData.teacher.style">
    <div :class="courseData.girl"></div>
    <div class="gradient"></div>
    <div class="header-container">
        <div class="title">Курс {{id*1}}

        </div>
        <div class="description">{{courseData.smallDescription}}
        </div>
        <div class="button-holder">
            <button class="left" v-scroll-to="'#prices'">
                К тарифам
            </button>
            <button class="right" v-scroll-to="'#more'">
                Подробнее
            </button>
        </div>
    </div>

</header>
</template>

<script>
export default {
    props: {
        courseData: Object,
        id : null
    },
    data() {
        return {

        }
    },
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

    padding-top: 322px;
    padding-bottom: 280px;
    width: 100%;
    position: relative;
    background: url('/img/HeaderPens.png') no-repeat left center /contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    .header-container {
        width: 100%;
        height: fit-content;
        max-width: 1160px;
        margin: 0 auto;
        position: relative;
        z-index: 3;

        .title {
            width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 150px;
            line-height: 150px;
            /* identical to box height */

            color: #515151;
            position: relative;

        }

        .title::before {
            background: url('/img/courses/1/к.svg') no-repeat center center / contain;
            content: "";
            position: absolute;
            height: 122px;
            width: 91px;
            top: 23px;
            left: 8px;
            z-index: 2;
        }

        .title::after {
            background: white;
            content: "";
            position: absolute;
            height: 122px;
            width: 100px;
            top: 20px;
            left: 6px
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
            width: 621px;
            color: #000000;
            margin-top: 38px;
        }

        .button-holder:hover {
            cursor: pointer;

        }

        .button-holder {
            display: flex;
            align-items: center;
            margin-top: 76px;

            button {

                border-radius: 25px;
                outline: none;
                border: none;
                margin-right: 50px;
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                text-align: center;
                line-height: 160.2%;
                color: white;
                padding: 20px 80px;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }

            button:hover {
                transform: scale(1.1);
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
    z-index: -1;

}

.cs-1::after {
    background: url('/img/courses/1/top.svg') no-repeat center top / contain;
    content: '';
    top: 0%;
    position: absolute;
    right: 9%;
    width: 40%;
    height: 35%;
    z-index: -1;
}

.cs-2::after {
    background: url('/img/courses/2/top.svg') no-repeat center top / contain;
    content: '';
    top: 0%;
    position: absolute;
    right: 8.5%;
    width: 40%;
    height: 25%;
    z-index: -1;
}

.cs-2 {
    .title::before {
        background: url('/img/courses/2/к.svg') no-repeat center center / contain !important;
    }
}

.cs-1 {

    .left {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
    }

    .right {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
}

.cs-2 {
    .left {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
    }

    .right {
        background: linear-gradient(94.82deg, #84DEEF 0%, #65A5B5 100%);
        box-shadow: 0px 4px 60px #45C6DD;
    }
}

.masha {
    background: url('/img/courses/1/girl.png') no-repeat right center / contain;
    height: 1158px;
    position: absolute;
    width: 775px;
    right: 35px;
    top: 169px;

}

.masha::after {
    content: '';
    position: absolute;
    background: url('/img/courses/1/girl.svg') no-repeat center bottom / contain;
    height: 655px;
    width: 558px;
    bottom: 40px;
    left: -40px;
    z-index: -1;
}

.tanya {
    background: url('/img/courses/2/girl.png') no-repeat right center / contain;
    height: 1104px;
    position: absolute;
    width: 934px;
    right: 0;
    top: 0px;
    z-index: 2;
}

@media (max-width: 1500px) {
    header::before {
        left: 120px;
    }

    header {
        overflow: hidden;
        padding-top: 225px;

        .header-container {
            max-width: 1000px;
            margin: 0 auto;

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

            }

            .title::before {
                height: 70px;
                width: 70px;
                top: 14px;
                left: 2px;
            }

            .title::after {
                height: 80px;
                width: 60px;
                top: 10px;
                left: 6px;
                opacity: 0;
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

    .masha {
        height: 900px;
    }

    .tanya {
        height: 700px;
        top: 100px;
        right: 0;
    }
}

@media (max-width: 1250px) {
    header::before {
        left: 130px;
    }

    .masha {
        height: 700px;
        width: 500px;
        right: -50px;
        top: 100px;
    }

    .masha::after {
        height: 350px;
        left: -120px;
    }

    .tanya {
        top: 0;
        height: 700px;
        width: 50%;
    }

    header {
        padding-top: 219px;
        padding-bottom: 87px;

        .header-container {
            max-width: 586px;

            .title {
                font-size: 80px;
                line-height: 80px;
            }

            .title::after {
                height: 65px;
                left: -5px;
                top: 12px;
            }

            .title::before {
                height: 65px;
                left: -5px;
                top: 12px;
            }

            .description {
                font-size: 16px;
                line-height: 20px;
                max-width: 320px;
            }

            .button-holder {
                margin-top: 62px;

                button {
                    font-size: 16px;
                    line-height: 160.2%;
                    padding: 17px 65px;
                }
            }

        }
    }
}

@media (max-width: 800px) {
    header::before {
        left: 120px;
        width: 130px;
    }

    .cs-1::after {
        height: 400px;
        width: 400px;
        top: -70px;
        right: -50px;
        left: unset;
        bottom: unset;
        transform: rotate(45deg);
    }

    .cs-2::after {
        height: 400px;
        width: 400px;
        top: -70px;
        right: -50px;
        left: unset;
        bottom: unset;
        transform: rotate(45deg);
    }

    .tanya,
    .masha {
        display: none;
    }

    header {
        padding-top: 127px;
        padding-bottom: 80px;

        .header-container {
            padding-bottom: 0;
            flex-direction: column;
            display: flex;
            align-items: center;

            .title {
                font-size: 35px;
                line-height: 35px;
                max-width: 400px;
                width: fit-content;
                height: 40px;

                text-align: center;

            }

            .title::after {
                height: 30px;
                width: 32px;
                top: 5px;
                left: -3px;
            }

            .title::before {
                height: 30px;
                width: 32px;
                top: 5px;
                left: -3px;
            }

            .description {
                margin-top: 14px;
                font-size: 12px;
                line-height: 15px;
                max-width: 194px;
                text-align: center;
            }

            .button-holder {
                margin-top: 17px;
                align-items: center;
                flex-direction: column;

                button {
                    font-size: 10px;
                    line-height: 160.2%;
                    border-radius: 10px;
                    height: 40px;
                    width: 150px;
                    padding: unset;
                    margin-right: 0;
                    margin-bottom: 20px;
                }

                .left {
                    box-shadow: 0px 4px 20px #F66C17
                }

                .right {
                    box-shadow: 0px 4px 20px #AACD40;
                }
            }
        }
    }
}

.mobile {
    .title::after {
       
        top: 1px!important;
        
    }

    .title::before {
        
        top: 1px!important;
        
    }
}
</style>
