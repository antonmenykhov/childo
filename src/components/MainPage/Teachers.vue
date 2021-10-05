<template>
<section class="teachers">
    <div class="container">
        <h3>С творческой командой «ChilDo» у вас все получится, а каждый ваш рисунок станет настоящим шедевром.</h3>
        <div class="row">
            <div class="teacher" v-for="teacher in teachers" :key="teacher.name">
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
    </div>
</section>
</template>

<script>
import api from '../../constants'
export default {
    computed: {
        teachers: function () {
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
    width: 100%;
    margin-bottom: 100px;
    position: relative;
    .container{
        
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    h3 {
        font-weight: 400;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        max-width: 897px;

        color: #515151;
    }

   

    .image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        
        position: relative;
    }

    .name {
        font-family: Intro;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        
        margin: 50px 0 30px;
        color: #515151;
    }

    .description {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        

        color: #333333;

    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

.teacher {
    flex: 0 1 400px;
    max-width: 463px;
    margin-bottom: 100px;
    display: flex;
    
    flex-direction: column;
    align-items: flex-start;
}
.teachers::after{
    content: "";
    background: url('/img/coursesPink.svg') no-repeat right bottom / contain;
    height: 654px;
    width: 358px;
    right: 0;
    position: absolute;
    bottom: -390px;
}
</style>
