<template>
<section :class="course.data.style">
    <div class="back-button" @click="$router.push({path: '/lk'})">
        <div class="back-arrow"></div>
    </div>
    <div class="container">
        <h2>Доступные уроки</h2>
        <div class="lessons">
            <div @click="goLesson(i)" class="lesson" v-for="item,i in lessons" :key="i">
                <div class="image" :style="'background: url(\''+url+item.img.formats.small.url+'\') no-repeat center center / cover'">

                    <div class="play" v-if="check(i)">

                    </div>
                    <div class="locked" v-if="!check(i)">
                        <div class="icon"></div>
                    </div>

                    <div class="dz" v-if="item.dz">Есть домашнее задание</div>
                </div>
                <h4>{{item.Name}}</h4>
                <p>{{item.smallDescription}}</p>
            </div>

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
                this.course = response.data.BuyedCourses[this.id];

            }).catch(error => {
                console.log(error.response)

            })
        }
    },
    methods: {
        check(i) {
            if (i === 0) {
                return true
            }

            if (this.course.lessonsData) {
                if (this.course.lessonsData[i - 1]) {

                    return true

                }
            } else { return false }

        },
        goLesson(i) {
            if (this.check(i)) {
                if (this.course.data.style == 'child') {
                    window.open('/lessonChild/' + (this.id + 1) + '/' + (i * 1 + 1), '_blank')
                    
                }
                if (this.course.data.style == 'grow') {
                    window.open('/lessonGrow/' + (this.id + 1) + '/' + (i * 1 + 1), '_blank')
                    
                }
            } else{
                this.$notify({
                                title: 'Доступ закрыт',
                                message: 'Вы не прошли предыдущий урок',
                                type: 'warning'
                            });
            }
        }
    },
    computed: {
        worksNum: function () {
            let width = window.innerWidth;
            let num = 0;
            if (width >= 1250) {
                num = 5 * this.kol
            }
            if (width < 1250 && width > 800) {
                num = 5 * this.kol
            }
            if (width <= 800) {
                num = 4 * this.kol
            }
            if (width <= 500) {
                num = 2 * this.kol
            }
            return num
        },

        lessons: function () {
            return this.course.data.lessons
        }
    },
    data() {
        return {
            course: {},
            kol: 1,
            url: api.url,
            style: 'grow',
            id: this.$route.params.id - 1
        }
    },
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

.container {
    flex-direction: column;
    align-items: flex-start;
    max-width: 1200px;
}

section {
    position: relative;
    z-index: 999;
    background: white;
}

h2 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    margin-left: 20px;
    line-height: 60px;
    /* identical to box height */
    position: relative;

    color: #333333;
    max-width: 1080px;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -7px;
    top: 10px;
    content: '';
    background: url('/img/lklessons/д.svg') no-repeat center center / contain;
    height: 55.72px;
    width: 60.5px;
    z-index: 2;
    position: absolute;
}

.lessons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

}

.lesson {
    flex: 1 1 300px;
    max-width: 360px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 70px;
    cursor: pointer;

}

.image {
    height: 240px;
    width: 360px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.time {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    position: absolute;
    color: #FFFFFF;
    right: 12px;
    bottom: 10px;
}

.play {
    height: 38px;
    width: 38px;
    background: url('/img/lklessons/play.svg') no-repeat center center / contain;
}

.dz {
    font-size: 10px;
    line-height: 12px;
    text-decoration-line: underline;

    color: #333333;
    position: absolute;
    bottom: -30px;
    left: 0;
}

h4 {
    margin-top: 53px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    color: #333333;

}

p {
    font-size: 15px;
    line-height: 18px;
    margin-top: 13px;
    color: #333333;
}

.locked {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(196, 196, 196, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        background: url('/img/lklessons/lock.svg') no-repeat center center / contain;
        height: 52px;
        width: 42px;
        z-index: 5;
    }
}

.more-button {
    width: 56px;

    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 65px;
    align-items: center;
    color: #333333;

    p {
        font-size: 10px;
        line-height: 12px;
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
        margin-bottom: 5px;

    }
}

@media (max-width:1250px) {
    .container {
        padding: 0 40px;
    }

    h2 {
        font-size: 50px;
        line-height: 50px;
    }

    h2::before {
        left: -5px;
        top: 7px;
        height: 45.72px;
        width: 50.5px;
    }

}

@media (max-width:500px) {
    .container {
        padding: 0 10px;
    }

    h2 {
        font-size: 20px;
        line-height: 20px;
        margin-left: 0;

    }

    h2::before {
        left: -2px;
        top: 2px;
        height: 18.72px;
        width: 20.5px;
    }

    .image {
        width: calc(100vw - 20px);
        height: 62vw;
    }

    .lesson {
        margin-left: 0;
        margin-right: 0;
    }
}

.mobile {
    h2::before {
        left: -2px !important;
        top: 1px !important;

    }

    h2::after {
        left: -3px !important;
        top: 1px !important;

    }
}
</style>
