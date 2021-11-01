<template>
<div class="catalog">
    <Topline />
    <header>
        <div class="jiraf"></div>
        <div class="gradient"></div>
        <div class="header-container">
            <div class="heaader-left">
                <div @click="openCartAuth" class="cart">
                    <div class="cart-icon">
                        <div v-if="cart.length > 0" class="cart-counter">{{cart.length}}</div>
                    </div>
                </div>
                <div class="title">
                    ВЫБЕРИТЕ, ЧТО ВЫ ХОТИТЕ СЕГОДНЯ НАРИСОВАТЬ
                </div>
                <div class="description">Вы можете приобрести видео-уроки только с теми рисунками, которые вы хотите нарисовать!
                    <br><br>
                    Стоимость каждого видео-урока - <span>499 руб.</span>
                </div>

            </div>

        </div>

    </header>
    <CatProgram :cart="cart"/>
    <Cert />
    <Cart :cart="cart"/>
    <Footer />
</div>
</template>

<script>
import Topline from '../components/Topline.vue'
import CatProgram from '../components/CatProgram.vue'
import Cert from '../components/MainPage/Cert.vue'
import Footer from '../components/Footer.vue'
import {eventBus} from '../main'
import Cart from '../components/Cart.vue'
export default {
    components: { Topline, CatProgram, Cert, Footer, Cart },
    created() {
        eventBus.$on('refreshCart', data =>{
            this.cart = data
        })
        eventBus.$on('openCart', () => {
            this.openCart()
        })
    },
    data() {

        return {
            cart: [],
            cartOpened: true
        }
    },
    methods: {
        openCart(){
            eventBus.$emit('cartOpened')
        },
        openCartAuth(){
            eventBus.$emit('openRegCart')
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
    overflow: hidden;
    padding-top: 275px;
    padding-bottom: 200px;
    width: 100%;
    position: relative;
    background: url('/img/HeaderPens.png') no-repeat left center /contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    .jiraf {
        position: absolute;
        right: -130px;
        bottom: -100px;
        background: url('/img/catjiraf.png') no-repeat right center /contain;
        height: 566px;
        width: 400px;
    }

    .header-container {
        width: 100%;
        height: fit-content;
        max-width: 1058px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
        padding-top: auto;

        .cart {
            position: absolute;
            z-index: 210;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
           
            right: 0;
            top: 0;
            height: 100px;
            width: 100px;
            background: #F574BA;
            box-shadow: 0px 0px 30px 5px #E757A5;
            border-radius: 50%;
        }

        .cart-icon {
            height: 50px;
            width: 50px;
            background: url('/img/cart.png') no-repeat center center / contain;
            position: relative;
        }
        .cart-counter{
            position: absolute;
            background: white;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            top: -30px;
            right: -30px;
            font-size: 18px;
        }

        .title {
            max-width: 1047px;
            font-family: Intro;
            font-style: normal;
            font-weight: normal;
            font-size: 80px;
            line-height: 80px;
            /* identical to box height */
            font-weight: 400 !important;
            color: #333333;
            position: relative;

        }

        .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            max-width: 611px;
            color: #333333;
            margin-top: 30px;

            span {
                font-weight: 700;
                font-size: 40px;
                line-height: 49px;
               
            }
        }

        .button-holder:hover {
            cursor: pointer;

        }

        .button-holder {
            display: flex;
            align-items: center;
            margin-top: 50px;

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
                padding: 20px 83px;
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
    width: 350px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%);
    left: 0px;
    height: 100%;
    top: 0;
    z-index: -1;

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
    .header-container {
        padding: 0 40px;
    }

}

@media (max-width: 900px) {
    header .header-container .cart{
        display: none;
    }
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
        padding-bottom: 85px;
        padding-top: 250px;
        .jiraf {
            display: none;
        }

        .header-container {
            .title {
                font-size: 40px;
                line-height: 40px;
                margin-top: 0;
            }

            .title::after,
            .title::before {
                display: none !important;
            }

            .title::first-letter {
                opacity: 1;
            }

            .description {
                margin-top: 30px;
                font-size: 20px;
                line-height: 24px;
            }

            .button-holder {
                button {
                    font-size: 18px;
                    line-height: 29px;
                    padding: 0;
                    height: 55px;
                    width: 160px;
                }
            }
        }
    }
}
@media (max-width:700px) {
    header .header-container .description span{
        font-size: 20px;
    }
}
@media (max-width: 500px) {
    header .header-container .title {
        margin-top: 0 !important;
    }

    header {
        padding-top: 240px;

        .header-container {
            .cart {
                display: none;
            }
        }
    }

}

@media (max-width: 400px) {
    header {
        padding-top: 200px;
    }
}

.mobile {
    .title::after {

        top: 1px !important;

    }

    .title::before {

        top: 1px !important;

    }
}
</style>
