<template>
  <div class="product_list">
    <HeaderApp></HeaderApp>

    <main>
      <div id="page-article">
        <div id="article-list">
          <div class="article" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p class="article-date">18 mai 2020</p>
            <img src="@/assets/img/listing-1.png" alt="">
            <p class="article-description">{{ post.body }}</p>
            
            <router-link :to="{name: 'Article', params: {slug: post.id}}" class="product-link">Lire la suite</router-link>            
          </div>

          <hr>

        </div>
      </div>
    </main>
  </div>
</template>


<style lang="scss" scoped>
  main{
    div#page-article{
      width: 70%;
      margin: 40px auto 0 auto;

      div#article-list{
        div.article{
          img{
            margin-top: 10px;
          }
          p{
            &.article-description{
              margin: 15px 0;
            }
          }
        }
      }

      h2{
        padding: 0;
      }

      img{
        width: 100%;
      }

      a{
        display: inline-block;
        padding: 15px 36px;
        border: 1px solid #434550;
        border-radius: 3px;
      }
    }

    hr{
      margin: 50px 0;
    }
  }
</style>


<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  components: {
    HeaderApp,
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    })
  }
}
</script>
