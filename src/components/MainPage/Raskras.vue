<template>
<section class="raskraska">
    <div class="container">
        <div class="images">
            <div class="img">

            </div>
        </div>
        <div class="text">Мы любим дарить подарки!<br><br> Поэтому подготовили для вас небольшой бонус — фантазийную раскраску с веселыми героями: совушкой, жирафиком, зеброй, слоненком, бегемотиком и обезьянкой. <br> <br> Скачайте и распечатайте раскраску и создайте свою сказку с забавными персонажами мира «ChilDo»!
            <br><br><button>Скачать</button></div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button {
    background: #FAA435;
    box-shadow: 0px 4px 60px #F66C17;
    border-radius: 25px;
    border: none;
    color: white;
    padding: 24px 99px;
    font-size: 20px;
    margin-top: 10px;
}

.container {
    max-width: 1160px;
    align-items: center;
}

.images {
    position: relative;
    flex: 1 1;
}

.raskraska {
    background: #FCB03B;

    padding: 49px 194px 61px;
    display: flex;
    align-items: center;
    position: relative;

    .img {
        position: relative;
        background: url('/img/raskraska2.png') no-repeat left center / contain;
        height: 250px;
        width: 410px;

        z-index: 1;

    }

    .img::after {
        content: '';
        position: absolute;
        background: url('/img/raskraska.png') no-repeat center center / contain;
        height: 207px;
        width: 452px;
        transform: rotate(5deg);
        z-index: 2;
        top: 95px;
        right: -160px;
    }

}

.text {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    flex: 1 1;
    max-width: 889px;
}
@media (max-width: 1280px) {
    .raskraska .img{
        width: 350px;
    }
    .container{
        width: 100%;
        padding: 0 40px;
        margin: 0;
        justify-content: space-between;
    }
    .raskraska{
        padding: 50px 0;
    }
}
@media (max-width: 900px){
    .container{
        flex-direction: column;
    }
    .text{
        margin-top: 40px;
        font-size: 14px;
        line-height: 17px;
    }
    button{
        font-size: 14px;
        line-height: 17px;
        padding: 0;
        height: 55px;
        width: 160px;
        margin-top: 40px;
    }
    .raskraska{
        overflow: hidden;
    }
    .raskraska .img::after {
        width: 400px;
        height: 250px;
        right: -90px;
        top: 90px;
    }
}
@media (max-width: 500px) {
    .images{
        width: 100%;
    }
    .raskraska .img{
        width: 100%;
    }
    .raskraska .img::after{
        width: 100%;
        right: -70px;
    }
}
</style>
