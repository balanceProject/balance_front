<template>
  <div class="single">
    <div class="left__side" @click="back()">
    </div>
    <div class="container">
      <Categories />
      <div class="article">
        <div class="img">
          <img v-if="article.img" :src="article.img">
        </div>
        <div class="content">
          <h3>{{article.title}}</h3>
          <p>{{article.description}}</p>
          <p>{{article.content}}</p>
          <p>{{article.updated_at}}</p>
        </div>
      </div>
    </div>
    <div class="right__side">
    </div>
  </div>
</template>

<script>
  import Categories from '../components/Categories.vue'

  export default {
    name: 'Single',
    components: {
      Categories
    },
    props: ['id'],
    data() {
      return {
        article: {}
      }
    },
    created() {
      this.loadArticle()
    },
    methods: {
      async loadArticle() {
        this.article = await fetch(`${this.$store.getters.getBaseUrl}/${this.id}`)
          .then(responce => responce.json())
      },
      back() {
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  .single {
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