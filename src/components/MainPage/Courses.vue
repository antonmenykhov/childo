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
                Мы знаем, что абсолютно каждый ребенок умеет рисовать! Нужно лишь помочь ему сделать первые шаги навстречу искусству.
            </h4>
            <div class="img-text">
                <div class="img1">

                </div>
                <div class="text">
                    Наша авторская методика построена так, что даже те детки, кто не обладает художественными навыками, к концу курса действительно начинают увлеченно держать в руках кисть.
                </div>
            </div>
            <div class="quote">Все занятия ведут талантливые художники — настоящие мастера своего дела. </div>
            <div class="img-text img-text2">
                <div class="text">На каждом уроке вы сможете узнать удивительные факты об изображаемых животных, явлениях или предметах. Интересно будет и детям, и взрослым! </div>
                <div class="img2"></div>
            </div>
            <div class="connect">Присоединяйтесь к нашей дружной команде и попробуйте создать свою первую картину уже сейчас!
            </div>
            <button @click="openReg">Присоединиться</button>
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
            if ( this.$cookie.get('jwt')) {
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

    },
    data() {
        return {
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
}
</script>

<style>

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
    padding-bottom: 195px;

    .container {
        flex-direction: column;
        align-items: center;
    }

    h4 {
        margin-top: 13px;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        max-width: 940px;
        color: #000000;
        margin-bottom: 124px;
    }

    .img-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-text2 {
        .text {
            max-width: 567px;
        }
    }

    .img1 {
        background: url('/img/desc1.jpg') no-repeat center center / cover;
        height: 224px;
        width: 397px;
        border-radius: 15px;
        margin-right: 65px;
    }

    .img2 {
        background: url('/img/desc2.jpg') no-repeat center center / cover;
        height: 224px;
        width: 397px;
        border-radius: 15px;
        margin-left: 7px;
    }

    .text {
        max-width: 505px;
        font-size: 25px;
        line-height: 30px;
    }

    .quote {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        width: 567px;
        padding: 11px 0;
        border-top: 1px solid #F66A16;
        border-bottom: 1px solid #F66A16;
        margin-top: 94px;
        margin-bottom: 94px;
    }

    .connect {
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        max-width: 764px;
        margin-top: 77px;
        margin-bottom: 11px;
        height: 100px;
    }

    button {
        background: linear-gradient(94.82deg, #FBAD3A 0%, #F66A16 100%);
        box-shadow: 0px 4px 60px #F66C17;
        border-radius: 25px;
        padding: 20px 39px;
        font-size: 25px;
        line-height: 160.2%;
        border: none;
        outline: none;
        text-align: center;

        color: #FFFFFF;
    }
}

.courses-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 180px;

    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .courses-holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .course-wrapper {
            flex: 0 1 554px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                position: relative;
                border-radius: 20px;
                width: 400px;
                height: 250px;
                margin-bottom: 28px;
            }

            h3 {
                font-weight: 600;
                font-size: 30px;
                line-height: 37px;
                text-align: center;
            }

            .space {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                flex: 1
            }

            p {
                margin-top: 18px;
                font-size: 25px;
                line-height: 30px;
                text-align: center;
            }

            button {

                border-radius: 25px;
                border: none;
                outline: none;
                font-size: 25px;
                line-height: 160.2%;
                padding: 20px 74px;
                color: #FFFFFF;
                margin-top: 78px;
                font-weight: normal;
                cursor: pointer;
                transition: all .3s ease-in-out !important;
                will-change: auto;
            }

            button:hover {
                transform: translateY(-5px);
            }
        }

        .child {
            .image::after {
                content: '';
                background: url('/img/jirafCourses.png') no-repeat right center / contain;
                height: 216px;
                width: 144px;
                position: absolute;
                right: -98px;
                top: 15px;
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
        margin-top: 125px;
        margin-bottom: 115px;

    }

    h2::first-letter {
        opacity: 0;
    }
}

.courses-wrapper::before {
    content: "";
    background: url('/img/coursesBlue.svg') no-repeat left center / contain;
    height: 525px;
    width: 530px;
    left: 0;
    top: 170px;
    position: absolute;

}

