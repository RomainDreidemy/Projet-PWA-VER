<template>
    <div class="container-nav">
        <router-link to="/"><img src="../assets/logo.jpg" alt="logo savon"></router-link>
        <router-link class="product-link" to="/product_list">Products</router-link>
    </div>
</template>

<style scoped lang="scss">
.container-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 5%;
}
img{
    max-height: 70px;
}
</style>

<script>
export default {

}
</script>