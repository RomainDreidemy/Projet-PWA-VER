<template>
  <div class="article">
    <HeaderApp></HeaderApp>
    
    <main>
      <div id="page-article">
      <h2>Article récement lu</h2>

      <div id="article-list" v-if="pages">
        <div class="article" v-for="page in pages" :key="page.id">
          <h2>{{ page[1] }}</h2>
          <p class="article-date">18 mai 2020</p>
          <img src="@/assets/img/listing/listing-1.png" alt="">
          <!-- <p class="article-description">{{ post.body.substr(1, 200) }}...</p> -->
          
          <router-link :to="page[0]" class="product-link">Lire la suite</router-link>            
        </div>

            <hr>
      </div>
      <div v-else>Vous n'avez consulté aucun article</div>
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
      title: `Articles vu récement`,
    },
  components: {
    HeaderApp,
  },
  data() {
    return {
      pages: null
    }
  },
  created() {
    var values = []
    let keys = Object.keys(localStorage);

    keys.forEach(key => {
      if(new RegExp('^/article/[0-9]+').test(key)){
        values.push([key, localStorage.getItem(key)])
      }
    });

    if(values.length > 0){
      this.pages = values
    }
  }
}

</script>