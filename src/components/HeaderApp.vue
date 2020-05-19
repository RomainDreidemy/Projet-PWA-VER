<template>
    <header>
        <nav>
            <div id="header-logo">
                <router-link :to="{name: 'Home'}">Sāvon</router-link>
            </div>
            <div id="header-navigation">
                <router-link :to="{name: 'Home'}" class="product-link">Accueil</router-link>
                <router-link :to="{name: 'Listing'}" class="product-link">Articles</router-link>
                <router-link :to="{name: 'Listing'}" class="product-link">A propos</router-link>
            </div>
            <div id="header-reseaux">
                <a href="https://facebook.com">
                    <img src="@/assets/img/facebook.png" alt="">
                </a>
                <a href="https://twitter.com">
                    <img src="@/assets/img/twitter.png" alt="">
                </a>
                <a href="https://instagram.com">
                    <img src="@/assets/img/instagram.png" alt="">
                </a>
            </div>
        </nav>

    </header>
</template>

<style scoped lang="scss">
header{
    height: 110px;
    position: absolute;
    width: 100%;
    top: 0;
    

    nav{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 30px;

        div{
            &#header-logo{
                a{
                    font-size: 28px;
                    color: #fff;
                }
                
            }

            &#header-navigation{
                a{
                    margin-right: 15px;
                    font-size: 18px;
                    color: #fff;
                }
            }

            &#header-reseaux{
                a{
                    margin-right: 15px;
                    svg{
                        color: #fff;
                        fill: #fff;
                    }
                    
                }
            }
        }
    }
}
</style>

<script>
export default {

}
</script>