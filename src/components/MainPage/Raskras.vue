<template>
<section class="raskraska">
    <div class="container">
        <div class="images">
            <div class="img">

            </div>
            <div class="img2"></div>
            <div class="circle"></div>
        </div>
        <div class="text">Мы любим дарить подарки! Поэтому подготовили для вас небольшой бонус — фантазийную раскраску с веселыми героями: совушкой, жирафиком, зеброй, слоненком, бегемотиком и обезьянкой. Скачайте и распечатайте раскраску и создайте свою сказку с забавными персонажами мира «ChilDo»!</div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1588px;
    align-items: center;
}

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
        top: 0;
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

@media (max-width: 1500px) {
    .images {
        transform: scale(0.7);
        margin-left: -100px;
    }

    .text {
        flex: 1 0 500px;
        font-size: 20px;
    }
}

@media (max-width: 1250px) {
    .text {
        font-size: 12px;
        line-height: 15px;
        max-width: 480px;
        width: unset;
        flex: 1 1 300px;
    }

    .raskraska {
        padding: 0;
    }
}

@media (max-width : 800px) {
    .text {
        font-size: 7px;
        line-height: 9px;
        max-width: 249px;
    }

    .images {
        margin-top: 10px;
        transform: unset;
        margin-left: -20px;
    }

    .raskraska {
        height: unset;
        overflow: hidden;

        .img {
            height: 100px;
            width: 150px;
        }

        .img2 {
            height: 60px;
            width: 42px;
            left: 30px;
            top: 15px;
        }

        .circle {
            height: 40px;
            width: 40px;
            background: linear-gradient(135deg, #FBAA38 0%, #F66F19 100%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}
</style>
