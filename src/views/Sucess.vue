<template>
<div class="wrapper">
    <div class="forgot">
        <h3>Оплата прошла успешно</h3>
        <el-form>
            
            <el-button @click="$router.push({path: '/lk'})" type="primary">Перейти в личный кабинет</el-button>

        </el-form>
    </div>
</div>
</template>

<script>

export default {
    
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
