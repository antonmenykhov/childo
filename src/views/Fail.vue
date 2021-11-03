<template>
<div class="wrapper">
    <div class="forgot">
        <h3>Что то пошло не так</h3>
        <el-form>
            
            <el-button @click="$router.push({path: '/'})" type="primary">Перейти на главную</el-button>

        </el-form>
    </div>
</div>
</template>

<script>

export default {
    mounted() {
        document.title = 'Произошла ошибка | CHILDO'
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    background: white;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    .forgot {
        h3 {
            color: #333333;
            font-size: 20px;
        }

        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>