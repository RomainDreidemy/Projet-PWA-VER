<template>
    <header :class="{white: header}">
        <nav>
            <div id="header-logo">
                <router-link :to="{name: 'Home'}">Le Petit Pas Marseillais</router-link>
            </div>
            <div id="header-navigation">
                <!--<router-link :to="{name: 'Home'}" class="product-link">Accueil</router-link>-->
                <!--<router-link :to="{name: 'Listing'}" class="product-link">Articles</router-link>-->
                <!--<router-link :to="{name: 'Listing'}" class="product-link">A propos</router-link>-->
            </div>
            <div id="header-reseaux">
                <router-link :to="{name: 'Listing'}" class="product-link">Articles</router-link>
                <a href="https://facebook.com">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11C22 4.92319 17.0727 0 11 0C4.92319 0 0 4.92319 0 11C0 16.489 4.02119 21.0402 9.28125 21.8646V14.1804H6.48794V11.0007H9.28125V8.57588C9.28125 5.81969 10.9209 4.29756 13.4344 4.29756C14.6383 4.29756 15.8984 4.51206 15.8984 4.51206V7.21875H14.509C13.145 7.21875 12.7188 8.06781 12.7188 8.9375V11H15.7692L15.279 14.1797H12.7188V21.8639C17.9747 21.0396 22 16.4883 22 10.9993V11Z"/>
                    </svg>
                </a>
                <a href="https://twitter.com">
                    <svg width="22" height="22" viewBox="0 0 22 22"     xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM16.2864 8.29174C16.2937 8.40714 16.2937 8.52746 16.2937 8.64531C16.2937 12.2498 13.5487 16.4018 8.53237 16.4018C6.98549 16.4018 5.55156 15.9525 4.34353 15.179C4.56451 15.2036 4.77567 15.2134 5.00156 15.2134C6.27835 15.2134 7.45201 14.7812 8.3875 14.0496C7.18929 14.025 6.18259 13.2393 5.83884 12.1589C6.25871 12.2203 6.63683 12.2203 7.06897 12.1098C6.45201 11.9845 5.89746 11.6494 5.49955 11.1615C5.10164 10.6736 4.8849 10.0631 4.88616 9.43348V9.39911C5.2471 9.6029 5.67188 9.72812 6.11629 9.74531C5.74269 9.49633 5.4363 9.159 5.22429 8.76324C5.01228 8.36749 4.9012 7.92553 4.90089 7.47656C4.90089 6.9683 5.03348 6.50424 5.27165 6.10156C5.95646 6.94458 6.81099 7.63405 7.77971 8.12518C8.74843 8.61631 9.80966 8.8981 10.8944 8.95223C10.5089 7.09844 11.8938 5.59821 13.5585 5.59821C14.3442 5.59821 15.0513 5.92723 15.5498 6.45759C16.1661 6.34219 16.7554 6.11138 17.2808 5.80201C17.077 6.43304 16.6498 6.96585 16.0826 7.30223C16.6326 7.2433 17.1629 7.09107 17.654 6.87746C17.2833 7.42254 16.8192 7.90625 16.2864 8.29174Z"/> 
                    </svg>
                </a>
                <a href="https://instagram.com">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.8041 7.58312 10.6127 7.61864 10.4271H6.41667V15.007C6.41667 15.3255 6.67448 15.5833 6.99302 15.5833H15.0081C15.1608 15.583 15.3071 15.5222 15.4149 15.4141C15.5228 15.3061 15.5833 15.1596 15.5833 15.007V10.4271H14.3814C14.4169 10.6127 14.4375 10.8041 14.4375 11ZM11 13.2917C11.301 13.2916 11.5991 13.2322 11.8772 13.117C12.1552 13.0017 12.4079 12.8328 12.6207 12.6199C12.8335 12.407 13.0023 12.1542 13.1174 11.8761C13.2325 11.598 13.2917 11.2999 13.2917 10.9989C13.2916 10.6978 13.2322 10.3998 13.117 10.1217C13.0017 9.84362 12.8328 9.59096 12.6199 9.37816C12.407 9.16536 12.1542 8.99658 11.8761 8.88145C11.598 8.76633 11.2999 8.70711 10.9989 8.70719C10.3909 8.70734 9.80793 8.94899 9.37816 9.37897C8.94839 9.80896 8.70704 10.3921 8.70719 11C8.70734 11.6079 8.94899 12.1909 9.37897 12.6207C9.80896 13.0505 10.3921 13.2918 11 13.2917ZM13.75 8.59375H15.1239C15.2151 8.59375 15.3027 8.55757 15.3673 8.49314C15.432 8.4287 15.4684 8.34127 15.4687 8.25V6.87615C15.4687 6.78467 15.4324 6.69695 15.3677 6.63227C15.3031 6.56759 15.2153 6.53125 15.1239 6.53125H13.75C13.6585 6.53125 13.5708 6.56759 13.5061 6.63227C13.4414 6.69695 13.4051 6.78467 13.4051 6.87615V8.25C13.4062 8.43906 13.5609 8.59375 13.75 8.59375ZM11 0C8.08262 0 5.28473 1.15892 3.22182 3.22182C1.15892 5.28473 0 8.08262 0 11C0 13.9174 1.15892 16.7153 3.22182 18.7782C5.28473 20.8411 8.08262 22 11 22C12.4445 22 13.8749 21.7155 15.2095 21.1627C16.5441 20.6099 17.7567 19.7996 18.7782 18.7782C19.7996 17.7567 20.6099 16.5441 21.1627 15.2095C21.7155 13.8749 22 12.4445 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22182C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 0 11 0ZM16.7292 15.4561C16.7292 16.1562 16.1562 16.7292 15.4561 16.7292H6.54385C5.84375 16.7292 5.27083 16.1562 5.27083 15.4561V6.54385C5.27083 5.84375 5.84375 5.27083 6.54385 5.27083H15.4561C16.1562 5.27083 16.7292 5.84375 16.7292 6.54385V15.4561Z"/>
                    </svg>
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
                    a {
                        color: #fff;
                    }
                }

                &#header-navigation{
                    a {
                        color: #fff;
                    }
                }
                &#header-reseaux{
                    display: flex;
                    a {
                        color: #fff;
                    }
                     svg{
                        path{
                            fill: #fff;
                        }
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
                display: flex;
                a{
                    margin-right: 15px;
                }
            }
        }
    }
}
@media (max-width: 900px) {
    #header-logo{
        a{
            font-size: 20px !important;
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
        if(this.$route.name == 'Home' || this.$route.name == 'Article'){
            this.header = true
        }
    }
}
</script>