<template>
<section :class="style">
    <div class="back-button" @click="$router.push({path: '/'})">
        <div class="back-arrow"></div>
    </div>
    <div class="container">
        <div class="main-info">
            <div class="info">
                <div class="avatar">
                    <div class="image" v-if="userData.avatarUrl" :style="'background: url(\''+url+userData.avatarUrl+'\') no-repeat center center / cover'"></div>
                    <label for="avatar">Загрузить</label>
                    <input type="file" :id="'avatar'" v-on:change="FileUpload()">
                </div>
                <div class="fullName">
                    {{userData.name}}
                </div>

            </div>
            <div class="description">
                Мы рады видеть вас в творческом проекте онлайн-курсов по рисованию «ChilDo»! Благодарим вас за приобретение курса. Давайте проведем небольшую экскурсию по нашему волшебному миру.<br><br>
                В «Личном кабинете» вы можете отслеживать прогресс и видеть доступные курсы. Если вы откроете блок «О нас», то познакомитесь с дружной командой нашего проекта — его создателем и художниками.<br><br>
                На странице «Курсы» вас ждет описание всех курсов, список необходимых материалов для обучения и краткое описание каждого занятия. После просмотра каждого урока вам нужно будет выполнить домашнее задание — сфотографировать свою картину и загрузить ее в специальную форму на сайте. После этого вы сможете продолжить обучение.<br><br>
                Изучив все уроки и техники, вы сможете создать собственные неповторимые шедевры. В конце курса вас ждет приятный бонус — сертификат о прохождении онлайн-курса по рисованию «ChilDo».
                <br><br>Учитесь и творите вместе с «ChilDo»! <br><br>Желаем удачи и вдохновения!

            </div>
        </div>
        <div class="works">
            <h3>Мои работы</h3>
            <div class="works-wrapper">
                <div :style="'background: url(\''+url+works[i]+'\') no-repeat center center / cover'" class="work" v-for="item,i in worksNum" :key="item"></div>
                <div v-if="!all" class="more-button" @click="all=true">
                    <div class="icon">+</div>
                    <p>Смотреть еще</p>
                </div>
            </div>
            <div class="support-wrapper">
                <p>Воспользуйся чатом поддержки</p>
                <button>Открыть</button>
            </div>
        </div>
        <div class="sidebar">
            <div class="exit-wrapper">
                <button class="exit" @click="exit">Выйти</button>
            </div>
            <div class="course" v-for="item,i in userData.BuyedCourses" :key="i">
                <h3>{{item.data.Name}}</h3>
                <ul>
                    <li>Дата покупки: {{item.courseStart}}</li>
                    <li>Конец курса: {{item.CourseEnd}}</li>
                </ul>
                <button @click="$router.push({
              path:'/lessons/'+(i+1)
            })">Перейти к урокам</button>
                <h3>Просмотренно уроков:</h3>
                <div class="progressbar">
                    <div class="progress" :style="'width: '+lessonView(i)+'%'">{{lessonView(i)}}%</div>
                </div>
            </div>
            <button>Дипломы</button>
            <h3>Мои сертификаты:</h3>
            <div class="cert"></div>
        </div>
    </div>
</section>
</template>

