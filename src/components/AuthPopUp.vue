<template>
<div class="pop-up">
    <el-dialog class="register" width="400px" :visible.sync="reg">
        <h3>Регистрация</h3>
        <el-form ref="val" :model="register">
            <el-form-item prop="name" :rules="[
                 { 
                  required: true,
                  message: 'Введите имя и фамилию', 
                  trigger: 'blur' 
                  }]">
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
</div>
</template>

<script>
import api from '../constants'
import axios from 'axios'
import { eventBus } from '../main.js'
export default {
    created() {
        eventBus.$on('openRegLk', () => {
            this.openReg();

        })
        eventBus.$on('openRegBuy', data => {
            this.openRegBuy(data.priceId)
        })
        eventBus.$on('openRegCart', () => {
            this.openCart()
        })
    },
    methods: {

        openAuth() {

            this.reg = false;
            this.forgot = false
            this.auth = true;

        },
        openReg() {
            if (this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);
                    window.open('/lk', '_blank').focus
                    this.reg = false
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
        openCart() {
            if (this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);
                    eventBus.$emit('openCart');
                    this.reg = false
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
        openRegBuy(priceId) {
            if (this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);

                    eventBus.$emit('buyCourse', { priceId: priceId })

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
                            username: this.register.name + ((Math.random() * 100) + 1),
                            email: this.register.mail,
                            password: this.register.password,
                            Instagram: this.register.instagram,
                            name: this.register.name
                        })
                        .then(
                            response => {
                                this.$cookie.set('jwt', response.data.jwt, { expires: '1D' })
                                this.$store.commit('setJwt', response.data.jwt);
                                this.$store.commit('setUserData', response.data.user);

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

                                this.auth = false
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
        goLk() {
            this.$router.push({ path: '/lk' })
        }

    },
    data() {
        return {
            soglV: false,
            url: api.url,
            reg: false,
            auth: false,
            disabled: false,
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
}
</script>

<style>
.pop-up {
    z-index: 9998;
}
</style>
