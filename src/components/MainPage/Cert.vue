<template>
<section class="cert">
    <div class="container">
        <div class="img"></div>
        <div class="text">Не знаете, что подарить? Выбирайте подарочный сертификат на онлайн-курс по рисованию «ChilDo»! Оформить сертификат можно *** (здесь в зависимости от того, как можно приобрести сертификат: написав в WhatsApp по номеру, перейдя по ссылке, нажав кнопку, в блоке “тарифы”)</div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    align-items: center;
}

.img {
    position: relative;
    border-radius: 10px;
    width: 308px;
    height: 218px;
    background: url('/img/cert.jpg') no-repeat center center / cover;

}

.text {
    font-size: 25px;
    line-height: 30px;
    max-width: 835px;
    margin-left: 50px;
}

.img::before {
    border-radius: 50%;
    content: "";
    height: 100px;
    width: 100px;
    background: linear-gradient(135deg, #FBAA38 0%, #F66F19 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: -50px;
    top: -50px;
    z-index: -1;
}

.cert {
    position: relative;
    padding: 132px 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #EBEBEB;
    z-index: -2;
}

@media (max-width: 1500px) {
    .text {
        font-size: 20px;
    }

}

@media (max-width: 1250px) {
    .cert {
        padding: 41px 0;
    }

    .container {
        max-width: 798px;
    }

    .img {
        height: 130px;
        width: 180px;
    }

    .img::before {
        height: 60px;
        width: 60px;
        right: -30px;
        top: -30px
    }

    .text {
        font-size: 12px;
        line-height: 15px;
        max-width: 480px;
    }
}

@media (max-width:800px) {
    .container{
        max-width: 366px;
    }
    .text {
        font-size: 7px;
        line-height: 9px;
        width: unset;
        flex: unset;
        margin-left: 15px;
        color: #000;
        max-width: 246px;
    }
    .img{
        height: 70px;
        width: 99px;
        border-radius: 10px;
        
    }
    .img::before{
        height: 40px;
        width: 40px;
        right: 0;
        top: -30px;
    }
}
</style>
