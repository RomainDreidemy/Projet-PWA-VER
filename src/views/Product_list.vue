<template>
  <div class="product_list">
    <HeaderApp></HeaderApp>
    <h1>Ceci est la page des articles</h1>
    <router-link to="/product">Go to article</router-link>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  components: {
    HeaderApp,
  }
}
</script>
