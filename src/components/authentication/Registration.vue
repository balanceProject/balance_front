<template>
    <transition name="modal__transition" appear>
        <div class="popup">
            <div class="popup__body" ref="popup__body">
                <div class="popup__content">
                    <div class="wraper">
                        <h1>Регистрация</h1>
                        <p>Пожалуйста, заполните данную форму для регистрации на сайте.</p>
                        <form action="">
                            <label for="email">Email:</label>
                            <input type="text" placeholder="Введите Email" name="email" required>
                            <label for="psw">Введите пароль:</label>
                            <input type="password" placeholder="Введите пароль" name="psw" required>
                            <label for="psw-repeat">Повторите пароль:</label>
                            <input type="password" placeholder="Повторите пароль" name="psw-repeat" required>
                        </form>
                        <div class="btns">
                            <button type="button" class="btn" @click="close">Отмена</button>
                            <button type="submit" class="btn">Зарегистрироваться</button>
                        </div>
                        <p class="popup__close" @click="close">x</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Registration',
        mounted() {
            let self = this;
            document.addEventListener('click', (e) => {
                    if (e.target === self.$refs['popup__body']) {
                        self.close();
                    }
                }),
                document.addEventListener('keyup', (e) => {
                    if (e.keyCode === 27) {
                        self.close()
                    }
                })
        },
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .wraper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .wraper h1 {
        width: 100%;
        text-align: center;
    }

    .wraper p {
        letter-spacing: normal;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .popup {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: rgba(0.36, 0.41, 0.46, 0.8);
        top: 0;
        left: 0;
    }

    .popup__body {
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
    }

    .popup__content {
        background-color: #fff;
        color: #000;
        min-width: 50%;
        padding: 15px 30px;
        position: relative;
    }

    .popup__close {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 15px;
        font-size: 20px;
    }

    input {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }

    input:focus {
        background-color: #ddd;
        outline: none;
    }

    .btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .btn {
        background-color: #24292e;
        opacity: 0.9;
        color: #fff;
        cursor: pointer;
        padding: 10px 20px;
    }

    .btn:hover {
        background-color: #24292e;
        opacity: 1;
    }

    .modal__transition-enter,
    .modal__transition-leave-to {
        opacity: 0;
    }

    .modal__transition-enter-active,
    .modal__transition-leave-active {
        transition: all .8s;
    }

    .modal__transition-enter-to,
    .modal__transition-leave {
        opacity: 1;
    }
</style>