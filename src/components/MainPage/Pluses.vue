<template>
<section class="pluses" id="plus">
    <div class="container">
        <h2>Приемущества</h2>
        <div class="pluses-wrapper">
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
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1160px;
}

.row {
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.row:first-child{
    margin-bottom: 150px;
}
.pluses-wrapper{
    width: 100%;
}
.plus {
    display: flex;
    flex-direction: column;

    align-items: center;

    p {
        font-size: 18px;
        line-height: 22px;
        max-width: 450px;
        padding: 60px 0 0 0;
        border-radius: 20px;
    }

    .img::after {
        content: '';
        position: absolute;
        border-bottom: 4px solid #FBB263;
        width: 200px;
        bottom: -30px;
        left: -50px;

    }

    .img {
        position: relative;
        height: 100px;
        width: 100px;
    }
}

.plus-1 {
    .img {
        background: url('/img/pluses/1.svg') no-repeat center center / contain;

    }

}

.plus-2 {
    .img {
        background: url('/img/pluses/2.svg') no-repeat center center / contain;

    }

}

.plus-3 {
    .img {
        background: url('/img/pluses/3.svg') no-repeat center center / contain;

    }

}

.plus-4 {
    .img {
        background: url('/img/pluses/4.svg') no-repeat center center / contain;

    }

}

.pluses {
    padding-top: 200px;
    padding-bottom: 200px;
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
    color: #333333;
    text-align: center;
    position: relative;
    margin-bottom: 88px;

}

h2::first-letter {
    opacity: 0;
}

h2::before {
    content: '';
    background: url('/img/p.svg') no-repeat center center / contain;
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
    background: url('/img/anglegreen.svg') no-repeat left center / contain;
    height: 550px;
    width: 450px;
    left: 0;
    top: -260px;
    position: absolute;
    z-index: -3;

}



.mobile {
    h2::before {
        left: -2px !important;
        top: 1px !important;

    }

    h2::after {
        left: -3px !important;
        top: 1px !important;

    }
}
</style>
