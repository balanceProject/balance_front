<template>
    <div class="category">
        <div class="left__side" @click="back()"></div>
        <div class="container">
            <Categories />
            <div v-for="categoryArticle in categoryArticles" :key="categoryArticle.id">
                <div class="article">
                    <div class="img">
                        <img :src="categoryArticle.img" alt="">
                    </div>
                    <div class="content">
                        <h3>{{categoryArticle.title}}</h3>
                        <p>{{categoryArticle.description}}</p>
                        <p>{{categoryArticle.updated_at}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right__side"></div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import Categories from '../components/Categories'

    export default {
        name: 'Category',
        components: {
            Categories
        },
        props: ['id'],
        data() {
            return {
                categoryArticles: []
            }
        },
        computed: mapState({
            getBaseUrl: 'baseUrl'
        }),
        created() {
            this.loadCategoryArticles()
        },

        watch: {
            $route() {
                this.loadCategoryArticles()
            }
        },

        methods: {
            async loadCategoryArticles(id) {
                this.categoryArticles = await fetch(`${this.$store.getters.getBaseUrl}/?category=${this.id}`)
                    .then(responce => responce.json())
                    .then(responce => responce.results)
            },
            back() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .category {
        display: flex;
        flex: 1 0 auto;
    }

    .content {
        padding: 0 15px;
    }

    .content h3 {
        cursor: pointer;
    }
</style>