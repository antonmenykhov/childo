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

.cs-1::before {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/1/features/left.svg') no-repeat left top / contain;
    top: 200px;
    left: 0;
}

.cs-1::after {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/1/features/right.svg') no-repeat right bottom / contain;
    bottom: 200px;
    right: 0;
}

.cs-2::before {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/2/features/left.svg') no-repeat left top / contain;
    top: 200px;
    left: 0;
}

.cs-2::after {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/2/features/right.svg') no-repeat right bottom / contain;
    bottom: 200px;
    right: 0;
}

.container {
    flex-direction: column;

}

.feature {
    margin-bottom: 140px;
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
    height: 206px;
    width: 260px;
    border-radius: 20px;
}

.text {
    flex: 1;

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 43px;
        /* identical to box height */
        display: inline-block;
        color: #333333;
        position: relative;
    }

    h4::after {
        border-top: 1px solid;
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        bottom: -6px;
    }

    p {
        font-size: 25px;
        line-height: 30px;
        margin-top: 11px;
        color: #333333;
    }
}

.feature:nth-child(1) h4::after {
    border-color: #F66A16;
}

.feature:nth-child(2) h4::after {
    border-color: #A5C73C;
}

.feature:nth-child(3) h4::after {
    border-color: #EF6AB2;
}

.feature:nth-child(4) h4::after {
    border-color: #99D3DF;
}

.feature:nth-child(5) h4::after {
    border-color: #F66A16;
}

.feature:nth-child(6) h4::after {
    border-color: #A5C73C;
}

@media (max-width: 1500px) {
    .cs-1::after {
        height: 300px;
        bottom: 0;
        right: -10px;
    }

    .cs-1::before {
        height: 400px;
        left: -60px;
        top: 60px;
    }

    .cs-2::after {
        height: 300px;
        bottom: 0;
        right: -10px;
    }

    .cs-2::before {
        height: 400px;
        left: -60px;
        top: 60px;
    }

    .text {
        h4 {
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }
    }
}

@media (max-width: 1250px) {
    .container {
        max-width: 820px;
    }

    .feature {
        margin-bottom: 70px;
    }

    .text {
        max-width: 612px;

        h4 {
            font-size: 22px;
            line-height: 27px;
        }

        p {
            font-size: 16px;
            line-height: 20px;
        }

    }

    .img {
        height: 152px;
        width: 192px;
    }

    .cs-1::after {
        height: 300px;
        bottom: 0;
        right: -10px;
    }

    .cs-1::before {
        height: 400px;
        left: -60px;
        top: 60px;
    }

    .cs-2::after {
        height: 300px;
        bottom: 0;
        right: -10px;
    }

    .cs-2::before {
        height: 400px;
        left: -60px;
        top: 60px;
    }
}

@media (max-width: 950px) {
    .container {
        padding-left: 40px;
        padding-right: 40px;
    }
}

@media (max-width: 800px) {
    .feature {
        display: flex;
        flex-direction: column !important;
        align-items: center;
        margin-bottom: 50px;
    }

    .img {
        margin-right: 0 !important;
        margin-left: 0 !important;
        height: 105px;
        width: 133px;
    }
    .cs-1::before{
        height: 250px;
        left: -30px;
        top: 300px
    }
    .cs-1::after{
        bottom: 200px;
        right: -30px;
    }
    .cs-2::before{
        height: 250px;
        left: -30px;
        top: 300px
    }
    .cs-2::after{
        bottom: 200px;
        right: -30px;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
            margin-top: 20px;
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 17px;
            text-align: center;

        }

        h4::after {
            display: none;
        }

        p {
            font-size: 8px;
            line-height: 10px;
            margin-top: 0;
            max-width: 231px;
            text-align: center;
        }
    }
}
</style>
