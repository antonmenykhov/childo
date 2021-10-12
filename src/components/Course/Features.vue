<template>
<section id="more" :class="courseData.teacher.style">
    <div class="container">
        <div class="feature" v-for="item,i in courseData.fetures" :key="i">
            <div class="img" :style="'background: url(\''+url+item.image.formats.small.url+'\') no-repeat center center / cover'"></div>
            <div class="text">
                <h4>{{item.title}}</h4>
                <p>{{item.text}}</p>
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
        courseData: Object
    }
}
</script>

<style lang="scss" scoped>
section {
    position: relative;
    z-index: 20;
}


.container {
    flex-direction: column;

}

.feature {
    margin-bottom: 92px;
    display: flex;
    align-items: center;
}

.feature:nth-child(even) {
    flex-direction: row-reverse;

    .img {
        margin-left: 40px;
    }
}

.feature:nth-child(odd) {
    .img {
        margin-right: 40px;
    }
}

.img {
    height: 350px;
    width: 560px;
    
}

.text {
    flex: 1;

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        /* identical to box height */
        display: inline-block;
        color: #333333;
        position: relative;
    }

    
    p {
        font-size: 18px;
        line-height: 22px;
        margin-top: 30px;
        color: #333333;
    }
}
@media (max-width: 1200px){
    .container{
        padding:  0 40px;
    }
    .img{
        height: 300px;
        width: 460px;
       
    }
    .feature:nth-child(even){
        .img{
            margin-left: 20px;
        }
    }
    .feature:nth-child(odd){
        .img{
            margin-right: 20px;
        }
    }
}
@media (max-width: 900px) {
    .img{
        width: 300px;
        height: 195px;
    }
}



</style>
