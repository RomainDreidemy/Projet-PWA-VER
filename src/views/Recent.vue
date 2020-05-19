<template>
  <div class="article">
    <HeaderApp></HeaderApp>
    
    <main>
      <div class="con"></div>
      <div id="page-recent">
        <ul>
          <li v-for="page in pages" v-bind:key="page[0]">{{ page[1] }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
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

    this.pages = values
  }
}

</script>