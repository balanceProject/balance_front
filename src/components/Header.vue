<template>
    <header class="header">
        <div class="header-logo">
            <router-link to="/">
                <img src="../assets/images/label_white.png" alt="">
            </router-link>
        </div>
        <div class="header-user">
            <a href="#" class="registration" @click="popupShow">
                <h3>Регистрация</h3>
            </a>
            <a href="#" class="login">
                <h3>Вход</h3>
            </a>
        </div>
        <Registration v-if="showPopup" @close="popupClose" />
    </header>
</template>

<script>
    import Registration from './authentication/Registration'

    export default {
        name: 'Header',
        components: {
            Registration
        },
        data() {
            return {
                showPopup: false
            }
        },
        methods: {
            popupShow() {
                document.body.style.overflow = 'hidden';
                this.showPopup = true;
            },
            popupClose() {
                document.body.style.overflow = ''
                this.showPopup = false
            }
        }
    }
</script>

<style scoped>
    .header {
        background-color: #24292e;
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    .header-logo {
        position: relative;
    }

    img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .header-user h3 {
        letter-spacing: 3px;
    }

    .registration {
        color: #fff;
        transition: 0.5s;
    }

    .registration:hover {
        color: #959da5;
    }

    .login {
        color: #fff;
        padding: 0 15px 0 15px;
        transition: 0.5s;
    }

    .login:hover {
        color: #959da5;
    }

</style>