<template>
    <nav>
        <v-app-bar dark app height=60 class="text-center">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            <router-link tag="div" class="logo" :to="{ name:'About' }">
                <div class="use-raleway">Narin</div>
                <div class="use-raleway">Tailored</div>
            </router-link>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="cartDrawer = !cartDrawer" class="cartIcon">
                <v-icon>mdi-cart</v-icon>
            </v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" dark absolute left temporary width=100vw>
            <v-btn text @click.stop="drawer = !drawer" height=60 width=60 fab>
                <v-icon>mdi-close</v-icon>    
            </v-btn> <!-- bisa ganti jadi icon x-->
            <div class="menu">
                <v-btn text :to="{ name:'Home' }" active-class="active-link" exact>
                    <span class="navbar-text">Home</span>
                </v-btn>
            
                <v-btn text :to="{ name:'About' }" active-class="active-link">
                    <span class="navbar-text">About</span>
                </v-btn>

                <v-btn text v-on:click="shop_clicked = !shop_clicked">
                    <span class="navbar-text">Shop</span>
                </v-btn>

                <div v-for="link in links" :key="link.text" >
                    <v-btn text router :to="link.route" v-if="shop_clicked" >
                        <span class="navbar-text">{{ link.text }}</span>
                    </v-btn>
                </div>

                <v-btn text v-if="loggedIn">
                    Reyvan Irsandi
                </v-btn>
                <div v-if="!loggedIn">
                    <router-link tag="span" :to="{ name:'Login' }" active-class="active-link" exact>
                        <v-btn class="drawerButton">
                            <span class="navbar-text">Login</span>
                        </v-btn>
                    </router-link>
                    <router-link tag="span" :to="{ name:'Sign Up' }" active-class="active-link" exact>
                        <v-btn class="drawerButton">
                            <span class="navbar-text">Sign Up</span>
                        </v-btn>
                    </router-link>
                </div>
            </div>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="cartDrawer" absolute right temporary width="100vw">
            <v-app-bar dark app height="60">
                <span>Your Cart</span>
                <v-spacer></v-spacer>
                <v-btn fab text @click.stop="cartDrawer = !cartDrawer" flex-end>
                    <v-icon>mdi-close</v-icon>
                </v-btn> 
            </v-app-bar>
            <CartItem />
        </v-navigation-drawer>
    </nav>
</template>

<script>
import CartItem from '@/components/CartItem'

  export default {
    components: {
        CartItem
    },
    data: () => ({
      drawer: false,
      cartDrawer: false,
      group: null,
      shop_clicked: false,
      loggedIn: false,
      links: [
                {text: 'Products', route: '/products'},
                {text: 'Product Category', route: '/product_category'}
            ]
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
    .drawerButton {
        margin: 0 4em;
        font-size: 0.8em;
    }
    .logo {
        display: grid;
        text-align: center;
        letter-spacing: 3px;
        font-size: 1.1em;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;  
    }
    .navbar-text {
        font-family: 'Roboto Condensed', sans-serif;
        text-transform: none;
        text-decoration: none;
        font-size: 2em;
    } 
    .active-link {
        border-bottom: solid #fff 1.5px;
    }
    .menu {
        height: 90vh;
        display: grid;
        align-items: center;
        justify-items: center;
    }
</style>