<template>
<section>
    <div class="left"></div>
    <div class="container">

        <div class="program-holder">
            <div class="program" :class="item.color" v-for="item,i in lessons" :key="i">
                <div class="image" :style="'background: url(\''+url+item.img.formats.thumbnail.url+'\') no-repeat center center / cover'"></div>
                <h4>{{item.Name}}</h4>
                <p>{{item.smallDescription}}</p>
                <button :id="item.id" @click="addToCart(item)">Выбрать</button>
                <button style="display:none" :id="'d'+item.id" @click="delFromCart(item)">Убрать</button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { eventBus } from '../main'
import api from '../constants'
export default {
    props:{
        cart: Array
    },
    data() {
        return {
            url: api.url,
            
        }
    },
    methods: {
        addToCart(item) {
            document.getElementById(item.id).style.display = 'none'
            document.getElementById('d' + item.id).style.display = 'block';
            let cart = Object.assign([],this.cart)
            cart.push(item)
            this.refreshCart(cart)
        },
        delFromCart(item) {
            document.getElementById(item.id).style.display = 'block'
            document.getElementById('d' + item.id).style.display = 'none';
            let cart = this.cart.filter(value => value.id != item.id)

            this.refreshCart(cart)
        },
        refreshCart(cart) {

            eventBus.$emit('refreshCart', cart)
        }
    },

    computed: {
        lessons: function () {

            return this.$store.state.lessons;
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding-bottom: 100px;
}

h2 {
    margin-top: 108px;
    margin-bottom: 105px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;

    color: #333333;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -10px;
    top: 10px;
    content: '';
    background: url('/img/courses/1/prog/p.svg') no-repeat center center / contain;
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

.program-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

}

.program {
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 94px 51px;
    margin: 100px 25px;

    position: relative;
}

button {
    width: calc(100% - 50px);
    position: absolute;
    height: 80px;
    left: 25px;
    border-radius: 25px;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: 300;
    bottom: -40px;
    cursor: pointer;
}

.image {
    position: absolute;
    height: 100px;
    width: 100px;
    top: -50px;
    border-radius: 50%;
    left: 125px;
    box-shadow: none !important;
}

h4 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    color: #333333;
}

p {
    font-size: 18px;
    line-height: 20px;
    margin-top: 20px;
    flex: 1;

    color: #333333;
    display: flex;

}

.orange {
    box-shadow: 0px 0px 60px #F98C25;

    .image {
        box-shadow: 0px 0px 60px #F98C25;
    }

    button {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
    }
}

.green {
    box-shadow: 0px 0px 60px #A7CA3E;

    .image {
        box-shadow: 0px 0px 60px #A7CA3E;
    }

    button {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
}

.pink {
    box-shadow: 0px 0px 60px #E757A5;

    .image {
        box-shadow: 0px 0px 60px #E757A5;
    }

    button {
        background: linear-gradient(94.82deg, #F574BA 0%, #CD237F 100%);
        box-shadow: 0px 4px 60px #D6358C;
    }
}

.blue {
    box-shadow: 0px 0px 60px #45C6DD;

    .image {
        box-shadow: 0px 0px 60px #45C6DD;
    }

    button {
        background: linear-gradient(94.82deg, #7DD7E7 0%, #59BFD7 100%);
        box-shadow: 0px 4px 60px #45C6DD;
    }
}

@media (max-width:1200px) {
    .container {
        padding: 0 30px;

    }

    .program {
        height: 350px;
        width: 300px;
        padding: 94px 10px 10px 25px;
        margin: 75px 10px;
    }

    .image {
        left: 100px;
    }

    .program-holder {
        justify-content: center;
    }
}

@media (max-width:900px) {

    h2::before,
    h2::after {
        display: none;
    }

    h2::first-letter {
        opacity: 1;
    }

    h2 {
        font-size: 35px;
        line-height: 35px;
        margin-top: 0;
        margin-bottom: 66px;
    }
}

.mobile {
    h2::before {
        left: -3px !important;
        top: 1px !important;

    }

    h2::after {
        left: -3px !important;
        top: 1px !important;

    }
}

@media (max-width: 500px) {
    .program {
        margin: 75px 0;
    }
}
</style>
