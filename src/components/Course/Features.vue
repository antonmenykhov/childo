<template>
<section :class="courseData.style">
    <div class="container">
        <div class="feature" v-for="item,i in courseData.features" :key="i">
            <div class="img" :style="'background: url(\'/img/courses'+item.img+'\') no-repeat center center / cover'"></div>
            <div class="text">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            courseData: {
                style: 'cs-2',
                features: [{
                        name: 'Курс состоит 13 уроков',
                        description: 'Их сложность повышается постепенно, поэтому приступать к занятиям можно «с нуля», без навыков рисования. С каждым новым уроком, будто поднимаясь по творческим ступенькам, ребенок будет узнавать все больше информации о различных изобразительных техниках и в итоге научится применять их в любой работе.',
                        img: '/1/features/1.png',

                    },
                    {
                        name: 'Весь материал подается очень просто',
                        description: 'Юные художники узнают, как правильно расположить предмет на формате, что такое художественное пространство картины и для чего нужна линия горизонта. Педагог расскажет, как нужно смешивать краски и познакомит детей с понятиями света, тени, фактуры, градиента и цветовой гаммы. ',
                        img: '/1/features/2.png',

                    },
                    {
                        name: 'Дополнительные позновательные рассказы',
                        description: 'А еще в каждом уроке есть небольшой рассказ об изображаемом животном, предмете или явлении. Любознательным деткам точно будет интересно узнать о жизни диких животных и птиц, о космосе и природе.',
                        img: '/1/features/3.png',

                    },
                    {
                        name: 'Домашние задания после уроков',
                        description: 'В конце каждого урока юных художников будет ждать домашнее задание: сфотографировать получившийся рисунок и отправить его на проверку. После этого откроется доступ к следующему занятию.',
                        img: '/1/features/4.png',

                    },
                    {
                        name: 'Необычные материалы',
                        description: 'В работе над картинами ребята смогут использовать как традиционные кисти, так и необычные инструменты: воздушные шарики, поролоновые губки, ватные палочки и многое другое. Необычный подход помогает ребенку развить творческое мышление и фантазию. А главное, именно так дети учатся видеть красоту в самых обычных вещах. Похоже на настоящее волшебство, правда?',
                        img: '/1/features/5.png',

                    },
                ]
            }
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    margin-top: -100px;
}

section {
    position: relative;
    z-index: 20;
}

.cs-1::before {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/1/features/left.svg') no-repeat left top / contain;
    top: 200px;
    left: 0;
}

.cs-1::after {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/1/features/right.svg') no-repeat right bottom / contain;
    bottom: 200px;
    right: 0;
}

.cs-2::before {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/2/features/left.svg') no-repeat left top / contain;
    top: 200px;
    left: 0;
}

.cs-2::after {
    content: '';
    position: absolute;
    height: 700px;
    width: 700px;
    background: url('/img/courses/2/features/right.svg') no-repeat right bottom / contain;
    bottom: 200px;
    right: 0;
}

.container {
    flex-direction: column;

}

.feature {
    margin-bottom: 140px;
    display: flex;
    align-items: center;
}

.feature:nth-child(even) {
    flex-direction: row-reverse;

    .img {
        margin-left: 40px;
    }
}

.feature:nth-child(odd) {
    .img {
        margin-right: 40px;
    }
}

.img {
    height: 206px;
    width: 260px;
    border-radius: 20px;
}

.text {
    flex: 1;

    h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 43px;
        /* identical to box height */
        display: inline-block;
        color: #000000;
        position: relative;
    }

    h4::after {
        border-top: 1px solid;
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        bottom: -6px;
    }
   

    p {
        font-size: 25px;
        line-height: 30px;
        margin-top: 11px;
        color: #000000;
    }
}
 .feature:nth-child(1) h4::after {
        border-color: #F66A16;
    }

  .feature:nth-child(2)  h4::after {
        border-color: #A5C73C;
    }

   .feature:nth-child(3) h4::after {
        border-color: #EF6AB2;
    }

   .feature:nth-child(4) h4::after {
        border-color: #99D3DF;
    }

    .feature:nth-child(5) h4::after {
        border-color: #F66A16;
    }
     .feature:nth-child(6)  h4::after {
        border-color: #A5C73C;
    }
</style>
