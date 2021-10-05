<template>
<div class="courses">
    <section id="courses" class="courses-wrapper">
        <div class="container">
            <h2 class="k">Курсы</h2>
            <div class="courses-holder">
                <div class="course-wrapper" :class="course.style" v-for="course,i in courses" :key="i">
                    <div class="image" :style="'background: url(\''+url+course.image.formats.small.url+'\') no-repeat center center / cover'"></div>
                    <h3>{{course.Name}}</h3>
                    <div class="space">
                        <p>{{course.description}}</p>
                        <button @click="$router.push({path: '/course/'+(i*1+1)})">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <h4>
                Мы знаем, что абсолютно каждый ребенок умеет рисовать! <br> Нужно лишь помочь ему сделать первые шаги навстречу искусству.
            </h4>
            <div class="imtextes">
                <div class="img-text">
                    <div class="img1">

                    </div>
                    <div class="text">
                        Наша авторская методика построена так, что даже те детки, кто не обладает художественными навыками, к концу курса действительно начинают увлеченно держать в руках кисть.
                    </div>
                </div>
                <div class="img-text">
                    <div class="img2"></div>
                    <div class="text">На каждом уроке вы сможете узнать удивительные факты об изображаемых животных, явлениях или предметах. Интересно будет и детям, и взрослым! </div>

                </div>
            </div>
            <div class="quote">Все занятия ведут талантливые художники — настоящие мастера своего дела. </div>

            <div class="connect">Присоединяйтесь к нашей дружной команде и попробуйте создать свою первую картину уже сейчас!
            </div>
            <button @click="openReg">Присоединиться</button>

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
        </div>
    </section>
</div>
</template>

<script>
import api from '../../constants'
import axios from 'axios'
export default {
    computed: {
        courses: function () {
            return this.$store.state.mainData.courses
        }
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
                    this.$router.push({ path: '/lk' })
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
                                this.$router.push({ path: '/lk' })
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
                                this.$router.push({ path: '/lk' })
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
@media(max-width: 400px) {
    .el-dialog {
        max-width: 400px !important;
        width: unset !important;
    }
}

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

.el-form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.el-form button {
    box-shadow: 0px 4px 20px #f66c17 !important;
    ;
}

.el-form p {
    line-height: 20px;
    width: 100%;
    text-align: center;

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
</style><style lang="scss" scoped>
.about {
    position: relative;
    padding-bottom: 200px;

    .container {
        flex-direction: column;
        align-items: center;
    }

    h4 {

        font-size: 30px;
        line-height: 37px;
        text-align: center;
        font-weight: normal;
        color: #333333;
        margin-bottom: 50px;
    }

    .imtextes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .img-text {
        max-width: 510px;
        display: flex;
        align-items: flex-start;

        flex-direction: column;

    }

    .img1 {
        background: url('/img/desc1.png') no-repeat center center / cover;
        height: 350px;
        width: 510px;

    }

    .img2 {
        background: url('/img/desc2.png') no-repeat center center / cover;
        height: 350px;
        width: 510px;
    }

    .text {
        margin-top: 30px;

        font-size: 18px;
        line-height: 22px;
    }

    .quote {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        width: 600px;
        position: relative;

        margin-top: 105px;
        margin-bottom: 72px;
    }

    .quote::before {
        content: '';
        position: absolute;
        border-top: 1px solid #F66A16;
        width: 580px;
        top: -22px;
        left: 10px;
    }

    .quote::after {
        content: '';
        position: absolute;
        border-top: 1px solid #F66A16;
        width: 580px;
        bottom: -22px;
        left: 10px;
    }

    .connect {
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        max-width: 1112px;

        height: 100px;
    }

    button {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
        border-radius: 25px;
        padding: 24px 61px;
        font-size: 20px;
        line-height: 160.2%;
        border: none;
        outline: none;
        text-align: center;
        margin-top: 50px;
        color: #FFFFFF;
    }
}

#courses {
    padding-bottom: 200px;
}

.courses-wrapper {

    position: relative;

    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .courses-holder {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;

        .course-wrapper {
            flex: 0 1 510px;
            max-width: 510px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                position: relative;

                width: 510px;
                height: 350px;
                margin-bottom: 30px;
            }

            h3 {
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;

            }

            .space {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                flex: 1
            }

            p {
                margin-top: 30px;
                font-size: 18px;
                line-height: 22px;

            }

            button {

                border-radius: 25px;
                border: none;
                outline: none;
                font-size: 20px;
                line-height: 160.2%;
                padding: 24px 86px;
                color: #FFFFFF;
                margin-top: 50px;
                font-weight: normal;
                cursor: pointer;
                transition: all .3s ease-in-out !important;
                will-change: auto;
            }

            button:hover {
                transform: translateY(-5px);
            }
        }

        .course-wrapper:first-child {
            margin-right: 23px;

            button {
                background: linear-gradient(94.07deg, #F574BA 0%, #CD237F 100%);
                box-shadow: 0px 0px 60px #D6358C;
            }

            .image {
                filter: drop-shadow(0px 0px 40px rgba(214, 53, 140, 0.8));
            }

        }

        .course-wrapper:last-child {
            margin-left: 23px;

            button {
                background: linear-gradient(94.07deg, #FAA435 0%, #F96C0F 100%);
                box-shadow: 0px 0px 60px #F98923;
            }

            .image {
                filter: drop-shadow(0px 4px 50px #F98923);
            }

            .image::after {
                content: '';
                background: url('/img/jirafCourses.png') no-repeat right center / contain;
                height: 274px;
                width: 171px;
                position: absolute;
                right: -115px;
                top: 30px;
            }
        }
    }

    h2 {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 70px;
        /* identical to box height */
        color: #515151;
        text-align: center;
        position: relative;
        margin-top: 200px;
        margin-bottom: 50px;

    }

    h2::first-letter {
        opacity: 0;
    }
}

.courses-wrapper::after {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat left center / contain;

    height: 525px;
    width: 530px;
    left: 0;
    position: absolute;
    bottom: -200px;
}

.about::after {
    content: "";
    background: url('/img/coursesPink.svg') no-repeat right center / contain;
    height: 690px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 210px;

}

.k::before {
    content: '';
    background: url('/img/k.svg') no-repeat center center / contain;
    width: 44.28px;
    height: 55.04px;
    position: absolute;
    z-index: 2;
    top: 9px;
    left: 4px;
}

.mobile {
    .k::before {
        left: -3px !important;
        top: 0.5px !important;

    }

}
</style>
