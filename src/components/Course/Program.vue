<template>
<section :class="courseData.teacher.style">
    <div class="left"></div>
    <div class="container">
        <h2>Программа курса</h2>
        <div class="program-holder">
            <div v-scroll-to="'#prices'" class="program" :class="item.color" v-for="item,i in courseData.lessons" :key="i">
                <div class="image" :style="'background: url(\''+url+item.img.formats.thumbnail.url+'\') no-repeat center center / cover'"></div>
                <h4>{{item.Name}}</h4>
                <p>{{item.smallDescription}}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import api from '../../constants'
export default {
    data() {
        return {
            url: api.url
        }
    },
    props: {
        courseData: Object,
        id: null
    },
    
}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
}

h2 {
    margin-top: 108px;
    margin-bottom: 105px;
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
    left: -10px;
    top: 10px;
    content: '';
    background: url('/img/courses/1/prog/p.svg') no-repeat center center / contain;
    height: 56.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -15px;
    top: 10px;
    content: '';
    background: white;
    height: 56.72px;
    width: 70.5px;

    position: absolute;
}

.cs-2 {
    h2::before {
        background: url('/img/courses/2/prog/p.svg') no-repeat center center / contain;
    }
}

.program-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    
}

.program {
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 94px 51px;
    margin: 50px 25px;
    
    position: relative;
}

.image {
    position: absolute;
    height: 100px;
    width: 100px;
    top: -50px;
    border-radius: 50%;
    left: 125px;
    box-shadow: none!important;
}

h4 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    

    color: #333333;
}

p {
    font-size: 18px;
    line-height: 20px;
    margin-top: 20px;
    flex: 1;
    
    color: #333333;
    display: flex;
    align-items: center;
}

.orange {
    box-shadow: 0px 0px 60px #F98C25;

    .image {
        box-shadow: 0px 0px 60px #F98C25;
    }
}

.green {
    box-shadow: 0px 0px 60px #A7CA3E;

    .image {
        box-shadow: 0px 0px 60px #A7CA3E;
    }
}

.pink {
    box-shadow: 0px 0px 60px #E757A5;

    .image {
        box-shadow: 0px 0px 60px #E757A5;
    }
}

.blue {
    box-shadow: 0px 0px 60px #45C6DD;

    .image {
        box-shadow: 0px 0px 60px #45C6DD;
    }
}

@media (max-width:1200px) {
    .container{
        padding: 0 30px;
        
    }
    .program{
        height: 300px;
        width: 300px;
        padding: 94px 10px 10px 25px;
        margin: 50px 10px;
    }
    .image{
        left: 100px;
    }
    .program-holder{
        justify-content: center;
    }
}
@media (max-width:900px) {
    h2::before, h2::after{
        display: none;
    }
    h2::first-letter{
        opacity: 1;
    }
    h2{
        font-size: 35px;
        line-height: 35px;
        margin-top: 0;
        margin-bottom: 66px;
    }
}
.mobile{
     h2::before {
        left: -3px!important;
        top: 1px!important;
       
    }

    h2::after {
        left: -3px!important;
        top: 1px!important;
       
    }
}
@media (max-width: 500px) {
    .program{
        margin: 50px 0;
    }
}
</style>
