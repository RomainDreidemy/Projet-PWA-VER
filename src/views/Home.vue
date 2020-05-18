<template>
  <div id="page-home">
    <HeaderApp></HeaderApp>
    <main>
      <div id="home-banner">
        <img src="https://placehold.co/1200x600?text=Banner" alt="">
      </div>

      <div id="home-savon-list" class="container">
        <div class="home-savon">
          <img src="https://placehold.co/600x300?text=Savon" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="https://placehold.co/600x300?text=Savon" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="https://placehold.co/600x300?text=Savon" alt="Article name">
          <h3>
            Savon au parfum de fleur d'oranger, peaux sensibles
          </h3>
        </div>

        <div class="home-savon">
          <img src="https://placehold.co/600x300?text=Savon" alt="Article name">
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
  components: {
    HeaderApp,
  }
}
</script>

<style lang="scss" scoped>
  main{
    div{
      &#home-banner{
        img{
          width: 100%;
        }
      }

      &#home-savon-list{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        div.home-savon{
          width: 24%;

          img{
            width: 100%;
          }
        }
      }

      &#home-newsletter{
        background: url('https://placehold.co/2000x1000?text=Newsletter') no-repeat ;

        margin-top: 100px;
        padding: 50px;
        text-align: center;
        
        h2{
          color: #fff;
        }

        input{
          display: block;
          margin: 0 auto;
          padding: 5px ;
          width: 250px;
          margin-top: 15px;
          background: none;
          border: 1px solid #fff;
          text-align: center;
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

    a.btn{
      margin: 15px auto !important;
    }

  }
</style>
