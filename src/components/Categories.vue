<template>
    <div class="categories">
        <ul class="category">
            <li class="category_li"
            :class="{active: isActive}"
            v-for="category in categories"
            :key="category.id"
            @click="linkTo(category.id), toggle"
            >
                <p>{{category.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';

    export default {
        name: 'Category',

        data() {
            return {
                categories: [],
                category: [],
                isActive: false
            }
        },

        computed: mapState({
            getBaseUrl: 'baseUrl'
        }),

        created() {
            this.loadCategories()
        },

        methods: {
            async loadCategories() {
                this.categories = await fetch(`${this.$store.getters.getBaseUrl}/category/`)
                    .then(responce => responce.json())
                    .then(responce => responce.results)
            },

            linkTo(id) {
                this.$router.push({
                    name: 'Category',
                    params: {
                        id: id
                    }
                })
            },

            toggle(e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped>
    .category {
        display: flex;
        justify-content: space-around;
    }

    .category_li {
        display: flex;
        justify-content: center;
        cursor: pointer;
        color: #edeef0;
        background-color: #24292e;
        border-radius: 0 0 10% 10%;
        font-size: 75%;
        width: 100px;
    }

    .active {
        color: #24292e;
        background-color: #edeef0;
        border: solid 1px #24292e;
    }

    .category p {
        transition: 750ms;
    }

    .category p:hover {
        transform: rotate3d(1, 0, 0, 360deg);
        color: #959da5;
    }
</style>