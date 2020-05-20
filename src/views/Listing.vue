<template>
  <div class="product_list">
    <HeaderApp></HeaderApp>

    <main>

      <div id="page-article">
        <router-link :to="{name: 'Recent'}" class="product-link" id="recent-link">Voir les articles récement consulté</router-link>            

        <div id="article-list">
          <div class="article" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p class="article-date">18 mai 2020</p>
            <img src="@/assets/img/listing/listing-1.png">
            <p v-html="post.body.substr(0, 200).concat('...')" class="article-description">.</p>
            
            <router-link :to="{name: 'Article', params: {slug: post.id}}" class="product-link">Lire la suite</router-link>            
          </div>
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
        
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div.article{
          &:first-child{
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 5px;
            width: 100%;
          }
          margin-top: 30px;
          width: 49%;
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

    #recent-link{
      position: fixed;
      bottom: 15px;
      right: 15px;
      color: #eee;
      border: 1px solid #eee !important;

      &:hover{
        color: #434550;
        border: 1px solid #434550 !important;
        transition: 1s;
      }
    }
  }

  @media (max-width: 900px) {
    main{
      div#page-article{
        width: 80%;
      }
    }
    
  }

  @media (max-width: 700px) {
    main{
      div#page-article{
        width: 95%;
        div#article-list{
          div.article{
            width: 100%;
          }
        }
      }
    }
  }
</style>


<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  metaInfo: {
      title: `Liste des articles`,
    },
  components: {
    HeaderApp,
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
    fetch('https://my-json-server.typicode.com/RomainDreidemy/API-le-petit-pas-marseillais/posts').then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    })
  }
}
</script>
