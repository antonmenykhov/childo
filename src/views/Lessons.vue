<template>
<section :class="course.data.style">
    <div class="back-button" @click="$router.push({path: '/lk'})">
        <div class="back-arrow"></div>
    </div>
    <div class="container">
        <h2>Доступные уроки</h2>
        <div class="lessons">
            <div class="lesson" v-for="item,i in lessons" :key="i">
                <div class="image" :style="'background: url(\''+url+item.img.formats.small.url+'\') no-repeat center center / cover'">

                    <div @click="goLesson(i)" class="play" v-if="check(i)">

                    </div>
                    <div class="locked" v-if="!check(i)">
                        <div class="icon"></div>
                    </div>
                    <div class="time">{{item.time}}</div>
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
        window.scrollTo(0,0)
        if ( this.$cookie.get('jwt')) {
                this.$store.commit('setJwt', this.$cookie.get('jwt'));
                axios.get(api.me, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.jwt}`,
                    }
                }).then(response => {
                    this.$store.commit('setUserData', response.data);
                    
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
                if (this.course.lessonsData[i-1]) {

                    return true

                }
            } else { return false }

        },
        goLesson(i) {
            if (this.course.data.style == 'child') {
                this.$router.push({ path: '/lessonChild/' + (this.id + 1) + '/' + (i * 1 + 1) })
            }
            if (this.course.data.style == 'grow') {
                this.$router.push({ path: '/lessonGrow/' + (this.id + 1) + '/' + (i * 1 + 1) })
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
        course: function () {
            return this.$store.state.userData.BuyedCourses[this.id];
        },
        lessons: function () {
            return this.course.data.lessons
        }
    },
    data() {
        return {
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
    max-width: 800px;
}

section {
    position: relative;
    z-index: 999;
    background: white;
}

h2 {
    margin-top: 125px;
    margin-bottom: 96px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;
    align-self: center;
    color: #515151;
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
    height: 57.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -10px;
    top: 9px;
    content: '';
    background: white;
    height: 57.72px;
    width: 64.5px;

    position: absolute;
}

.lessons {
    display: flex;
    flex-wrap: wrap;

}

.lesson {
    flex: 1 1 200px;
    margin: 22px 17px;
    max-width: 230px;

}

.image {
    height: 152px;
    border-radius: 20px;
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

    color: #515151;
    position: absolute;
    bottom: -20px;
    left: 0;
}

h4 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    color: #515151;

}

p {
    font-size: 15px;
    line-height: 18px;
    margin-top: 5px;
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
    border-radius: 20px;

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

.child::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0px;
    background: url('/img/lklessons/left.svg') no-repeat left bottom / contain;
    height: 800px;
    width: 500px;
}

.child::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0px;
    background: url('/img/lklessons/right.svg') no-repeat right top / contain;
    height: 800px;
    width: 500px;
}

.grow::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0px;
    background: url('/img/lklessons/left2.svg') no-repeat left bottom / contain;
    height: 800px;
    width: 500px;
}

.grow::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0px;
    background: url('/img/lklessons/right2.svg') no-repeat right top / contain;
    height: 800px;
    width: 500px;
}

@media (max-width: 1500px) {
    .child::before {
        width: 200px;
    }

    .child::after {
        width: 200px;
    }

    .grow::after {
        width: 200px;
    }

    .grow::before {
        width: 200px;
    }
}

@media (max-width: 800px) {
    section {
        overflow: hidden;
    }

    .lessons {
        margin: 0 auto;
        width: 100%;
        justify-content: center;

        .lesson {
            .image {
                height: 152px;
                width: 230px;
            }
        }

        .more-button {
            width: 300px;
            margin-bottom: 30px;

            p {
                max-width: 56px;
            }
        }
    }

    h2 {
        font-size: 30px;
        line-height: 30px;
        margin-top: 60px;
        margin-bottom: 79px;
    }

    h2::before,
    h2::after {
        height: 28px;
        width: 26px;
        top: 4px;
        left: -2px;
    }

    .child::after {
        top: 250px;
        right: -200px;
        width: 200px;
        transform: rotate(-30deg);
    }

    .child::before {
        left: -150px;
        width: 400px;
        bottom: -150px;
        transform: rotate(-30deg);
    }

    .grow::after {
        top: 250px;
        right: -200px;
        width: 200px;
        transform: rotate(-30deg);
    }

    .grow::before {
        left: -150px;
        width: 400px;
        bottom: -150px;
        transform: rotate(-30deg);
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
