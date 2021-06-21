<template>
<section :class="speakerData.style">
    <div class="container">
        <div class="center">
            <h2>Спикер</h2>
            <div class="image" :style="'background: url(\''+speakerData.img+'\') no-repeat center center / cover'"></div>
            <h3 class="name">{{speakerData.name}}</h3>
        </div>
        <p class="description" v-html="speakerData.description"></p>
        <h3>Мое образование:</h3>
        <ul>
            <li v-for="item in speakerData.univer" :key="item">{{item}}</li>
        </ul>
        <div class="quote-1" v-if="speakerData.quotes[0]" v-html="speakerData.quotes[0]"></div>
        <h3>мои достижения:</h3>
        <ul>
            <li v-for="item in speakerData.achiv" :key="item">{{item}}</li>
        </ul>
        <div class="quote-2" v-if="speakerData.quotes[1]" v-html="speakerData.quotes[1]"></div>
        <h3 class="go">Присоединяйтесь!</h3>
        <button>Выбрать тариф</button>
    </div>
</section>
</template>

<script>
export default {
    props: {
        speakerData: Object
    }
}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    margin-top: 125px;
    margin-bottom: 200px;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        text-align: center;
    }
}

.image {
    margin-bottom: 29px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: relative;
}

.image::before {
    right: -85px;
    bottom: -40px;
    content: '';
    background: url('/img/courses/1/speaker/image.svg') no-repeat center center / contain;
    height: 240px;
    width: 240px;
    z-index: -1;
    position: absolute;
}

h3 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    /* identical to box height */

    color: #515151;
}

h2 {

    margin-bottom: 99px;
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    position: relative;
    text-align: center;

    color: #515151;
}

h2::first-letter {
    opacity: 0;
}

h2::before {
    left: -11px;
    top: 7px;
    content: '';
    background: url('/img/courses/1/speaker/с.svg') no-repeat center center / contain;
    height: 70.72px;
    width: 70.5px;
    z-index: 2;
    position: absolute;
}

h2::after {
    left: -11px;
    top: 7px;
    content: '';
    background: white;
    height: 70.72px;
    width: 65.5px;

    position: absolute;
}

.description {
    font-size: 25px;
    line-height: 30px;

    color: #000000;
    margin-top: 75px;
    margin-bottom: 50px;
}

li {
    font-size: 25px;
    line-height: 30px;

    color: #515151;
    text-indent: 25px;
    list-style: none;
    position: relative;
}

li::before {
    content: '';
    background: #515151;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    transition: all .2s;
    position: absolute;
    left: 0;
    top: 8px
}

li:hover::before {
    transform: scale(1.2);

}

ul {
    padding-top: 30px;
    padding-bottom: 51px;
    padding-left: 0;
    max-width: 1027px;
}

.quote-1,
.quote-2 {

    border-radius: 20px;
    padding: 19px 30px;
    margin-left: -29px;
    max-width: 676px;
    color: white;

    font-size: 25px;
    line-height: 30px;
}

.quote-1 {
    margin-bottom: 51px;
    background: linear-gradient(93.13deg, rgba(245, 116, 186, 0.75) 0%, rgba(206, 69, 143, 0.75) 100%);
    box-shadow: 0px 0px 40px #F574BA;
}

.quote-2 {
    background: linear-gradient(93.13deg, rgba(246, 106, 22, 0.75) 0%, rgba(246, 106, 22, 0.75) 100%);
    box-shadow: 0px 0px 40px #F7751C;
}

.go {
    margin-top: 91px;
    margin-bottom: 51px;
}

button {
    background: linear-gradient(93.43deg, #7DD7E7 0%, #45C6DD 100%);
    box-shadow: 0px 0px 60px #7DD7E7;
    border-radius: 20px;
    height: 80px;
    width: 382px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 160.2%;
    /* identical to box height, or 32px */

    color: #FFFFFF;
}

section {
    position: relative;
}

.cs-1::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/speaker/left.svg') no-repeat left bottom / contain;
}

.cs-1::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/1/speaker/right.svg') no-repeat right top / contain;
}

.cs-2::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/speaker/left.svg') no-repeat left bottom / contain;
}

.cs-2::after {
    position: absolute;
    content: '';
    right: 0;
    top: 100px;
    height: 600px;
    width: 600px;
    background: url('/img/courses/2/speaker/right.svg') no-repeat right top / contain;
}

.cs-2 {
    button {
        background: linear-gradient(93.43deg, #F574BA 0%, #C9287F 100%);
        box-shadow: 0px 0px 60px #F574BA;
    }

    .description {
        max-width: 676px;
    }
}

@media (max-width: 1500px) {
    h3 {
        font-size: 30px;
    }

    .description {
        font-size: 20px;
    }

    li {
        font-size: 20px;
    }

    .quote-1,
    .quote-2 {
        font-size: 20px;
    }
}

@media (max-width: 1250px) {
    h3 {
        font-size: 20px;
        line-height: 20px;
        margin-top: 35px;
        margin-bottom: 15px;
    }

    .description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 0;
    }

    ul {
        padding-top: 0;
        padding-bottom: 0;
    }

    li {
        font-size: 14px;
        line-height: 17px;
        max-width: 536px;
        text-indent: 20px;
    }

    li::before {
        height: 12px;
        width: 12px;
        top: 4px;
        left: 2px;
    }

    .quote-1,
    .quote-2 {
        margin-top: 37px;
        margin-bottom: 0;
        margin-left: -12px;
        font-size: 14px;
        line-height: 17px;
        max-width: 371px;
        padding: 13px;

    }

    .go {
        margin-top: 48px;
        margin-bottom: 38px;
    }

    button {
        font-size: 16px;
        line-height: 160.2%;
        padding: 17px 66px;
        height: unset;
        width: unset;
        max-width: 260px;
    }

    .container {
        margin-bottom: 108px;
        margin-top: 40px;
    }

    h2 {
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 40px;
    }

    h2::before {
        height: 40px;
        width: 40px;
        top: 5px;
        left: -6px;
    }

    h2::after {
        height: 40px;
        width: 40px;
    }

    .image {
        height: 175px;
        width: 175px;
        margin-bottom: 0;
    }

    .image::before {
        height: 150px;
        bottom: -20px;
        right: -70px;
    }

    .name {
        font-size: 20px;
        line-height: 20px;
        margin-top: 40px;
        margin-bottom: 0;
    }
    .cs-1::before{
        height: 300px;
        left: -30px;
    }
    .cs-2::before{
        height: 300px;
        left: -30px;
    }
    .cs-1::after{
        height: 300px;
    }
    .cs-2::after{
        height: 300px;
    }
}
</style>
