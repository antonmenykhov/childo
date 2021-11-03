<template>
<div class="wrapper">
    <div class="forgot">
        <h3>Восстановление пароля</h3>
        <el-form>
            <el-form-item>
                <el-input placeholder="Новый пароль" v-model="password1" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Еще раз" v-model="password2" type="password"></el-input>
            </el-form-item>
            <el-button @click="send" type="primary">Восстановить</el-button>

        </el-form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import api from '../constants'
export default {
    mounted() {
        document.title="Восстановление пароля CHILDO"
    },
    data() {
        return {
            password1: '',
            password2: '',
            code: this.$route.query.code

        }
    },
    methods: {
        send() {
            axios.post(api.reset, {
                code: this.code,
                password: this.password1,
                passwordConfirmation: this.password2
            }).then(response => {
                    this.$cookie.set('jwt', response.data.jwt, { expires: '1M' });
                    this.$store.commit('setJwt', response.data.jwt);
                    this.$store.commit('setUserData', response.data.user);
                    this.$notify({
                        title: 'Успешно',
                        message: 'Пароль изменен',
                        type: 'success'
                    });
                    this.$router.push({ path: '/' })
                }

            ).catch(error => {
                console.log('An error occurred:', error.response);
                this.$notify({
                    title: 'Ошибка',
                    message: 'Что то пошло не так',
                    type: 'warning'
                });
            });
        }
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
    }
}
</style>
