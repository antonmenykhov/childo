<template>
<section class="cert">
    <div class="container">
        <div class="img"></div>
        <div class="text">Не знаете, что подарить? Выбирайте подарочный сертификат на онлайн-курс по рисованию «ChilDo»!
            <br>
            <br>
            Чтобы оформить сертификат, напишите в Директ нашего Инстаграм! </div>
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
    .container {
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

    .img {
        height: 70px;
        width: 99px;
        border-radius: 10px;

    }

    .img::before {
        height: 40px;
        width: 40px;
        right: 0;
        top: -30px;
    }
}
</style>