.courses-wrapper::after {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat right center / contain;
    height: 525px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 160px;
}

.about::before {
    content: "";
    background: url('/img/coursesGreen.svg') no-repeat right center / contain;
    height: 525px;
    width: 530px;
    left: 0;
    top: 170px;
    position: absolute;
    transform: rotate(180deg);

}

.about::after {
    content: "";
    background: url('/img/coursesPink.svg') no-repeat right center / contain;
    height: 690px;
    width: 530px;
    right: 0;
    position: absolute;
    bottom: 160px;

}

.k::before {
    content: '';
    background: url('/img/к.svg') no-repeat center center / contain;
    width: 42.28px;
    height: 54.04px;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 4px;
}

.k::after {
    content: '';
    background: white;
    width: 50.28px;
    height: 55.04px;
    position: absolute;

    top: 5px;
    left: 0px;
}

@media (max-width: 1500px) {
    .courses-wrapper .courses-holder .course-wrapper {
        flex: 1 1 350px;
    }

    .courses-wrapper .courses-holder .course-wrapper h3 {
        font-size: 24px;
    }

    .courses-wrapper .courses-holder .course-wrapper p {
        font-size: 20px;
    }

    .courses-wrapper .courses-holder .course-wrapper button {
        font-size: 20px;
    }

    .about {
        h4 {
            font-size: 28px;
            line-height: 32px;
        }

        .text {
            font-size: 20px;
        }

        button {
            font-size: 20px;
        }

        .quote {
            font-size: 20px;
            width: 455px;
        }

        .connect {
            font-size: 20px;
            width: 655px;
        }

    }
}

@media (max-width: 1250px) {
    .courses-wrapper::before {
        height: 400px;
        left: -40px;
        top: 0;
        transform: rotate(-10deg);
    }

    .courses-wrapper::after {
        height: 300px;
        transform: rotate(-10deg);
        right: -30px;
        bottom: 20px;
    }

    .courses-wrapper {
        padding-bottom: 128px;
    }

    .courses-wrapper {
        .k {
            margin-top: 50px;
            font-size: 40px;
            line-height: 40px;
        }

        .k::before {
            content: '';
            background: url('/img/к.svg') no-repeat center center / contain;
            width: 30.28px;
            height: 32.04px;
            position: absolute;
            z-index: 2;
            top: 6px;
            left: 0px;
        }

        .k::after {
            content: '';
            background: white;
            width: 30px;
            height: 32px;
            position: absolute;

            top: 5px;
            left: 0px;
        }
    }

    .courses-wrapper .courses-holder .course-wrapper .image {
        height: 187px;
        width: 100%;
        margin-bottom: 10px;

        max-width: 280px;
    }

    .courses-wrapper .courses-holder .child .image::after {
        height: 80%;
        right: -68px;
    }

    .courses-wrapper .courses-holder .course-wrapper {
        flex: 1 1 250px;

        h3 {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
        }

        p {
            font-size: 16px;
            line-height: 20px;
        }

        button {
            margin-top: 35px;
            font-size: 20px;
            padding: 15px 49px;
        }
    }

    .courses-wrapper .courses-holder .course-wrapper:first-child {
        margin-right: 10px;
    }

    .courses-wrapper .courses-holder .course-wrapper:last-child {
        margin-left: 10px;
    }

    .about {
        padding-bottom: 76px;

        h4 {
            margin-top: 69px;
            font-size: 24px;
            line-height: 29px;
            max-width: 673px;
        }

        .img-text,
        .img-text2 {
            padding: 0 55px;
        }

        .img1 {
            max-width: 240px;
            margin-right: 20px;
            height: 134px;
        }

        .img2 {
            max-width: 240px;
            margin-left: 20px;
            height: 134px;
        }

        .text {
            font-size: 16px;
            line-height: 20px;
            flex: 1 1 300px;
        }

        .quote {
            margin-bottom: 81px;
            margin-top: 81px;
            font-size: 16px;
            line-height: 20px;
        }

        .connect {
            font-size: 18px;
            line-height: 22px;
            padding: 0 20px;
            height: auto;
            margin-bottom: 54px;
            margin-top: 81px;
        }

        button {
            font-size: 16px;
            line-height: 160.2%;
            padding: 17px 39px;
        }
    }

    .about::after {
        height: 400px;
        top: 230px;
    }

    .about::before {
        top: unset;

        height: 300px;
        bottom: 100px;
    }
}

