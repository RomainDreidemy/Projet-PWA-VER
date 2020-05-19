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

          <div v-if="comments">
            <div id="article-comment-list">
              <div v-for="comment in comments"  v-bind:key="comment.id">
                <h3>{{ comment.author }}</h3>
                <p class="article-comment-date">18 mai 2020</p>
                <p class="article-comment-message">{{ comment.message }}</p>
              </div>
            </div> 
          </div>
          

          
          <h2>ÉCRIRE UN COMMENTAIRE</h2>

          <form action="/" method="post" v-on:submit="addComment">
            <div class="article-comment-form-flex">
              <input type="text" name="author" placeholder="Nom">
              <input type="text" name="Email" placeholder="Email">
            </div>

            <textarea name="comment" placeholder="Contenu"></textarea>

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
      post: null,
      comments: null,
    }
  },
  created() {
    fetch(`https://my-json-server.typicode.com/RomainDreidemy/API-le-petit-pas-marseillais/posts/${this.$route.params.slug}`).then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.post = data
      })
    });

    fetch(`https://my-json-server.typicode.com/RomainDreidemy/API-le-petit-pas-marseillais/comments`).then((response) => {
      response.json().then((data) => {

        const result = data.filter(d => d.idArticle == this.post.id);
        this.comments = result
        console.log(this.comments[0].idArticle);
      })
    });
  },
  methods: {
    addComment: (event) => {
      event.preventDefault();
      console.log(event.target.author.value);

      fetch(`https://my-json-server.typicode.com/RomainDreidemy/API-le-petit-pas-marseillais/comments`, {
        method: 'post',
        body: {
          "id": 2,
          "idArticle": 2,
          "author": "Victor Balducci",
          "message": "Les savons c'est trop bien"
        }
      })
    }
  }
}

</script>