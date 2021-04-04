<template>
  <div class='home'>
    <div class="left__side"></div>
    <div class="container">
      <Categories />
      <div class="article" v-for="article in articleList" :key="article.id">
        <div class="img">
          <img v-if="article.img" :src="article.img">
        </div>
        <div class="content">
          <h3 @click="goTo(article.id)">{{article.title}}</h3>
          <p>{{article.description}}</p>
          <p>{{article.updated_at}}</p>
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
    name: 'Home',

    components: {
      Categories
    },

    data() {
      return {
        articleList: []
      }
    },

    computed: mapState({
      getBaseUrl: 'baseUrl'
    }),

    created() {
      this.loadArticleList()
    },

    methods: {
      async loadArticleList() {
        this.articleList = await fetch(`${this.$store.getters.getBaseUrl}/`)
          .then(responce => responce.json())
          .then(response => response.results)
      },
      goTo(id) {
        this.$router.push({
          name: 'Single',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>

<style>
  .home {
    display: flex;
  }

  .content {
    padding: 0 15px;
  }

  .content h3 {
    cursor: pointer;
  }

</style>