@media (max-width: 800px) {
    .courses-wrapper::after {
        left: 0;
        right: unset;
        transform: rotate(180deg);
        top: 0;
        bottom: unset;
        width: 100px;
    }

    .courses-wrapper::before {
        right: 0;
        left: unset;
        transform: rotate(180deg);
        bottom: 271px;
        top: unset;
        width: 150px;
    }

    .courses-wrapper {
        padding-bottom: 0;

        .k {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 48px;
        }

        .k::before {
            height: 17px;
            width: 20px;
            left: -3px;
            top: 3px;
        }

        .k::after {
            height: 17px;
            width: 20px;
            left: -5px;
            top: 3px;
        }

        .courses-holder {
            flex-direction: column;

            .parent {
                margin-left: 0 !important;
            }

            .child {
                margin-right: 0 !important;
            }

            .course-wrapper {
                position: relative;

                .image {
                    height: 100px;
                    width: 179px;
                    border-radius: 10px;

                }

                .image::after {
                    right: -35px;
                }

                h3 {
                    font-size: 12px;
                    line-height: 15px;
                    max-width: 220px;
                    position: relative;
                    z-index: 10;
                }

                p {
                    max-width: 220px;
                    font-size: 8px;
                    line-height: 10px;
                    position: relative;
                    z-index: 10;
                    color: black;
                }

                button {
                    margin-bottom: 80px;
                    margin-top: 21px;
                    border-radius: 10px;
                    padding: 12px 44px;
                    font-size: 10px;
                    line-height: 160.2%;
                }
            }
        }
    }

    .courses-wrapper .courses-holder .course-wrapper:last-child button {
        box-shadow: 0px 0px 40px #F98923;
    }

    .courses-wrapper .courses-holder .course-wrapper:first-child button {
        box-shadow: 0px 0px 40px #D6358C;
    }

    .courses-wrapper .courses-holder .course-wrapper:last-child .image {
        filter: drop-shadow(0px 4px 40px #F98923);
    }

    .courses-wrapper .courses-holder .course-wrapper:first-child .image {
        filter: drop-shadow(0px 0px 40px rgba(214, 53, 140, 0.8));
    }

    .about::after {
        width: 100px;
        top: 70px;
    }

    .about::before {
        width: 100px;
        bottom: 100px;
    }

    .about {
        h4 {
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            max-width: 213px;
            text-align: left;
            position: relative;
            margin-left: 80px;
            margin-top: 30px;
            margin-bottom: 71px;
        }

        h4::before {
            content: '';
            position: absolute;
            height: 226px;
            width: 160px;
            background: url('/img/HeaderJiraf.png') no-repeat center center / contain;
            transform: rotateY(180deg);
            left: -160px;
            top: -30px;
        }

        .img-text,
        .img-text2 {
            flex-direction: column;

        }

        .img1,
        .img2 {
            width: 127px;
            height: 71px;
            margin-bottom: 15px;
            margin: 0 0 15px 0;
        }

        .text {
            font-size: 8px;
            line-height: 10px;
            max-width: 208px;
            text-align: center;
            flex: unset
        }

        .quote {
            font-size: 10px;
            line-height: 12px;
            max-width: 240px;
            margin: 30px 0;
        }

        .img-text2 {
            flex-direction: column-reverse;

            .text {
                max-width: 208px;
            }
        }

        .connect {
            font-size: 10px;
            line-height: 12px;
            max-width: 332px;
            margin-top: 50px;
            margin-bottom: 30px;
        }

        button {
            font-size: 10px;
            line-height: 160.2%;
            padding: 12px 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 20px #F66C17;
        }
    }
}

.mobile {
    .k::before {
        left: -3px !important;
        top: 0.5px !important;

    }

    .k::after {
        left: -6px !important;
        top: 0px !important;

    }
}
</style>
