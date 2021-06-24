<template>
<section class="pluses">
    <h2>Приемущества</h2>
    <div class="row">
        <div class="plus plus-1">
            <div class="img"></div>
            <p>Благодаря онлайн-курсам «ChilDo» вы сможете создавать шедевры в любое удобное время из любой точки земного шара. </p>
        </div>
        <div class="plus plus-2">
            <div class="img"></div>
            <p>Мамы и папы, мы дарим вам удивительную возможность уделить больше драгоценного времени семье и провести вечер с пользой! </p>
        </div>
    </div>
    <div class="row">
        <div class="plus plus-3">
            <div class="img"></div>
            <p>Рисуя волшебные картины, ребенок развивает творческое мышление и мелкую моторику. </p>
        </div>
        <div class="plus plus-4">
            <div class="img"></div>
            <p>Занятия выстроены по принципу «от простого к сложному», поэтому будут интересны начинающим и опытным, взрослым и детям.</p>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 105px;
}

.plus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        max-width: 520px;
        padding: 53px 14px 40px;
        border-radius: 20px;
    }
}

.plus:first-child {
    margin-right: 68px;
}

.plus-1 {
    .img {
        background: url('/img/pluses/1.svg') no-repeat center center / contain;
        position: relative;
        height: 100px;
        width: 100px;
    }

    .img::after {
        content: '';
        position: absolute;
        border-bottom: 4px solid #FBB263;
        width: 200px;
        bottom: -20px;
        left: -50px;

    }

    p {
        background: linear-gradient(99.38deg, rgba(252, 176, 59, 0.03) 0%, rgba(246, 106, 22, 0.05) 100%);
    }
}

.plus-2 {
    .img {
        background: url('/img/pluses/2.svg') no-repeat center center / contain;
        position: relative;
        height: 93.89px;
        width: 90.12px;
    }

    .img::after {
        content: '';
        position: absolute;
        border-bottom: 4px solid #C2DD72;
        width: 200px;
        bottom: -20px;
        left: -50px;
    }

    p {
        background: linear-gradient(99.38deg, rgba(192, 231, 81, 0.03) 0%, rgba(109, 134, 18, 0.05) 100%);
    }
}

.plus-3 {
    .img {
        background: url('/img/pluses/3.svg') no-repeat center center / contain;
        position: relative;
        height: 110px;
        width: 110px;
    }

    .img::after {
        content: '';
        position: absolute;
        border-bottom: 4px solid #68C2D3;
        width: 200px;
        bottom: -20px;
        left: -50px;
    }

    p {
        background: linear-gradient(99.38deg, rgba(125, 215, 231, 0.03) 0%, rgba(69, 198, 221, 0.05) 100%);
    }
}

.plus-4 {
    .img {
        background: url('/img/pluses/4.svg') no-repeat center center / contain;
        position: relative;
        height: 160px;
        width: 100px;
    }

    .img::after {
        content: '';
        position: absolute;
        border-bottom: 4px solid #EE85BE;
        width: 200px;
        bottom: -20px;
        left: -50px;
    }

    p {
        background: linear-gradient(99.38deg, rgba(245, 116, 186, 0.03) 0%, rgba(205, 35, 127, 0.05) 100%);
    }
}

.img {

    margin-bottom: -23px;
}

.pluses {
    padding-top: 189px;
    padding-bottom: 195px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;

}

h2 {
    font-family: Intro;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    /* identical to box height */
    color: #515151;
    text-align: center;
    position: relative;

    margin-bottom: 45px;

}

h2::first-letter {
    opacity: 0;
}

h2::before {
    content: '';
    background: url('/img/п.svg') no-repeat center center / contain;
    width: 42.28px;
    height: 60.04px;
    position: absolute;
    z-index: 2;
    top: 8px;
    left: 4px;
}

h2::after {
    content: '';
    background: white;
    width: 42.28px;
    height: 60.04px;
    position: absolute;

    top: 8px;
    left: 5px;
}

.pluses::before {
    content: "";
    background: url('/img/starOrange.svg') no-repeat left center / contain;
    height: 350px;
    width: 450px;
    left: 0;
    bottom: 90px;
    position: absolute;
    z-index: -3;

}

.pluses::after {
    content: "";
    background: url('/img/starBlue.png') no-repeat right center / contain;
    height: 342px;
    width: 465px;
    right: 0;
    position: absolute;
    top: 109px;
    z-index: -3;
}

@media (max-width:1500px) {
    .plus {
        z-index: 222;
    }

    .plus p {
        max-width: 400px;
    }

    .plus .img {
        height: 70px;
        width: 70px !important;
        left: 0px;
    }

    .plus .img::after {
        left: -65px;
    }
}

@media (max-width: 1250px) {
    h2 {
        font-size: 40px;
        line-height: 40px;

    }

    h2::before {
        height: 36px;
        width: 36px;
        left: -5px;
        top: 5px
    }

    h2::after {
        left: -7px;
        height: 40px;
        width: 40px;
    }

    .pluses {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .row {
        padding: 0 100px;
    }

    .plus p {
        font-size: 16px;
        line-height: 20px;
    }

    .plus {
        max-width: 300px;
    }

    .pluses::after {
        height: 200px;
    }

    .pluses::before {
        height: 200px;
    }

}

@media (max-width: 800px) {
     .pluses::after {
        width: 100px;
        right: -30px;
    }

    .pluses::before {
         width: 100px;
         left: -50px;
    }
    h2 {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 60px;
    }

    h2::before {
        height: 17px;
        width: 18px;
        top: 3px;
        left: -2px;
    }

    h2::after {
        height: 18px;
        width: 18px;
        height: 17px;
        width: 18px;
        top: 3px;
        left: -2px;
    }

    .row {
        margin: 0;
        flex-direction: column;

        .plus {
            .img{
                height: 40px;
                width: 40px;
            }
            .img::after{
                width: 100px;
                left: -15px;
            }
            margin: 20px 0;
            max-width: 257px;

            p {
                font-size: 7px;
                line-height: 9px;
                text-align: center;
            }
        }
    }

    ;

}
.mobile{
     h2::before {
        left: -2px!important;
        top: 1px!important;
       
    }

    h2::after {
        left: -3px!important;
        top: 1px!important;
       
    }
}
</style>
