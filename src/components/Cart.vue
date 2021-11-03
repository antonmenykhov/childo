<template>
<el-dialog class="cart-dialog" width="500px" :visible.sync="cartOpened">
    <table class="cart-table">
        <tbody>
            <tr>
                <th>№</th>
                <th>Название урока</th>
                <th>Убрать</th>
            </tr>
            <tr v-for="lesson,i in cart" :key="i">
                <td>{{i+1}}</td>
                <td>{{lesson.Name}}</td>
                <td>
                    <div class="remove" @click="removeItemFromCart(lesson)">+</div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td class="itog">Итого</td>
                <td class="itog">{{cart.length*449}}</td>
            </tr>
        </tbody>
    </table>

    <button @click="goPay">Перейти к оплате</button>
</el-dialog>
</template>

<script>
import { eventBus } from '../main'
import axios from 'axios'
export default {
    created() {
        eventBus.$on('cartOpened', () => {
            this.cartOpened = true
        })
    },
    props: {

        cart: Array
    },
    data() {
        return {
            cartOpened: false
        }
    },
    methods: {
        removeItemFromCart(item) {
            document.getElementById(item.id).style.display = 'block'
            document.getElementById('d' + item.id).style.display = 'none';
            let cart = this.cart.filter(value => value.id != item.id);
            eventBus.$emit('refreshCart', cart)
        },
        goPay(){
            let formdata = new FormData;
            let jwt = this.$store.state.jwt
            formdata.append('lessons', JSON.stringify(this.cart))
            formdata.append('jwt', jwt)
            axios.post('https://pay.childo-art.ru/buyLessons/', formdata).then(response=> {
               window.location.href = response.data
            })
        }
    },
}
</script>

<style lang="scss">
.cart-dialog .el-dialog__body {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
        margin-top: 20px;
        padding: 15px;
        border-radius: 25 px;
        border: none;
        font-size: 16px;
        color: white;
        font-weight: 300;
        border-radius: 15px;
        cursor: pointer;
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 3px 20px #f66c17;
    }
}

.cart-table {
    border-spacing: 0;
    font-size: 18px;
    width: 100%;

    td:first-child,
    th:first-child {
        text-align: center;
    }

    td:last-child,
    th:last-child {
        text-align: center;
    }

    .itog {
        text-align: right;
        font-weight: 500;
    }

    td {
        text-transform: capitalize;
        padding: 10px 5px;
        word-break: keep-all;
    }

    tr:nth-child(even) {
        background: rgb(248, 248, 248);

    }
    .remove{
        font-size: 18px;
        font-weight: 900;
        transform: rotate(45deg);
        cursor: pointer;
        transition: all .2s;
    }
    .remove:hover{
        color: #F66A16;
    }

}
@media (max-width: 500px) {
    .el-dialog{
        width: 100vw!important;
    }
    th:last-child{
        display: none;
    }
}
</style>
