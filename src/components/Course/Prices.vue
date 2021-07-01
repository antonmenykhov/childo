<template>
<section id="prices" :class="courseData.teacher.style">
    <div class="container">
        <h2>Тарифы</h2>
        <p v-if="courseData.teacher.style=='cs-1'" class="subheader">Проанализируйте свое свободное время и подумайте, как часто вы сможете заниматься рисованием? </p>
        <ul v-if="courseData.teacher.style=='cs-1'">
            <li>Если у вас достаточно свободного времени и вы можете много заниматься, вам подойдет тариф на 3 месяца</li>
            <li>Если у вас мало времени и у вас нет возможности часто заниматься, то мы предлагаем взять вам тариф на 6 или 12 месяцев</li>
        </ul>
        <div class="prices" v-if="courseData.teacher.style=='cs-1'">
            <div class="price-w" v-for="item,i in courseData.prices" :key="item.name">
                <h4>{{item.name}}</h4>
                <p class="price">{{item.price}} рублей</p>
                <p class="pricePerM">{{item.pricePerM}} рублей/ месяц</p>
                <button @click="openReg(i)">Оплатить</button>
            </div>
        </div>
        <div class="prices" v-if="courseData.teacher.style=='cs-2'">
            <div class="price-w" v-for="item,i in courseData.prices" :key="item.name">
                <h4>{{item.name}}</h4>
                <h4>{{item.time}}</h4>
                <p class="price">{{item.price}} рублей</p>
                <p class="description" v-html="item.description.split('\n').join('<br>')"></p>
                <button @click="openReg(i)">Оплатить</button>
            </div>
        </div>
        <div class="certs">
            <p>Напоминаем,что вы можете
                оформить сертификат и подарить
                его своим близким и друзьям</p>
            <button>Оформить сертификат</button>
        </div>

    </div>
    <el-dialog class="register" width="400px" :visible.sync="reg">
        <h3>Регистрация</h3>
        <el-form v-model="register">
            <el-form-item>
                <el-input placeholder="Имя Фамилия" v-model="register.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Адрес эл. почты" v-model="register.mail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="Пароль" v-model="register.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="@instagram" v-model="register.instagram"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="sogl">Я соглашаюсь на обработку <br> персональных данных</el-checkbox>
            </el-form-item>
            <el-button @click="registerSend" type="primary">Регистрация</el-button>
            <el-form-item>
                <p @click="openAuth"> Уже зарегистрированы? <br> Нажмите чтобы <span>войти</span></p>
            </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog class="register" width="400px" :visible.sync="auth">
        <h3>Войти</h3>
        <el-form v-model="register">

            <el-form-item>
                <el-input placeholder="Адрес эл. почты" v-model="register.mail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="Пароль" v-model="register.password"></el-input>
            </el-form-item>

            <el-button @click="authSend" type="primary">Войти</el-button>
            <el-form-item>
                <p @click="openReg"> Не зарегистрированы? <br> Нажмите чтобы <span>зарегистрироваться</span></p>
                <p @click="openForgot"> Забыли пароль? <br> Нажмите чтобы <span>восстановить</span></p>
            </el-form-item>

        </el-form>
    </el-dialog>
    <el-dialog class="register" width="400px" :visible.sync="forgot">
        <h3>Восстановить пароль</h3>
        <el-form v-model="register">

            <el-form-item>
                <el-input placeholder="Адрес эл. почты" v-model="register.mail"></el-input>
            </el-form-item>

            <el-button @click="forgotSend" type="primary">Восстановить</el-button>
            <el-form-item>
                <p @click="openReg"> Не зарегистрированы? <br> Нажмите чтобы <span>зарегистрироваться</span></p>
                <p @click="openAuth"> Вспомнили пароль? <br> Нажмите чтобы <span>войти</span></p>
            </el-form-item>

        </el-form>
    </el-dialog>
    <el-dialog class="register" width="400px" :visible.sync="sended">
        <h3>Письмо с инструкциями отправлено на почту</h3>
        <el-form v-model="register">

            <el-button @click="sended=false" type="primary">Хорошо</el-button>

        </el-form>
    </el-dialog>
</section>
</template>

