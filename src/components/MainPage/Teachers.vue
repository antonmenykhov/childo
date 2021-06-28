<template>
<section class="teachers">
    <h3>С творческой командой <span class="span-blue">«ChilDo»</span> у вас все получится, а каждый ваш рисунок станет настоящим <span class="span-orange">шедевром.</span></h3>
    <div class="row">
        <div class="teacher" v-for="teacher in teachers.sort((a, b) => a.num > b.num ? 1: -1)" :key="teacher.name">
            <div class="image" :style="'background: url(\''+url+teacher.Avatar.formats.small.url+'\') no-repeat center center / cover'">
                <div :class="teacher.color"></div>
            </div>
            <div class="name">
                {{teacher.Name}}
            </div>
            <div class="description" v-html="teacher.description">

            </div>
        </div>
    </div>
</section>
</template>

<script>
import api from '../../constants'
export default {
    computed:{
        teachers: function (){
            return this.$store.state.mainData.teachers
        }
    },
    data() {
        return {
            url: api.url
        }
    },
}
</script>

<style lang="scss" scoped>
.pink {
    position: absolute;
    z-index: -1;
    height: 226px;
    width: 234px;
    background: url('/img/teachers/pink.svg') no-repeat center center / contain;
    top: -17px;
    right: -83.25px;
}

.green {
    position: absolute;
    z-index: -1;
    height: 240px;
    width: 210px;
    background: url('/img/teachers/green.svg') no-repeat center center / contain;
    bottom: -45px;
    right: -60px;
}

.orange {
    position: absolute;
    z-index: -1;
    height: 286px;
    width: 283px;
    background: url('/img/teachers/orange.svg') no-repeat center center / contain;
    top: -20px;
    left: -90px;
}

.blue {
    position: absolute;
    z-index: -1;
    height: 202px;
    width: 275px;
    background: url('/img/teachers/blue.svg') no-repeat center center / contain;
    bottom: -6px;
    left: -79px;
}

.span-blue,
.span-orange {
    position: relative;
}

.span-blue::before {
    border-top: 10px solid #5FC0D3;
    content: '';
    position: absolute;
    bottom: 4px;
    width: 182px;
    z-index: -1;
}

.span-orange::before {
    border-top: 10px solid #FA952D;
    content: '';
    position: absolute;
    bottom: 4px;
    width: 242px;
    z-index: -1;
}

.teachers {
    h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        text-align: center;
        max-width: 847px;

        color: #515151;
    }

    max-width: 1220px;
    margin: 132px auto 260px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        margin-top: 200px;
        position: relative;
    }

    .name {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        margin: 29px 0 15px;
        color: #515151;
    }

    .description {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;
        text-align: center;

        color: #000000;

    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.teacher {
    flex: 1 1 500px;
    max-width: 570px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 1500px) {
    .teachers {
        h3 {
            font-size: 30px;
        }

        .name {
            font-size: 30px;
        }

        .description {
            font-size: 20px;
        }
    }

    .span-blue::before {
        width: 137px;
        border-top: 7px solid #5FC0D3;
    }

    .span-orange::before {
        border-top: 7px solid #FA952D;
        width: 180px;
    }

    .row {
        max-width: 1000px;
    }

    .teacher {
        flex: 1 1 400px;
    }
}

@media (max-width: 1250px) {
    .teachers {
        margin-top: 0;
        margin-bottom: 128px;

        .teacher {
            max-width: 310px;
        }

        h3 {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            max-width: 423px;
        }

        .span-blue::before {
            width: 90px;
            border-top: 3px solid #5FC0D3;
        }

        .span-orange::before {
            border-top: 3px solid #FA952D;
            width: 120px;
        }

        .image {
            height: 175px;
            width: 175px;
        }

        .pink {
            height: 160px;
            width: 130px;
            right: -65px;
            top: -20px
        }

        .green {
            height: 160px;
            bottom: -25px;
        }

        .orange {
            height: 160px;
        }

        .blue {
            height: 100px;
            left: -120px;
        }

        .name {
            font-size: 20px;
            line-height: 20px;
            max-width: 160px;
        }

        .description {
            font-size: 14px;
            line-height: 17px;
        }
    }

}

@media (max-width:800px) {
    .teachers {
        margin-bottom: 89px;
        h3 {
            max-width: 249px;
            font-size: 12px;
            line-height: 15px;
        }

        .span-blue::before {
            width: 55px;
            bottom: 1px;
            border-top: 2px solid #5FC0D3;
        }

        .span-orange::before {
            border-top: 2px solid #FA952D;
            width: 71px;
            bottom: 1px;
        }

        .image {
            margin-top: 45px;
            height: 90px;
            width: 90px;
        }

        .name {
            font-size: 12px;
            line-height: 12px;
            max-width: 100px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .description {
            font-size: 8px;
            line-height: 10px;
            max-width: 230px;
        }
        .teacher{
            margin: 0;
        }

        .pink {
            height: 75px;
            top: -15px;
            right: -55px;
        }
        .green{
            height: 75px;
            right: -85px;
            bottom: -5px;
        }
        .orange{
            height: 75px;
            top: -10px;
            left: -130px;
            right: unset;
        }
        .blue{
            height: 75px;
        }
    }
}
</style>
