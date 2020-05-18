<template>
  <div class="product_list">
    <HeaderApp></HeaderApp>

    <main>
      <div id="page-article">
        <div id="article-list">
          <div class="article">
            <h2>LE SAVON, UNE ARME ANTI-VIRUS</h2>
            <p class="article-date">18 mai 2020</p>
            <img src="https://placehold.co/600x400?text=Hello+World" alt="">
            <p class="article-description">Se laver les mains, une façon simple et efficace d’éviter la contamination. Mais comment le savon parvient-il à anéantir le Covid-19 en moins de 40 secondes ?</p>
            
            <router-link :to="{name: 'Article', params: {slug: 'romain'}}" class="product-link">Lire la suite</router-link>            
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
  }
}
</script>
