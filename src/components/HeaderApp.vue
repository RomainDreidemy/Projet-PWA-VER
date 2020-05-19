<template>
    <header :class="{white: header}">
        <nav>
            <div id="header-logo">
                <router-link :to="{name: 'Home'}">Le Petit Pas Marseillais</router-link>
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
    &.white{
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
                        color: #fff;
                    }
                    
                }

                &#header-navigation{
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }

    height: 110px;
    
    

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
                }
                
            }

            &#header-navigation{
                a{
                    margin-right: 15px;
                    font-size: 18px;
                }
            }

            &#header-reseaux{
                a{
                    margin-right: 15px;
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            header: false
        }
    },
    mounted() {
        console.log(this.$route.name);
        if(this.$route.name == 'Home'){
            this.header = true
        }
    }
}
</script>