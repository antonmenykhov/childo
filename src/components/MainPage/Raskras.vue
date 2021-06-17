<template>
<section class="raskraska">
    <div class="images">
        <div class="img">

        </div>
        <div class="img2"></div>
        <div class="circle"></div>
    </div>
    <div class="text">Мы любим дарить подарки! Поэтому подготовили для вас небольшой бонус — фантазийную раскраску с веселыми героями: совушкой, жирафиком, зеброй, слоненком, бегемотиком и обезьянкой. Скачайте и распечатайте раскраску и создайте свою сказку с забавными персонажами мира «ChilDo»!</div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.images {
    position: relative;
}

.raskraska {
    background: #EBEBEB;
    padding: 49px 194px 61px;
    display: flex;
    align-items: center;
    position: relative;

    .img {
        position: relative;
        background: url('/img/raskraska.png') no-repeat center center / contain;
        height: 300px;
        width: 447px;

        transform: rotate(7.35deg);
        z-index: 50;
        margin-left: 25px;
    }

    .circle {
        background: linear-gradient(135deg, #78D2E2 0%, #40A9BF 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        content: '';
        height: 100px;
        width: 100px;
        border-radius: 50%;
        right: 30px;
        top:0;
        position: absolute;
    }

    .img2 {
        content: '';
        position: absolute;
        background: url('/img/raskraska2.png') no-repeat center center / contain;
        height: 107px;
        width: 152px;

        z-index: 1;
        top: 95px;
        left: -15px;

    }

}

.text {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    flex: 1 1;
    max-width: 889px;
}
</style>