<script>
import api from '../../constants'
import axios from 'axios'
export default {
    props: {
        courseData: Object
    },
    data() {
        return {
            buyError: false,
            url: api.url,
            reg: false,
            auth: false,
            forgot: false,
            sogl: false,
            sended: false,
            register: {
                name: '',
                password: '',
                mail: '',
                Instagram: '',
                sogl: ''
            },
        }
    },

    methods: {
        openAuth() {

            this.reg = false;
            this.forgot = false
            this.auth = true;

        },
        openReg(i) {
            if (this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);

                    this.buyCourse(i)
                }).catch(error => {
                    console.log(error.response)
                    this.auth = false;
                    this.forgot = false
                    this.reg = true
                })
            } else {
                this.auth = false;
                this.forgot = false
                this.reg = true
            }

        },
        openForgot() {
            this.auth = false;
            this.forgot = true
            this.reg = false
        },
        registerSend() {
            axios.post(api.register, {
                    username: this.register.name,
                    email: this.register.mail,
                    password: this.register.password,
                    Instagram: this.register.instagram
                })
                .then(
                    response => {
                        this.$cookie.set('jwt', response.data.jwt, { expires: '1D' })
                        this.$store.commit('setJwt', response.data.jwt);
                        this.$store.commit('setUserData', response.data.user);
                        this.$notify({
                            title: 'Успешно',
                            message: 'Вы зарегистрировались',
                            type: 'success'
                        });
                        this.auth = false;
                        this.forgot = false
                        this.reg = false
                    }
                ).catch(error => {
                    console.log(error.response)
                    this.$notify({
                        title: 'Ошибка',
                        message: 'данный адрес уже зарегистрирован',
                        type: 'warning'
                    });
                })
        },
        authSend() {
            axios.post(api.auth, {

                    identifier: this.register.mail,
                    password: this.register.password,

                })
                .then(
                    response => {
                        this.$cookie.set('jwt', response.data.jwt, { expires: '1D' })
                        this.$store.commit('setJwt', response.data.jwt);
                        this.$store.commit('setUserData', response.data.user);
                        this.$notify({
                            title: 'Успешно',
                            message: 'Вы авторизовались',
                            type: 'success'
                        });
                        this.auth = false;
                        this.forgot = false
                        this.reg = false
                    }
                ).catch(error => {
                    console.log(error.response)
                    this.$notify({
                        title: 'Ошибка',
                        message: 'Неверный логин или пароль',
                        type: 'warning'
                    });
                })
        },
        forgotSend() {
            axios.post(api.forgot, {

                    email: this.register.mail,

                })
                .then(
                    response => {
                        console.log(response.data)
                        this.forgot = false;
                        this.sended = true;
                    }
                ).catch(error => {
                    console.log(error.response)

                    this.$notify({
                        title: 'Ошибка',
                        message: 'Такой адрес не зарегистрирован',
                        type: 'warning'
                    });
                })
        },
        buyCourse(i) {
            let formData = new FormData;
            formData.append('courseId', this.courseData.id);
            formData.append('tarif', i);

            axios.post(api.buy,
                formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${this.$store.state.jwt}` }, }
            ).then(response => {
                    if (response.status == 200) {

                        this.$router.push({ path: '/lk' })
                    } else {

                        this.$notify.error({
                            title: 'Что то пошло не так',
                            message: 'Попробуйте позже',
                            type: 'warning'
                        });

                    }
                }

            ).catch(error => {
                console.log(error.response)
                this.$notify.error({
                    title: 'Что то пошло не так',
                    message: 'Попробуйте позже',
                    type: 'warning'
                });

            })

        }
    },

}
</script>

<style lang="scss">
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

.el-dialog {
    .el-form button {
        box-shadow: 0px 4px 20px #f66c17 !important;
        ;
    }

    * {
        word-break: keep-all !important;
    }

    .el-form {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .el-form p {
        font-size: 16px !important;
        line-height: 20px;
        width: 100%;
        text-align: center !important;

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
}
</style><style lang="scss" scoped>
h2 {
    margin-top: 125px;
    margin-bottom: 5px;
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
    left: -15px;
    top: 9px;
    content: '';
    background: url('/img/courses/1/prices/t.svg') no-repeat center center / contain;
    height: 56.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -15px;
    top: 0px;
    content: '';
    background: white;
    height: 56.72px;
    width: 50.5px;
    transform: rotate(20deg);

    position: absolute;
}

.container {
    flex-direction: column;
    align-items: center;
}

.subheader {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 483px;
    margin-bottom: 19px;
    flex: 1;
    padding: 0;
}

li {
    list-style: none;
    font-size: 20px;
    line-height: 24px;
    margin-top: 52px;
    max-width: 598px;
    position: relative;
}

li::before {
    height: 50px;
    width: 50px;
    background: linear-gradient(135deg, #F370B7 0%, #D02883 100%);
    position: absolute;
    content: '';
    border-radius: 50%;
    left: -65px;
}

li:nth-child(2) {
    max-width: 735px;
}

li:nth-child(2)::before {
    background: linear-gradient(135deg, #CBF253 0%, #809C26 100%);
}

ul {
    margin-bottom: 126px;
}

.prices {
    display: flex;
    width: 100%;
    justify-content: center;
}

.price-w {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 329px;
    max-width: 300px;
    flex: 1;
    margin: 0 35px 60px;
    border-radius: 20px;
    position: relative;

    button {
        position: absolute;
        top: 400px;
        width: 100%;
        font-size: 25px;
        line-height: 160.2%;
        /* identical to box height, or 40px */
        border-radius: 25px;
        text-align: center;
        border: none;
        outline: none;
        padding: 20px 80px;
        color: #FFFFFF;
    }
}

h4 {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;
    max-width: 180px;
    margin-top: 37px;
    margin-bottom: 25px;

}

p {
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    padding: 0 18px;
    color: #000000;

}

.price {
    margin-bottom: 37px;
}

.pricePerM {
    margin-bottom: 45px;
}

.price-w:nth-child(1) {
    box-shadow: 0px 0px 60px #E757A5;

    button {
        background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
        box-shadow: 0px 0px 60px #D6358C;
    }
}

.price-w:nth-child(2) {
    box-shadow: 0px 0px 60px #F98C25;

    button {
        background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
        box-shadow: 0px 0px 60px #F98923;
    }
}

.price-w:nth-child(3) {
    box-shadow: 0px 0px 60px #A7CA3E;

    button {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
}

.certs {
    margin-top: 268px;
    margin-bottom: 132px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1040px;

    p {
        position: relative;
        padding-left: 90px;
        padding-right: 200px;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;
        flex: 1;
        text-align: left;
    }

    p::before {
        content: '';
        position: absolute;
        background: linear-gradient(135deg, #9BDEEA 0%, #60C2D9 100%);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        left: 0;
        top: 20px
    }

    button {
        background: linear-gradient(93.43deg, #9EDFEB 0%, #5DC1D8 100%);
        box-shadow: 0px 0px 60px #7DD7E7;
        border-radius: 20px;

        width: 300px;
        border: none;
        outline: none;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.2%;
        height: 80px;
    }
}

section {
    position: relative;
}

.cs-1::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/prices/left.svg') no-repeat left bottom / contain;
}

.cs-1::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/prices/right.svg') no-repeat right top / contain;
}

.cs-2::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/prices/left.svg') no-repeat left bottom / contain;
}

.cs-2::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/prices/right.svg') no-repeat right top /contain;
}

.cs-2 {
    .certs {
        max-width: 1070px;

        p {
            max-width: 550px;
            font-size: 25px;
            line-height: 30px;
            padding-left: 75px;

        }

        button {
            margin-right: 100px;
        }
    }

    .price-w {
        height: auto;
        background: white;
        max-width: 500px;
        flex: 1;
        padding: 0 32px 20px;
        margin-top: 146px;
    }

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        max-width: unset;
        color: #000000;
    }

    h4:first-child {
        margin-bottom: 0;
    }

    h4:nth-child(2) {
        margin-top: 0;
    }

    p {
        font-size: 30px;
        line-height: 37px;
        text-align: left;
        padding: 0;
    }

    .price {
        text-align: left;
        width: 100%;

    }

    button {
        top: 783px;
        width: 300px;
    }
}

@media (max-width:1500px) {
    h4 {
        font-size: 25px;
    }

    p {
        font-size: 22px;
    }

    .price-w button {
        font-size: 20px;
    }

    .certs {
        padding: 0 35px;
    }

    .certs p {
        font-size: 20px;
    }

    .certs button {
        font-size: 16px;
        width: auto;
        padding: 20px 35px;
    }
}

@media (max-width: 1250px) {
    h2 {
        margin-top: 41px;
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 16px;
    }

    h2::before {
        height: 35px;
        width: 35px;
        top: 6px;
        left: -5px;
    }

    h2::after {
        height: 35px;
        width: 35px;
    }

    li {
        font-size: 16px;
        line-height: 20px;
        max-width: 555px;
    }

    li:nth-child(2) {
        max-width: 585px;
    }

    li::before {
        height: 40px;
        width: 40px;
        left: -55px;
    }

    h4 {
        font-size: 22px;
        line-height: 27px;
        margin-top: 26px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
    }

    .cs-1 {
        .price-w {
            margin: 0 17px;
            height: 230px;
            background: white;

            button {
                font-size: 16px;
                line-height: 160.2%;
                padding: 17px 57px;
                top: 272px;
            }

        }
    }

    .cs-2 {
        h4 {
            font-size: 22px;
            line-height: 27px;
        }

        p {
            font-size: 18px;
            line-height: 20px;
        }

        button {
            font-size: 16px;
            line-height: 160.2%;
            padding: 17px 77px;
            top: 530px;
            width: unset;
        }

        .certs {
            margin-top: 171px;
            padding: 0 17px;

            p {
                font-size: 16px;
                line-height: 20px;
                padding-right: 100px;
                padding-left: 70px;
            }

            p::before {
                height: 40px;
                width: 40px;
                top: 9px;
                left: 10px;
            }

            button {
                font-size: 16px;
                line-height: 160.2%;
                padding: 0;
                height: unset;
                width: 199.33px;
                margin-right: unset;
            }
        }
    }

    .cs-1::after {
        height: 350px;
        right: -20px;
        top: 20px;
    }

    .cs-1::before {
        height: 400px;
        left: -20px;
        bottom: 20px;
    }

    .cs-2::after {
        height: 350px;
        right: -20px;
        top: 20px;
    }

    .cs-2::before {
        height: 400px;
        left: -20px;
        bottom: 20px;
    }

    .certs {
        margin-top: 171px;
        padding: 0 17px;

        p {
            font-size: 16px;
            line-height: 20px;
            padding-right: 100px;
            padding-left: 70px;
        }

        p::before {
            height: 40px;
            width: 40px;
            top: 9px;
            left: 10px;
        }

        button {
            font-size: 16px;
            line-height: 160.2%;
            padding: 0;
            height: unset;
            width: 199.33px;
        }
    }
}

@media (max-width: 800px) {
    h2 {
        font-size: 20px;
        line-height: 20px;
        margin-top: 39px;
        margin-bottom: 10px;
    }

    h2::before {
        top: 3px;
        height: 17px;
        width: 17px;
    }

    h2::after {
        top: 3px;
        height: 17px;
        width: 17px;
    }

    .subheader {
        max-width: 177px;
        font-size: 6px;
        line-height: 7px;
        margin-bottom: 0;
    }

    ul {
        margin-top: 41px;
        margin-bottom: 56px;
    }

    li {
        margin-bottom: 30px;
        margin-top: 0;
        font-size: 8px;
        line-height: 10px;
        max-width: 284px;
    }

    li:nth-child(2) {
        max-width: 284px;
    }

    li::before {
        height: 25px;
        width: 25px;
        left: -35px;
        top: -2px;
    }

    .cs-1 {
        .prices {
            flex-wrap: wrap;

            .price-w {
                flex: unset;
                width: 178px;
                height: 160px;
                margin: 0 75px 150px
            }

            h4 {
                font-size: 14px;
                line-height: 17px;
                max-width: 100px;
            }

            p {
                font-size: 12px;
                line-height: 15px;
            }

            .price {
                margin-bottom: 15px;
            }

            button {
                height: 40px;
                width: 150px;
                padding: unset;
                border-radius: 10px;
                top: 208px;
                font-size: 10px;
                line-height: 160.2%;
            }
        }
    }

    .cs-1 {
        .certs {
            margin-top: -34px;
            margin-bottom: 69px;
            flex-direction: column;
            align-items: center;

            p {
                max-width: 217px;
                padding: unset;
                font-size: 8px;
                line-height: 10px;
            }

            p::before {
                height: 25px;
                width: 25px;
                left: -35px;
                top: -2px;
            }

            button {
                font-size: 10px;
                line-height: 160.2%;
                height: 40px;
                width: 150px;
                border-radius: 10px;
                margin-top: 43px;
            }
        }
    }

    .cs-1::before {
        height: 200px;
        bottom: 300px;
        transform: rotate(10deg);
    }

    .cs-1::after {
        height: 200px;
        top: 400px;
    }

    .cs-2::before {
        height: 200px;
        bottom: 300px;
        transform: rotate(10deg);
    }

    .cs-2::after {
        height: 200px;
        top: 400px;
    }

    .cs-2 {
        .certs {
            margin-top: 34px;
            margin-bottom: 69px;
            flex-direction: column;
            align-items: center;

            p {
                max-width: 217px;
                padding: unset;
                font-size: 8px;
                line-height: 10px;
            }

            p::before {
                height: 25px;
                width: 25px;
                left: -35px;
                top: -2px;
            }

            button {
                font-size: 10px;
                line-height: 160.2%;
                height: 40px;
                width: 150px;
                border-radius: 10px;
                margin-top: 43px;
                margin-right: unset;
            }
        }

        .prices {
            flex-wrap: wrap;

            .price-w {
                flex: 1 1 250px;

                h4 {
                    font-size: 14px;
                    line-height: 17px;
                    max-width: 100px;
                }

                p {
                    font-size: 12px;
                    line-height: 15px;
                }

                margin-top: 50px;
                margin-bottom: 100px;
                padding: 12px 15px;
                height: 350px;

                button {
                    top: 370px
                }
            }
        }
    }

}

.mobile {
    h2::before {
        left: -3px !important;
        top: 1px !important;

    }

    h2::after {
        left: -6px !important;
        top: 1px !important;

    }
}
</style>
