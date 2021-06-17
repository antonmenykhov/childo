<template>
<section class="cert">
    <div class="img"></div>
    <div class="text">Не знаете, что подарить? Выбирайте подарочный сертификат на онлайн-курс по рисованию «ChilDo»! Оформить сертификат можно *** (здесь в зависимости от того, как можно приобрести сертификат: написав в WhatsApp по номеру, перейдя по ссылке, нажав кнопку, в блоке “тарифы”)</div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
    padding: 132px 360px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #EBEBEB;
    z-index: -2;
}
</style>
