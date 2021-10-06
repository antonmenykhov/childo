<template>
<section v-if="show" id="prices" :class="courseData.teacher.style">
    <div class="container">
        <h2>Тарифы</h2>
        <p v-if="courseData.teacher.style=='cs-1'" class="subheader">Проанализируйте свое свободное время и подумайте, как часто вы сможете заниматься рисованием? </p>
        <ul v-if="courseData.teacher.style=='cs-1'">
            <li>Если у вас достаточно свободного времени и вы можете много заниматься, вам подойдет тариф на 3 месяца</li>
            <li>Если у вас мало времени и у вас нет возможности часто заниматься, то мы предлагаем взять вам тариф на 6 или 12 месяцев</li>
        </ul>
        <div class="prices" >
            <div class="price-w" v-for="item,i in courseData.prices" :key="item.name">
                <h4>Тариф No<span v-html="item.name"></span></h4>
                <div class="descriptionp" v-html="item.description"></div>
                <p class="old-price">{{item.oldprice}} Руб.</p>
                <p class="price">{{item.price}} Руб.</p>

                <button @click="openReg(i)">Оплатить</button>
            </div>
        </div>
        

    </div>
    <el-dialog class="register" width="400px" :visible.sync="reg">
        <h3>Регистрация</h3>
        <el-form ref="val" :model="register">
            <el-form-item prop="name" :rules="[
      { required: true, message: 'Введите имя и фамилию', trigger: 'blur' }]">
                <el-input placeholder="Имя Фамилия" v-model="register.name"></el-input>
            </el-form-item>
            <el-form-item prop="mail" :rules="[
      { required: true, message: 'Введите адрес эл.почты', trigger: 'blur' },
      { type: 'email', message: 'Введите корректный адрес почты', trigger: ['blur', 'change'] }
    ]">
                <el-input placeholder="Адрес эл. почты" v-model="register.mail"></el-input>
            </el-form-item>
            <el-form-item prop="password" :rules="[
      { required: true, message: 'Введите пароль', trigger: 'blur' }]">
                <el-input type="password" placeholder="Пароль" v-model="register.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="@instagram" v-model="register.instagram"></el-input>
            </el-form-item>
            <el-form-item prop="sogl" :rules="[{ type: 'boolean', required: true, message: 'Нужно ваше согласие', trigger: 'change' }]">
                <el-checkbox v-model="register.sogl">Я соглашаюсь на обработку <br> персональных данных</el-checkbox>
            </el-form-item>
            <el-button @click="registerSend" type="primary">Регистрация</el-button>
            <el-form-item>
                <p @click="openAuth"> Уже зарегистрированы? <br> Нажмите чтобы <span>войти</span></p>
            </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog class="register" width="400px" :visible.sync="auth">
        <h3>Войти</h3>
        <el-form ref="val" :model="register">

            <el-form-item prop="mail" :rules="[
      { required: true, message: 'Введите адрес эл.почты', trigger: 'blur' },
      { type: 'email', message: 'Введите корректный адрес почты', trigger: ['blur', 'change'] }
    ]">
                <el-input placeholder="Адрес эл. почты" v-model="register.mail"></el-input>
            </el-form-item>
            <el-form-item prop="password" :rules="[
      { required: true, message: 'Введите пароль', trigger: 'blur' }]">
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
        <el-form ref="val" :model="register">

            <el-form-item prop="mail" :rules="[
      { required: true, message: 'Введите адрес эл.почты', trigger: 'blur' },
      { type: 'email', message: 'Введите корректный адрес почты', trigger: ['blur', 'change'] }
    ]">
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
        courseData: Object,
        show: Boolean
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
            this.$refs.val.validate((valid) => {
                if (valid) {
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
                }
            })
        },
        authSend() {
            this.$refs.val.validate((valid) => {
                if (valid) {
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
                }
            })
        },
        forgotSend() {
            this.$refs.val.validate((valid) => {
                if (valid) {
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
                }
            })
        },
        buyCourse(i) {
            let formData = new FormData;
            formData.append('courseId', this.courseData.id);
            formData.append('priceId', i);
            formData.append('jwt', this.$store.state.jwt);

            axios.post('https://pay.childo-art.ru',
                formData
            ).then(response => {
                    if (response.status == 200) {

                        document.location.href = response.data
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
.descriptionp {
    font-size: 18px;
    line-height: 22px;
    text-align: left;
    padding: 0 12px 0 25px;
    width: 100%;
    

    li {
        font-size: 18px;
        line-height: 22px;

        color: #333333;
        list-style: none;
        position: relative;
    }

    li::before {
        content: '';
        background: black;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        transition: all .2s;
        position: absolute;
        left: -20px;
        top: 6px
    }

    li:hover::before {
        transform: scale(1.2);

    }

    ul {
        padding-left: 20px;
    }

    li:nth-child(4)::before,
    li:nth-child(8)::before,
    li:nth-child(12)::before,
    li:nth-child(16)::before,
    li:nth-child(20)::before,
    li:nth-child(24)::before {
        background: #F7751C;
    }

    li:nth-child(3)::before,
    li:nth-child(7)::before,
    li:nth-child(11)::before,
    li:nth-child(15)::before,
    li:nth-child(19)::before,
    li:nth-child(23)::before {
        background: #A7CA3E;
    }

    li:nth-child(2)::before,
    li:nth-child(6)::before,
    li:nth-child(10)::before,
    li:nth-child(14)::before,
    li:nth-child(18)::before,
    li:nth-child(22)::before {
        background: #E757A5;
    }

    li:first-child::before,
    li:nth-child(5)::before,
    li:nth-child(9)::before,
    li:nth-child(13)::before,
    li:nth-child(17)::before,
    li:nth-child(21)::before {
        background: #45C6DD;
    }

}
</style><style lang="scss" scoped>
h2 {
    margin-top: 200px;
    margin-bottom: 50px;
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
    margin-bottom: 200px;
}

.subheader {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    max-width: 536px;
    margin-bottom: 50px;
    flex: 1;
    padding: 0;
}

li {
    list-style: none;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 50px;
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
    left: -95px;
    top: -3px;
}

li:nth-child(2) {
    max-width: 735px;
}

li:nth-child(2)::before {
    background: linear-gradient(135deg, #CBF253 0%, #809C26 100%);
}

ul {
    margin-bottom: 50px;
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
    
    height: 600px;
    max-width: 350px;
    flex: 1;
    margin: 0 23px;

    position: relative;

    button {
        position: absolute;
        bottom: -40px;
        width: 300px;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height, or 40px */
        border-radius: 25px;
        text-align: center;
        border: none;
        outline: none;
        padding: 25px 80px;
        color: #FFFFFF;
    }
}

h4 {
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    color: #333333;

    margin-top: 53px;
    margin-bottom: 17px;

}
h4 span{
    text-transform: uppercase;
}

p {
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    padding: 0 18px;
    color: #333333;

}

.price {
    
    
    position: absolute;
    font-size: 40px;
    bottom: 81px;
    line-height: 64px;
    font-weight: 600;
}
.old-price{
    font-weight: 600;
    
    position: absolute;
    bottom: 150px;
    font-size: 40px;
    line-height: 64px;
    text-decoration: line-through;
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
    .price, h4 span{
        color:  #C9287F;

    }
}

.price-w:nth-child(2) {
    box-shadow: 0px 0px 60px #F98C25;

    button {
        background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
        box-shadow: 0px 0px 60px #F98923;
    }
    .price, h4 span{
        color:  #F66C17;

    }
}

.price-w:nth-child(3) {
    box-shadow: 0px 0px 60px #A7CA3E;

    button {
        background: linear-gradient(94.82deg, #CEF655 0%, #7B9723 100%);
        box-shadow: 0px 4px 60px #A5C73C;
    }
    .price, h4 span{
        color:  #A5C73C;

    }
}

section {
    position: relative;
}

.cs-2 {


    .price-w {
        height: auto;
        background: white;
        max-width: 501px;
        flex: 1;
        
        margin-top: 80px;
        height: 593px;
        margin: 0 22px;
    }

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        max-width: unset;
        color: #333333;
        
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
