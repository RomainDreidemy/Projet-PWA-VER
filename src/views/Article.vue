<template>
  <div class="article">
    <HeaderApp></HeaderApp>
    
    <main>
      <div id="page-article">
        <router-link :to="{name: 'Listing'}" class="product-link">Retour à la liste des articles</router-link>

        <div id="article" v-if="post">
          <h1>{{ post.title }}</h1>
          <p id="article-date">18 mai 2020</p>

          <img src="@/assets/img/listing-1.png" alt="Article name">

          <p>{{ post.body }}</p>
        </div>

        <hr>

        <div id="article-comment">
          <h2>COMMENTAIRES</h2>

          <div id="article-comment-list">
            <div class="article-comment">
              <h3>Victor Balducci</h3>
              <p class="article-comment-date">18 mai 2020</p>
              <p class="article-comment-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !</p>
            </div>

            <div class="article-comment">
              <h3>Victor Balducci</h3>
              <p class="article-comment-date">18 mai 2020</p>
              <p class="article-comment-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !</p>
            </div>
          </div>

          <h2>ÉCRIRE UN COMMENTAIRE</h2>

          <form action="/" method="post">
            <div class="article-comment-form-flex">
              <input type="text" placeholder="Nom">
              <input type="text" placeholder="Email">
            </div>

            <textarea name="" placeholder="Contenu"></textarea>

            <button type="submit">Envoyer</button>
          </form>
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
      div{
        &#article{
          h1{
            text-align: left;
          }

          img{
            width: 100%;
            margin: 10px 0;
          }
        }

        &#article-comment{
          div#article-comment-list{
            div.article-comment{
              margin-bottom: 30px;
              h3{
                margin-top: 20px;
              }

              p{
                &.article-comment-date{
                  margin-bottom: 10px;
                }
              }
            }
          }

          form{
            margin-top: 10px;
                input{
                  display: block;
                  border: 1px solid #434550;
                  border-radius: 3px;
                  padding: 10px ;
                  border: 1px solid #434550;
                }

                textarea{
                  display: block;
                  width: 100%;
                  max-width: 100%;
                  margin-top: 10px;
                  min-height: 100px;
                  padding: 10px ;
                  border: 1px solid #434550;
                }

                button{
                  border: 1px solid #434550;
                  padding: 15px 30px;
                  margin-top: 10px;
                  display: inline-block;
                  background: none;
                  color: #434550;
                  cursor: pointer;
                  font-weight: bold;
                }

                div.article-comment-form-flex{
                  display: flex;
                  justify-content: space-between;
                  input{
                    width: 49%;
                  }
                }

                
              }
        }
      }

      hr{
        margin: 50px 0;
      }


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
      post: null
    }
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`).then((response) => {
      response.json().then((data) => {
        this.post = data
      })
    })
  }
}

</script>