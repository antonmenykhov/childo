<template>
<section class="cert">
    <div class="container">
        <div class="img"></div>
        <div class="text">Не знаете, что подарить? Выбирайте подарочный сертификат на онлайн-курс по рисованию «ChilDo»!
            <br>
            <br>
            Чтобы оформить сертификат, напишите в Директ нашего Инстаграм! <a target="blank" href="https://www.instagram.com/childo.art/">@childo.art</a> </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1160px;
    align-items: center;
    display: flex;

}

.img {

    width: 640px;
    height: 400px;
    background: url('/img/cert.jpg') no-repeat center center / cover;

}

.text {
    font-size: 18px;
    line-height: 22px;
    flex: 1 1 300px;
    margin-left: 61px;
}

.cert {
    position: relative;
    padding: 32px 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #9EDFEB;
    z-index: 1
}

@media (max-width:1200px) {
    .container {
        padding: 0 40px;
    }
}

@media (max-width:910px) {
    .img {
        width: 100%;
        height: calc(63vw - 80px);
    }

    .container {
        flex-direction: column;
    }

    .text {
        margin-left: 0;
        margin-top: 30px;
        flex: unset;
        font-size: 14px;
        line-height: 17px;
    }

    .raskraska .img::after {
        width: 200px !important;
    }

}
</style>