<script>
import api from '../constants'
import axios from 'axios'
export default {
    mounted() {
        window.scrollTo(0, 0)
        if (this.$cookie.get('jwt')) {
            this.$store.commit('setJwt', this.$cookie.get('jwt'));
            axios.get(api.me, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.jwt}`,
                }
            }).then(response => {
                this.$store.commit('setUserData', response.data);
                this.userData = response.data

            }).catch(error => {
                console.log(error.response)

            })
        } else {
            this.$router.push({ path: '/' })
        }
    },
    data() {
        return {

            style: 'child',
            userData: {},
            url: api.url,
            all: false
        }
    },
    methods: {
        FileUpload() {
            this.file = document.getElementById('avatar').files[0];
            this.submitImage()
        },
        submitImage() {
            let formData = new FormData();
            formData.append('files', this.file);
            axios.post(api.upload,
                formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${this.$store.state.jwt}` }, }
            ).then(response => {
                this.$set(this.userData, 'avatarUrl', response.data[0].formats.thumbnail.url)
                setTimeout(this.setAvatar, 500)

            })

        },
        setAvatar() {
            let formData = new FormData;
            formData.append('avatarLink', this.userData.avatarUrl)
            axios.post(api.setAvatar, formData, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.jwt}`,
                }
            }).then(response => console.log(response.data))
        },
        exit() {
            this.$cookie.delete('jwt');
            this.$router.push({ path: '/' });
            this.$store.commit('setJwt', null)
        },
        lessonView(i) {
            let lessNum = this.userData.BuyedCourses[i].data.lessons.length;
            let view = 0;
            if (this.userData.BuyedCourses[i].lessonsData) {
                for (let key in this.userData.BuyedCourses[i].lessonsData) {
                    if (key) {
                        view += 1
                    }
                }
            }
            return Math.ceil((view / lessNum) * 100)
        }
    },
    computed: {
        works: function () {
            let works = []

            this.userData.BuyedCourses.forEach(elem => {
                if (elem.lessonsData) {
                    if (elem.lessonsData[0]) {
                        for (let key in elem.lessonsData) {

                            works.push(elem.lessonsData[key])

                        }
                    }
                }
            })
            return works
        },
        worksNum: function () {
            let width = window.innerWidth;
            let num = 0;
            if (width >= 1250) {
                num = 3
            }
            if (width < 1250 && width > 800) {
                num = 2
            }
            if (width <= 800) {
                num = 6
            }
            if (this.all) {
                num = this.works.length
            }
            return num
        },

    }
}
</script>

<style lang="scss" scoped>
.back-button {
    position: fixed;
    left: 15px;
    top: 15px;
    height: 50px;
    width: 50px;
    background: rgb(212, 212, 212);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.4;
    transition: all .2s;

    .back-arrow {
        background: url('/img/back.svg') no-repeat center center / contain;
        height: 30px;
        width: 30px;
        margin-left: -5px;
    }
}

.back-button:hover {
    opacity: 1;
}

h3 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    /* identical to box height */

    color: #333333;
}

section {
    position: relative;
    z-index: 2000;
    background: white;

}

.container {
    display: grid;
    grid-template-areas:
        "main sidebar"
        "works sidebar"
        "works sidebar"
        "works sidebar";
    grid-template-columns: 63% 37%;
}

.main-info {
    grid-area: main;
    margin-top: 200px;
    height: fit-content;

    .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-right: 60px;
        margin-left: 20px;
        align-items: flex-start;

        .avatar {
            height: 120px;
            width: 120px;
            background-color: #D1D1D1;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            display: flex;
            margin-bottom: 20px;
            justify-content: center;
            align-items: center;

            input {
                display: none;
            }

            label {
                cursor: pointer;
            }

            .image {
                left: 0;
                right: 0;
                position: absolute;
                height: 120px;
                width: 120px;

            }
        }

        .fullName {

            margin-bottom: 60px;
            font-size: 18px;
            line-height: 22px;

        }

    }

    .description {
        border: 3px solid #45C6DD;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(69, 198, 221, 0.5);
        border-radius: 20px;
        padding: 37px 21px 50px 43px;
        font-size: 18px;
        line-height: 22px;
        margin-left: 30px;
        margin-right: 30px;
        position: relative;
        background: white;

    }

    .description::before {
        content: '';
        background: url('/img/lk/descr.svg') no-repeat left center / contain;
        position: absolute;
        left: -50px;
        height: 100px;
        width: 100px;
        z-index: -1;
        bottom: 30px;
    }
}

.works {
    grid-area: works;

    h3 {

        margin-bottom: 20px;
        margin-top: 60px;
    }

    .works-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: 23px;
        position: relative;
        margin-bottom: 100px;

        .work {
            flex: 1 1 150px;
            height: 152px;
            background-color: #C4C4C4;

            margin-right: 35px;
            margin-bottom: 20px;
        }

        .more-button {

            text-align: center;
            display: flex;

            position: absolute;
            bottom: -60px;
            align-items: center;
            color: #333333;

            p {
                font-size: 18px;
                line-height: 22px;
                padding-left: 15px;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: linear-gradient(135deg, #FA9C2F 0%, #F97314 100%);
                height: 50px;
                width: 50px;
                color: white;
                font-size: 40px;
                font-weight: 200;

            }
        }

    }

    .support-wrapper {
        background: #FFC873;
        border-radius: 10px;
        margin-right: 60px;
        display: flex;
        align-items: center;
        margin-top: 65px;
        margin-bottom: 88px;
        justify-content: space-between;

        p {
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            padding: 20px;

        }

        button {
            background: #F26814;
            border-radius: 10px;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            padding: 10px 20px;
            margin-right: 20px;
            color: #FFFFFF;
            height: 44px;
            border: none;
            outline: none;
            width: 150px;
        }
    }
}

.sidebar {
    grid-area: sidebar;
    border-left: 3px solid #7E7E7E;
    padding-left: 35px;

    h3 {
        font-size: 20px;
        line-height: 20px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    li {
        font-size: 18px;
        line-height: 160.2%;
        /* identical to box height, or 32px */
        list-style: none;
        color: #333333;
        position: relative;

    }

    li::before {

        position: absolute;
        left: -20px;
        background: #7E7E7E;
        border-radius: 50%;
        height: 12px;
        width: 12px;
        top: 10px;
    }

    ul {
        padding-left: 0;
    }

    button {
        background: linear-gradient(93.43deg, #A1E0EC 0%, #59BFD7 100%);
        box-shadow: 0px 0px 60px #7DD7E7;
        border-radius: 20px;
        margin-top: 31px;
        width: 211px;
        height: 60px;
        color: white;
        border: none;
        outline: none;
        font-size: 20px;
    }

    .progressbar {
        background: #E96EA3;
        box-shadow: 0px 0px 30px rgba(252, 70, 169, 0.5);
        border-radius: 10px;
        height: 30px;
        width: 172px;
    }

    .progress {
        background: #AA0E7A;
        border-radius: 10px;
        height: 100%;
        color: white;
        font-size: 16px;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }

    .cert {
        height: 248px;
        width: 360px;
        max-width: 100%;
        background: #c4c4c4;

    }

    .exit-wrapper {
        display: flex;
        justify-content: end;
        width: 100%;
        margin-top: 100px;
    }

    .exit {
        background: linear-gradient(95.14deg, #FAA032 0%, #F96F11 100%);
        box-shadow: 0px 0px 40px #F98923;
        border-radius: 20px;
        font-size: 20px;
        line-height: 32px;
        /* identical to box height, or 32px */
        padding: 14px 41px;
        color: #FFFFFF;
        border: none;
        outline: none;

        width: unset;

    }
}

@media (max-width: 1220px) {
    .container {
        padding: 0 40px;
    }
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .container {
        grid-template-areas:
            "main"
            "works"
            "sidebar";
        grid-template-columns: 100%;
    }

    .sidebar {
        border-left: 0;
        padding-left: 0;

        .exit {
            position: absolute;
            top: 100px;
            font-size: 16px;
            line-height: 20px;
        }
    }

    .main-info {
        margin-top: 244px;
    }

    .description {
        font-size: 15px;
        line-height: 17px;
        padding: 37px 13px 31px 12px;
        margin: 0 !important;
    }

    .works {
        h3 {
            font-size: 20px;
            line-height: 20px;
        }

        .works-wrapper .work {
            height: 140px;
            width: 140px;
            flex: unset;
            margin-right: 20px;
        }
    }

    .sidebar .exit-wrapper {
        margin-top: 0;
    }

    .sidebar li {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 20px;
    }
    .sidebar button{
        font-size: 16px;
        height: 60px;
        width: 211px;
    }
    .sidebar .cert{
        height: 216px;
        margin-bottom: 50px;
    }
    @media (max-width: 500px){
        .works .works-wrapper .more-button p{
            font-size: 14px;
            line-height: 17px;
        }
        .container{
            padding:  0 10px;
        }
        .description::before{
            display: none;
        }
        .main-info
        .description{
            padding: 37px 13px 31px 12px;
        }
        .works{
            .support-wrapper{
                position: relative;
                
                width: 100%;
                p{
                    font-size: 16px;
                    line-height: 20px;
                }
                button{
                    width: auto;
                    padding: 12px 14px;
                    position: absolute;
                    bottom: -70px;
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>
