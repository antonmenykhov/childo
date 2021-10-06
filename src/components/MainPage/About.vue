<template>
<section class="about" id="about">
    <div class="container">
        <h2>О нас</h2>
        <h5>Давайте знакомиться!</h5>
        <div class="video-wrapper">
            <vimeo-player class="video" :video-id='582144098'>

            </vimeo-player>
        </div>
        <div class="about-holder">
            <div class="about-w about-1">
                Наша команда — это творческая семья, которая поддерживает друг друга на пути к мечте.
            </div>
            <div class="about-w about-3">
                Мы разработали авторскую методику, благодаря которой уровень вашего мастерства будет расти с каждым занятием — даже если вы никогда не рисовали раньше.

            </div>
            <div class="about-w about-2">
                С помощью рисования можно воплотить в жизнь самые яркие фантазии, создать собственную сказку, найти свое предназначение.

            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.video-wrapper {
    width: 100%;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background: black;
    /* 16:9 Aspect Ratio */
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;

}

iframe {
    width: 100% !important;
    height: 100% !important;
}

.container {
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.about {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.about-holder {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1160px;
    width: 100%;
    padding-left: 60px;
    padding-top: 100px;

    .about-w {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;

        color: #333333;
    }
}

.about-1 {
    width: 335px;
    position: relative;
}

.about-1::before {
    background: linear-gradient(270deg, rgba(252, 176, 59, 0.7) 0%, rgba(238, 108, 24, 0.7) 100%);
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -40px
}

.about-2 {
    align-self: flex-end;
    width: 390px;
    position: relative;
    margin-top: 80px;
}

.about-2::before {
    background: linear-gradient(270deg, rgba(125, 215, 231, 0.7) 0%, rgba(48, 156, 183, 0.7) 100%);
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -40px
}

.about-3 {
    margin-top: 80px;
    width: 436px;
    position: relative;
    align-self: center;
}

.about-3::before {
    background: linear-gradient(270deg, rgba(245, 116, 186, 0.7) 0%, rgba(205, 35, 127, 0.7) 100%);
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    z-index: -1;
    top: -40px
}

h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    margin: 30px 0 60px 0;
    text-align: center;

}

h2 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    color: #333333;
    text-align: center;
    position: relative;

}

h2::first-letter {
    opacity: 1;
}

h2::before {

    background: url('/img/o.png') no-repeat center center / contain;
    width: 50.26px;
    height: 57.08px;
    position: absolute;
    z-index: 3;
    top: 7px;
    left: 4px;
}

h2::after {

    background: white;
    width: 52.26px;
    height: 57.08px;
    position: absolute;

    top: 5px;
    left: 3px;
}

.about::before {
    content: "";
    background: url('/img/about-left.png') no-repeat left top / contain;
    height: 684px;
    width: 358px;
    left: 0;
    top: -200px;
    position: absolute;

}

.about::after {
    content: "";
    background: url('/img/about-right.png') no-repeat right bottom / contain;
    height: 654px;
    width: 358px;
    right: 0;
    position: absolute;
    bottom: 100px;
}

.mobile {
    h2::before {
        left: -3px !important;
        top: 1px !important;

    }

    h2::after {
        left: -3px !important;
        top: 1px !important;

    }
}
</style>
