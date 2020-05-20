<template>
  <div id="page-home">
    <HeaderApp></HeaderApp>
    <main>

      <div id="home-banner">
        <h1>Fabrication artisanale <br>en France</h1>
      </div>

      <h2>- LES SAVONS -</h2>

      <div id="home-savon-list" class="container">
        <div class="home-savon">
          <img src="@/assets/img/home-fleur-d'oranger.png" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="@/assets/img/home-lavande.png" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="@/assets/img/home-miel.png" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="@/assets/img/home-peau-seche.png" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>
      </div>

      <router-link :to="{name: 'Listing'}" class="btn btn-link btn-center">Voir tous les savons</router-link>

      <div id="home-newsletter">
        <h2>Nous avons aussi une newsletter qui sent bon !</h2>

        <form action="/" method="post">
          <input type="text" name="" id="" placeholder="Votre email">
          <button type="submit">C'est parti !</button>
        </form>
      </div>

    </main>
    
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  name: 'Home',
  metaInfo: {
      title: 'Accueil | Le Petit Pas Marseillais',
    },
  components: {
    HeaderApp,
  }
}
</script>

<style lang="scss" scoped>
  main{
    div{
      &#home-banner{
        height: 100vh;
        overflow: hidden;
        background: url("../assets/img/home-banner.jpg") no-repeat fixed;
        background-size: cover;
        h1{
          position: absolute;
          top: 25vh;
          left: 30px;
          text-align: left;
          color: #fff;
          font-size: 50px;
        }
      }

      &#home-savon-list{
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        div.home-savon{
          width: 24%;

          img{
            width: 100%;
          }
        }
      }

      &#home-newsletter{
        background: url('../assets/img/home-newsletter.png') no-repeat fixed;
        background-size: cover;
        margin-top: 100px;
        padding: 50px;
        text-align: center;
        
        h2{
          margin-top: 0px;
          color: #fff;
        }

        input{
          display: block;
          margin: 0 auto;
          padding: 5px ;
          width: 250px;
          margin-top: 15px;
          background: none;
          color: #fff;
          border: 1px solid #fff;
          text-align: center;

          &::placeholder{
            color: #fff;
          }
        }
        
        
        button{
          border: 1px solid #fff;
          padding: 15px 30px;
          margin-top: 10px;
          display: inline-block;
          background: none;
          color: #fff;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }

    h2{
      text-align: center;
      margin-top: 100px;
    }

    a.btn{
      margin: 30px auto !important;
    }

  }

@media (max-width: 980px) {
    .home-savon{
      width: 49% !important;
      margin-bottom: 20px;
    }
    &#home-banner{
        max-height: 100vh;
        overflow: hidden;
        h1{
          font-size: 40px !important;
        }
    }
  }

  @media (max-width: 700px) {
    .home-savon{
      width: 100% !important;
    }
  }
</style>
